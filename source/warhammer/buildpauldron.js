var version = "0.1a";
var size=280;

var shieldData = {};
shieldData["~start-here~"] = [ "Answer the following Questions and watch how the blazon is build up",
"~background~ ~update~ ~bordure~ ~update~ ~add-symbol~ ~update~", "Begin", 'yes.png',
    ];
shieldData["~background~"] = [ "Is the background single colour or split into two?",
      '~colour~', "A single colour", 'plain.png',
      '~divided~', "Divided between two colours", 'divided.png'
      ];
shieldData["~colour~"] = [ "How do you want to choose the colour?",
    "~col-by-shade~", "By Shade", 'col/col-blues.png',
    "~col-by-name~", "By Name", 'col/by-letter.png',
];
shieldData["~col-by-shade~"] = [ "Choose your preferred shade",
    "~col-blacks~", "black shades", "col/col-blacks.png",
"~col-blues~", "blue shades", "col/col-blues.png",
"~col-browns~", "brown shades", "col/col-browns.png",
"~col-greens~", "green shades", "col/col-greens.png",
"~col-greys~", "grey shades", "col/col-greys.png",
"~col-oranges~", "orange shades", "col/col-oranges.png",
"~col-purples~", "purple shades", "col/col-purples.png",
"~col-reds~", "red shades", "col/col-reds.png",
"~col-whites~", "white shades", "col/col-whites.png",
"~col-yellows~", "yellow shades", "col/col-yellows.png",
];
shieldData["~col-by-name~"] = [ "Choose the initial letter",
"~col-a~", "Colors starting with A", 'a2z/a.png',
"~col-b~", "Colors starting with B", 'a2z/b.png',
"~col-c~", "Colors starting with C", 'a2z/c.png',
"~col-d~", "Colors starting with D", 'a2z/d.png',
"~col-e~", "Colors starting with E", 'a2z/e.png',
"~col-f~", "Colors starting with F", 'a2z/f.png',
"~col-g~", "Colors starting with G", 'a2z/g.png',
"~col-h~", "Colors starting with H", 'a2z/h.png',
"~col-i-j~", "Colors starting with I and J", 'a2z/ij.png',
"~col-k~", "Colors starting with K", 'a2z/k.png',
"~col-l~", "Colors starting with L", 'a2z/l.png',
"~col-m~", "Colors starting with M", 'a2z/m.png',
"~col-n~", "Colors starting with N", 'a2z/n.png',
"~col-o-q~", "Colors starting with O, P & Q", 'a2z/opq.png',
"~col-r~", "Colors starting with R", 'a2z/r.png',
"~col-s~", "Colors starting with S", 'a2z/s.png',
"~col-t~", "Colors starting with T", 'a2z/t.png',
"~col-u-v~", "Colors starting with U and V", 'a2z/uv.png',
"~col-w~", "Colors starting with W", 'a2z/w.png',
"~col-x-z~", "Colors starting with X, Y & Z", 'a2z/xyz.png',
]
shieldData["~col-blacks~"] = [ "Choose one of the blacks",
"abaddon black", "Abaddon black", 'col/abaddon-black.png',
"dryad bark", "Dryad bark", 'col/dryad-bark.png',
"imperial primer", "Imperial primer", 'col/imperial-primer.png',
"mechanicus standard grey", "Mechanicus standard grey", 'col/mechanicus-standard-grey.png',
"nuln oil", "Nuln oil", 'col/nuln-oil.png',
"skavenblight dinge", "Skavenblight dinge", 'col/skavenblight-dinge.png',
"typhus corrosion", "Typhus corrosion", 'col/typhus-corrosion.png',
];
shieldData["~col-blues~"] = [ "Choose one of the blues",
"ahriman blue", "Ahriman blue", 'col/ahriman-blue.png',
"alaitoc blue", "Alaitoc blue", 'col/alaitoc-blue.png',
"altdorf guard blue", "Altdorf guard blue", 'col/altdorf-guard-blue.png',
"baharroth blue", "Baharroth blue", 'col/baharroth-blue.png',
"blue horror", "Blue horror", 'col/blue-horror.png',
"caledor sky", "Caledor sky", 'col/caledor-sky.png',
"calgar blue", "Calgar blue", 'col/calgar-blue.png',
"chronus blue", "Chronus blue", 'col/chronus-blue.png',
"drakenhof nightshade", "Drakenhof nightshade", 'col/drakenhof-nightshade.png',
"etherium blue", "Etherium blue", 'col/etherium-blue.png',
"guilliman blue", "Guilliman blue", 'col/guilliman-blue.png',
"hoeth blue dry", "Hoeth blue dry", 'col/hoeth-blue-dry.png',
"hoeth blue", "Hoeth blue", 'col/hoeth-blue.png',
"imrik blue", "Imrik blue", 'col/imrik-blue.png',
"kantor blue", "Kantor blue", 'col/kantor-blue.png',
"lothern blue", "Lothern blue", 'col/lothern-blue.png',
"macragge blue", "Macragge blue", 'col/macragge-blue.png',
"skink blue", "Skink blue", 'col/skink-blue.png',
"soulstone blue", "Soulstone blue", 'col/soulstone-blue.png',
"stormfang", "Stormfang", 'col/stormfang.png',
"teclis blue", "Teclis blue", 'col/teclis-blue.png',
"temple guard blue", "Temple guard blue", 'col/temple-guard-blue.png',
"thousand sons blue", "Thousand sons blue", 'col/thousand-sons-blue.png',
"thunderhawk blue dry", "Thunderhawk blue dry", 'col/thunderhawk-blue-dry.png',
"thunderhawk blue", "Thunderhawk blue", 'col/thunderhawk-blue.png',
];
shieldData["~col-browns~"] = [ "Choose one of the browns",
"agrax earthshade", "Agrax earthshade", 'col/agrax-earthshade.png',
"agrellan earth", "Agrellan earth", 'col/agrellan-earth.png',
"balor brown", "Balor brown", 'col/balor-brown.png',
"balthasar gold", "Balthasar gold", 'col/balthasar-gold.png',
"baneblade brown", "Baneblade brown", 'col/baneblade-brown.png',
"bestigor flesh", "Bestigor flesh", 'col/bestigor-flesh.png',
"blackfire earth", "Blackfire earth", 'col/blackfire-earth.png',
"brass scorpion", "Brass scorpion", 'col/brass-scorpion.png',
"bugmans glow", "Bugmans glow", 'col/bugmans-glow.png',
"cadian fleshtone", "Cadian fleshtone", 'col/cadian-fleshtone.png',
"deathclaw brown", "Deathclaw brown", 'col/deathclaw-brown.png',
"doombull brown", "Doombull brown", 'col/doombull-brown.png',
"eldar flesh", "Eldar flesh", 'col/eldar-flesh.png',
"fuegan orange", "Fuegan orange", 'col/fuegan-orange.png',
"gehennas gold", "Gehennas gold", 'col/gehennas-gold.png',
"golden griffon", "Golden griffon", 'col/golden-griffon.png',
"golgfag brown", "Golgfag brown", 'col/golgfag-brown.png',
"gorthor brown", "Gorthor brown", 'col/gorthor-brown.png',
"hashut copper", "Hashut copper", 'col/hashut-copper.png',
"karak stone", "Karak stone", 'col/karak-stone.png',
"kislev flesh", "Kislev flesh", 'col/kislev-flesh.png',
"liberator gold", "Liberator gold", 'col/liberator-gold.png',
"martian ironearth", "Martian ironearth", 'col/martian-ironearth.png',
"mournfang brown", "Mournfang brown", 'col/mournfang-brown.png',
"ratskin flesh", "Ratskin flesh", 'col/ratskin-flesh.png',
"reikland fleshshade", "Reikland fleshshade", 'col/reikland-fleshshade.png',
"retributor armour", "Retributor armour", 'col/retributor-armour.png',
"rhinox hide", "Rhinox hide", 'col/rhinox-hide.png',
"screaming bell", "Screaming bell", 'col/screaming-bell.png',
"sigmarite", "Sigmarite", 'col/sigmarite.png',
"skrag brown", "Skrag brown", 'col/skrag-brown.png',
"steel legion drab", "Steel legion drab", 'col/steel-legion-drab.png',
"stirland mud", "Stirland mud", 'col/stirland-mud.png',
"sycorax bronze", "Sycorax bronze", 'col/sycorax-bronze.png',
"sylvaneth bark", "Sylvaneth bark", 'col/sylvaneth-bark.png',
"verminlord hide", "Verminlord hide", 'col/verminlord-hide.png',
"xv 88", "Xv 88", 'col/xv-88.png',
];
shieldData["~col-greens~"] = [ "Choose one of the greens",
"athonian camoshade", "Athonian camoshade", 'col/athonian-camoshade.png',
"biel tan green", "Biel tan green", 'col/biel-tan-green.png',
"caliban green", "Caliban green", 'col/caliban-green.png',
"castellan green", "Castellan green", 'col/castellan-green.png',
"coelia greenshade", "Coelia greenshade", 'col/coelia-greenshade.png',
"death guard green", "Death guard green", 'col/death-guard-green.png',
"deathworld forest", "Deathworld forest", 'col/deathworld-forest.png',
"elysian green", "Elysian green", 'col/elysian-green.png',
"gauss blaster green", "Gauss blaster green", 'col/gauss-blaster-green.png',
"hellion green", "Hellion green", 'col/hellion-green.png',
"incubi darkness", "Incubi darkness", 'col/incubi-darkness.png',
"kabalite green", "Kabalite green", 'col/kabalite-green.png',
"krieg khaki", "Krieg khaki", 'col/krieg-khaki.png',
"liquid green stuff", "Liquid green stuff", 'col/liquid-green-stuff.png',
"loren forest", "Loren forest", 'col/loren-forest.png',
"lustrian undergrowth", "Lustrian undergrowth", 'col/lustrian-undergrowth.png',
"moot green", "Moot green", 'col/moot-green.png',
"niblet green", "Niblet green", 'col/niblet-green.png',
"nihilakh oxide", "Nihilakh oxide", 'col/nihilakh-oxide.png',
"nurgles rot", "Nurgles rot", 'col/nurgles-rot.png',
"nurgling green dry", "Nurgling green dry", 'col/nurgling-green-dry.png',
"nurgling green", "Nurgling green", 'col/nurgling-green.png',
"ogryn camo", "Ogryn camo", 'col/ogryn-camo.png',
"screaming skull", "Screaming skull", 'col/screaming-skull.png',
"skarsnik green", "Skarsnik green", 'col/skarsnik-green.png',
"sotek green", "Sotek green", 'col/sotek-green.png',
"straken green", "Straken green", 'col/straken-green.png',
"sybarite green", "Sybarite green", 'col/sybarite-green.png',
"tyrant skull", "Tyrant skull", 'col/tyrant-skull.png',
"underhive ash", "Underhive ash", 'col/underhive-ash.png',
"ushabti bone", "Ushabti bone", 'col/ushabti-bone.png',
"waaagh flesh", "Waaagh flesh", 'col/waaagh-flesh.png',
"warboss green", "Warboss green", 'col/warboss-green.png',
"warpstone glow", "Warpstone glow", 'col/warpstone-glow.png',
"waystone green", "Waystone green", 'col/waystone-green.png',
"waywatcher green", "Waywatcher green", 'col/waywatcher-green.png',
"zandri dust", "Zandri dust", 'col/zandri-dust.png',
];
shieldData["~col-greys~"] = [ "Choose one of the greys",
"administratum grey", "Administratum grey", 'col/administratum-grey.png',
"astrogranite", "Astrogranite", 'col/astrogranite.png',
"celestra grey", "Celestra grey", 'col/celestra-grey.png',
"dark reaper", "Dark reaper", 'col/dark-reaper.png',
"dawnstone dry", "Dawnstone dry", 'col/dawnstone-dry.png',
"dawnstone", "Dawnstone", 'col/dawnstone.png',
"eshin grey", "Eshin grey", 'col/eshin-grey.png',
"fenrisian grey", "Fenrisian grey", 'col/fenrisian-grey.png',
"ironbreaker", "Ironbreaker", 'col/ironbreaker.png',
"leadbelcher", "Leadbelcher", 'col/leadbelcher.png',
"longbeard grey", "Longbeard grey", 'col/longbeard-grey.png',
"necron compound", "Necron compound", 'col/necron-compound.png',
"pallid wych flesh", "Pallid wych flesh", 'col/pallid-wych-flesh.png',
"rakarth flesh", "Rakarth flesh", 'col/rakarth-flesh.png',
"runefang steel", "Runefang steel", 'col/runefang-steel.png',
"runelord brass", "Runelord brass", 'col/runelord-brass.png',
"russ grey", "Russ grey", 'col/russ-grey.png',
"slaanesh grey dry", "Slaanesh grey dry", 'col/slaanesh-grey-dry.png',
"slaanesh grey", "Slaanesh grey", 'col/slaanesh-grey.png',
"stegadon scale green", "Stegadon scale green", 'col/stegadon-scale-green.png',
"stormhost silver", "Stormhost silver", 'col/stormhost-silver.png',
"stormvermin fur", "Stormvermin fur", 'col/stormvermin-fur.png',
"terminatus stone", "Terminatus stone", 'col/terminatus-stone.png',
"the fang grey", "The fang grey", 'col/the-fang-grey.png',
"ulthuan grey", "Ulthuan grey", 'col/ulthuan-grey.png',
"warpfiend grey", "Warpfiend grey", 'col/warpfiend-grey.png',
"warplock bronze", "Warplock bronze", 'col/warplock-bronze.png',
];
shieldData["~col-oranges~"] = [ "Choose one of the oranges",
"kindleflame", "Kindleflame", 'col/kindleflame.png',
"lugganath orange", "Lugganath orange", 'col/lugganath-orange.png',
"ryza rust", "Ryza rust", 'col/ryza-rust.png',
"seraphim sepia", "Seraphim sepia", 'col/seraphim-sepia.png',
"skullcrusher brass", "Skullcrusher brass", 'col/skullcrusher-brass.png',
"spiritstone red", "Spiritstone red", 'col/spiritstone-red.png',
"squig orange", "Squig orange", 'col/squig-orange.png',
"tau light ochre", "Tau light ochre", 'col/tau-light-ochre.png',
"troll slayer orange", "Troll slayer orange", 'col/troll-slayer-orange.png',
"zamesi desert", "Zamesi desert", 'col/zamesi-desert.png',
];
shieldData["~col-purples~"] = [ "Choose one of the purples",
"carroburg crimson", "Carroburg crimson", 'col/carroburg-crimson.png',
"daemonette hide", "Daemonette hide", 'col/daemonette-hide.png',
"dechala lilac", "Dechala lilac", 'col/dechala-lilac.png',
"druchii violet", "Druchii violet", 'col/druchii-violet.png',
"emperors children", "Emperors children", 'col/emperors-children.png',
"genestealer purple", "Genestealer purple", 'col/genestealer-purple.png',
"lucius lilac", "Lucius lilac", 'col/lucius-lilac.png',
"naggaroth night", "Naggaroth night", 'col/naggaroth-night.png',
"pink horror", "Pink horror", 'col/pink-horror.png',
"screamer pink", "Screamer pink", 'col/screamer-pink.png',
"xereus purple", "Xereus purple", 'col/xereus-purple.png',
];
shieldData["~col-reds~"] = [ "Choose one of the reds",
"astorath red", "Astorath red", 'col/astorath-red.png',
"blood for the-blood-god", "Blood for the-blood-god", 'col/blood-for-the-blood-god.png',
"bloodletter", "Bloodletter", 'col/bloodletter.png',
"changeling pink", "Changeling pink", 'col/changeling-pink.png',
"evil sunz scarlet", "Evil sunz scarlet", 'col/evil-sunz-scarlet.png',
"fire dragon bright", "Fire dragon bright", 'col/fire-dragon-bright.png',
"fulgrim pink", "Fulgrim pink", 'col/fulgrim-pink.png',
"jokaero orange", "Jokaero orange", 'col/jokaero-orange.png',
"khorne red", "Khorne red", 'col/khorne-red.png',
"mephiston red", "Mephiston red", 'col/mephiston-red.png',
"tuskgor fur", "Tuskgor fur", 'col/tuskgor-fur.png',
"wazdakka red", "Wazdakka red", 'col/wazdakka-red.png',
"wild rider red", "Wild rider red", 'col/wild-rider-red.png',
];
shieldData["~col-whites~"] = [ "Choose one of the whites",
"ardcoat", "Ardcoat", 'col/ardcoat.png',
"ceramite white", "Ceramite white", 'col/ceramite-white.png',
"flayed one flesh", "Flayed one flesh", 'col/flayed-one-flesh.png',
"fulgurite copper", "Fulgurite copper", 'col/fulgurite-copper.png',
"lahmian medium", "Lahmian medium", 'col/lahmian-medium.png',
"mourn mountain snow", "Mourn mountain snow", 'col/mourn-mountain-snow.png',
"praxeti white", "Praxeti white", 'col/praxeti-white.png',
"white scar", "White scar", 'col/white-scar.png',
"wrack white", "Wrack white", 'col/wrack-white.png',
];
shieldData["~col-yellows~"] = [ "Choose one of the yellows",
"armageddon dust", "Armageddon dust", 'col/armageddon-dust.png',
"auric armour gold", "Auric armour gold", 'col/auric-armour-gold.png',
"averland sunset", "Averland sunset", 'col/averland-sunset.png',
"casandora yellow", "Casandora yellow", 'col/casandora-yellow.png',
"dorn yellow", "Dorn yellow", 'col/dorn-yellow.png',
"flash gitz yellow", "Flash gitz yellow", 'col/flash-gitz-yellow.png',
"hexos palesun", "Hexos palesun", 'col/hexos-palesun.png',
"lamenters yellow", "Lamenters yellow", 'col/lamenters-yellow.png',
"tallarn sand", "Tallarn sand", 'col/tallarn-sand.png',
"ungor flesh", "Ungor flesh", 'col/ungor-flesh.png',
"yriel yellow", "Yriel yellow", 'col/yriel-yellow.png',
    ];
shieldData["~col-a~"] = [ "Colors starting with A",
"abaddon black", "Abaddon black", 'col/abaddon-black.png',
"administratum grey", "Administratum grey", 'col/administratum-grey.png',
"agrax earthshade", "Agrax earthshade", 'col/agrax-earthshade.png',
"agrellan earth", "Agrellan earth", 'col/agrellan-earth.png',
"ahriman blue", "Ahriman blue", 'col/ahriman-blue.png',
"alaitoc blue", "Alaitoc blue", 'col/alaitoc-blue.png',
"altdorf guard blue", "Altdorf guard blue", 'col/altdorf-guard-blue.png',
"ardcoat", "Ardcoat", 'col/ardcoat.png',
"armageddon dust", "Armageddon dust", 'col/armageddon-dust.png',
"astorath red", "Astorath red", 'col/astorath-red.png',
"astrogranite", "Astrogranite", 'col/astrogranite.png',
"athonian camoshade", "Athonian camoshade", 'col/athonian-camoshade.png',
"auric armour gold", "Auric armour gold", 'col/auric-armour-gold.png',
"averland sunset", "Averland sunset", 'col/averland-sunset.png',
];
shieldData["~col-b~"] = [ "Colors starting with B",
"baharroth blue", "Baharroth blue", 'col/baharroth-blue.png',
"balor brown", "Balor brown", 'col/balor-brown.png',
"balthasar gold", "Balthasar gold", 'col/balthasar-gold.png',
"baneblade brown", "Baneblade brown", 'col/baneblade-brown.png',
"bestigor flesh", "Bestigor flesh", 'col/bestigor-flesh.png',
"biel tan green", "Biel tan green", 'col/biel-tan-green.png',
"blackfire earth", "Blackfire earth", 'col/blackfire-earth.png',
"blood for the-blood-god", "Blood for the-blood-god", 'col/blood-for-the-blood-god.png',
"bloodletter", "Bloodletter", 'col/bloodletter.png',
"blue horror", "Blue horror", 'col/blue-horror.png',
"brass scorpion", "Brass scorpion", 'col/brass-scorpion.png',
"bugmans glow", "Bugmans glow", 'col/bugmans-glow.png',
];
shieldData["~col-c~"] = [ "Colors starting with C",
"cadian fleshtone", "Cadian fleshtone", 'col/cadian-fleshtone.png',
"caledor sky", "Caledor sky", 'col/caledor-sky.png',
"calgar blue", "Calgar blue", 'col/calgar-blue.png',
"caliban green", "Caliban green", 'col/caliban-green.png',
"carroburg crimson", "Carroburg crimson", 'col/carroburg-crimson.png',
"casandora yellow", "Casandora yellow", 'col/casandora-yellow.png',
"castellan green", "Castellan green", 'col/castellan-green.png',
"celestra grey", "Celestra grey", 'col/celestra-grey.png',
"ceramite white", "Ceramite white", 'col/ceramite-white.png',
"changeling pink", "Changeling pink", 'col/changeling-pink.png',
"chronus blue", "Chronus blue", 'col/chronus-blue.png',
"coelia greenshade", "Coelia greenshade", 'col/coelia-greenshade.png',
];
shieldData["~col-d~"] = [ "Colors starting with D",
"daemonette hide", "Daemonette hide", 'col/daemonette-hide.png',
"dark reaper", "Dark reaper", 'col/dark-reaper.png',
"dawnstone dry", "Dawnstone dry", 'col/dawnstone-dry.png',
"dawnstone", "Dawnstone", 'col/dawnstone.png',
"death guard green", "Death guard green", 'col/death-guard-green.png',
"deathclaw brown", "Deathclaw brown", 'col/deathclaw-brown.png',
"deathworld forest", "Deathworld forest", 'col/deathworld-forest.png',
"dechala lilac", "Dechala lilac", 'col/dechala-lilac.png',
"doombull brown", "Doombull brown", 'col/doombull-brown.png',
"dorn yellow", "Dorn yellow", 'col/dorn-yellow.png',
"drakenhof nightshade", "Drakenhof nightshade", 'col/drakenhof-nightshade.png',
"druchii violet", "Druchii violet", 'col/druchii-violet.png',
"dryad bark", "Dryad bark", 'col/dryad-bark.png',
];
shieldData["~col-e~"] = [ "Colors starting with E",
"eldar flesh", "Eldar flesh", 'col/eldar-flesh.png',
"elysian green", "Elysian green", 'col/elysian-green.png',
"emperors children", "Emperors children", 'col/emperors-children.png',
"eshin grey", "Eshin grey", 'col/eshin-grey.png',
"etherium blue", "Etherium blue", 'col/etherium-blue.png',
"evil sunz scarlet", "Evil sunz scarlet", 'col/evil-sunz-scarlet.png',
];
shieldData["~col-f~"] = [ "Colors starting with F",
"fenrisian grey", "Fenrisian grey", 'col/fenrisian-grey.png',
"fire dragon bright", "Fire dragon bright", 'col/fire-dragon-bright.png',
"flash gitz yellow", "Flash gitz yellow", 'col/flash-gitz-yellow.png',
"flayed one flesh", "Flayed one flesh", 'col/flayed-one-flesh.png',
"fuegan orange", "Fuegan orange", 'col/fuegan-orange.png',
"fulgrim pink", "Fulgrim pink", 'col/fulgrim-pink.png',
"fulgurite copper", "Fulgurite copper", 'col/fulgurite-copper.png',
];
shieldData["~col-g~"] = [ "Colors starting with G",
"gauss blaster green", "Gauss blaster green", 'col/gauss-blaster-green.png',
"gehennas gold", "Gehennas gold", 'col/gehennas-gold.png',
"genestealer purple", "Genestealer purple", 'col/genestealer-purple.png',
"golden griffon", "Golden griffon", 'col/golden-griffon.png',
"golgfag brown", "Golgfag brown", 'col/golgfag-brown.png',
"gorthor brown", "Gorthor brown", 'col/gorthor-brown.png',
"guilliman blue", "Guilliman blue", 'col/guilliman-blue.png',
];
shieldData["~col-h~"] = [ "Colors starting with H",
"hashut copper", "Hashut copper", 'col/hashut-copper.png',
"hellion green", "Hellion green", 'col/hellion-green.png',
"hexos palesun", "Hexos palesun", 'col/hexos-palesun.png',
"hoeth blue dry", "Hoeth blue dry", 'col/hoeth-blue-dry.png',
"hoeth blue", "Hoeth blue", 'col/hoeth-blue.png',
];
shieldData["~col-i-j~"] = [ "Colors starting with I and J",
"imperial primer", "Imperial primer", 'col/imperial-primer.png',
"imrik blue", "Imrik blue", 'col/imrik-blue.png',
"incubi darkness", "Incubi darkness", 'col/incubi-darkness.png',
"ironbreaker", "Ironbreaker", 'col/ironbreaker.png',
"jokaero orange", "Jokaero orange", 'col/jokaero-orange.png',
];
shieldData["~col-k~"] = [ "Colors starting with K",
"kabalite green", "Kabalite green", 'col/kabalite-green.png',
"kantor blue", "Kantor blue", 'col/kantor-blue.png',
"karak stone", "Karak stone", 'col/karak-stone.png',
"khorne red", "Khorne red", 'col/khorne-red.png',
"kindleflame", "Kindleflame", 'col/kindleflame.png',
"kislev flesh", "Kislev flesh", 'col/kislev-flesh.png',
"krieg khaki", "Krieg khaki", 'col/krieg-khaki.png',
];
shieldData["~col-l~"] = [ "Colors starting with L",
"lahmian medium", "Lahmian medium", 'col/lahmian-medium.png',
"lamenters yellow", "Lamenters yellow", 'col/lamenters-yellow.png',
"leadbelcher", "Leadbelcher", 'col/leadbelcher.png',
"liberator gold", "Liberator gold", 'col/liberator-gold.png',
"liquid green stuff", "Liquid green stuff", 'col/liquid-green-stuff.png',
"longbeard grey", "Longbeard grey", 'col/longbeard-grey.png',
"loren forest", "Loren forest", 'col/loren-forest.png',
"lothern blue", "Lothern blue", 'col/lothern-blue.png',
"lucius lilac", "Lucius lilac", 'col/lucius-lilac.png',
"lugganath orange", "Lugganath orange", 'col/lugganath-orange.png',
"lustrian undergrowth", "Lustrian undergrowth", 'col/lustrian-undergrowth.png',
];
shieldData["~col-m~"] = [ "Colors starting with M",
"macragge blue", "Macragge blue", 'col/macragge-blue.png',
"martian ironearth", "Martian ironearth", 'col/martian-ironearth.png',
"mechanicus standard grey", "Mechanicus standard grey", 'col/mechanicus-standard-grey.png',
"mephiston red", "Mephiston red", 'col/mephiston-red.png',
"moot green", "Moot green", 'col/moot-green.png',
"mourn mountain snow", "Mourn mountain snow", 'col/mourn-mountain-snow.png',
"mournfang brown", "Mournfang brown", 'col/mournfang-brown.png',
];
shieldData["~col-n~"] = [ "Colors starting with N",
"naggaroth night", "Naggaroth night", 'col/naggaroth-night.png',
"necron compound", "Necron compound", 'col/necron-compound.png',
"niblet green", "Niblet green", 'col/niblet-green.png',
"nihilakh oxide", "Nihilakh oxide", 'col/nihilakh-oxide.png',
"nuln oil", "Nuln oil", 'col/nuln-oil.png',
"nurgles rot", "Nurgles rot", 'col/nurgles-rot.png',
"nurgling green dry", "Nurgling green dry", 'col/nurgling-green-dry.png',
"nurgling green", "Nurgling green", 'col/nurgling-green.png',
];
shieldData["~col-o-q~"] = [ "Colors starting with O, P & Q",
"ogryn camo", "Ogryn camo", 'col/ogryn-camo.png',
"pallid wych flesh", "Pallid wych flesh", 'col/pallid-wych-flesh.png',
"pink horror", "Pink horror", 'col/pink-horror.png',
"praxeti white", "Praxeti white", 'col/praxeti-white.png',
];
shieldData["~col-r~"] = [ "Colors starting with R",
"rakarth flesh", "Rakarth flesh", 'col/rakarth-flesh.png',
"ratskin flesh", "Ratskin flesh", 'col/ratskin-flesh.png',
"reikland fleshshade", "Reikland fleshshade", 'col/reikland-fleshshade.png',
"retributor armour", "Retributor armour", 'col/retributor-armour.png',
"rhinox hide", "Rhinox hide", 'col/rhinox-hide.png',
"runefang steel", "Runefang steel", 'col/runefang-steel.png',
"runelord brass", "Runelord brass", 'col/runelord-brass.png',
"russ grey", "Russ grey", 'col/russ-grey.png',
"ryza rust", "Ryza rust", 'col/ryza-rust.png',
];
shieldData["~col-s~"] = [ "Colors starting with S",
"screamer pink", "Screamer pink", 'col/screamer-pink.png',
"screaming bell", "Screaming bell", 'col/screaming-bell.png',
"screaming skull", "Screaming skull", 'col/screaming-skull.png',
"seraphim sepia", "Seraphim sepia", 'col/seraphim-sepia.png',
"sigmarite", "Sigmarite", 'col/sigmarite.png',
"skarsnik green", "Skarsnik green", 'col/skarsnik-green.png',
"skavenblight dinge", "Skavenblight dinge", 'col/skavenblight-dinge.png',
"skink blue", "Skink blue", 'col/skink-blue.png',
"skrag brown", "Skrag brown", 'col/skrag-brown.png',
"skullcrusher brass", "Skullcrusher brass", 'col/skullcrusher-brass.png',
"slaanesh grey dry", "Slaanesh grey dry", 'col/slaanesh-grey-dry.png',
"slaanesh grey", "Slaanesh grey", 'col/slaanesh-grey.png',
"sotek green", "Sotek green", 'col/sotek-green.png',
"soulstone blue", "Soulstone blue", 'col/soulstone-blue.png',
"spiritstone red", "Spiritstone red", 'col/spiritstone-red.png',
"squig orange", "Squig orange", 'col/squig-orange.png',
"steel legion drab", "Steel legion drab", 'col/steel-legion-drab.png',
"stegadon scale green", "Stegadon scale green", 'col/stegadon-scale-green.png',
"stirland mud", "Stirland mud", 'col/stirland-mud.png',
"stormfang", "Stormfang", 'col/stormfang.png',
"stormhost silver", "Stormhost silver", 'col/stormhost-silver.png',
"stormvermin fur", "Stormvermin fur", 'col/stormvermin-fur.png',
"straken green", "Straken green", 'col/straken-green.png',
"sybarite green", "Sybarite green", 'col/sybarite-green.png',
"sycorax bronze", "Sycorax bronze", 'col/sycorax-bronze.png',
"sylvaneth bark", "Sylvaneth bark", 'col/sylvaneth-bark.png',
];
shieldData["~col-t~"] = [ "Colors starting with T",
"tallarn sand", "Tallarn sand", 'col/tallarn-sand.png',
"tau light ochre", "Tau light ochre", 'col/tau-light-ochre.png',
"teclis blue", "Teclis blue", 'col/teclis-blue.png',
"temple guard blue", "Temple guard blue", 'col/temple-guard-blue.png',
"terminatus stone", "Terminatus stone", 'col/terminatus-stone.png',
"the fang grey", "The fang grey", 'col/the-fang-grey.png',
"thousand sons blue", "Thousand sons blue", 'col/thousand-sons-blue.png',
"thunderhawk blue dry", "Thunderhawk blue dry", 'col/thunderhawk-blue-dry.png',
"thunderhawk blue", "Thunderhawk blue", 'col/thunderhawk-blue.png',
"troll slayer orange", "Troll slayer orange", 'col/troll-slayer-orange.png',
"tuskgor fur", "Tuskgor fur", 'col/tuskgor-fur.png',
"typhus corrosion", "Typhus corrosion", 'col/typhus-corrosion.png',
"tyrant skull", "Tyrant skull", 'col/tyrant-skull.png',
];
shieldData["~col-u-v~"] = [ "Colors starting with U and V",
"ulthuan grey", "Ulthuan grey", 'col/ulthuan-grey.png',
"underhive ash", "Underhive ash", 'col/underhive-ash.png',
"ungor flesh", "Ungor flesh", 'col/ungor-flesh.png',
"ushabti bone", "Ushabti bone", 'col/ushabti-bone.png',
"verminlord hide", "Verminlord hide", 'col/verminlord-hide.png',
];
shieldData["~col-w~"] = [ "Colors starting with W",
"waaagh flesh", "Waaagh flesh", 'col/waaagh-flesh.png',
"warboss green", "Warboss green", 'col/warboss-green.png',
"warpfiend grey", "Warpfiend grey", 'col/warpfiend-grey.png',
"warplock bronze", "Warplock bronze", 'col/warplock-bronze.png',
"warpstone glow", "Warpstone glow", 'col/warpstone-glow.png',
"waystone green", "Waystone green", 'col/waystone-green.png',
"waywatcher green", "Waywatcher green", 'col/waywatcher-green.png',
"wazdakka red", "Wazdakka red", 'col/wazdakka-red.png',
"white scar", "White scar", 'col/white-scar.png',
"wild rider red", "Wild rider red", 'col/wild-rider-red.png',
"wrack white", "Wrack white", 'col/wrack-white.png',
];
shieldData["~col-x-z~"] = [ "Colors starting with X, Y & Z",
"xereus purple", "Xereus purple", 'col/xereus-purple.png',
"xv 88", "Xv 88", 'col/xv-88.png',
"yriel yellow", "Yriel yellow", 'col/yriel-yellow.png',
"zamesi desert", "Zamesi desert", 'col/zamesi-desert.png',
"zandri dust", "Zandri dust", 'col/zandri-dust.png',
];

shieldData["~sym-a~"] = [ "symbols starting with A",
"adeptus arbites symbol", "adeptus arbites symbol", 'sym/adeptus-arbites-symbol.' ,
"adeptus astartes symbol", "adeptus astartes symbol", 'sym/adeptus-astartes-symbol.' ,
"adeptus astra telepathica symbol", "adeptus astra telepathica symbol", 'sym/adeptus-astra-telepathica-symbol.' ,
"adeptus astronomica symbol", "adeptus astronomica symbol", 'sym/adeptus-astronomica-symbol.' ,
"adeptus custodes symbol", "adeptus custodes symbol", 'sym/adeptus-custodes-symbol.' ,
"adeptus mechanicus symbol", "adeptus mechanicus symbol", 'sym/adeptus-mechanicus-symbol.' ,
"adeptus ministorum symbol", "adeptus ministorum symbol", 'sym/adeptus-ministorum-symbol.' ,
"adeptus terra symbol", "adeptus terra symbol", 'sym/adeptus-terra-symbol.' ,
"administratum symbol", "administratum symbol", 'sym/administratum-symbol.' ,
"alaitoc symbol", "alaitoc symbol", 'sym/alaitoc-symbol.' ,
"alpha legion symbol", "alpha legion symbol", 'sym/alpha-legion-symbol.' ,
"angels of defiance symbol", "angels of defiance symbol", 'sym/angels-of-defiance-symbol.' ,
"angels of iron symbol", "angels of iron symbol", 'sym/angels-of-iron-symbol.' ,
"angels of redemption symbol", "angels of redemption symbol", 'sym/angels-of-redemption-symbol.' ,
"angels of retribution symbol", "angels of retribution symbol", 'sym/angels-of-retribution-symbol.' ,
"angels of vengance alternate symbol", "angels of vengance alternate symbol", 'sym/angels-of-vengance-alternate-symbol.' ,
"angels of vengance symbol", "angels of vengance symbol", 'sym/angels-of-vengance-symbol.' ,
"angels of vigilance symbol", "angels of vigilance symbol", 'sym/angels-of-vigilance-symbol.' ,
"angels penitent symbol", "angels penitent symbol", 'sym/angels-penitent-symbol.' ,
"apothecarium alternate symbol", "apothecarium alternate symbol", 'sym/apothecarium-alternate-symbol.' ,
"apothecarium symbol", "apothecarium symbol", 'sym/apothecarium-symbol.' ,
"assassinorum symbol", "assassinorum symbol", 'sym/assassinorum-symbol.' ,
"assult symbol", "assult symbol", 'sym/assult-symbol.' ,
"astra militarum symbol", "astra militarum symbol", 'sym/astra-militarum-symbol.' ,
"astral claws symbol", "astral claws symbol", 'sym/astral-claws-symbol.' ,
"auxilia myrmidon symbol", "auxilia myrmidon symbol", 'sym/auxilia-myrmidon-symbol.' ,
"avatater of khaine symbol", "avatater of khaine symbol", 'sym/avatater-of-khaine-symbol.' ,
"avengers symbol", "avengers symbol", 'sym/avengers-symbol.' ,
"avenging sons symbol", "avenging sons symbol", 'sym/avenging-sons-symbol.' ,
    ];
shieldData["~sym-b~"] = [ "symbols starting with B",
"biel tan symbol", "biel tan symbol", 'sym/biel-tan-symbol.' ,
"black legion symbol", "black legion symbol", 'sym/black-legion-symbol.' ,
"black templars symbol", "black templars symbol", 'sym/black-templars-symbol.' ,
"blackshields symbol", "blackshields symbol", 'sym/blackshields-symbol.' ,
"bladed cog symbol", "bladed cog symbol", 'sym/bladed-cog-symbol.' ,
"blades of vengeance symbol", "blades of vengeance symbol", 'sym/blades-of-vengeance-symbol.' ,
"blood angels symbol", "blood angels symbol", 'sym/blood-angels-symbol.' ,
"blood drinkers symbol", "blood drinkers symbol", 'sym/blood-drinkers-symbol.' ,
"blood ravens symbol", "blood ravens symbol", 'sym/blood-ravens-symbol.' ,
"blood swords symbol", "blood swords symbol", 'sym/blood-swords-symbol.' ,
"bolter mkv alternate symbol", "bolter mkv alternate symbol", 'sym/bolter-mkv-alternate-symbol.' ,
"bolter mkv symbol", "bolter mkv symbol", 'sym/bolter-mkv-symbol.' ,
    ];
shieldData["~sym-c~"] = [ "symbols starting with C",
"carcharodons symbol", "carcharodons symbol", 'sym/carcharodons-symbol.' ,
"celestial lions symbol", "celestial lions symbol", 'sym/celestial-lions-symbol.' ,
"centurio ordinatus symbol", "centurio ordinatus symbol", 'sym/centurio-ordinatus-symbol.' ,
"chaos star symbol", "chaos star symbol", 'sym/chaos-star-symbol.' ,
"chaplain symbol", "chaplain symbol", 'sym/chaplain-symbol.' ,
"charnel guard symbol", "charnel guard symbol", 'sym/charnel-guard-symbol.' ,
"collegia titanica symbol", "collegia titanica symbol", 'sym/collegia-titanica-symbol.' ,
"consecrators symbol", "consecrators symbol", 'sym/consecrators-symbol.' ,
"crimson talons symbol", "crimson talons symbol", 'sym/crimson-talons-symbol.' ,
"crux terminatus symbol", "crux terminatus symbol", 'sym/crux-terminatus-symbol.' ,
"cult mechanicus symbol", "cult mechanicus symbol", 'sym/cult-mechanicus-symbol.' ,
    ];
shieldData["~sym-d~"] = [ "symbols starting with D",
"dark angels symbol", "dark angels symbol", 'sym/dark-angels-symbol.' ,
"dark eldar symbol", "dark eldar symbol", 'sym/dark-eldar-symbol.' ,
"death eagles symbol", "death eagles symbol", 'sym/death-eagles-symbol.' ,
"death guard pre heresy symbol", "death guard pre heresy symbol", 'sym/death-guard-pre-heresy-symbol.' ,
"death guard symbol", "death guard symbol", 'sym/death-guard-symbol.' ,
"death spectres symbol", "death spectres symbol", 'sym/death-spectres-symbol.' ,
"deathwatch symbol", "deathwatch symbol", 'sym/deathwatch-symbol.' ,
"deathwing symbol", "deathwing symbol", 'sym/deathwing-symbol.' ,
"destroyers symbol", "destroyers symbol", 'sym/destroyers-symbol.' ,
"devestator symbol", "devestator symbol", 'sym/devestator-symbol.' ,
"disciples of caliban symbol", "disciples of caliban symbol", 'sym/disciples-of-caliban-symbol.' ,
    ];
shieldData["~sym-e~"] = [ "symbols starting with E",
"elites symbol", "elites symbol", 'sym/elites-symbol.' ,
"emperors children symbol", "emperors children symbol", 'sym/emperors-children-symbol.' ,
"emperors spears symbol", "emperors spears symbol", 'sym/emperors-spears-symbol.' ,
"evil sunz symbol", "evil sunz symbol", 'sym/evil-sunz-symbol.' ,
"executioners symbol", "executioners symbol", 'sym/executioners-symbol.' ,
"exorcists symbol", "exorcists symbol", 'sym/exorcists-symbol.' ,
    ];
shieldData["~sym-f-g-h~"] = [ "symbols starting with F, G & H",
"fallen symbol", "fallen symbol", 'sym/fallen-symbol.' ,
"fire hawks symbol", "fire hawks symbol", 'sym/fire-hawks-symbol.' ,
"flesh tearers symbol", "flesh tearers symbol", 'sym/flesh-tearers-symbol.' ,
"grey knights symbol", "grey knights symbol", 'sym/grey-knights-symbol.' ,
"guardians of the covenant symbol", "guardians of the covenant symbol", 'sym/guardians-of-the-covenant-symbol.' ,
"heavy support symbol", "heavy support symbol", 'sym/heavy-support-symbol.' ,
"high lords of terra symbol", "high lords of terra symbol", 'sym/high-lords-of-terra-symbol.' ,
"hivecult symbol", "hivecult symbol", 'sym/hivecult-symbol.' ,
    ];
shieldData["~sym-i~"] = [ "symbols starting with I",
"imperial aquila symbol", "imperial aquila symbol", 'sym/imperial-aquila-symbol.' ,
"imperial fists symbol", "imperial fists symbol", 'sym/imperial-fists-symbol.' ,
"imperial knights symbol", "imperial knights symbol", 'sym/imperial-knights-symbol.' ,
"imperial lasgun symbol", "imperial lasgun symbol", 'sym/imperial-lasgun-symbol.' ,
"imperial navy symbol", "imperial navy symbol", 'sym/imperial-navy-symbol.' ,
"inqusition alternate symbol", "inqusition alternate symbol", 'sym/inqusition-alternate-symbol.' ,
"inqusition symbol", "inqusition symbol", 'sym/inqusition-symbol.' ,
"invictors symbol", "invictors symbol", 'sym/invictors-symbol.' ,
"iron hands symbol", "iron hands symbol", 'sym/iron-hands-symbol.' ,
"iron warriors symbol", "iron warriors symbol", 'sym/iron-warriors-symbol.' ,
"ironjawz symbol", "ironjawz symbol", 'sym/ironjawz-symbol.' ,
    ];
shieldData["~sym-k-l-m~"] = [ "symbols starting with K, L & M",
"khorne symbol symbol", "khorne symbol symbol", 'sym/khorne-symbol-symbol.' ,
"kill team symbol", "kill team symbol", 'sym/kill-team-symbol.' ,
"knight lords symbol", "knight lords symbol", 'sym/knight-lords-symbol.' ,
"lamenters symbol", "lamenters symbol", 'sym/lamenters-symbol.' ,
"legio cybernetica symbol", "legio cybernetica symbol", 'sym/legio-cybernetica-symbol.' ,
"librarian codicier symbol", "librarian codicier symbol", 'sym/librarian-codicier-symbol.' ,
"librarian epistolary symbol", "librarian epistolary symbol", 'sym/librarian-epistolary-symbol.' ,
"librarian lexicanum symbol", "librarian lexicanum symbol", 'sym/librarian-lexicanum-symbol.' ,
"librarius alternate symbol", "librarius alternate symbol", 'sym/librarius-alternate-symbol.' ,
"librarius symbol", "librarius symbol", 'sym/librarius-symbol.' ,
"luna wolves symbol", "luna wolves symbol", 'sym/luna-wolves-symbol.' ,
"lyanden symbol", "lyanden symbol", 'sym/lyanden-symbol.' ,
"minotaurs symbol", "minotaurs symbol", 'sym/minotaurs-symbol.' ,
"mymeara symbol", "mymeara symbol", 'sym/mymeara-symbol.' ,
    ];
shieldData["~sym-n-o-p~"] = [ "symbols starting with N, O & P",
"navis nobilite symbol", "navis nobilite symbol", 'sym/navis-nobilite-symbol.' ,
"necrons symbol", "necrons symbol", 'sym/necrons-symbol.' ,
"nova marines symbol", "nova marines symbol", 'sym/nova-marines-symbol.' ,
"nurgle icon symbol", "nurgle icon symbol", 'sym/nurgle-icon-symbol.' ,
"order of our martyred lady symbol", "order of our martyred lady symbol", 'sym/order-of-our-martyred-lady-symbol.' ,
"order of the bloody rose symbol", "order of the bloody rose symbol", 'sym/order-of-the-bloody-rose-symbol.' ,
"order of the valorous heart symbol", "order of the valorous heart symbol", 'sym/order-of-the-valorous-heart-symbol.' ,
"ordo malleus symbol", "ordo malleus symbol", 'sym/ordo-malleus-symbol.' ,
"ordo reductor symbol", "ordo reductor symbol", 'sym/ordo-reductor-symbol.' ,
"orks symbol", "orks symbol", 'sym/orks-symbol.' ,
"pauper princes symbol", "pauper princes symbol", 'sym/pauper-princes-symbol.' ,
"pre heresy dark angels symbol", "pre heresy dark angels symbol", 'sym/pre-heresy-dark-angels-symbol.' ,
"pre heresy iron warriors symbol", "pre heresy iron warriors symbol", 'sym/pre-heresy-iron-warriors-symbol.' ,
    ];
shieldData["~sym-r-s~"] = [ "symbols starting with R & S",
"raptor imperialis symbol", "raptor imperialis symbol", 'sym/raptor-imperialis-symbol.' ,
"raptors symbol", "raptors symbol", 'sym/raptors-symbol.' ,
"raven guard symbol", "raven guard symbol", 'sym/raven-guard-symbol.' ,
"ravenwing symbol", "ravenwing symbol", 'sym/ravenwing-symbol.' ,
"reclusiam symbol", "reclusiam symbol", 'sym/reclusiam-symbol.' ,
"rogue trader symbol", "rogue trader symbol", 'sym/rogue-trader-symbol.' ,
"saim hann symbol", "saim hann symbol", 'sym/saim-hann-symbol.' ,
"salamanders symbol", "salamanders symbol", 'sym/salamanders-symbol.' ,
"silver skulls symbol", "silver skulls symbol", 'sym/silver-skulls-symbol.' ,
"silver templars symbol", "silver templars symbol", 'sym/silver-templars-symbol.' ,
"sisters of battle symbol", "sisters of battle symbol", 'sym/sisters-of-battle-symbol.' ,
"skitarii symbol", "skitarii symbol", 'sym/skitarii-symbol.' ,
"skull laurals symbol", "skull laurals symbol", 'sym/skull-laurals-symbol.' ,
"skull symbol", "skull symbol", 'sym/skull-symbol.' ,
"slaanesh symbol", "slaanesh symbol", 'sym/slaanesh-symbol.' ,
"solar auxilia symbol", "solar auxilia symbol", 'sym/solar-auxilia-symbol.' ,
"sons of the phoenix symbol", "sons of the phoenix symbol", 'sym/sons-of-the-phoenix-symbol.' ,
"space wolfs symbol", "space wolfs symbol", 'sym/space-wolfs-symbol.' ,
"star of chaos symbol", "star of chaos symbol", 'sym/star-of-chaos-symbol.' ,
"star phantoms symbol", "star phantoms symbol", 'sym/star-phantoms-symbol.' ,
"steel legion symbol", "steel legion symbol", 'sym/steel-legion-symbol.' ,
"sword 03 symbol", "sword 03 symbol", 'sym/sword-03-symbol.' ,
"sword alternate symbol", "sword alternate symbol", 'sym/sword-alternate-symbol.' ,
"sword symbol", "sword symbol", 'sym/sword-symbol.' ,
    ];
shieldData["~sym-t-z~"] = [ "symbols starting with T, U, V, W X & Y",
"tactical alternate symbol", "tactical alternate symbol", 'sym/tactical-alternate-symbol.' ,
"tactical symbol", "tactical symbol", 'sym/tactical-symbol.' ,
"tanith symbol", "tanith symbol", 'sym/tanith-symbol.' ,
"tau symbol", "tau symbol", 'sym/tau-symbol.' ,
"temple callidus symbol", "temple callidus symbol", 'sym/temple-callidus-symbol.' ,
"temple eversor symbol", "temple eversor symbol", 'sym/temple-eversor-symbol.' ,
"third covenant symbol", "third covenant symbol", 'sym/third-covenant-symbol.' ,
"thousand sons preheresy symbol", "thousand sons preheresy symbol", 'sym/thousand-sons-preheresy-symbol.' ,
"thousand sons symbol", "thousand sons symbol", 'sym/thousand-sons-symbol.' ,
"twisted helix symbol", "twisted helix symbol", 'sym/twisted-helix-symbol.' ,
"tyranid symbol", "tyranid symbol", 'sym/tyranid-symbol.' ,
"tzeentch symbol", "tzeentch symbol", 'sym/tzeentch-symbol.' ,
"ulthwe symbol", "ulthwe symbol", 'sym/ulthwe-symbol.' ,
"ultramarines symbol", "ultramarines symbol", 'sym/ultramarines-symbol.' ,
"vindicare temple symbol", "vindicare temple symbol", 'sym/vindicare-temple-symbol.' ,
"war hounds symbol", "war hounds symbol", 'sym/war-hounds-symbol.' ,
"white scars symbol", "white scars symbol", 'sym/white-scars-symbol.' ,
"word bearers pre heresy symbol", "word bearers pre heresy symbol", 'sym/word-bearers-pre-heresy-symbol.' ,
"word bearers symbol", "word bearers symbol", 'sym/word-bearers-symbol.' ,
"world eaters symbol", "world eaters symbol", 'sym/world-eaters-symbol.' ,
"xenos symbol", "xenos symbol", 'sym/xenos-symbol.' ,
"ynnead symbol", "ynnead symbol", 'sym/ynnead-symbol.' ,
];

shieldData["~add-symbol~"] = [ "Do you want to add a Faction Symbol?",
      '~numcharges~ ~symbol~ ~colour~', 'Yes', 'yes.png',
      '', 'No', 'no.png',
      ];

shieldData["~symbol~"] = [ "Choose the starting letter",
    "~sym-a~", "Start with A", 'a2z/a.png',
    "~sym-b~", "Start with B", 'a2z/b.png',
    "~sym-c~", "Start with C", 'a2z/c.png',
    "~sym-d~", "Start with D", 'a2z/d.png',
    "~sym-e~", "Start with E", 'a2z/e.png',
    "~sym-f-g-h~", "Start with F, G & H", 'a2z/fgh.png',
    "~sym-i~", "Start with I", 'a2z/i.png',
    "~sym-k-l-m~", "Start with K, L & M", 'a2z/klm.png',
    "~sym-n-o-p~", "Start with N, O & P", 'a2z/nop.png',
    "~sym-r-s~", "Start with R & S", 'a2z/rs.png',
    "~sym-t-z~", "Start with T to Z", 'a2z/t-y.png',
    ];

shieldData["~bordure~"] = [ "Do you want the pauldron rim a different colour?",
      'bordure ~colour~', 'Yes', 'yes.png',
      '', 'No', 'no.png',
      ];


shieldData["~and~"] = [ "Now choose another, different colour",
      'and', 'Click to continue', 'next.png',
      ];

shieldData["~numcharges~"] = [ "How many copies of the symbol do you want to add?",
      'the', "One", 'one.png',
      'two', "Two", 'two.png',
      'three', "Three", 'three.png',
      'four', "Four", 'four.png',
      'five', "Five", 'five.png',
      'six', "Six", 'six.png',
      ];


var urlArgs = '&shape=pauldron&size=' + size;

var shadow = '';

var bStack;
var qStack;
var sStack;

function init_build() {
    blazonElement = document.getElementById('blazon');
    shadow="~start-here~";
    blazonElement.value="";
    questions = document.getElementById("questions");
    questions.replaceChild( nextQuestion ( shadow ), questions.firstChild );
//  document.getElementById('caption').firstChild.nodeValue = "Go back one step";
    bStack = [];
    qStack = [];
    sStack = [];
    requestSVG('/include/drawshield.php?' + urlArgs +
        '&blazon=Argent%20the%20word%20pauldron%20sable','shieldimg');
}

function finished() {
    if ( shadow.indexOf("~") != -1 ) {
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
    shadow = sStack.pop();
    var questions = document.getElementById('questions');
    questions.replaceChild(qStack.pop(),questions.firstChild);
  }
  return false;
}

// function update() {
//   blazonElement = document.getElementById('blazon');
//   requestSVG('/include/drawshield.php?' + urlArgs + '&blazon=' + encodeURIComponent(blazonElement.value),'shieldimg');
// }

function do_reset() {
  document.getElementById('blazon').disabled='disabled';
  init_build();
  return false;
}

function do_replace(answer) {
  blazonElement = document.getElementById('blazon');
  if ( !blazonElement.hasAttribute('disabled') ) return;
  bStack.push(blazonElement.value);
  sStack.push(shadow);
  shieldImg = document.getElementById('shieldimg');
  questions = document.getElementById('questions');
  qStack.push( questions.firstChild );
  //if ( blazonElement.value.indexOf("~") == -1 ) {
    blazonElement.value += ' ' + answer.replace(/ *~.*?~ */g,'');
 // } else {
    shadow = shadow.replace( /~.*?~/, answer );
  //}
  questions.replaceChild(nextQuestion ( shadow ), questions.firstChild);
}

function nextQuestion( blazon ) {

  target = blazon.match(/~.*?~/);
  if ( target == "~update~") {
      blazon = blazon.replace( /~update~/, '' );
      requestSVG('/include/drawshield.php?' + urlArgs + '&blazon=' + encodeURIComponent(blazonElement.value),'shieldimg');
      target = blazon.match(/~.*?~/);
  }
  if ( target == null ) {
      finished();
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
