var version = "0.1a";
var size=280;

var shieldData = {};
shieldData["~background~"] = [ "Is the background single colour or split into two?",
      '~colour~', "A single colour", 'plain.png',
      '~divided~', "Divided between two colours", 'divided.png'
      ];
shieldData["~colour~"] = [ "How do you want to chose the colour?",
    "~col-by-shade~", "By Shade", '',
    "~col-by-name~", "By Name", '',
];
shieldData["~col-by-shade~"] = [ "Choose your preferred shade",
    "~col-blacks~", "black shades", "col-blacks.png",
"~col-blues~", "blue shades", "col-blues.png",
"~col-browns~", "brown shades", "col-browns.png",
"~col-greens~", "green shades", "col-greens.png",
"~col-greys~", "grey shades", "col-greys.png",
"~col-oranges~", "orange shades", "col-oranges.png",
"~col-purples~", "purple shades", "col-purples.png",
"~col-reds~", "red shades", "col-reds.png",
"~col-whites~", "white shades", "col-whites.png",
"~col-yellows~", "yellow shades", "col-yellows.png",
];
shieldData["~col-by-name~"] = [ "Choose the initial letter",
"~col-a~", "Colors starting with A", '',
"~col-b~", "Colors starting with B", '',
"~col-c~", "Colors starting with C", '',
"~col-d~", "Colors starting with D", '',
"~col-e~", "Colors starting with E", '',
"~col-f~", "Colors starting with F", '',
"~col-g~", "Colors starting with G", '',
"~col-h~", "Colors starting with H", '',
"~col-i-j~", "Colors starting with I and J", '',
"~col-k~", "Colors starting with K", '',
"~col-l~", "Colors starting with L", '',
"~col-m~", "Colors starting with M", '',
"~col-n~", "Colors starting with N", '',
"~col-o-q~", "Colors starting with O, P & Q", '',
"~col-r~", "Colors starting with R", '',
"~col-s~", "Colors starting with S", '',
"~col-t~", "Colors starting with T", '',
"~col-u-v~", "Colors starting with U and V", '',
"~col-w~", "Colors starting with W", '',
"~col-x-z~", "Colors starting with X, Y & Z", '',
]
shieldData["~col-blacks~"] = [ "Choose one of the blacks",
"abaddon black", "Abaddon black", 'abaddon-black.png',
"dryad bark", "Dryad bark", 'dryad-bark.png',
"imperial primer", "Imperial primer", 'imperial-primer.png',
"mechanicus standard grey", "Mechanicus standard grey", 'mechanicus-standard-grey.png',
"nuln oil", "Nuln oil", 'nuln-oil.png',
"skavenblight dinge", "Skavenblight dinge", 'skavenblight-dinge.png',
"typhus corrosion", "Typhus corrosion", 'typhus-corrosion.png',
];
shieldData["~col-blues~"] = [ "Choose one of the blues",
"ahriman blue", "Ahriman blue", 'ahriman-blue.png',
"alaitoc blue", "Alaitoc blue", 'alaitoc-blue.png',
"altdorf guard blue", "Altdorf guard blue", 'altdorf-guard-blue.png',
"baharroth blue", "Baharroth blue", 'baharroth-blue.png',
"blue horror", "Blue horror", 'blue-horror.png',
"caledor sky", "Caledor sky", 'caledor-sky.png',
"calgar blue", "Calgar blue", 'calgar-blue.png',
"chronus blue", "Chronus blue", 'chronus-blue.png',
"drakenhof nightshade", "Drakenhof nightshade", 'drakenhof-nightshade.png',
"etherium blue", "Etherium blue", 'etherium-blue.png',
"guilliman blue", "Guilliman blue", 'guilliman-blue.png',
"hoeth blue dry", "Hoeth blue dry", 'hoeth-blue-dry.png',
"hoeth blue", "Hoeth blue", 'hoeth-blue.png',
"imrik blue", "Imrik blue", 'imrik-blue.png',
"kantor blue", "Kantor blue", 'kantor-blue.png',
"lothern blue", "Lothern blue", 'lothern-blue.png',
"macragge blue", "Macragge blue", 'macragge-blue.png',
"skink blue", "Skink blue", 'skink-blue.png',
"soulstone blue", "Soulstone blue", 'soulstone-blue.png',
"stormfang", "Stormfang", 'stormfang.png',
"teclis blue", "Teclis blue", 'teclis-blue.png',
"temple guard blue", "Temple guard blue", 'temple-guard-blue.png',
"thousand sons blue", "Thousand sons blue", 'thousand-sons-blue.png',
"thunderhawk blue dry", "Thunderhawk blue dry", 'thunderhawk-blue-dry.png',
"thunderhawk blue", "Thunderhawk blue", 'thunderhawk-blue.png',
];
shieldData["~col-browns~"] = [ "Choose one of the browns",
"agrax earthshade", "Agrax earthshade", 'agrax-earthshade.png',
"agrellan earth", "Agrellan earth", 'agrellan-earth.png',
"balor brown", "Balor brown", 'balor-brown.png',
"balthasar gold", "Balthasar gold", 'balthasar-gold.png',
"baneblade brown", "Baneblade brown", 'baneblade-brown.png',
"bestigor flesh", "Bestigor flesh", 'bestigor-flesh.png',
"blackfire earth", "Blackfire earth", 'blackfire-earth.png',
"brass scorpion", "Brass scorpion", 'brass-scorpion.png',
"bugmans glow", "Bugmans glow", 'bugmans-glow.png',
"cadian fleshtone", "Cadian fleshtone", 'cadian-fleshtone.png',
"deathclaw brown", "Deathclaw brown", 'deathclaw-brown.png',
"doombull brown", "Doombull brown", 'doombull-brown.png',
"eldar flesh", "Eldar flesh", 'eldar-flesh.png',
"fuegan orange", "Fuegan orange", 'fuegan-orange.png',
"gehennas gold", "Gehennas gold", 'gehennas-gold.png',
"golden griffon", "Golden griffon", 'golden-griffon.png',
"golgfag brown", "Golgfag brown", 'golgfag-brown.png',
"gorthor brown", "Gorthor brown", 'gorthor-brown.png',
"hashut copper", "Hashut copper", 'hashut-copper.png',
"karak stone", "Karak stone", 'karak-stone.png',
"kislev flesh", "Kislev flesh", 'kislev-flesh.png',
"liberator gold", "Liberator gold", 'liberator-gold.png',
"martian ironearth", "Martian ironearth", 'martian-ironearth.png',
"mournfang brown", "Mournfang brown", 'mournfang-brown.png',
"ratskin flesh", "Ratskin flesh", 'ratskin-flesh.png',
"reikland fleshshade", "Reikland fleshshade", 'reikland-fleshshade.png',
"retributor armour", "Retributor armour", 'retributor-armour.png',
"rhinox hide", "Rhinox hide", 'rhinox-hide.png',
"screaming bell", "Screaming bell", 'screaming-bell.png',
"sigmarite", "Sigmarite", 'sigmarite.png',
"skrag brown", "Skrag brown", 'skrag-brown.png',
"steel legion drab", "Steel legion drab", 'steel-legion-drab.png',
"stirland mud", "Stirland mud", 'stirland-mud.png',
"sycorax bronze", "Sycorax bronze", 'sycorax-bronze.png',
"sylvaneth bark", "Sylvaneth bark", 'sylvaneth-bark.png',
"verminlord hide", "Verminlord hide", 'verminlord-hide.png',
"xv 88", "Xv 88", 'xv-88.png',
];
shieldData["~col-greens~"] = [ "Choose one of the greens",
"athonian camoshade", "Athonian camoshade", 'athonian-camoshade.png',
"biel tan green", "Biel tan green", 'biel-tan-green.png',
"caliban green", "Caliban green", 'caliban-green.png',
"castellan green", "Castellan green", 'castellan-green.png',
"coelia greenshade", "Coelia greenshade", 'coelia-greenshade.png',
"death guard green", "Death guard green", 'death-guard-green.png',
"deathworld forest", "Deathworld forest", 'deathworld-forest.png',
"elysian green", "Elysian green", 'elysian-green.png',
"gauss blaster green", "Gauss blaster green", 'gauss-blaster-green.png',
"hellion green", "Hellion green", 'hellion-green.png',
"incubi darkness", "Incubi darkness", 'incubi-darkness.png',
"kabalite green", "Kabalite green", 'kabalite-green.png',
"krieg khaki", "Krieg khaki", 'krieg-khaki.png',
"liquid green stuff", "Liquid green stuff", 'liquid-green-stuff.png',
"loren forest", "Loren forest", 'loren-forest.png',
"lustrian undergrowth", "Lustrian undergrowth", 'lustrian-undergrowth.png',
"moot green", "Moot green", 'moot-green.png',
"niblet green", "Niblet green", 'niblet-green.png',
"nihilakh oxide", "Nihilakh oxide", 'nihilakh-oxide.png',
"nurgles rot", "Nurgles rot", 'nurgles-rot.png',
"nurgling green dry", "Nurgling green dry", 'nurgling-green-dry.png',
"nurgling green", "Nurgling green", 'nurgling-green.png',
"ogryn camo", "Ogryn camo", 'ogryn-camo.png',
"screaming skull", "Screaming skull", 'screaming-skull.png',
"skarsnik green", "Skarsnik green", 'skarsnik-green.png',
"sotek green", "Sotek green", 'sotek-green.png',
"straken green", "Straken green", 'straken-green.png',
"sybarite green", "Sybarite green", 'sybarite-green.png',
"tyrant skull", "Tyrant skull", 'tyrant-skull.png',
"underhive ash", "Underhive ash", 'underhive-ash.png',
"ushabti bone", "Ushabti bone", 'ushabti-bone.png',
"waaagh flesh", "Waaagh flesh", 'waaagh-flesh.png',
"warboss green", "Warboss green", 'warboss-green.png',
"warpstone glow", "Warpstone glow", 'warpstone-glow.png',
"waystone green", "Waystone green", 'waystone-green.png',
"waywatcher green", "Waywatcher green", 'waywatcher-green.png',
"zandri dust", "Zandri dust", 'zandri-dust.png',
];
shieldData["~col-greys~"] = [ "Choose one of the greys",
"administratum grey", "Administratum grey", 'administratum-grey.png',
"astrogranite", "Astrogranite", 'astrogranite.png',
"celestra grey", "Celestra grey", 'celestra-grey.png',
"dark reaper", "Dark reaper", 'dark-reaper.png',
"dawnstone dry", "Dawnstone dry", 'dawnstone-dry.png',
"dawnstone", "Dawnstone", 'dawnstone.png',
"eshin grey", "Eshin grey", 'eshin-grey.png',
"fenrisian grey", "Fenrisian grey", 'fenrisian-grey.png',
"ironbreaker", "Ironbreaker", 'ironbreaker.png',
"leadbelcher", "Leadbelcher", 'leadbelcher.png',
"longbeard grey", "Longbeard grey", 'longbeard-grey.png',
"necron compound", "Necron compound", 'necron-compound.png',
"pallid wych flesh", "Pallid wych flesh", 'pallid-wych-flesh.png',
"rakarth flesh", "Rakarth flesh", 'rakarth-flesh.png',
"runefang steel", "Runefang steel", 'runefang-steel.png',
"runelord brass", "Runelord brass", 'runelord-brass.png',
"russ grey", "Russ grey", 'russ-grey.png',
"slaanesh grey dry", "Slaanesh grey dry", 'slaanesh-grey-dry.png',
"slaanesh grey", "Slaanesh grey", 'slaanesh-grey.png',
"stegadon scale green", "Stegadon scale green", 'stegadon-scale-green.png',
"stormhost silver", "Stormhost silver", 'stormhost-silver.png',
"stormvermin fur", "Stormvermin fur", 'stormvermin-fur.png',
"terminatus stone", "Terminatus stone", 'terminatus-stone.png',
"the fang grey", "The fang grey", 'the-fang-grey.png',
"ulthuan grey", "Ulthuan grey", 'ulthuan-grey.png',
"warpfiend grey", "Warpfiend grey", 'warpfiend-grey.png',
"warplock bronze", "Warplock bronze", 'warplock-bronze.png',
];
shieldData["~col-oranges~"] = [ "Choose one of the oranges",
"kindleflame", "Kindleflame", 'kindleflame.png',
"lugganath orange", "Lugganath orange", 'lugganath-orange.png',
"ryza rust", "Ryza rust", 'ryza-rust.png',
"seraphim sepia", "Seraphim sepia", 'seraphim-sepia.png',
"skullcrusher brass", "Skullcrusher brass", 'skullcrusher-brass.png',
"spiritstone red", "Spiritstone red", 'spiritstone-red.png',
"squig orange", "Squig orange", 'squig-orange.png',
"tau light ochre", "Tau light ochre", 'tau-light-ochre.png',
"troll slayer orange", "Troll slayer orange", 'troll-slayer-orange.png',
"zamesi desert", "Zamesi desert", 'zamesi-desert.png',
];
shieldData["~col-purples~"] = [ "Choose one of the purples",
"carroburg crimson", "Carroburg crimson", 'carroburg-crimson.png',
"daemonette hide", "Daemonette hide", 'daemonette-hide.png',
"dechala lilac", "Dechala lilac", 'dechala-lilac.png',
"druchii violet", "Druchii violet", 'druchii-violet.png',
"emperors children", "Emperors children", 'emperors-children.png',
"genestealer purple", "Genestealer purple", 'genestealer-purple.png',
"lucius lilac", "Lucius lilac", 'lucius-lilac.png',
"naggaroth night", "Naggaroth night", 'naggaroth-night.png',
"pink horror", "Pink horror", 'pink-horror.png',
"screamer pink", "Screamer pink", 'screamer-pink.png',
"xereus purple", "Xereus purple", 'xereus-purple.png',
];
shieldData["~col-reds~"] = [ "Choose one of the reds",
"astorath red", "Astorath red", 'astorath-red.png',
"blood for the-blood-god", "Blood for the-blood-god", 'blood-for-the-blood-god.png',
"bloodletter", "Bloodletter", 'bloodletter.png',
"changeling pink", "Changeling pink", 'changeling-pink.png',
"evil sunz scarlet", "Evil sunz scarlet", 'evil-sunz-scarlet.png',
"fire dragon bright", "Fire dragon bright", 'fire-dragon-bright.png',
"fulgrim pink", "Fulgrim pink", 'fulgrim-pink.png',
"jokaero orange", "Jokaero orange", 'jokaero-orange.png',
"khorne red", "Khorne red", 'khorne-red.png',
"mephiston red", "Mephiston red", 'mephiston-red.png',
"tuskgor fur", "Tuskgor fur", 'tuskgor-fur.png',
"wazdakka red", "Wazdakka red", 'wazdakka-red.png',
"wild rider red", "Wild rider red", 'wild-rider-red.png',
];
shieldData["~col-whites~"] = [ "Choose one of the whites",
"ardcoat", "Ardcoat", 'ardcoat.png',
"ceramite white", "Ceramite white", 'ceramite-white.png',
"flayed one flesh", "Flayed one flesh", 'flayed-one-flesh.png',
"fulgurite copper", "Fulgurite copper", 'fulgurite-copper.png',
"lahmian medium", "Lahmian medium", 'lahmian-medium.png',
"mourn mountain snow", "Mourn mountain snow", 'mourn-mountain-snow.png',
"praxeti white", "Praxeti white", 'praxeti-white.png',
"white scar", "White scar", 'white-scar.png',
"wrack white", "Wrack white", 'wrack-white.png',
];
shieldData["~col-yellows~"] = [ "Choose one of the yellows",
"armageddon dust", "Armageddon dust", 'armageddon-dust.png',
"auric armour gold", "Auric armour gold", 'auric-armour-gold.png',
"averland sunset", "Averland sunset", 'averland-sunset.png',
"casandora yellow", "Casandora yellow", 'casandora-yellow.png',
"dorn yellow", "Dorn yellow", 'dorn-yellow.png',
"flash gitz yellow", "Flash gitz yellow", 'flash-gitz-yellow.png',
"hexos palesun", "Hexos palesun", 'hexos-palesun.png',
"lamenters yellow", "Lamenters yellow", 'lamenters-yellow.png',
"tallarn sand", "Tallarn sand", 'tallarn-sand.png',
"ungor flesh", "Ungor flesh", 'ungor-flesh.png',
"yriel yellow", "Yriel yellow", 'yriel-yellow.png',
    ];
shieldData["~col-a~"] = [ "Colors starting with A",
"abaddon black", "Abaddon black", 'abaddon-black.png',
"administratum grey", "Administratum grey", 'administratum-grey.png',
"agrax earthshade", "Agrax earthshade", 'agrax-earthshade.png',
"agrellan earth", "Agrellan earth", 'agrellan-earth.png',
"ahriman blue", "Ahriman blue", 'ahriman-blue.png',
"alaitoc blue", "Alaitoc blue", 'alaitoc-blue.png',
"altdorf guard blue", "Altdorf guard blue", 'altdorf-guard-blue.png',
"ardcoat", "Ardcoat", 'ardcoat.png',
"armageddon dust", "Armageddon dust", 'armageddon-dust.png',
"astorath red", "Astorath red", 'astorath-red.png',
"astrogranite", "Astrogranite", 'astrogranite.png',
"athonian camoshade", "Athonian camoshade", 'athonian-camoshade.png',
"auric armour gold", "Auric armour gold", 'auric-armour-gold.png',
"averland sunset", "Averland sunset", 'averland-sunset.png',
];
shieldData["~col-b~"] = [ "Colors starting with B",
"baharroth blue", "Baharroth blue", 'baharroth-blue.png',
"balor brown", "Balor brown", 'balor-brown.png',
"balthasar gold", "Balthasar gold", 'balthasar-gold.png',
"baneblade brown", "Baneblade brown", 'baneblade-brown.png',
"bestigor flesh", "Bestigor flesh", 'bestigor-flesh.png',
"biel tan green", "Biel tan green", 'biel-tan-green.png',
"blackfire earth", "Blackfire earth", 'blackfire-earth.png',
"blood for the-blood-god", "Blood for the-blood-god", 'blood-for-the-blood-god.png',
"bloodletter", "Bloodletter", 'bloodletter.png',
"blue horror", "Blue horror", 'blue-horror.png',
"brass scorpion", "Brass scorpion", 'brass-scorpion.png',
"bugmans glow", "Bugmans glow", 'bugmans-glow.png',
];
shieldData["~col-c~"] = [ "Colors starting with C",
"cadian fleshtone", "Cadian fleshtone", 'cadian-fleshtone.png',
"caledor sky", "Caledor sky", 'caledor-sky.png',
"calgar blue", "Calgar blue", 'calgar-blue.png',
"caliban green", "Caliban green", 'caliban-green.png',
"carroburg crimson", "Carroburg crimson", 'carroburg-crimson.png',
"casandora yellow", "Casandora yellow", 'casandora-yellow.png',
"castellan green", "Castellan green", 'castellan-green.png',
"celestra grey", "Celestra grey", 'celestra-grey.png',
"ceramite white", "Ceramite white", 'ceramite-white.png',
"changeling pink", "Changeling pink", 'changeling-pink.png',
"chronus blue", "Chronus blue", 'chronus-blue.png',
"coelia greenshade", "Coelia greenshade", 'coelia-greenshade.png',
];
shieldData["~col-d~"] = [ "Colors starting with D",
"daemonette hide", "Daemonette hide", 'daemonette-hide.png',
"dark reaper", "Dark reaper", 'dark-reaper.png',
"dawnstone dry", "Dawnstone dry", 'dawnstone-dry.png',
"dawnstone", "Dawnstone", 'dawnstone.png',
"death guard green", "Death guard green", 'death-guard-green.png',
"deathclaw brown", "Deathclaw brown", 'deathclaw-brown.png',
"deathworld forest", "Deathworld forest", 'deathworld-forest.png',
"dechala lilac", "Dechala lilac", 'dechala-lilac.png',
"doombull brown", "Doombull brown", 'doombull-brown.png',
"dorn yellow", "Dorn yellow", 'dorn-yellow.png',
"drakenhof nightshade", "Drakenhof nightshade", 'drakenhof-nightshade.png',
"druchii violet", "Druchii violet", 'druchii-violet.png',
"dryad bark", "Dryad bark", 'dryad-bark.png',
];
shieldData["~col-e~"] = [ "Colors starting with E",
"eldar flesh", "Eldar flesh", 'eldar-flesh.png',
"elysian green", "Elysian green", 'elysian-green.png',
"emperors children", "Emperors children", 'emperors-children.png',
"eshin grey", "Eshin grey", 'eshin-grey.png',
"etherium blue", "Etherium blue", 'etherium-blue.png',
"evil sunz scarlet", "Evil sunz scarlet", 'evil-sunz-scarlet.png',
];
shieldData["~col-f~"] = [ "Colors starting with F",
"fenrisian grey", "Fenrisian grey", 'fenrisian-grey.png',
"fire dragon bright", "Fire dragon bright", 'fire-dragon-bright.png',
"flash gitz yellow", "Flash gitz yellow", 'flash-gitz-yellow.png',
"flayed one flesh", "Flayed one flesh", 'flayed-one-flesh.png',
"fuegan orange", "Fuegan orange", 'fuegan-orange.png',
"fulgrim pink", "Fulgrim pink", 'fulgrim-pink.png',
"fulgurite copper", "Fulgurite copper", 'fulgurite-copper.png',
];
shieldData["~col-g~"] = [ "Colors starting with G",
"gauss blaster green", "Gauss blaster green", 'gauss-blaster-green.png',
"gehennas gold", "Gehennas gold", 'gehennas-gold.png',
"genestealer purple", "Genestealer purple", 'genestealer-purple.png',
"golden griffon", "Golden griffon", 'golden-griffon.png',
"golgfag brown", "Golgfag brown", 'golgfag-brown.png',
"gorthor brown", "Gorthor brown", 'gorthor-brown.png',
"guilliman blue", "Guilliman blue", 'guilliman-blue.png',
];
shieldData["~col-h~"] = [ "Colors starting with H",
"hashut copper", "Hashut copper", 'hashut-copper.png',
"hellion green", "Hellion green", 'hellion-green.png',
"hexos palesun", "Hexos palesun", 'hexos-palesun.png',
"hoeth blue dry", "Hoeth blue dry", 'hoeth-blue-dry.png',
"hoeth blue", "Hoeth blue", 'hoeth-blue.png',
];
shieldData["~col-i-j~"] = [ "Colors starting with I and J",
"imperial primer", "Imperial primer", 'imperial-primer.png',
"imrik blue", "Imrik blue", 'imrik-blue.png',
"incubi darkness", "Incubi darkness", 'incubi-darkness.png',
"ironbreaker", "Ironbreaker", 'ironbreaker.png',
"jokaero orange", "Jokaero orange", 'jokaero-orange.png',
];
shieldData["~col-k~"] = [ "Colors starting with K",
"kabalite green", "Kabalite green", 'kabalite-green.png',
"kantor blue", "Kantor blue", 'kantor-blue.png',
"karak stone", "Karak stone", 'karak-stone.png',
"khorne red", "Khorne red", 'khorne-red.png',
"kindleflame", "Kindleflame", 'kindleflame.png',
"kislev flesh", "Kislev flesh", 'kislev-flesh.png',
"krieg khaki", "Krieg khaki", 'krieg-khaki.png',
];
shieldData["~col-l~"] = [ "Colors starting with L",
"lahmian medium", "Lahmian medium", 'lahmian-medium.png',
"lamenters yellow", "Lamenters yellow", 'lamenters-yellow.png',
"leadbelcher", "Leadbelcher", 'leadbelcher.png',
"liberator gold", "Liberator gold", 'liberator-gold.png',
"liquid green stuff", "Liquid green stuff", 'liquid-green-stuff.png',
"longbeard grey", "Longbeard grey", 'longbeard-grey.png',
"loren forest", "Loren forest", 'loren-forest.png',
"lothern blue", "Lothern blue", 'lothern-blue.png',
"lucius lilac", "Lucius lilac", 'lucius-lilac.png',
"lugganath orange", "Lugganath orange", 'lugganath-orange.png',
"lustrian undergrowth", "Lustrian undergrowth", 'lustrian-undergrowth.png',
];
shieldData["~col-m~"] = [ "Colors starting with M",
"macragge blue", "Macragge blue", 'macragge-blue.png',
"martian ironearth", "Martian ironearth", 'martian-ironearth.png',
"mechanicus standard grey", "Mechanicus standard grey", 'mechanicus-standard-grey.png',
"mephiston red", "Mephiston red", 'mephiston-red.png',
"moot green", "Moot green", 'moot-green.png',
"mourn mountain snow", "Mourn mountain snow", 'mourn-mountain-snow.png',
"mournfang brown", "Mournfang brown", 'mournfang-brown.png',
];
shieldData["~col-n~"] = [ "Colors starting with N",
"naggaroth night", "Naggaroth night", 'naggaroth-night.png',
"necron compound", "Necron compound", 'necron-compound.png',
"niblet green", "Niblet green", 'niblet-green.png',
"nihilakh oxide", "Nihilakh oxide", 'nihilakh-oxide.png',
"nuln oil", "Nuln oil", 'nuln-oil.png',
"nurgles rot", "Nurgles rot", 'nurgles-rot.png',
"nurgling green dry", "Nurgling green dry", 'nurgling-green-dry.png',
"nurgling green", "Nurgling green", 'nurgling-green.png',
];
shieldData["~col-o-q~"] = [ "Colors starting with O, P & Q",
"ogryn camo", "Ogryn camo", 'ogryn-camo.png',
"pallid wych flesh", "Pallid wych flesh", 'pallid-wych-flesh.png',
"pink horror", "Pink horror", 'pink-horror.png',
"praxeti white", "Praxeti white", 'praxeti-white.png',
];
shieldData["~col-r~"] = [ "Colors starting with R",
"rakarth flesh", "Rakarth flesh", 'rakarth-flesh.png',
"ratskin flesh", "Ratskin flesh", 'ratskin-flesh.png',
"reikland fleshshade", "Reikland fleshshade", 'reikland-fleshshade.png',
"retributor armour", "Retributor armour", 'retributor-armour.png',
"rhinox hide", "Rhinox hide", 'rhinox-hide.png',
"runefang steel", "Runefang steel", 'runefang-steel.png',
"runelord brass", "Runelord brass", 'runelord-brass.png',
"russ grey", "Russ grey", 'russ-grey.png',
"ryza rust", "Ryza rust", 'ryza-rust.png',
];
shieldData["~col-s~"] = [ "Colors starting with S",
"screamer pink", "Screamer pink", 'screamer-pink.png',
"screaming bell", "Screaming bell", 'screaming-bell.png',
"screaming skull", "Screaming skull", 'screaming-skull.png',
"seraphim sepia", "Seraphim sepia", 'seraphim-sepia.png',
"sigmarite", "Sigmarite", 'sigmarite.png',
"skarsnik green", "Skarsnik green", 'skarsnik-green.png',
"skavenblight dinge", "Skavenblight dinge", 'skavenblight-dinge.png',
"skink blue", "Skink blue", 'skink-blue.png',
"skrag brown", "Skrag brown", 'skrag-brown.png',
"skullcrusher brass", "Skullcrusher brass", 'skullcrusher-brass.png',
"slaanesh grey dry", "Slaanesh grey dry", 'slaanesh-grey-dry.png',
"slaanesh grey", "Slaanesh grey", 'slaanesh-grey.png',
"sotek green", "Sotek green", 'sotek-green.png',
"soulstone blue", "Soulstone blue", 'soulstone-blue.png',
"spiritstone red", "Spiritstone red", 'spiritstone-red.png',
"squig orange", "Squig orange", 'squig-orange.png',
"steel legion drab", "Steel legion drab", 'steel-legion-drab.png',
"stegadon scale green", "Stegadon scale green", 'stegadon-scale-green.png',
"stirland mud", "Stirland mud", 'stirland-mud.png',
"stormfang", "Stormfang", 'stormfang.png',
"stormhost silver", "Stormhost silver", 'stormhost-silver.png',
"stormvermin fur", "Stormvermin fur", 'stormvermin-fur.png',
"straken green", "Straken green", 'straken-green.png',
"sybarite green", "Sybarite green", 'sybarite-green.png',
"sycorax bronze", "Sycorax bronze", 'sycorax-bronze.png',
"sylvaneth bark", "Sylvaneth bark", 'sylvaneth-bark.png',
];
shieldData["~col-t~"] = [ "Colors starting with T",
"tallarn sand", "Tallarn sand", 'tallarn-sand.png',
"tau light ochre", "Tau light ochre", 'tau-light-ochre.png',
"teclis blue", "Teclis blue", 'teclis-blue.png',
"temple guard blue", "Temple guard blue", 'temple-guard-blue.png',
"terminatus stone", "Terminatus stone", 'terminatus-stone.png',
"the fang grey", "The fang grey", 'the-fang-grey.png',
"thousand sons blue", "Thousand sons blue", 'thousand-sons-blue.png',
"thunderhawk blue dry", "Thunderhawk blue dry", 'thunderhawk-blue-dry.png',
"thunderhawk blue", "Thunderhawk blue", 'thunderhawk-blue.png',
"troll slayer orange", "Troll slayer orange", 'troll-slayer-orange.png',
"tuskgor fur", "Tuskgor fur", 'tuskgor-fur.png',
"typhus corrosion", "Typhus corrosion", 'typhus-corrosion.png',
"tyrant skull", "Tyrant skull", 'tyrant-skull.png',
];
shieldData["~col-u-v~"] = [ "Colors starting with U and V",
"ulthuan grey", "Ulthuan grey", 'ulthuan-grey.png',
"underhive ash", "Underhive ash", 'underhive-ash.png',
"ungor flesh", "Ungor flesh", 'ungor-flesh.png',
"ushabti bone", "Ushabti bone", 'ushabti-bone.png',
"verminlord hide", "Verminlord hide", 'verminlord-hide.png',
];
shieldData["~col-w~"] = [ "Colors starting with W",
"waaagh flesh", "Waaagh flesh", 'waaagh-flesh.png',
"warboss green", "Warboss green", 'warboss-green.png',
"warpfiend grey", "Warpfiend grey", 'warpfiend-grey.png',
"warplock bronze", "Warplock bronze", 'warplock-bronze.png',
"warpstone glow", "Warpstone glow", 'warpstone-glow.png',
"waystone green", "Waystone green", 'waystone-green.png',
"waywatcher green", "Waywatcher green", 'waywatcher-green.png',
"wazdakka red", "Wazdakka red", 'wazdakka-red.png',
"white scar", "White scar", 'white-scar.png',
"wild rider red", "Wild rider red", 'wild-rider-red.png',
"wrack white", "Wrack white", 'wrack-white.png',
];
shieldData["~col-x-z~"] = [ "Colors starting with X, Y & Z",
"xereus purple", "Xereus purple", 'xereus-purple.png',
"xv 88", "Xv 88", 'xv-88.png',
"yriel yellow", "Yriel yellow", 'yriel-yellow.png',
"zamesi desert", "Zamesi desert", 'zamesi-desert.png',
"zandri dust", "Zandri dust", 'zandri-dust.png',
];





var urlArgs = '&shape=pauldron&size=' + size;


function testVersion() {
  return version;
}

var bStack;
var qStack;

function init_build() {
    blazonElement = document.getElementById('blazon');
    blazonElement.value="~background~";
    questions = document.getElementById("questions");
    questions.replaceChild( nextQuestion ( blazonElement.value ), questions.firstChild );
//  document.getElementById('caption').firstChild.nodeValue = "Go back one step";
    bStack = [];
    qStack = [];
    requestSVG('/include/drawshield.php?' + urlArgs +
        '&blazon=Argent%20the%20word%20pauldron%20sable','shieldimg');
}

function finished() {
    if ( document.getElementById('blazon').value.indexOf("~") != -1 ) {
      window.alert ('You must complete choosing all of the current parts before you can finish');
    } else {
      document.getElementById('blazon').removeAttribute('disabled');
      var questions = document.getElementById('questions');
      var para = document.createElement('p');
      var words = document.createTextNode('Congratulations! You have now completed your ' +
      'design! To make any more changes or chose different options ');
      para.appendChild(words);
      var link = document.createElement('a');
      link.setAttribute('href',"/create/index.html?" + urlArgs + encodeURIComponent(blazonElement.value));
      words = document.createTextNode('click this link ');
      link.appendChild(words);
      para.appendChild(link);
      words = document.createTextNode('to transfer your blazon to the "Create" page", or click the "Refresh" button to start over. ' +
      ' This program only has a small subset of blazonry terms, but I hope it has helped you understand how blazons are constructed. ' +
          'Take a look at the help page and the suggested reading to find out more of what can be done.');
      para.appendChild(words);
      questions.replaceChild(para,questions.firstChild);
    }
    return false;
}

function goback() {
  if ( bStack.length > 0 ) {
    document.getElementById('blazon').value = bStack.pop();
    var questions = document.getElementById('questions');
    questions.replaceChild(qStack.pop(),questions.firstChild);
  }
  return false;
}

function update() {
  blazonElement = document.getElementById('blazon');
  requestSVG('/include/drawshield.php?' + urlArgs + '&blazon=' + encodeURIComponent(blazonElement.value),'shieldimg');
}

function do_reset() {
  document.getElementById('blazon').disabled='disabled';
  init_build();
  return false;
}

function do_replace(answer) {
  blazonElement = document.getElementById('blazon');
  if ( !blazonElement.hasAttribute('disabled') ) return;
  bStack.push(blazonElement.value);
  shieldImg = document.getElementById('shieldimg');
  questions = document.getElementById('questions');
  qStack.push( questions.firstChild );
  if ( blazonElement.value.indexOf("~") == -1 ) {
    blazonElement.value += ' ' + answer;
  } else {
    blazonElement.value = blazonElement.value.replace( /~.*?~/, answer );
  }
  questions.replaceChild(nextQuestion ( blazonElement.value ), questions.firstChild);
  if ( blazonElement.value.indexOf("~") == -1 ) {
    requestSVG('/include/drawshield.php?' + urlArgs + '&blazon=' + encodeURIComponent(blazonElement.value),'shieldimg');
    window.location = "#top";
  }
}

function nextQuestion( blazon ) {

  target = blazon.match(/~.*?~/);
  if ( target == null ) {
    sData = shieldData["~ordchg~"];
    } else {
    sData = shieldData[target];
  }
  var retDOM = document.createElement('div');
  retDOM.setAttribute('class','row');
  var h2div = document.createElement('div');
  h2div.setAttribute('class','col-12');
  temp = document.createElement('h2');
  h2div.appendChild(temp);
  temp.appendChild(document.createTextNode(sData[0]));
  retDOM.appendChild(h2div);
    for (var i = 1; i < sData.length; i +=3 ) {
        var div = document.createElement('div');
        div.setAttribute('class','col-lg-2 col-md-3, col-sm-4');
        div.setAttribute('onclick','do_replace("' + sData[i] + '")');
        div.setAttribute('style','background:#EBEBE4;');
        var img = document.createElement('img');
        img.setAttribute('alt','choice');
        img.setAttribute('width','120');
        img.setAttribute('height','120');
        img.setAttribute('class','mx-auto d-block');
        if ( sData[i+2] != '' ) {
          img.setAttribute('src','/warhammer/img/' + sData[i+2]);
        } else {
          img.setAttribute('src','/warhammer/img/none.png');
        }
        div.appendChild(img);
        var temp = document.createElement('p');
        temp.setAttribute('class','lead');
        temp.appendChild(document.createTextNode(sData[i+1]));
        div.appendChild(temp);
        retDOM.appendChild(div);
    }

    return retDOM;
}

window.onload=init_build();
