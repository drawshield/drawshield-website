        // Overrides for charge names and categories
        groupOverrides = [
            "wildlife", "British Wildlife",
            "human", "Human Figures and Parts",
            "ship", "Ships and Ship Parts",
            "game", "Game Animals",
            "livestock", "Farm Animals",
            "dog", "Dogs",
            "lion", "Lions and Variants",
            "animal" , "Wild Animals",
            "bird", "Birds and Waterfowl",
            "hawking", "Hunting Birds",
            "seabird", "Sea Birds",
            "sword", "Swords and Daggers",
            "projectile", "Hand Weapons",
            "weapon", "Other Weapons",
            "tools", "Hand Tools and Other Hardware",
            "fish", "Fish and Whales",
            "sealife", "Sea Life other than Fish",
            "armour", "Armour, Helmets and Accessories",
            "tack", "Horseriding Tack",
            "geometric", "Geometric Shapes",
            "quadrate", "Geometric Shapes",
            "insect", "Insects and Similar Creatures",
            "tree-fruit", "Trees, Tree Parts and Fruits",
            "flower", "Flowers, including Roses",
            "plant", "Plants and Vegetables",
            "christian", "Christian Symbols",
            "architecture", "Buildings and Building Parts",
            "label", "Labels",
            "annulet", "Geometric Shapes",
            "axe", "Axes of all Types",
            "natural", "Natural Features",
            "celestial", "Sky and Celestial Features",
            "clothes", "Clothing and Accessories", 
            "dragon", "Dragons and Variants",
            "mythical", "Mythical Creatures",
            "utensil", "Cooking and Eating Utensils",
            "furnishings", "Household Furnishings",
            "food", "Manufactured Foods",
            "games", "Games, Boards and Pieces",
            "craft", "Craft Items",
            "household", "Miscellaneous Household Items",
            "crown", "Crowns and Coronets",
            "music", "Musical Items",
            "characters", "Letters, Digits and Words",
            "symbols", "Special Symbols",
            "farming", "Farming Implements",
            "knot", "Decorative Knots",
            "emblem", "Named Emblems",
            "playing-card", "Playing Cards",
            "jewel", "Jewellery and Precious Objects",
            "retro-scifi", "Retro Science Fiction (Extension)",
            "sports", "Sporting Items (Extension)"
        ];
        
        function modGroup(captionIn) {
            captionOut = captionIn;

            len = groupOverrides.length;
            for (i = 0; i < len; i = i + 2) {
                if (captionIn == groupOverrides[i]) {
                    captionOut = groupOverrides[i+1];
                    break;
                }
            }
            return captionOut;
        }

        captionOverride = [
            "annulet braced of2", "2 annulets braced",
            "annulet conjunct of2", "2 annulets conjunct",
            "annulet interlaced of2", "2 annulets interlaced",
            "annulet interlaced of2", "2 annulets interlaced",
            "annulet concentric of3", "3 annulets concentric",
            "annulet concentric of3", "3 annulets concentric",
            "annulet concentric of4", "4 annulets concentric",
            "annulet concentric of5", "5 annulets concentric",
            "annulet concentric of6", "6 annulets concentric",
            "annulet concentric of7", "7 annulets concentric",
            "annulet concentric of8", "8 annulets concentric",
            "annulet concentric of9", "9 annulets concentric",
            "annulet concentric of10", "10 annulets concentric",
            "arch double", "double arch",
            "bridge three arches", "bridge of three arches",
            "bridge two arches", "bridge of two arches",
            "fountain natural", "natural fountain",
            "bear head", "bear's head",
            "crane with stone", "crane holding a stone",
            "wing pair 2 conjoined in lure", "pair of wings conjoined in lure",
            "wing pair 2", "pair of wings",
            "sun rays", "suns rays",
            "cap jester", "jester's cap",
            "cap mercury", "cap of Mercury",
            "mask comedy", "mask of comedy",
            "mask tragedy", "mask of tragedy",
            "scissors pair 2", "pair of scissors",
            "shears pair 2", "pair of shears",
            "calvary 1", "cross calvary on 1 step",
            "calvary 2", "cross calvary on 2 steps",
            "calvary 3", "cross calvary on 3 steps",
            "calvary 4", "cross calvary on 4 steps",
            "calvary 5", "cross calvary on 5 steps",
            "calvary 6", "cross calvary on 6 steps",
            "calvary 7", "cross calvary on 7 steps",
            "calvary 8", "cross calvary on 8 steps",
            "calvary 9", "cross calvary on 9 steps",
            "calvary", "cross calvary",
            "celtic", "celtic cross",
            "couped", "cross couped",
            "egyptian", "Egyptian cross",
            "greek", "Greek cross",
            "long", "long cross",
            "paternoster", "paternoster cross",
            "patriarchal", "patriarchal cross",
            "patriarchal 1", "patriarchal cross on 1 step",
            "patriarchal 2", "patriarchal cross on 2 step",
            "patriarchal 3", "patriarchal cross on 3 step",
            "patriarchal 4", "patriarchal cross on 4 step",
            "patriarchal 5", "patriarchal cross on 5 step",
            "patriarchal 6", "patriarchal cross on 6 step",
            "patriarchal 7", "patriarchal cross on 7 step",
            "patriarchal 8", "patriarchal cross on 8 step",
            "patriarchal 9", "patriarchal cross on 9 step",
            "portate", "cross portate",
            "russian", "Russian cross",
            "st james", "cross of St. James",
            "tau", "tau cross",
            "antique", "antique crown",
            "astral", "astral crown",
            "baron", "baron's crown",
            "ducal", "ducal crown",
            "duke", "duke's crown",
            "earl", "earl's crown",
            "eastern", "eastern crown",
            "king of arms", "king of arms crown",
            "marquis", "marquis crown",
            "mural", "mural crown",
            "naval", "naval crown",
            "palisado", "crown palisado",
            "royal", "royal crown",
            "saxon", "saxon crown",
            "vallary", "crown vallary",
            "viscount", "viscount's crown",
            "corn bundle 3", "bundle of corn",
            "rose lancaster", "rose of Lancaster",
            "rose tudor", "Tudor rose",
            "rose natural", "natural rose",
            "rose york", "rose of York",
            "tulip bundle", "bundle of tulips",
            "board alquerque", "alquerque board",
            "board nine mens morris", "nine men's morris board",
            "board twelve mens morris", "twelve men's morris board",
            "bbox", "bounding box",
            "bottle leather", "leather bottle",
            "hand benediction", "hand of benediction",
            "maiden head bust", "maiden's head and bust",
            "maiden head bust nude", "maiden's head and bust nude",
            "man head bust", "man's head and bust",
            "mullet of4 pierced", "mullet of 4 pierced",
            "mullet of4", "mullet of 4",
            "mullet of5 pierced", "mullet of 5 pierced",
            "mullet of5", "mullet of 5",
            "mullet of6 pierced", "mullet of 6 pierced",
            "mullet of6", "mullet of 6",
            "mullet of7 pierced", "mullet of 7 pierced",
            "mullet of7", "mullet of 7",
            "mullet of8 pierced", "mullet of 8 pierced",
            "mullet of8", "mullet of 8",
            "mullet of9 pierced", "mullet of 9 pierced",
            "mullet of9", "mullet of 9",
            "mullet of10 pierced", "mullet of 10 pierced",
            "mullet of10", "mullet of 10",
            "stone flint", "flint stone",
            "reed bundle 3", "bundle of reeds",
            "arrow broad", "broad arrow",
            "arrow bundle", "bundle of arrows",
            "cramp bundle 3", "bundle of cramps",
            "cramp pair 2", "pair of cramps",
            "flail insaltire 2", "pair of flails in saltire",
            "key pair 2", "pair of keys",
            "cherry pair 2", "pair of cherries",
            "palm leaf insaltire 2", "pair of palm leaves in saltire",
            "palm tree insaltire 2", "pair of palm trees in saltire",
            "trees hurst of couped", "hurst of trees",
            "staff ragged", "ragged staff"
        ];
                
        function modCaption(captionIn) {
            captionOut = captionIn;

            len = captionOverride.length;
            for (i = 0; i < len; i = i + 2) {
                if (captionIn == captionOverride[i]) {
                    captionOut = captionOverride[i+1];
                    break;
                }
            }
            return captionOut;
        }

        // charges


        function clearImg() {
            jQuery("#chargeImg").hide();
        }
        function showImg() {
            var value = jQuery("#combo-dropdown option:selected").val();
            var group = jQuery("#combo-dropdown option:selected").attr("class");
            var caption = jQuery("#combo-dropdown option:selected").text();
            if (typeof(value) !== 'undefined' && value != null && value != "") {
                jQuery("#thumbnail").attr("src", "/img/charges/" + group + "/" + value).attr("alt", value);
                jQuery("#description").text(modCaption(caption));
                jQuery("#category").text("Category: " + modGroup(group));
                jQuery("#chargeImg").show();
            }
        }
        function addChg() {
            var value = jQuery("#combo-dropdown option:selected").val();
            if (typeof(value) !== 'undefined' && value != null && value != "") {
                var caption = jQuery("#description").text();
                var textBox = document.getElementById('blazon');
                //var current = textBox.value;
                var current = blazonEditor.getValue() + ' ';
                var vowels = 'aeiou';
                var digits = '123456789';
                var specifier = ' a ';
                if (vowels.includes(caption[0])) { 
                    specifier = ' an '; 
                } else if (digits.includes(caption[0])) {
                    specifier = ' ';
                }
                // textBox.value = current + specifier + caption;
                blazonEditor.setValue(current + specifier + caption);
            }
        }
        // Ordinaries
       function clearOrdImg() {
            jQuery("#ordImg").hide();
        }
        function showOrdImg() {
            var value = jQuery("#o-combo-dropdown option:selected").val();
            var group = jQuery("#o-combo-dropdown option:selected").attr("class");
            var caption = jQuery("#o-combo-dropdown option:selected").text();
            if (typeof(value) !== 'undefined' && value != null && value != "") {
                jQuery("#o-thumbnail").attr("src", "/img/ordinaries/" + value).attr("alt", value);
                jQuery("#o-description").text(caption);
                jQuery("#o-category").text("Category: " + group);
                jQuery("#ordImg").show();
            }
        }
        function addOrd() {
            var value = jQuery("#o-combo-dropdown option:selected").val();
            if (typeof(value) !== 'undefined' && value != null && value != "") {
                var caption = jQuery("#o-combo-dropdown option:selected").text();
                var textBox = document.getElementById('blazon');
                //var current = textBox.value;
                var current = blazonEditor.getValue() + ' ';
                 var vowels = 'aeiou';
                var specifier = ' a ';
                if (vowels.includes(caption[0])) { 
                    specifier = ' an '; 
                }
                // textBox.value = current + specifier + caption;
                blazonEditor.setValue(current + specifier + caption);
            }
        }
        // Divisions
        function clearDivImg() {
            jQuery("#DivImg").hide();
        }
        function showDivImg() {
            var value = jQuery("#d-combo-dropdown option:selected").val();
            var group = jQuery("#d-combo-dropdown option:selected").attr("class");
            var caption = jQuery("#d-combo-dropdown option:selected").text();
            if (typeof(value) !== 'undefined' && value != null && value != "") {
                jQuery("#d-thumbnail").attr("src", "/img/divisions/" + value).attr("alt", value);
                jQuery("#d-description").text(caption);
                jQuery("#d-category").text("Category: " + group);
                jQuery("#DivImg").show();
            }
        }
        function addDiv() {
            var value = jQuery("#d-combo-dropdown option:selected").val();
            if (typeof(value) !== 'undefined' && value != null && value != "") {
                var caption = jQuery("#d-combo-dropdown option:selected").text();
                var textBox = document.getElementById('blazon');
                //var current = textBox.value;
                var current = blazonEditor.getValue() + ' ';
                // textBox.value = current + caption;
                blazonEditor.setValue(current + caption);
            }
        }
        // edges
        function clearEdgeImg() {
            jQuery("#edgeImg").hide();
        }
        function showEdgeImg() {
            var value = jQuery("#e-combo-dropdown option:selected").val();
            var group = jQuery("#e-combo-dropdown option:selected").attr("class");
            var caption = jQuery("#e-combo-dropdown option:selected").text();
            if (typeof(value) !== 'undefined' && value != null && value != "") {
                jQuery("#e-thumbnail").attr("src", "/img/edgetypes/" + value).attr("alt", value);
                jQuery("#e-description").text(caption);
                jQuery("#e-category").text("Category: " + group);
                jQuery("#edgeImg").show();
            }
        }
        function addEdge() {
            var value = jQuery("#e-combo-dropdown option:selected").val();
            if (typeof(value) !== 'undefined' && value != null && value != "") {
                var caption = jQuery("#e-combo-dropdown option:selected").text();
                var textBox = document.getElementById('blazon');
                 //var current = textBox.value;
                var current = blazonEditor.getValue() + ' ';
                // textBox.value = current + caption;
                blazonEditor.setValue(current + caption);
            }
        }


