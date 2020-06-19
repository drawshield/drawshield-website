var version = "0.1a";
var size=280;

var shieldData = {};
shieldData["~start-here~"] = [ "Answer the following Questions by clicking the boxes below.",
"~background~ ~update~ ~add-ord~ ~update~ ~bordure~ ~update~ ~add-symbol~ ~update~ ~add-motto~ ~update~", "Begin", 'yes.png',
    ];
shieldData["~background~"] = [ "Is the background single colour or split into two?",
      '~colour~', "A single colour", 'div/plain.png',
      '~divided~ ~colour~ ~and~ ~colour~', "Divided between two colours", 'div/division.png'
      ];
shieldData["~ordinary~"] = [ "Choose a shape (ordinary) to place on your pauldron",
"3 chevrons interlaced", "3 chevrons", 'ord/3-chevrons.png',
"bend sinister", "bend sinister", 'ord/bend-sin.png',
"bend", "bend", 'ord/bend.png',
"chevron", "chevron", 'ord/chevron.png',
"cross formy", "cross formy", 'ord/cross-formy.png',
"fillet cross", "fillet cross", 'ord/fillet-cross.png',
"gorge", "gorge", 'ord/gorge.png',
"pale", "pale", 'ord/pale.png',
"pile embowed", "pile embowed", 'ord/pile-embowed.png',
    ];
shieldData["~divided~"] = [ "Choose the style of the division into two colours",
"bendy sinister", "bendy sinister", 'div/bendy-sin.png',
"bendy", "bendy", 'div/bendy.png',
"chevronny", "chevronny", 'div/chevronny.png',
"gyronny", "gyronny", 'div/gyronny.png',
"per bend", "per bend", 'div/per-bend.png',
"per bend sinister", "per bend sinister", 'div/per-bend-sin.png',
"per chevron", "per chevron", 'div/per-chevron.png',
"per chevron-inv", "per chevron-inv", 'div/per-chevron-inv.png',
"per fess", "per fess", 'div/per-fess.png',
"per pale", "per pale", 'div/per-pale.png',
"per pile", "per pile", 'div/per-pile.png',
"per saltire", "per saltire", 'div/per-saltire.png',
"pily", "pily", 'div/pily.png',
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
"blood for the blood god", "Blood for the-blood god", 'col/blood-for-the-blood-god.png',
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
"adeptus arbites symbol", "adeptus arbites symbol", '/catalog/charges/warhammer/adeptus-arbites-symbol.png' ,
"adeptus astartes symbol", "adeptus astartes symbol", '/catalog/charges/warhammer/adeptus-astartes-symbol.png' ,
"adeptus astra telepathica symbol", "adeptus astra telepathica symbol", '/catalog/charges/warhammer/adeptus-astra-telepathica-symbol.png' ,
"adeptus astronomica symbol", "adeptus astronomica symbol", '/catalog/charges/warhammer/adeptus-astronomica-symbol.png' ,
"adeptus custodes symbol", "adeptus custodes symbol", '/catalog/charges/warhammer/adeptus-custodes-symbol.png' ,
"adeptus mechanicus symbol", "adeptus mechanicus symbol", '/catalog/charges/warhammer/adeptus-mechanicus-symbol.png' ,
"adeptus ministorum symbol", "adeptus ministorum symbol", '/catalog/charges/warhammer/adeptus-ministorum-symbol.png' ,
"adeptus terra symbol", "adeptus terra symbol", '/catalog/charges/warhammer/adeptus-terra-symbol.png' ,
"administratum symbol", "administratum symbol", '/catalog/charges/warhammer/administratum-symbol.png' ,
    "agripinaa symbol", "agripinaa symbol", '/catalog/charges/warhammer/agripinaa-symbol.png',
"alaitoc symbol", "alaitoc symbol", '/catalog/charges/warhammer/alaitoc-symbol.png' ,
"alpha legion symbol", "alpha legion symbol", '/catalog/charges/warhammer/alpha-legion-symbol.png' ,
"angels of defiance symbol", "angels of defiance symbol", '/catalog/charges/warhammer/angels-of-defiance-symbol.png' ,
"angels of iron symbol", "angels of iron symbol", '/catalog/charges/warhammer/angels-of-iron-symbol.png' ,
"angels of redemption symbol", "angels of redemption symbol", '/catalog/charges/warhammer/angels-of-redemption-symbol.png' ,
"angels of retribution symbol", "angels of retribution symbol", '/catalog/charges/warhammer/angels-of-retribution-symbol.png' ,
"angels of vengance alternate symbol", "angels of vengance alternate symbol", '/catalog/charges/warhammer/angels-of-vengance-alternate-symbol.png' ,
"angels of vengance symbol", "angels of vengance symbol", '/catalog/charges/warhammer/angels-of-vengance-symbol.png' ,
"angels of vigilance symbol", "angels of vigilance symbol", '/catalog/charges/warhammer/angels-of-vigilance-symbol.png' ,
"angels penitent symbol", "angels penitent symbol", '/catalog/charges/warhammer/angels-penitent-symbol.png' ,
"apothecarium alternate symbol", "apothecarium alternate symbol", '/catalog/charges/warhammer/apothecarium-alternate-symbol.png' ,
"apothecarium symbol", "apothecarium symbol", '/catalog/charges/warhammer/apothecarium-symbol.png' ,
"assassinorum symbol", "assassinorum symbol", '/catalog/charges/warhammer/assassinorum-symbol.png' ,
"assult symbol", "assult symbol", '/catalog/charges/warhammer/assult-symbol.png' ,
"astra militarum symbol", "astra militarum symbol", '/catalog/charges/warhammer/astra-militarum-symbol.png' ,
"astral claws symbol", "astral claws symbol", '/catalog/charges/warhammer/astral-claws-symbol.png' ,
"auxilia myrmidon symbol", "auxilia myrmidon symbol", '/catalog/charges/warhammer/auxilia-myrmidon-symbol.png' ,
"avatater of khaine symbol", "avatater of khaine symbol", '/catalog/charges/warhammer/avatater-of-khaine-symbol.png' ,
"avengers symbol", "avengers symbol", '/catalog/charges/warhammer/avengers-symbol.png' ,
"avenging sons symbol", "avenging sons symbol", '/catalog/charges/warhammer/avenging-sons-symbol.png' ,
    ];
shieldData["~sym-b~"] = [ "symbols starting with B",
"biel tan symbol", "biel tan symbol", '/catalog/charges/warhammer/biel-tan-symbol.png' ,
"black legion symbol", "black legion symbol", '/catalog/charges/warhammer/black-legion-symbol.png' ,
"black templars symbol", "black templars symbol", '/catalog/charges/warhammer/black-templars-symbol.png' ,
"blackshields symbol", "blackshields symbol", '/catalog/charges/warhammer/blackshields-symbol.png' ,
"bladed cog symbol", "bladed cog symbol", '/catalog/charges/warhammer/bladed-cog-symbol.png' ,
"blades of vengeance symbol", "blades of vengeance symbol", '/catalog/charges/warhammer/blades-of-vengeance-symbol.png' ,
"blood angels symbol", "blood angels symbol", '/catalog/charges/warhammer/blood-angels-symbol.png' ,
"blood drinkers symbol", "blood drinkers symbol", '/catalog/charges/warhammer/blood-drinkers-symbol.png' ,
"blood ravens symbol", "blood ravens symbol", '/catalog/charges/warhammer/blood-ravens-symbol.png' ,
"blood swords symbol", "blood swords symbol", '/catalog/charges/warhammer/blood-swords-symbol.png' ,
"bolter mkv alternate symbol", "bolter mkv alternate symbol", '/catalog/charges/warhammer/bolter-mkv-alternate-symbol.png' ,
"bolter mkv symbol", "bolter mkv symbol", '/catalog/charges/warhammer/bolter-mkv-symbol.png' ,
    ];
shieldData["~sym-c~"] = [ "symbols starting with C",
"carcharodons symbol", "carcharodons symbol", '/catalog/charges/warhammer/carcharodons-symbol.png' ,
"celestial lions symbol", "celestial lions symbol", '/catalog/charges/warhammer/celestial-lions-symbol.png' ,
"centurio ordinatus symbol", "centurio ordinatus symbol", '/catalog/charges/warhammer/centurio-ordinatus-symbol.png' ,
    "centurions honour symbol", "centurions honour symbol", '/catalog/charges/warhammer/centurion.honour-symbol.png',
"chaos star symbol", "chaos star symbol", '/catalog/charges/warhammer/chaos-star-symbol.png' ,
"chaplain symbol", "chaplain symbol", '/catalog/charges/warhammer/chaplain-symbol.png' ,
"charnel guard symbol", "charnel guard symbol", '/catalog/charges/warhammer/charnel-guard-symbol.png' ,
"collegia titanica symbol", "collegia titanica symbol", '/catalog/charges/warhammer/collegia-titanica-symbol.png' ,
"consecrators symbol", "consecrators symbol", '/catalog/charges/warhammer/consecrators-symbol.png' ,
"crimson talons symbol", "crimson talons symbol", '/catalog/charges/warhammer/crimson-talons-symbol.png' ,
"crux terminatus symbol", "crux terminatus symbol", '/catalog/charges/warhammer/crux-terminatus-symbol.png' ,
"cult mechanicus symbol", "cult mechanicus symbol", '/catalog/charges/warhammer/cult-mechanicus-symbol.png' ,
    ];
shieldData["~sym-d~"] = [ "symbols starting with D",
"dark angels symbol", "dark angels symbol", '/catalog/charges/warhammer/dark-angels-symbol.png' ,
"dark eldar symbol", "dark eldar symbol", '/catalog/charges/warhammer/dark-eldar-symbol.png' ,
"death eagles symbol", "death eagles symbol", '/catalog/charges/warhammer/death-eagles-symbol.png' ,
"death guard pre heresy symbol", "death guard pre heresy symbol", '/catalog/charges/warhammer/death-guard-pre-heresy-symbol.png' ,
"death guard symbol", "death guard symbol", '/catalog/charges/warhammer/death-guard-symbol.png' ,
"death spectres symbol", "death spectres symbol", '/catalog/charges/warhammer/death-spectres-symbol.png' ,
"deathwatch symbol", "deathwatch symbol", '/catalog/charges/warhammer/deathwatch-symbol.png' ,
"deathwing symbol", "deathwing symbol", '/catalog/charges/warhammer/deathwing-symbol.png' ,
"destroyers symbol", "destroyers symbol", '/catalog/charges/warhammer/destroyers-symbol.png' ,
"devestator symbol", "devestator symbol", '/catalog/charges/warhammer/devestator-symbol.png' ,
    "dire avengers symbol", "dire avengers symbol", '/catalog/charges/warhammer/dire-avengers-symbol.png',
"disciples of caliban symbol", "disciples of caliban symbol", '/catalog/charges/warhammer/disciples-of-caliban-symbol.png' ,
    ];
shieldData["~sym-e~"] = [ "symbols starting with E",
"elites symbol", "elites symbol", '/catalog/charges/warhammer/elites-symbol.png' ,
"emperors children symbol", "emperors children symbol", '/catalog/charges/warhammer/emperors-children-symbol.png' ,
"emperors spears symbol", "emperors spears symbol", '/catalog/charges/warhammer/emperors-spears-symbol.png' ,
"evil sunz symbol", "evil sunz symbol", '/catalog/charges/warhammer/evil-sunz-symbol.png' ,
"executioners symbol", "executioners symbol", '/catalog/charges/warhammer/executioners-symbol.png' ,
    "exodites symbol", "exodites symbol", '/catalog/charges/warhammer/exodites-symbol.png',
"exorcists symbol", "exorcists symbol", '/catalog/charges/warhammer/exorcists-symbol.png' ,
    ];
shieldData["~sym-f-g-h~"] = [ "symbols starting with F, G & H",
"fallen symbol", "fallen symbol", '/catalog/charges/warhammer/fallen-symbol.png' ,
"fire hawks symbol", "fire hawks symbol", '/catalog/charges/warhammer/fire-hawks-symbol.png' ,
    "fire dragons symbol", "fire dragons symbol", '/catalog/charges/warhammer/fire-dragons-symbol.png',
"flesh tearers symbol", "flesh tearers symbol", '/catalog/charges/warhammer/flesh-tearers-symbol.png' ,
    "four armed emperor symbol", "four armed emperor symbol", '/catalog/charges/warhammer/four-armed-emperor-symbol.png',
    "graia symbol", "graia symbol", '/catalog/charges/warhammer/graia-symbol.png',
"grey knights symbol", "grey knights symbol", '/catalog/charges/warhammer/grey-knights-symbol.png' ,
    "guardians symbol", "guardians symbol", '/catalog/charges/warhammer/guardians-symbol.png',
"guardians of the covenant symbol", "guardians of the covenant symbol", '/catalog/charges/warhammer/guardians-of-the-covenant-symbol.png' ,
"heavy support symbol", "heavy support symbol", '/catalog/charges/warhammer/heavy-support-symbol.png' ,
"high lords of terra symbol", "high lords of terra symbol", '/catalog/charges/warhammer/high-lords-of-terra-symbol.png' ,
"hivecult symbol", "hivecult symbol", '/catalog/charges/warhammer/hivecult-symbol.png' ,
    "howling banshees symbol", "howling banshees symbol", '/catalog/charges/warhammer/howling-banshees-symbol.png',
    ];
shieldData["~sym-i~"] = [ "symbols starting with I",
"imperial aquila symbol", "imperial aquila symbol", '/catalog/charges/warhammer/imperial-aquila-symbol.png' ,
"imperial fists symbol", "imperial fists symbol", '/catalog/charges/warhammer/imperial-fists-symbol.png' ,
"imperial knights symbol", "imperial knights symbol", '/catalog/charges/warhammer/imperial-knights-symbol.png' ,
"imperial lasgun symbol", "imperial lasgun symbol", '/catalog/charges/warhammer/imperial-lasgun-symbol.png' ,
"imperial navy symbol", "imperial navy symbol", '/catalog/charges/warhammer/imperial-navy-symbol.png' ,
"inqusition alternate symbol", "inqusition alternate symbol", '/catalog/charges/warhammer/inqusition-alternate-symbol.png' ,
"inqusition symbol", "inqusition symbol", '/catalog/charges/warhammer/inqusition-symbol.png' ,
"invictors symbol", "invictors symbol", '/catalog/charges/warhammer/invictors-symbol.png' ,
"iron hands symbol", "iron hands symbol", '/catalog/charges/warhammer/iron-hands-symbol.png' ,
"iron warriors symbol", "iron warriors symbol", '/catalog/charges/warhammer/iron-warriors-symbol.png' ,
"ironjawz symbol", "ironjawz symbol", '/catalog/charges/warhammer/ironjawz-symbol.png' ,
    ];
shieldData["~sym-k-l-m~"] = [ "symbols starting with K, L & M",
"khorne symbol symbol", "khorne symbol symbol", '/catalog/charges/warhammer/khorne-symbol-symbol.png' ,
"kill team symbol", "kill team symbol", '/catalog/charges/warhammer/kill-team-symbol.png' ,
"knight lords symbol", "knight lords symbol", '/catalog/charges/warhammer/knight-lords-symbol.png' ,
    "knights of blood symbol", "knights of blood symbol", '/catalog/charges/warhammer/knights-of-blood-symbol.png',
"lamenters symbol", "lamenters symbol", '/catalog/charges/warhammer/lamenters-symbol.png' ,
"legio cybernetica symbol", "legio cybernetica symbol", '/catalog/charges/warhammer/legio-cybernetica-symbol.png' ,
"librarian codicier symbol", "librarian codicier symbol", '/catalog/charges/warhammer/librarian-codicier-symbol.png' ,
"librarian epistolary symbol", "librarian epistolary symbol", '/catalog/charges/warhammer/librarian-epistolary-symbol.png' ,
"librarian lexicanum symbol", "librarian lexicanum symbol", '/catalog/charges/warhammer/librarian-lexicanum-symbol.png' ,
"librarius alternate symbol", "librarius alternate symbol", '/catalog/charges/warhammer/librarius-alternate-symbol.png' ,
"librarius symbol", "librarius symbol", '/catalog/charges/warhammer/librarius-symbol.png' ,
"luna wolves symbol", "luna wolves symbol", '/catalog/charges/warhammer/luna-wolves-symbol.png' ,
    "lucius symbol", "lucius symbol", '/catalog/charges/warhammer/lucius-symbol.png',
"lyanden symbol", "lyanden symbol", '/catalog/charges/warhammer/lyanden-symbol.png' ,
    "metalica symbol", "metalica symbol", '/catalog/charges/warhammer/metalica-symbol.png',
"minotaurs symbol", "minotaurs symbol", '/catalog/charges/warhammer/minotaurs-symbol.png' ,
"mymeara symbol", "mymeara symbol", '/catalog/charges/warhammer/mymeara-symbol.png' ,
    ];
shieldData["~sym-n-o-p~"] = [ "symbols starting with N, O & P",
"navis nobilite symbol", "navis nobilite symbol", '/catalog/charges/warhammer/navis-nobilite-symbol.png' ,
"necrons symbol", "necrons symbol", '/catalog/charges/warhammer/necrons-symbol.png' ,
"nova marines symbol", "nova marines symbol", '/catalog/charges/warhammer/nova-marines-symbol.png' ,
"nurgle icon symbol", "nurgle icon symbol", '/catalog/charges/warhammer/nurgle-icon-symbol.png' ,
    "order of the argent shroud symbol", "order of the argent shroud symbol", '/catalog/charges/warhammer/order-of-the-argent-shroud-symbol.png',
    "order of the ebon chalice symbol", "order of the ebon chalice symbol", '/catalog/charges/warhammer/order-of-the-ebon-chalice-symbol.png',
"order of our martyred lady symbol", "order of our martyred lady symbol", '/catalog/charges/warhammer/order-of-our-martyred-lady-symbol.png' ,
"order of the bloody rose symbol", "order of the bloody rose symbol", '/catalog/charges/warhammer/order-of-the-bloody-rose-symbol.png' ,
"order of the valorous heart symbol", "order of the valorous heart symbol", '/catalog/charges/warhammer/order-of-the-valorous-heart-symbol.png' ,
"ordo malleus symbol", "ordo malleus symbol", '/catalog/charges/warhammer/ordo-malleus-symbol.png' ,
"ordo reductor symbol", "ordo reductor symbol", '/catalog/charges/warhammer/ordo-reductor-symbol.png' ,
"orks symbol", "orks symbol", '/catalog/charges/warhammer/orks-symbol.png' ,
"pauper princes symbol", "pauper princes symbol", '/catalog/charges/warhammer/pauper-princes-symbol.png' ,
"pre heresy dark angels symbol", "pre heresy dark angels symbol", '/catalog/charges/warhammer/pre-heresy-dark-angels-symbol.png' ,
    "pre heresy eyes of horus symbol", "pre heresy eyes of horus symbol", '/catalog/charges/warhammer/pre-heresy-eye-of-horus-symbol.png',
"pre heresy iron warriors symbol", "pre heresy iron warriors symbol", '/catalog/charges/warhammer/pre-heresy-iron-warriors-symbol.png' ,
    ];
shieldData["~sym-r-s~"] = [ "symbols starting with R & S",
"raptor imperialis symbol", "raptor imperialis symbol", '/catalog/charges/warhammer/raptor-imperialis-symbol.png' ,
"raptors symbol", "raptors symbol", '/catalog/charges/warhammer/raptors-symbol.png' ,
"raven guard symbol", "raven guard symbol", '/catalog/charges/warhammer/raven-guard-symbol.png' ,
"ravenwing symbol", "ravenwing symbol", '/catalog/charges/warhammer/ravenwing-symbol.png' ,
"reclusiam symbol", "reclusiam symbol", '/catalog/charges/warhammer/reclusiam-symbol.png' ,
    "red scorpions symbol", "red scorpions symbol", '/catalog/charges/warhammer/red-scorpions-symbol.png',
"rogue trader symbol", "rogue trader symbol", '/catalog/charges/warhammer/rogue-trader-symbol.png' ,
    "ryza symbol", "ryza symbol", '/catalog/charges/warhammer/ryza-symbol.png',
"saim hann symbol", "saim hann symbol", '/catalog/charges/warhammer/saim-hann-symbol.png' ,
"salamanders symbol", "salamanders symbol", '/catalog/charges/warhammer/salamanders-symbol.png' ,
"silver skulls symbol", "silver skulls symbol", '/catalog/charges/warhammer/silver-skulls-symbol.png' ,
"silver templars symbol", "silver templars symbol", '/catalog/charges/warhammer/silver-templars-symbol.png' ,
"sisters of battle symbol", "sisters of battle symbol", '/catalog/charges/warhammer/sisters-of-battle-symbol.png' ,
    "sisters of silence symbol", "sisters of silence symbol", '/catalog/charges/warhammer/sisters-of-silence-symbol.png',
"skitarii symbol", "skitarii symbol", '/catalog/charges/warhammer/skitarii-symbol.png' ,
"skull laurals symbol", "skull laurals symbol", '/catalog/charges/warhammer/skull-laurals-symbol.png' ,
"skull symbol", "skull symbol", '/catalog/charges/warhammer/skull-symbol.png' ,
"slaanesh symbol", "slaanesh symbol", '/catalog/charges/warhammer/slaanesh-symbol.png' ,
"solar auxilia symbol", "solar auxilia symbol", '/catalog/charges/warhammer/solar-auxilia-symbol.png' ,
    "sons of horus symbol", "sons of horus symbol", '/catalog/charges/warhammer/sons-of-horus-symbol.png',
"sons of the phoenix symbol", "sons of the phoenix symbol", '/catalog/charges/warhammer/sons-of-the-phoenix-symbol.png' ,
    "soul drinkers symbol", "soul drinkers symbol", '/catalog/charges/warhammer/soul-drinkers-symbol.png',
"space wolfs symbol", "space wolfs symbol", '/catalog/charges/warhammer/space-wolfs-symbol.png' ,
    "star dragons symbol", "star dragons symbol", '/catalog/charges/warhammer/star-dragons-symbol.png',
"star of chaos symbol", "star of chaos symbol", '/catalog/charges/warhammer/star-of-chaos-symbol.png' ,
"star phantoms symbol", "star phantoms symbol", '/catalog/charges/warhammer/star-phantoms-symbol.png' ,
"steel legion symbol", "steel legion symbol", '/catalog/charges/warhammer/steel-legion-symbol.png' ,
    "stygies viii symbol", "stygies viii symbol", '/catalog/charges/warhammer/stygies-viii-symbol.png',
"sword 03 symbol", "sword 03 symbol", '/catalog/charges/warhammer/sword-03-symbol.png' ,
"sword alternate symbol", "sword alternate symbol", '/catalog/charges/warhammer/sword-alternate-symbol.png' ,
"sword symbol", "sword symbol", '/catalog/charges/warhammer/sword-symbol.png' ,
    ];
shieldData["~sym-t-z~"] = [ "symbols starting with T, U, V, W X & Y",
"tactical alternate symbol", "tactical alternate symbol", '/catalog/charges/warhammer/tactical-alternate-symbol.png' ,
"tactical symbol", "tactical symbol", '/catalog/charges/warhammer/tactical-symbol.png' ,
"tanith symbol", "tanith symbol", '/catalog/charges/warhammer/tanith-symbol.png' ,
"tau symbol", "tau symbol", '/catalog/charges/warhammer/tau-symbol.png' ,
"temple callidus symbol", "temple callidus symbol", '/catalog/charges/warhammer/temple-callidus-symbol.png' ,
    "temple cullexus symbol", "temple cullexus symbol", '/catalog/charges/warhammer/temple-cullexus-symbol.png',
"temple eversor symbol", "temple eversor symbol", '/catalog/charges/warhammer/temple-eversor-symbol.png' ,
"third covenant symbol", "third covenant symbol", '/catalog/charges/warhammer/third-covenant-symbol.png' ,
"thousand sons preheresy symbol", "thousand sons preheresy symbol", '/catalog/charges/warhammer/thousand-sons-preheresy-symbol.png' ,
"thousand sons symbol", "thousand sons symbol", '/catalog/charges/warhammer/thousand-sons-symbol.png' ,
"twisted helix symbol", "twisted helix symbol", '/catalog/charges/warhammer/twisted-helix-symbol.png' ,
"tyranid symbol", "tyranid symbol", '/catalog/charges/warhammer/tyranid-symbol.png' ,
"tzeentch symbol", "tzeentch symbol", '/catalog/charges/warhammer/tzeentch-symbol.png' ,
"ulthwe symbol", "ulthwe symbol", '/catalog/charges/warhammer/ulthwe-symbol.png' ,
"ultramarines symbol", "ultramarines symbol", '/catalog/charges/warhammer/ultramarines-symbol.png' ,
"vindicare temple symbol", "vindicare temple symbol", '/catalog/charges/warhammer/vindicare-temple-symbol.png' ,
"war hounds symbol", "war hounds symbol", '/catalog/charges/warhammer/war-hounds-symbol.png' ,
"white scars symbol", "white scars symbol", '/catalog/charges/warhammer/white-scars-symbol.png' ,
"word bearers pre heresy symbol", "word bearers pre heresy symbol", '/catalog/charges/warhammer/word-bearers-pre-heresy-symbol.png' ,
"word bearers symbol", "word bearers symbol", '/catalog/charges/warhammer/word-bearers-symbol.png' ,
"world eaters symbol", "world eaters symbol", '/catalog/charges/warhammer/world-eaters-symbol.png' ,
"xenos symbol", "xenos symbol", '/catalog/charges/warhammer/xenos-symbol.png' ,
"ynnead symbol", "ynnead symbol", '/catalog/charges/warhammer/ynnead-symbol.png' ,
];

shieldData["~add-symbol~"] = [ "Do you want to add a Faction Symbol?",
      '~numcharges~ ~colour~', 'Yes', 'yes.png',
      '', 'No', 'no.png',
      ];

shieldData["~add-ord~"] = [ "Do you want to add a simple shape (ordinary)?",
      '~ordinary~ ~colour~', 'Yes', 'yes.png',
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

shieldData["~add-motto~"] = [ "Do you want to add a motto below the pauldron?",
      'motto ~string~', 'Yes', 'yes.png',
      '', 'No', 'no.png',
      ];


shieldData["~string~"] = [ "Enter some text and press the Submit button",
      '$', 'Your text', '',
      ];

shieldData["~and~"] = [ "Now choose another, different colour",
      'and', 'Click to continue', 'next.png',
      ];

shieldData["~numcharges~"] = [ "How many copies of the symbol do you want to add?",
      'the ~symbol~', "One", 'one.png',
      'two ~symbol~', "Two", 'two.png',
      'three ~symbol~ arranged 1,2', "Three", 'three.png',
      'four ~symbol~ arranged 2,2', "Four", 'four.png',
      'five ~symbol~ arranged 2,3', "Five", 'five.png',
      'six ~symbol~ arranged 3,3', "Six", 'six.png',
      ];


var urlArgs = '&shape=pauldron&size=' + size;

var shadow = '';

var bStack;
var qStack;
var sStack;

function init_build() {
    bStack = [];
    qStack = [];
    sStack = [];
    document.getElementById('blazon').value="";
    shadow="~start-here~";
    requestSVG('/include/drawshield.php?' + urlArgs +
        '&blazon=Argent%20the%20word%20pauldron%20sable','shieldimg');
    questions = document.getElementById("questions");
    questions.replaceChild( nextQuestion (), questions.firstChild );
}

function finished() {
    document.getElementById('blazon').removeAttribute('disabled');
    var questions = document.getElementById('questions');
    var para = document.createElement('p');
    var words = document.createTextNode('Congratulations! You have now completed your ' +
    'design! To make any more changes or chose different options ');
    para.appendChild(words);
    var link = document.createElement('a');
    link.setAttribute('href',"/create/index.html?" +
      'blazon=' + encodeURIComponent(document.getElementById('blazon').value
          + ' drawn using a pauldron shape'));
    words = document.createTextNode('click this link ');
    link.appendChild(words);
    para.appendChild(link);
    words = document.createTextNode('to transfer your blazon to the "Create" page" where you can add further items, print it or submit it to the gallery! You can download it as an image using the form below. Click the "Start Over" button if you want to create a new pauldron. ' +
    ' This page only shows a small subset of what DrawShield is capable of, but I hope it has helped you understand how blazons are constructed and given you a start on learning blazonry. ' +
      'Take a look at the items under the "Learn" menu to find ways to improve your skills and knowledge.');
    para.appendChild(words);
    questions.appendChild(para);
    document.getElementById("savePanel").setAttribute('style','display: block;');
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

function do_reset() {
  document.getElementById('blazon').disabled='disabled';
  document.getElementById("savePanel").setAttribute("style", "display: none;");
  init_build();
  return false;
}

function do_replace(answer) {
  var blazonElement = document.getElementById('blazon');
  if ( !blazonElement.hasAttribute('disabled') ) return;
  bStack.push(blazonElement.value);
  sStack.push(shadow);
  shieldImg = document.getElementById('shieldimg');
  questions = document.getElementById('questions');
  qStack.push( questions.firstChild );
  let target = shadow.match(/~.*?~/);
  if (target[0] == '~string~') answer = '"' + answer + '"';
  shadow = shadow.replace( /~.*?~/, answer );
  let newChild = nextQuestion ();
  if (newChild != null) // last question
    questions.replaceChild(newChild, questions.firstChild);
  else
      questions.removeChild(questions.firstChild);
}

function getString(id) {
    let string = document.getElementById(id).value;
    if (string == '') string = 'motto';
    do_replace(string);
}

function nextQuestion()  {

  var target = shadow.match(/~.*?~/);
  if (target == null) {
      finished();
      return;
  } else {
      target = target[0];
  }
  if ( target == "~update~") {
      var current = shadow.substring(0, shadow.indexOf('~') - 1);
      document.getElementById('blazon').value = current;
      shadow = shadow.replace(/~update~/, '');
      requestSVG('/include/drawshield.php?' + urlArgs +
          '&blazon=' + encodeURIComponent(current), 'shieldimg');
      target = shadow.match(/~.*?~/);
      if (target == null) {
          finished();
          return;
      } else {
          target = target[0];
      }
  }
  sData = shieldData[target];
  if (typeof (sData) == 'undefined') {
      console.log("Expansion " + target + " not found");
      return;
  }
  var retDOM = document.createElement('div');
  retDOM.setAttribute('class','row');
  var h2div = document.createElement('div');
  h2div.setAttribute('class','col-12');
  temp = document.createElement('h2');
  h2div.appendChild(temp);
  temp.appendChild(document.createTextNode(sData[0]));
  retDOM.appendChild(h2div);
  var stringCount = 1;
    for (var i = 1; i < sData.length; i +=3 ) {
        if (sData[i] == '$') {
            var div = document.createElement('div');
            div.setAttribute('class', 'col-10');
            let id = 'string' + stringCount++;
            var textInput = document.createElement('input');
            textInput.setAttribute('id',id);
            textInput.setAttribute('size','50');
            textInput.setAttribute('type','text');
            textInput.setAttribute('placeholder',sData[i+1]);
            div.appendChild(textInput);
            retDOM.appendChild(div);
            var div = document.createElement('div');
            div.setAttribute('class', 'col-2');
            var submitButton = document.createElement('input');
            submitButton.setAttribute('value','Submit');
            submitButton.setAttribute('type','button');
            submitButton.setAttribute('onclick','getString("' + id + '");');
            div.appendChild(submitButton);
        } else {
            var div = document.createElement('div');
            div.setAttribute('class', 'col-lg-2 col-md-3, col-sm-4 p-0');
            div.setAttribute('onclick', 'do_replace("' + sData[i] + '")');
            div.setAttribute('style', 'background:#EBEBE4;');
            var img = document.createElement('img');
            img.setAttribute('alt', 'choice');
            img.setAttribute('width', '120');
            img.setAttribute('height', '120');
            img.setAttribute('class', 'mx-auto d-block');
            if (sData[i + 2] != '') {
                var prefix = '/w40k/img/';
                if (sData[i + 2].substr(0,1) == '/') prefix = '';
                img.setAttribute('src', prefix + sData[i + 2]);
            } else {
                img.setAttribute('src', '/w40k/img/none.png');
            }
            div.appendChild(img);
            var temp = document.createElement('p');
            temp.setAttribute('class', 'lead');
            temp.appendChild(document.createTextNode(sData[i + 1]));
            div.appendChild(temp);
        }
        retDOM.appendChild(div);
    }

    return retDOM;
}


function savePauldron() {
    form = document.getElementById("saveForm");
    form.action = '/include/drawshield.php';
    form.target = '_blank';
    let filename = document.getElementById('filenameInput').value;
    if (filename == '') filename = 'pauldron';
    form.elements['filename'].value = filename;
    let blazonText = document.getElementById('blazon').value;
    form.elements['blazon'].value = blazonText;
    var saveWidth = document.getElementById('sizeInput').value;
    if (saveWidth > 5000)
        saveWidth = 5000
    else if (saveWidth < 50)
        saveWidth = 50;
    form.elements["size"].value = saveWidth;
    var e = document.getElementById("formatSelect");
    form.elements["saveformat"].value = e.options[e.selectedIndex].value;
    form.submit();
}

window.onload=init_build();
