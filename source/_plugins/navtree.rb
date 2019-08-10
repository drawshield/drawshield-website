
module Jekyll
	# Add accessor for directory
	class Page
		attr_reader :dir
	end
	
	class NavTree < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
    end

    def render(context)
      site = context.registers[:site]
      @page_url = context.environments.first["page"]["url"]
      
      @dirs = {}
      tree = {}

      site.pages.each do |page|
        # exclude all pages that are above us in the hierarchy
        if page.url.match('^' + @page_url)
          relative = page.dir[1..-1] ||""
          path = page.url
          path = path.index('/')==0 ? path[1..-1] : path
          @dirs[path] = page.data
        end
      end
      @dirs.each do |path, data|
        current	 = tree
        path.split("/").inject("") do |sub_path,dir|
          sub_path = File.join(sub_path, dir)
          
          current[sub_path] ||= {}
          current	 = current[sub_path]
          sub_path
        end
      end

      # puts "generating nav tree for #{@page_url}"
      files_first_traverse "", tree
    end
	  
    def files_first_traverse(prefix, node = {})
      output = ""
      output += "#{prefix}<ul class=\"list-group\">" 
      node_list = node.sort
      
      node_list.each do |base, subtree|
          name = base[1..-1]
          if name.index('.') != nil
            name = @dirs[name]["pageTitle"] || name
          # else
          #  name = @dirs["#{name}/index.html"]["pageTitle"] || name
          end
          
          li_class = ""
          if base == @page_url 
            li_class = "active list-group-item"
          else
            li_class = "list-group-item"
          end
          
          output += "#{prefix}	 <li class=\"#{li_class}\"><a href=\"#{base}\">#{name}</a></li>" if subtree.empty?
      end
      
      node_list.each do |base, subtree|
        next if subtree.empty?
          
          show_link = true
          href = base
          name = base[1..-1]
          if name.index('.') != nil
            is_parent = false
            name = @dirs[name]["pageTitle"] || name
          else
            is_parent = true
            href = base
            if name.index('/')
              name = name[name.rindex('/')+1..-1]
            end
          end
                  
          if is_parent
            fixed_name = name.capitalize.gsub(/-/,' ')
            li = "<li class=\"parent list-group-item\"><a class=\"subtree\" href=\"#{href}/index.html\">#{fixed_name}</a>"
          else
            li = "<li class=\"list-group-item\"><a href=\"#{href}\">#{name}</a></li>"
          end
          
          output += "#{prefix}	#{li}"
          
          output += files_first_traverse(prefix + '	 ', subtree)

          if is_parent
            output+= "</li>"
          end
        end
      
        output += "#{prefix} </ul>"
        output
      end
    end
end

Liquid::Template.register_tag("navtree", Jekyll::NavTree)
