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

        // charges


        function clearImg() {
            jQuery("#chargeImg").hide();
        }

        function goPage(type) {
            var group = jQuery("#combo-dropdown option:selected").attr("class");
            if (typeof(group) !== 'undefined') {
                window.location.href = "/catalog/" + type + '/' + group;
            }
        }


        function showImg() {
            var value = jQuery("#combo-dropdown option:selected").val();
            var group = jQuery("#combo-dropdown option:selected").attr("class");
            var caption = jQuery("#combo-dropdown option:selected").text();
            if (typeof(value) !== 'undefined' && value != null && value != "") {
                jQuery("#thumbnail").attr("src", "/catalog/charges/" + group + "/" + value).attr("alt", value);
                jQuery("#description").text(caption);
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


