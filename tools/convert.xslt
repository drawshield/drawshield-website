<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:svg="http://www.w3.org/2000/svg"
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns:cc="http://creativecommons.org/ns#"
    xmlns:saxon="http://saxon.sf.net/"
    extension-element-prefixes="saxon"
    xmlns:dc="http://purl.org/dc/elements/1.1/">
    
	<xsl:param name="creator"/>
    <xsl:variable name="outline" select="0" saxon:assignable="yes"/> <!-- declare value -->
    <xsl:variable name="feature" select="0" saxon:assignable="yes"/> <!-- declare value -->


    <xsl:output method="xml" encoding="utf-8" indent="yes"/>

    <xsl:template match="svg:defs">
        <xsl:copy>
            <xsl:apply-templates select="@*|node()" />
        </xsl:copy>
        <metadata>
            <rdf:RDF>
                <cc:Work
                    rdf:about="">
                    <dc:creator>
                        <cc:Agent>
				<dc:title><xsl:value-of select="$creator"/></dc:title>
                        </cc:Agent>
                    </dc:creator>
                </cc:Work>
            </rdf:RDF>
        </metadata>  
    </xsl:template>
    
    <!-- Identity template : copy all text nodes, elements and attributes -->   
    <xsl:template match="@*|node()">
        <xsl:copy>
            <xsl:apply-templates select="@*|node()" />
        </xsl:copy>
    </xsl:template>
    
    <!-- When matching clipPath: do nothing -->
    <xsl:template match="svg:clipPath" />
    
    <!-- Remove clipPath attribute -->
    <xsl:template match="@clip-path" />

    <!-- remove all existing ids -->
    <xsl:template match="@id" />
    
    <!-- Remove white fill attribute -->
    <xsl:template match="@fill[.='#FFFFFF']" />
    <!-- and any grey fill that appears sometimes -->
    <xsl:template match="@fill[.='#f3f3f3']" />
    <!-- A darker grey is used for features-->
    <!-- so label the node as a feature -->
    <xsl:template match="svg:path[@fill='#e1e1e1']" >
	    <xsl:element name="g">
        <xsl:attribute name="id">feature-<xsl:value-of select="$feature"/></xsl:attribute>
        <saxon:assign name="feature" select="$feature+1"/>
        <xsl:copy>
                <xsl:apply-templates  select="@*|node()"/>
            </xsl:copy>
    </xsl:element>
    </xsl:template>
    <!-- and fill it with red -->
    <xsl:template match="@fill[.='#e1e1e1']" >
            <xsl:attribute name="fill">#ff0000</xsl:attribute>
    </xsl:template>

    <!-- assume that black fills are outline -->
    <xsl:template match="svg:path[@fill='black']" >
	    <xsl:element name="g">
        <xsl:attribute name="id">outline-<xsl:value-of select="$outline"/></xsl:attribute>
        <saxon:assign name="outline" select="$outline+1"/>
        <xsl:copy>
            <xsl:apply-templates  select="@*|node()"/>
        </xsl:copy>
</xsl:element>
    </xsl:template>

    <!-- Remove top level stroke / fill set to None -->
    <xsl:template match="@fill[.='none']">
        <xsl:attribute name="fill">#ffff00</xsl:attribute>
    </xsl:template>
    <xsl:template match="@stroke[.='none']">
        <xsl:attribute name="stroke">#505050</xsl:attribute>
    </xsl:template> 
    
</xsl:stylesheet>
