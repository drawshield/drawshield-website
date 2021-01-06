
var version = "0.9b";
var size=280;

var shieldData = {};
shieldData["~start-here~"] = [ "Answer the questions below to chose the parts of your shield.",
    '~x-field~ ~update~ ~x-add-items~ ~achievement~ ~drawn~', "Start", 'simple/next.png',
];

// The complex set of charges
shieldData["~x-tincture~"] = [ "Choose the type of tincture",
      '~x-colour~', "A plain colour", 'simple/plain.png',
      '~x-treatment~',  "A treatment", 'simple/treatment.png',
      '~x-fur~',   "A fur", 'simple/fur.png',
];
shieldData["~x-field~"] = [ "Choose the type of field",
      '~x-colour~', "A plain colour", 'simple/plain.png',
      '~x-treatment~',  "A treatment", 'simple/treatment.png',
      '~x-fur~',   "A fur", 'simple/fur.png',
    '~x-divided~', "A division", 'simple/divided.png'
    ];
shieldData["~x-colour~"] = [ "Choose one of the heraldic tinctures",
    'argent', "argent", 'col/argent.png',
'azure', "azure", 'col/azure.png',
'bisque', "bisque", 'col/bisque.png',
'bronze', "bronze", 'col/bronze.png',
'brunatre', "brunatre", 'col/brunatre.png',
'buff', "buff", 'col/buff.png',
'carnation', "carnation", 'col/carnation.png',
'celestial-azure', "celestial-azure", 'col/celestial-azure.png',
'cendree', "cendree", 'col/cendree.png',
'copper', "copper", 'col/copper.png',
'crimson', "crimson", 'col/crimson.png',
'gray', "gray", 'col/gray.png',
'gules', "gules", 'col/gules.png',
'iron', "iron", 'col/iron.png',
'lead', "lead", 'col/lead.png',
'murrey', "murrey", 'col/murrey.png',
'or', "or", 'col/or.png',
'orange', "orange", 'col/orange.png',
'purpure', "purpure", 'col/purpure.png',
'red-ochre', "red-ochre", 'col/red-ochre.png',
'rose', "rose", 'col/rose.png',
'sable', "sable", 'col/sable.png',
'sanguine', "sanguine", 'col/sanguine.png',
'senois', "senois", 'col/senois.png',
'steel', "steel", 'col/steel.png',
'tenne', "tenne", 'col/tenne.png',
'vert', "vert", 'col/vert.png',
'white', "white", 'col/white.png',
'yellow-ochre', "yellow-ochre", 'col/yellow-ochre.png',
];
shieldData["~x-fur~"] = [ "Choose one of the furs",
'counter ermine', "counter ermine", '/catalog/treatments/furs/counter-ermine.png',
'counter potent', "counter potent", '/catalog/treatments/furs/counter-potent.png',
'counter vair', "counter vair", '/catalog/treatments/furs/counter-vair.png',
'ermine', "ermine", '/catalog/treatments/furs/ermine.png',
'erminites', "erminites", '/catalog/treatments/furs/erminites.png',
'erminois', "erminois", '/catalog/treatments/furs/erminois.png',
'pean', "pean", '/catalog/treatments/furs/pean.png',
'potent counter potent', "potent counter potent", '/catalog/treatments/furs/potent-counter-potent.png',
'potent', "potent", '/catalog/treatments/furs/potent.png',
'tapisse', "tapisse", '/catalog/treatments/furs/tapisse.png',
'vair en point', "vair en point", '/catalog/treatments/furs/vair-en-point.png',
'vair in pale', "vair in pale", '/catalog/treatments/furs/vair-in-pale.png',
'vair', "vair", '/catalog/treatments/furs/vair.png',
];
shieldData["~x-treatment~"] = [ "Choose the type of treatment",
'checky of 9 ~x-colour~ ~and~ ~x-colour~',"checky of 9", '/catalog/treatments/pattern/checky-of-9.png',
'checky ~x-colour~ ~and~ ~x-colour~',"checky", '/catalog/treatments/pattern/checky.png',
'lozengy ~x-colour~ ~and~ ~x-colour~',"lozengy", '/catalog/treatments/pattern/lozengy.png',
'maily ~x-colour~ ~and~ ~x-colour~',"maily", '/catalog/treatments/pattern/maily.png',
'papelonny ~x-colour~ ~and~ ~x-colour~',"papelonny", '/catalog/treatments/pattern/papelonny.png',
'pied ~x-colour~ ~and~ ~x-colour~',"pied", '/catalog/treatments/pattern/pied.png',
'plumetty ~x-colour~ ~and~ ~x-colour~',"plumetty", '/catalog/treatments/pattern/plumetty.png',
'scaly ~x-colour~ ~and~ ~x-colour~',"scaly", '/catalog/treatments/pattern/scaly.png',
'fretty ~x-colour~ ~and~ ~x-colour~',"fretty", '/catalog/treatments/lines/fretty.png',
'grillage ~x-colour~ ~and~ ~x-colour~',"grillage", '/catalog/treatments/lines/grillage.png',
'honeycombed ~x-colour~ ~and~ ~x-colour~',"honeycombed", '/catalog/treatments/lines/honeycombed.png',
'maily ~x-colour~ ~and~ ~x-colour~',"maily", '/catalog/treatments/lines/maily.png',
'masoned ~x-colour~ ~and~ ~x-colour~',"masoned", '/catalog/treatments/lines/masoned.png',
'mullety of 5 ~x-colour~ ~and~ ~x-colour~',"mullety of 5", '/catalog/treatments/mullet/mullety-of-5.png',
'mullety of 6 ~x-colour~ ~and~ ~x-colour~',"mullety of 6", '/catalog/treatments/mullet/mullety-of-6.png',
'anuletty ~x-colour~ ~and~ ~x-colour~',"anuletty", '/catalog/treatments/objects/anuletty.png',
'billetty counter billetty ~x-colour~ ~and~ ~x-colour~',"billetty counter billetty", '/catalog/treatments/objects/billetty-counter-billetty.png',
'billetty ~x-colour~ ~and~ ~x-colour~',"billetty", '/catalog/treatments/objects/billetty.png',
'crusilly ~x-colour~ ~and~ ~x-colour~',"crusilly", '/catalog/treatments/objects/crusilly.png',
'estencely ~x-colour~ ~and~ ~x-colour~',"estencely", '/catalog/treatments/objects/estencely.png',
'estoilly ~x-colour~ ~and~ ~x-colour~',"estoilly", '/catalog/treatments/objects/estoilly.png',
'goutty ~x-colour~ ~and~ ~x-colour~',"goutty", '/catalog/treatments/objects/goutty.png',
'ermined ~x-colour~ ~and~ ~x-colour~',"ermined", '/catalog/treatments/fur-like/ermined.png',
'potenty ~x-colour~ ~and~ ~x-colour~',"potenty", '/catalog/treatments/fur-like/potenty.png',
'vairy ~x-colour~ ~and~ ~x-colour~',"vairy", '/catalog/treatments/fur-like/vairy.png',
'roundelly ~x-colour~ ~and~ ~x-colour~',"roundelly", '/catalog/treatments/objects/roundelly.png',
'semy de lys ~x-colour~ ~and~ ~x-colour~',"semy de lys", '/catalog/treatments/objects/semy-de-lys.png',
'semy of bees ~x-colour~ ~and~ ~x-colour~',"semy of bees", '/catalog/treatments/objects/semy-of-bees.png',
    '~x-colour~ bezanty', "bezanty", "/catalog/treatments/fixed/bezanty.png",
    '~x-colour~ hurty', "hurty", "/catalog/treatments/fixed/hurty.png",
    '~x-colour~ platy', "platy", "/catalog/treatments/fixed/platy.png",
  ];
shieldData["~x-divided~"] = [ "Choose the type of division",
'barry ~x-linetype~ ~x-tincture~ ~and~ ~x-tincture~',"barry", '/catalog/divisions/bars/barry-+.png',
'barry of 10 ~x-linetype~ ~x-tincture~ ~and~ ~x-tincture~',"barry of 10", '/catalog/divisions/bars/barry-of-10-+.png',
'barry of 16 ~x-linetype~ ~x-tincture~ ~and~ ~x-tincture~',"barry of 16", '/catalog/divisions/bars/barry-of-16-+.png',
'bendy ~x-linetype~ ~x-tincture~ ~and~ ~x-tincture~',"bendy", '/catalog/divisions/bars/bendy-+.png',
'bendy sinister ~x-linetype~ ~x-tincture~ ~and~ ~x-tincture~',"bendy sinister", '/catalog/divisions/bars/bendy-sinister-+.png',
'chevronny ~x-tincture~ ~and~ ~x-tincture~',"chevronny", '/catalog/divisions/bars/chevronny.png',
'paly ~x-linetype~ ~x-tincture~ ~and~ ~x-tincture~',"paly", '/catalog/divisions/bars/paly-+.png',
'gyronny of 10 ~x-tincture~ ~and~ ~x-tincture~',"gyronny of 10", '/catalog/divisions/gyronny/gyronny-of-10.png',
'gyronny of 12 ~x-tincture~ ~and~ ~x-tincture~',"gyronny of 12", '/catalog/divisions/gyronny/gyronny-of-12.png',
'gyronny of 14 ~x-tincture~ ~and~ ~x-tincture~',"gyronny of 14", '/catalog/divisions/gyronny/gyronny-of-14.png',
'gyronny of 16 ~x-tincture~ ~and~ ~x-tincture~',"gyronny of 16", '/catalog/divisions/gyronny/gyronny-of-16.png',
'gyronny of 6 ~x-tincture~ ~and~ ~x-tincture~',"gyronny of 6", '/catalog/divisions/gyronny/gyronny-of-6.png',
'gyronny of 8 ~x-tincture~ ~and~ ~x-tincture~',"gyronny of 8", '/catalog/divisions/gyronny/gyronny-of-8.png',
'gyronny ~x-tincture~ ~and~ ~x-tincture~',"gyronny", '/catalog/divisions/gyronny/gyronny.png',
'per bend ~x-linetype~ ~x-tincture~ ~and~ ~x-tincture~',"per bend", '/catalog/divisions/major/per-bend-+.png',
'per bend sinister ~x-linetype~ ~x-tincture~ ~and~ ~x-tincture~',"per bend sinister", '/catalog/divisions/major/per-bend-sinister-+.png',
'per chevron ~x-linetype~ ~x-tincture~ ~and~ ~x-tincture~',"per chevron", '/catalog/divisions/major/per-chevron-+.png',
'per fess ~x-linetype~ ~x-tincture~ ~and~ ~x-tincture~',"per fess", '/catalog/divisions/major/per-fess-+.png',
'per pale ~x-linetype~ ~x-tincture~ ~and~ ~x-tincture~',"per pale", '/catalog/divisions/major/per-pale-+.png',
'per pile ~x-tincture~ ~and~ ~x-tincture~',"per pile", '/catalog/divisions/major/per-pile.png',
'per saltire ~x-linetype~ ~x-tincture~ ~and~ ~x-tincture~',"per saltire", '/catalog/divisions/major/per-saltire-+.png',
'quarterly ~x-linetype~ ~x-tincture~ ~and~ ~x-tincture~',"quarterly", '/catalog/divisions/major/quarterly-+.png',
'barry pily sinister ~x-tincture~ ~and~ ~x-tincture~',"barry pily sinister", '/catalog/divisions/minor/barry-pily-sinister.png',
'barry pily ~x-tincture~ ~and~ ~x-tincture~',"barry pily", '/catalog/divisions/minor/barry-pily.png',
'chape-ploye ~x-tincture~ ~and~ ~x-tincture~',"chape-ploye", '/catalog/divisions/minor/chape-ploye.png',
'chape ~x-tincture~ ~and~ ~x-tincture~',"chape", '/catalog/divisions/minor/chape.png',
'chausse ~x-tincture~ ~and~ ~x-tincture~',"chausse", '/catalog/divisions/minor/chausse.png',
'per chief ~x-linetype~ ~x-tincture~ ~and~ ~x-tincture~',"per chief", '/catalog/divisions/minor/per-chief-+.png',
'pily ~x-linetype~ ~x-tincture~ ~and~ ~x-tincture~',"pily", '/catalog/divisions/minor/pily-+.png',
'quarterly per fess-wavy ~x-linetype~ ~x-tincture~ ~and~ ~x-tincture~',"quarterly per fess-wavy", '/catalog/divisions/minor/quarterly-per-fess-wavy-+.png',
'quarterly per pale-wavy ~x-linetype~ ~x-tincture~ ~and~ ~x-tincture~',"quarterly per pale-wavy", '/catalog/divisions/minor/quarterly-per-pale-wavy-+.png',
'per pall ~x-linetype~  ~x-tincture~ ~x-tincture~ and ~x-tincture~',"per pall", '/catalog/divisions/multi/per-pall-+.png',
'per pall arrondi  ~x-tincture~ ~x-tincture~ and ~x-tincture~',"per pall arrondi", '/catalog/divisions/multi/per-pall-arrondi.png',
'per pile  ~x-tincture~ ~x-tincture~ ~3rd-tincture~',"per pile", '/catalog/divisions/multi/per-pile.png',
'barry bendy sinister ~x-tincture~ ~and~ ~x-tincture~',"barry bendy sinister", '/catalog/divisions/pattern/barry-bendy-sinister.png',
'barry bendy ~x-tincture~ ~and~ ~x-tincture~',"barry bendy", '/catalog/divisions/pattern/barry-bendy.png',
'barry indented-one in the-other ~x-tincture~ ~and~ ~x-tincture~',"barry indented-one in the-other", '/catalog/divisions/pattern/barry-indented-one-in-the-other.png',
'fusily bendy sinister ~x-tincture~ ~and~ ~x-tincture~',"fusily bendy sinister", '/catalog/divisions/pattern/fusily-bendy-sinister.png',
'fusily bendy ~x-tincture~ ~and~ ~x-tincture~',"fusily bendy", '/catalog/divisions/pattern/fusily-bendy.png',
'fusily ~x-tincture~ ~and~ ~x-tincture~',"fusily", '/catalog/divisions/pattern/fusily.png',
'paly bendy sinister ~x-tincture~ ~and~ ~x-tincture~',"paly bendy sinister", '/catalog/divisions/pattern/paly-bendy-sinister.png',
'paly bendy ~x-tincture~ ~and~ ~x-tincture~',"paly bendy", '/catalog/divisions/pattern/paly-bendy.png',
'pily bendy sinister ~x-tincture~ ~and~ ~x-tincture~',"pily bendy sinister", '/catalog/divisions/pattern/pily-bendy-sinister.png',
'pily bendy ~x-tincture~ ~and~ ~x-tincture~',"pily bendy", '/catalog/divisions/pattern/pily-bendy.png',
'tierced in bend ~x-linetype~ ~x-tincture~ ~x-tincture~ and ~x-tincture~', "tierced in bend", '/catalog/divisions/multi/tierced-in-bend-+.png',
'tierced in bend sinister ~x-linetype~ ~x-tincture~ ~x-tincture~ and ~x-tincture~', "tierced in bend sinister", '/catalog/divisions/multi/tierced-in-bend-sinister-+.png',
'tierced in chevron ~x-linetype~ ~x-tincture~ ~x-tincture~ and ~x-tincture~', "tierced in chevron", '/catalog/divisions/multi/tierced-in-chevron-+.png',
'tierced in fess ~x-linetype~ ~x-tincture~ ~x-tincture~ and ~x-tincture~', "tierced in fess", '/catalog/divisions/multi/tierced-in-fess-+.png',
'tierced in pale ~x-linetype~ ~x-tincture~ ~x-tincture~ and ~x-tincture~', "tierced in pale", '/catalog/divisions/multi/tierced-in-pale-+.png',
];
shieldData["~3rd-tincture~"] = [ "Do you want to use a third tincture here?",
      'and ~x-tincture~', 'Yes', 'simple/yes.png',
      '', "No", 'simple/no.png',
];
shieldData["~drawn~"] = [ "Do you want to change the colour scheme or effects?",
      'drawn ~palette~ ~effect~ ~update~', 'Yes', 'simple/yes.png',
       '', "No", 'simple/no.png',
];
shieldData["~palette~"] = [ "Do you want to change from the default palette of colours?",
     '', 'No', 'simple/no.png',
    'with a wikipedia palette','Wikipedia', '/create/img/wikipedia.png', 
    'with a wappenwiki palette', 'Wappenwiki','/create/img/wappenwiki.png', 
    'with an emoji palette', 'Emoji','/create/img/emoji.png', 
    'with a hatching palette','Hatching', '/create/img/hatching.png', 
    'with a cc3 palette','CC3', '/create/img/cc3.png', 
];
shieldData["~effect~"] = [ "Do you want to add an overall effect to your image?",
     '', 'No', 'simple/no.png',
    'with a shiny effect','Shiny', '/create/img/shiny.png', 
    'with a stonework effect','Stonework', '/create/img/stonework.png', 
    'with a vellum effect','Vellum', '/create/img/vellum.png', 
    'with a fabric effect','Fabric', '/create/img/fabric.png', 
    'with an inked effect','Inked', '/create/img/inked.png', 
];
shieldData["~achievement~"] = [ "Do you want to add an achievement (decoration around the shield)?",
      'achievement ~mantling~ ~ach-helmet~ ~crest~ ~add-motto~', 'Yes', 'simple/yes.png',
       '', "No", 'simple/no.png',
];
shieldData["~mantling~"] = [ "Do you want to add mantling (cloak around shield)?",
      'mantling ~colour~ ~and~ ~colour~ ~update~', 'Yes', 'simple/yes.png',
      '', "No", 'simple/no.png',
];
shieldData["~crest~"] = [ "Do you want to add a crest (charge on top of shield)?",
      'crest a ~x-charge~ ~x-tincture~ ~update~', 'Yes', 'simple/yes.png',
      '', "No", 'simple/no.png',
];
shieldData["~ach-helmet~"] = [ "Do you want a helmet (on top of shield)?",
'', 'No helmet', 'simple/no.png',
'baronets helmet ~update~', 'baronets helmet', '/catalog/charges/armour/baronets-helmet.png',
'esquires helmet ~update~', 'esquires helmet', '/catalog/charges/armour/esquires-helmet.png',
'knights helmet ~update~', 'knights helmet', '/catalog/charges/armour/knights-helmet.png',
'peers helmet ~update~', 'peers helmet', '/catalog/charges/armour/peers-helmet.png',
'royal helmet ~update~', 'royal helmet', '/catalog/charges/armour/royal-helmet.png',
 ];
shieldData["~x-linetype~"] = [ "Do you want a variant edge type?",
          '', "Plain", 'simple/perfess.png',
  'angled-opposite', "angled-opposite", '/catalog/edges/common/angled-opposite.png',
'angled', "angled", '/catalog/edges/common/angled.png',
'arched', "arched", '/catalog/edges/common/arched.png',
'bevilled opposite', "bevilled opposite", '/catalog/edges/common/bevilled-opposite.png',
'bevilled', "bevilled", '/catalog/edges/common/bevilled.png',
'dancetty', "dancetty", '/catalog/edges/common/dancetty.png',
'double arched', "double arched", '/catalog/edges/common/double-arched.png',
'dovetailed', "dovetailed", '/catalog/edges/common/dovetailed.png',
'embattled', "embattled", '/catalog/edges/common/embattled.png',
'engrailed', "engrailed", '/catalog/edges/common/engrailed.png',
'escartelly', "escartelly", '/catalog/edges/common/escartelly.png',
'indented', "indented", '/catalog/edges/common/indented.png',
'invected', "invected", '/catalog/edges/common/invected.png',
'nebuly', "nebuly", '/catalog/edges/common/nebuly.png',
'nowy', "nowy", '/catalog/edges/common/nowy.png',
'potenty', "potenty", '/catalog/edges/common/potenty.png',
'raguly', "raguly", '/catalog/edges/common/raguly.png',
'rayonny', "rayonny", '/catalog/edges/common/rayonny.png',
'urdy', "urdy", '/catalog/edges/common/urdy.png',
'wavy', "wavy", '/catalog/edges/common/wavy.png',
'battled embattled', "battled embattled", '/catalog/edges/embattled/battled-embattled.png',
'battled ghibelline', "battled ghibelline", '/catalog/edges/embattled/battled-ghibelline.png',
'cupolaed', "cupolaed", '/catalog/edges/embattled/cupolaed.png',
'embattled arrondi', "embattled arrondi", '/catalog/edges/embattled/embattled-arrondi.png',
'embattled brettessy', "embattled brettessy", '/catalog/edges/embattled/embattled-brettessy.png',
'embattled counter embattled', "embattled counter embattled", '/catalog/edges/embattled/embattled-counter-embattled.png',
'embattled cupolaed', "embattled cupolaed", '/catalog/edges/embattled/embattled-cupolaed.png',
'embattled gabley', "embattled gabley", '/catalog/edges/embattled/embattled-gabley.png',
'embattled grady', "embattled grady", '/catalog/edges/embattled/embattled-grady.png',
'embattled in the form of mine dumps', "embattled in the form of mine dumps", '/catalog/edges/embattled/embattled-in-the-form-of-mine-dumps.png',
'embattled', "embattled", '/catalog/edges/embattled/embattled.png',
'erable', "erable", '/catalog/edges/minor/erable.png',
'fir twigged', "fir twigged", '/catalog/edges/minor/fir-twigged.png',
'hakulikoro', "hakulikoro", '/catalog/edges/minor/hakulikoro.png',
'liljakoro', "liljakoro", '/catalog/edges/minor/liljakoro.png',
'meandering', "meandering", '/catalog/edges/minor/meandering.png',
'ristikoro', "ristikoro", '/catalog/edges/minor/ristikoro.png',
'thorny', "thorny", '/catalog/edges/minor/thorny.png',
'twigged', "twigged", '/catalog/edges/minor/twigged.png',
'vallikoro', "vallikoro", '/catalog/edges/minor/vallikoro.png',
'dancetty floretty', "dancetty floretty", '/catalog/edges/ornate/dancetty-floretty.png',
'fir tree topped', "fir tree topped", '/catalog/edges/ornate/fir-tree-topped.png',
'indented pommetty', "indented pommetty", '/catalog/edges/ornate/indented-pommetty.png',
'trefle counter trefle', "trefle counter trefle", '/catalog/edges/ornate/trefle-counter-trefle.png',
];
shieldData["~x-ordinary~"] = [ "Choose an ordinary",
 '2 bar gemel ~x-linetype~ ~x-tincture~',"2 bar gemel", '/catalog/ordinaries/fess/2-bar-gemel-+.png',
'2 barrulets ~x-linetype~ ~x-tincture~',"2 barrulets", '/catalog/ordinaries/fess/2-barrulets-+.png',
'2 bars ~x-linetype~ ~x-tincture~',"2 bars", '/catalog/ordinaries/fess/2-bars-+.png',
'2 bendlets ~x-linetype~ ~x-tincture~',"2-bendlets", '/catalog/ordinaries/bend/2-bendlets-+.png',
'2 bends ~x-linetype~ ~x-tincture~',"2-bends", '/catalog/ordinaries/bend/2-bends-+.png',
'2 chevronels interlaced ~x-tincture~',"2 chevronels interlaced", '/catalog/ordinaries/chevrons/2-chevronels-interlaced.png',
'2 chevronels ~x-tincture~',"2 chevronels", '/catalog/ordinaries/chevrons/2-chevronels.png',
'2 chevrons ~x-linetype~ ~x-tincture~',"2 chevrons", '/catalog/ordinaries/chevrons/2-chevrons-+.png',
'2 couple close ~x-linetype~ ~x-tincture~',"2 couple close", '/catalog/ordinaries/bend/2-couple-close-+.png',
'2 flaunches ~x-tincture~',"2 flaunches", '/catalog/ordinaries/minor/2-flaunches.png',
'2 palets ~x-linetype~ ~x-tincture~',"2 palets", '/catalog/ordinaries/pale/2-palets-+.png',
'2 square flaunches ~x-tincture~',"2 square flaunches", '/catalog/ordinaries/minor/2-square-flaunches.png',
'3 bar gemel ~x-linetype~ ~x-tincture~',"3 bar gemel", '/catalog/ordinaries/fess/3-bar-gemel-+.png',
'3 bars ~x-linetype~ ~x-tincture~',"3 bars", '/catalog/ordinaries/fess/3-bars-+.png',
'3 bendlets ~x-linetype~ ~x-tincture~',"3 bendlets", '/catalog/ordinaries/bend/3-bendlets-+.png',
'3 chevronels interlaced ~x-tincture~',"3 chevronels interlaced", '/catalog/ordinaries/chevrons/3-chevronels-interlaced.png',
'3 chevronels ~x-tincture~',"3-chevronels", '/catalog/ordinaries/chevrons/3-chevronels.png',
'3 chevrons ~x-linetype~ ~x-tincture~',"3 chevrons", '/catalog/ordinaries/chevrons/3-chevrons-+.png',
'3 palets ~x-linetype~ ~x-tincture~',"3 palets", '/catalog/ordinaries/pale/3-palets-+.png',
'4 endorses ~x-linetype~ ~x-tincture~',"4 endorses", '/catalog/ordinaries/pale/4-endorses-+.png',
'a bar gemel ~x-linetype~ ~x-tincture~',"bar gemel", '/catalog/ordinaries/fess/bar-gemel-+.png',
'a bar ~x-linetype~ ~x-tincture~',"bar", '/catalog/ordinaries/fess/bar-+.png',
'a barrulet ~x-tincture~',"barrulet", '/catalog/ordinaries/diminutive/barrulet.png',
'a base pointed ~x-tincture~',"base pointed", '/catalog/ordinaries/minor/base-pointed.png',
'a base ~x-linetype~ ~x-tincture~',"base", '/catalog/ordinaries/major/base-+.png',
'a baton ~x-tincture~',"baton", '/catalog/ordinaries/bend/baton.png',
'a bend couped ~x-linetype~ ~x-tincture~',"bend couped", '/catalog/ordinaries/bend/bend-couped-+.png',
'a bend voided ~x-linetype~ ~x-tincture~',"bend voided", '/catalog/ordinaries/bend/bend-voided-+.png',
'a bend ~x-linetype~ ~x-tincture~',"bend", '/catalog/ordinaries/major/bend-+.png',
'a bendlet sinister ~x-linetype~ ~x-tincture~',"bendlet sinister", '/catalog/ordinaries/diminutive/bendlet-sinister-+.png',
'a bendlet ~x-linetype~ ~x-tincture~',"bendlet", '/catalog/ordinaries/bend/bendlet-+.png',
'a bordure ~x-tincture~',"bordure", '/catalog/ordinaries/major/bordure.png',
'a canadian pale ~x-linetype~ ~x-tincture~',"canadian pale", '/catalog/ordinaries/pale/canadian-pale-+.png',
'a canton sinister ~x-linetype~ ~x-tincture~',"canton sinister", '/catalog/ordinaries/diminutive/canton-sinister-+.png',
'a canton ~x-linetype~ ~x-tincture~',"canton", '/catalog/ordinaries/diminutive/canton-+.png',
'a chevron burst ~x-tincture~',"chevron burst", '/catalog/ordinaries/chevrons/chevron-burst.png',
'a chevron couched sinister ~x-linetype~ ~x-tincture~',"chevron couched sinister", '/catalog/ordinaries/chevrons/chevron-couched-sinister-+.png',
'a chevron couched ~x-linetype~ ~x-tincture~',"chevron couched", '/catalog/ordinaries/chevrons/chevron-couched-+.png',
'a chevron disjointed ~x-tincture~',"chevron disjointed", '/catalog/ordinaries/chevrons/chevron-disjointed.png',
'a chevron fracted ~x-tincture~',"chevron fracted", '/catalog/ordinaries/chevrons/chevron-fracted.png',
'a chevron ploye ~x-tincture~',"chevron ploye", '/catalog/ordinaries/chevrons/chevron-ploye.png',
'a chevron removed ~x-tincture~',"chevron removed", '/catalog/ordinaries/chevrons/chevron-removed.png',
'a chevron rompu ~x-linetype~ ~x-tincture~',"chevron rompu", '/catalog/ordinaries/chevrons/chevron-rompu-+.png',
'a chevron ~x-linetype~ ~x-tincture~',"chevron", '/catalog/ordinaries/major/chevron-+.png',
'a chevronel ~x-tincture~',"chevronel", '/catalog/ordinaries/chevrons/chevronel.png',
'a chief couped ~x-linetype~ ~x-tincture~',"chief couped", '/catalog/ordinaries/major/chief-couped-+.png',
'a chief pointed ~x-tincture~',"chief pointed", '/catalog/ordinaries/minor/chief-pointed.png',
'a chief ~x-linetype~ ~x-tincture~',"chief", '/catalog/ordinaries/major/chief-+.png',
'a closet ~x-linetype~ ~x-tincture~',"closet", '/catalog/ordinaries/fess/closet-+.png',
'a crancelin ~x-tincture~',"crancelin", '/catalog/ordinaries/bend/crancelin.png',
'a cross formy ~x-tincture~',"cross formy", '/catalog/ordinaries/cross/cross-formy.png',
'a cross parted fretty ~x-tincture~',"cross parted fretty", '/catalog/ordinaries/cross/cross-parted-fretty.png',
'a cross quarter pierced ~x-tincture~',"cross quarter pierced", '/catalog/ordinaries/cross/cross-quarter-pierced.png',
'a cross tripartite fretty ~x-tincture~',"cross tripartite fretty", '/catalog/ordinaries/cross/cross-tripartite-fretty.png',
'a dance ~x-tincture~',"dance", '/catalog/ordinaries/fess/dance.png',
'a double tressure flory counter flory ~x-tincture~',"double tressure flory counter flory", '/catalog/ordinaries/minor/double-tressure-flory-counter-flory.png',
'a double tressure ~x-tincture~',"double tressure", '/catalog/ordinaries/major/double-tressure.png',
'an endorse ~x-linetype~ ~x-tincture~',"endorse", '/catalog/ordinaries/pale/endorse-+.png',
'an enty in point ~x-tincture~',"enty in point", '/catalog/ordinaries/minor/enty-in-point.png',
'a fess between 2 chevrons ~x-tincture~',"fess between 2 chevrons", '/catalog/ordinaries/fess/fess-between-2-chevrons.png',
'a fess couped ~x-linetype~ ~x-tincture~',"fess couped", '/catalog/ordinaries/fess/fess-couped-+.png',
'a fess voided ~x-tincture~',"fess voided", '/catalog/ordinaries/fess/fess-voided.png',
'a fess ~x-linetype~ ~x-tincture~',"fess", '/catalog/ordinaries/major/fess-+.png',
'a fillet cross ~x-linetype~ ~x-tincture~',"fillet cross", '/catalog/ordinaries/diminutive/fillet-cross-+.png',
'a fillet saltire ~x-linetype~ ~x-tincture~',"fillet saltire", '/catalog/ordinaries/diminutive/fillet-saltire-+.png',
'a flaunch ~x-tincture~',"flaunch", '/catalog/ordinaries/minor/flaunch.png',
'a ford',"ford", '/catalog/ordinaries/minor/ford.png',
'a fret couped ~x-tincture~',"fret couped", '/catalog/ordinaries/minor/fret-couped.png',
'a fret ~x-tincture~',"fret", '/catalog/ordinaries/minor/fret.png',
'a gore ~x-tincture~',"gore", '/catalog/ordinaries/minor/gore.png',
'a gorge ~x-tincture~',"gorge", '/catalog/ordinaries/minor/gorge.png',
'a graft ~x-linetype~ ~x-tincture~',"graft", '/catalog/ordinaries/minor/graft-+.png',
'a gusset ~x-linetype~ ~x-tincture~',"gusset", '/catalog/ordinaries/minor/gusset-+.png',
'a gyron ~x-linetype~ ~x-tincture~',"gyron", '/catalog/ordinaries/minor/gyron-+.png',
'a humet ~x-linetype~ ~x-tincture~',"humet", '/catalog/ordinaries/fess/humet-+.png',
'an inescutcheon ~x-tincture~',"inescutcheon", '/catalog/ordinaries/major/inescutcheon.png',
'a label entire ~x-tincture~',"label entire", '/catalog/ordinaries/major/label-entire.png',
'a lozenge throughout ~x-tincture~',"lozenge throughout", '/catalog/ordinaries/minor/lozenge-throughout.png',
'a mountain ~x-tincture~',"mountain", '/catalog/ordinaries/minor/mountain.png',
'an orle ~x-tincture~',"orle", '/catalog/ordinaries/major/orle.png',
'a pale voided ~x-tincture~',"pale voided", '/catalog/ordinaries/pale/pale-voided.png',
'a pale ~x-linetype~ ~x-tincture~',"pale", '/catalog/ordinaries/major/pale-+.png',
'a palet gemel ~x-linetype~ ~x-tincture~',"palet gemel", '/catalog/ordinaries/pale/palet-gemel-+.png',
'a palet ~x-linetype~ ~x-tincture~',"palet", '/catalog/ordinaries/pale/palet-+.png',
'a pall ~x-linetype~ ~x-tincture~',"pall", '/catalog/ordinaries/major/pall-+.png',
'a pallium ~x-tincture~',"pallium", '/catalog/ordinaries/pile/pallium.png',
'a pile embowed ~x-tincture~',"pile embowed", '/catalog/ordinaries/pile/pile-embowed.png',
'a pile throughout ~x-tincture~',"pile throughout", '/catalog/ordinaries/pile/pile-throughout.png',
'a pile ~x-tincture~',"pile", '/catalog/ordinaries/major/pile.png',
'a plain cross ~x-linetype~ ~x-tincture~',"plain cross", '/catalog/ordinaries/major/plain-cross-+.png',
'a point dexter ~x-linetype~ ~x-tincture~',"point dexter", '/catalog/ordinaries/minor/point-dexter-+.png',
'a point in point ~x-linetype~ ~x-tincture~',"point in point", '/catalog/ordinaries/minor/point-in-point-+.png',
'a point sinister ~x-linetype~ ~x-tincture~',"point sinister", '/catalog/ordinaries/minor/point-sinister-+.png',
'a quarter ~x-linetype~ ~x-tincture~',"quarter", '/catalog/ordinaries/major/quarter-+.png',
'a riband ~x-linetype~ ~x-tincture~',"riband", '/catalog/ordinaries/bend/riband-+.png',
'a saltire parted fretty ~x-tincture~',"saltire parted fretty", '/catalog/ordinaries/cross/saltire-parted-fretty.png',
'a saltire ~x-linetype~ ~x-tincture~',"saltire", '/catalog/ordinaries/major/saltire-+.png',
'a scarpe ~x-tincture~',"scarpe", '/catalog/ordinaries/bend/scarpe.png',
'a shakefork ~x-linetype~ ~x-tincture~',"shakefork", '/catalog/ordinaries/diminutive/shakefork-+.png',
'a square flaunch ~x-tincture~',"square flaunch", '/catalog/ordinaries/minor/square-flaunch.png',
'a tierce sinister ~x-linetype~ ~x-tincture~',"tierce sinister", '/catalog/ordinaries/major/tierce-sinister-+.png',
'a tierce ~x-linetype~ ~x-tincture~',"tierce", '/catalog/ordinaries/major/tierce-+.png',
'a tressure ~x-tincture~',"tressure", '/catalog/ordinaries/major/tressure.png',
'a trimount ~x-tincture~',"trimount", '/catalog/ordinaries/minor/trimount.png',

];
shieldData["~x-orient~"] = [ "how do you want to orient the charge(s)?",
'', 'Default orientation', '/catalog/orientations/a-salmon.png',
      'bendwise', 'bendwise', '/catalog/orientations/a-salmon-bendwise.png',
      'bendwise sinister', 'bendwise sinister', '/catalog/orientations/a-salmon-bendwise-sinister.png',
      'bendwise reversed', 'bendwise reversed', '/catalog/orientations/a-salmon-bendwise reversed.png',
      'palewise', 'palewise', '/catalog/orientations/a-salmon-palewise.png',
      'fesswise', 'fesswise', '/catalog/orientations/an-axe-fesswise.png',
      'inverted', 'inverted', '/catalog/orientations/an-axe-inverted.png',
      'reversed', 'reversed', '/catalog/orientations/an-axe-reversed.png',
      'fesswise inverted', 'fesswise inverted', '/catalog/orientations/an-axe-fesswise-inverted.png',
      'fesswise reversed', 'fesswise reversed', '/catalog/orientations/an-axe-fesswise-reversed.png',
];
shieldData["~x-nine-arr~"] = [ "How would you like to arrange these nine charges?",
'', 'Default arrangement', '',
'arranged 3,3,3', '3x3 grid',
    'in annulo', 'in annulo', '/catalog/arrangements/10-roundels-in-annulo.png',
];
shieldData["~x-ten-arr~"] = [ "How would you like to arrange these ten charges?",
      '', 'Default arrangement', '',
      'in annulo', 'in annulo', '/catalog/arrangements/10-roundels-in-annulo.png',
];
shieldData["~x-twelve-arr~"] = [ "How would you like to arrange these twelve charges?",
      '', 'Default arrangement', '',
      'in annulo', 'in annulo', '/catalog/arrangements/10-roundels-in-annulo.png',
      'in orle', 'in orle', '/catalog/arrangements/12-roundels-in-orle.png',
];
shieldData["~x-three-arr~"] = [ "How would you like to arrange these three charges?",
      '', 'Default arrangement', '',
    'in bend', 'in bend', '/catalog/arrangements/3-roundels-in-bend.png',
      'in fess', 'in fess', '/catalog/arrangements/3-roundels-in-fess.png',
      'in pale', 'in pale', '/catalog/arrangements/3-roundels-in-pale.png',
      'in bend sinister', 'in bend sinister', '/catalog/arrangements/3-roundels-in-bend-sinister.png',
];
shieldData["~x-four-arr~"] = [ "How would you like to arrange these four charges?",
      '', 'Default arrangement', '',
      'in bend', 'in bend', '/catalog/arrangements/3-roundels-in-bend.png',
      'in fess', 'in fess', '/catalog/arrangements/3-roundels-in-fess.png',
      'in pale', 'in pale', '/catalog/arrangements/3-roundels-in-pale.png',
      'in quadrangle', 'in quadrangle', '/catalog/arrangements/4-roundels-in-quadrangle.png',
      'in bend sinister', 'in bend sinister', '/catalog/arrangements/3-roundels-in-bend-sinister.png',
];
shieldData["~x-five-arr~"] = [ "How would you like to arrange these five charges?",
      '', 'Default arrangement', '',
      'in bend', 'in bend', '/catalog/arrangements/3-roundels-in-bend.png',
      'in fess', 'in fess', '/catalog/arrangements/3-roundels-in-fess.png',
      'in pale', 'in pale', '/catalog/arrangements/3-roundels-in-pale.png',
      'in cross', 'in cross', '/catalog/arrangements/5-roundels-in-cross.png',
      'in saltire', 'in saltire', '/catalog/arrangements/5-roundels-in-saltire.png',
      'in chevron', 'in chevron', '/catalog/arrangements/5-roundels-in-chevron.png',
      'in bend sinister', 'in bend sinister', '/catalog/arrangements/3-roundels-in-bend-sinister.png',
];
      shieldData["~x-two-arr~"] = [ "How would you like to arrange these two charges?",
      '', 'Default arrangement', '',
      'addorsed', 'addorsed', '/catalog/arrangements/2-lions-addorsed.png',
      'respecting each other', 'respecting each other', '/catalog/arrangements/2-lions-respecting-each-other.png',
      'counter passant', 'counter passant', '/catalog/arrangements/2-lions-counter-passant.png',
      'combattant', 'combattant', '/catalog/arrangements/2-lions-combattant.png',
];

shieldData["~x-on-ord~"] = [ "Choose an ordinary to place the charges on",
      'base ~x-linetype~ ~x-tincture~',"base", '/catalog/ordinaries/major/base-+.png',
      'bend ~x-linetype~ ~x-tincture~',"bend", '/catalog/ordinaries/major/bend-+.png',
      'chevron ~x-linetype~ ~x-tincture~',"chevron", '/catalog/ordinaries/major/chevron-+.png',
      'chief ~x-linetype~ ~x-tincture~',"chief", '/catalog/ordinaries/major/chief-+.png',
      'plain cross ~x-linetype~ ~x-tincture~',"plain cross", '/catalog/ordinaries/major/plain-cross-+.png',
      'fess ~x-linetype~ ~x-tincture~',"fess", '/catalog/ordinaries/major/fess-+.png',
      'pale ~x-linetype~ ~x-tincture~',"pale", '/catalog/ordinaries/major/pale-+.png',
      'saltire ~x-linetype~ ~x-tincture~',"saltire", '/catalog/ordinaries/major/saltire-+.png',
      'bordure ~x-tincture~',"bordure", '/catalog/ordinaries/major/bordure.png',
    ];
shieldData["~x-location~"] = [ "Do you want these charges in a particular location on the shield?",
      '', 'The normal location', '',
      'in first quarter', 'in first quarter', 'simple/infirstquarter.png',
      'in second quarter', 'in second quarter', 'simple/insecondquarter.png',
      'in third quarter', 'in third quarter', 'simple/inthirdquarter.png',
      'in fourth quarter', 'in fourth quarter', 'simple/infourthquarter.png',
      'in dexter chief', 'in dexter chief', 'simple/indexterchief.png',
      'in sinister chief', 'in sinister chief', 'simple/insinisterchief.png',
      'in dexter base', 'in dexter base', 'simple/indexterbase.png',
      'in sinister base', 'in sinister base', 'simple/insinisterbase.png',
      'in dexter flank', 'in dexter flank', 'simple/indexterflank.png',
      'in sinister flank', 'in sinister flank', 'simple/insinisterflank.png',
      'in middle chief', 'in middle chief', 'simple/inmiddlechief.png',
      'in middle base', 'in middle base', 'simple/inmiddlebase.png',
      'in nombril', 'in nombril', 'simple/innombril.png',
      'in fess point', 'in fess point', 'simple/infesspoint.png',
    ];
shieldData["~x-sml-number~"] = [ "How many charges to place on the ordinary?",
      'a', 'one', 'num/one.png',
      '2', 'two', 'num/two.png',
      '3', 'three', 'num/three.png',
      '4', 'four', 'num/four.png',
      '5', 'five', 'num/five.png',
    ];

      shieldData["~x-number~"] = [ "How many charges to add?",
      '~x-location~ a ~x-charge~', 'one', 'num/one.png',
      '~x-location~ 2 ~x-charge~ ~x-two-arr~', 'two', 'num/two.png',
      '~x-location~ 3 ~x-charge~ ~x-three-arr~', 'three', 'num/three.png',
      '~x-location~ 4 ~x-charge~ ~x-four-arr~', 'four', 'num/four.png',
      '~x-location~ 5 ~x-charge~ ~x-five-arr~', 'five', 'num/five.png',
      '~x-location~ 6 ~x-charge~', 'six', 'num/six.png',
      '~x-location~ 7 ~x-charge~', 'seven', 'num/seven.png',
      '~x-location~ 8 ~x-charge~', 'eight', 'num/eight.png',
      '~x-location~ 9 ~x-charge~ ~x-nine-arr~', 'nine', 'num/nine.png',
      '~x-location~ 10 ~x-charge~ ~x-ten-arr~', 'ten', 'num/ten.png',
      '~x-location~ 11 ~x-charge~', 'eleven', 'num/eleven.png',
      '~x-location~ 12 ~x-charge~ ~x-twelve-arr~', 'twelve', 'num/twelve.png',
];
shieldData["~x-add-items~"] = [ "Do you want to add further elements?",
      '', "No", 'simple/no.png',
          '~x-ordinary~ ~update~ ~x-add-items~', "An Ordinary", 'simple/ordinary.png',
      '~x-number~ ~x-orient~ ~x-colour~ ~update~ ~x-add-items~', "One or more charges", 'simple/charge.png',
      'on a ~x-on-ord~ ~x-sml-number~ ~x-charge~ ~x-orient~ ~x-colour~ ~update~ ~x-add-items~', "One or more charges on an ordinary", 'simple/chargeonord.png',
];
shieldData["~add-motto~"] = [ "Do you want to add a motto below the shield?",
      'motto ~string~ ~update~', 'Yes', 'simple/yes.png',
      '', "No", 'simple/no.png',
      ];
shieldData["~string~"] = [ "Enter some text and press the Submit button",
      '$', 'Your text', '',
      ];

shieldData["~plain~"] = [ "Now choose a type of colour or pattern",
      '~colour~', "A plain colour", 'simple/plain.png',
      '~treatment~',  "A treatment", 'simple/treatment.png',
      '~fur~',   "A fur", 'simple/fur.png'
      ];
shieldData["~fur~"] = [ "Choose one of the furs (patterns of fixed colours)",
      'ermine', "Ermine", 'simple/ermine.png',
      'potent', "Potent", 'simple/potent.png',
      'pean', "Pean", 'simple/pean.png',
      'vair', "Vair", 'simple/vair.png',
      'counter-ermine', "Counter-ermine", 'simple/ermines.png',
      'vair-en-point', "Vair-en-point", 'simple/vair-en-point.png',
      'counter-potent', "Counter-potent", 'simple/counter-potent.png',
      'erminois', "Erminois", 'erminois.png'
      ];
shieldData["~colour~"] = [ "Choose a plain colour (note the heraldic names)",
      'or', "Or", 'simple/or.png',
      'argent', "Argent", 'simple/argent.png',
      'azure', "Azure", 'simple/azure.png',
      'gules', "Gules", 'simple/gules.png',
      'purpure', "Purpure", 'simple/purpure.png',
      'sable', "Sable", 'simple/sable.png',
      'vert', "Vert", 'simple/vert.png',
      'brunatre', "Brunatre", 'simple/brunatre.png',
      'carnation', "Carnation", 'simple/carnation.png',
      'murrey', "Murrey", 'simple/murrey.png',
      'orange ', "Orange", 'simple/orange.png', // The space stops us matching orange the charge
      'tenne', "Tenne", 'simple/tenne.png'
      ];
shieldData["~treatment~"] = [ "Choose the type of treatment (a pattern of two colours)",
      'masoned ~colour~ ~and~ ~colour~', "Masoned", 'simple/masoned.png',
      'honeycombed ~colour~ ~and~ ~colour~', "Honeycombed", 'simple/honeycombed.png',
      'fretty ~colour~ ~and~ ~colour~', "Fretty", 'simple/fretty.png',
      'crusilly ~colour~ ~and~ ~colour~', "Crusilly", 'simple/crusilly.png',
      'annuletty ~colour~ ~and~ ~colour~', "Anuletty", 'simple/annuletty.png',
      'fleury ~colour~ ~and~ ~colour~', "Fleury", 'simple/fleury.png',
      'scaly ~colour~ ~and~ ~colour~', "Scaly", 'simple/scaly.png',
      'lozengy ~colour~ ~and~ ~colour~', "Lozengy", 'lozengy.png'
      ];
shieldData["~and~"] = [ "Now choose another, different, colour",
      'and', "Click to continue", 'simple/next.png',
      ];

/* 
function doCheck(group) {
      let strings = group[1];
      for (let j = 1; j < strings.length; j += 3) {
            let target = strings[j];
            let matches = target.match(/~.*?~/g);
            if (!matches) continue;
            for (let k = 0; k < matches.length; k++) {
                  let replacement = matches[k];
                  if (replacement == '~update~') continue;
                  if (typeof shieldData[replacement] === 'undefined') {
                        console.log("Missing array - " + matches[k]);
                  }
            }
      }

}

function validate() {
      console.log("Checking...");
      Object.entries(shieldData).forEach(doCheck);
      console.log("Checked");
}
*/

var urlArgs = 'highlight=0&size=' + size;

var shadow = '';

var bStack;
var qStack;
var sStack;

var fixedColour = false;

function init_build() {
    bStack = [];
    qStack = [];
    sStack = [];
    document.getElementById('blazon').value="";
    shadow="~start-here~";
    requestSVG('/include/drawshield.php?' + urlArgs +
        '&blazon=Argent%20the%20word%20shield%20sable%20the%20word%20Your%20sable%20in%20chief%20the%20word%20here%20in%20base%20sable','shieldimg');
    questions = document.getElementById("questions");
    if (questions.hasChildNodes()) {
        questions.removeChild(questions.childNodes[0]);
    }
    questions.appendChild( nextQuestion ());
     // validate();
}

function finished() {
    document.getElementById('blazon').removeAttribute('disabled');
    var questions = document.getElementById('questions');
      questions.removeChild(questions.firstChild);
    var para = document.createElement('p');
    var words = document.createTextNode('Congratulations! You have now completed your ' +
    'design! To make any more changes or chose different options ');
    para.appendChild(words);
    var link = document.createElement('a');
    link.setAttribute('href',"/create/index.html?" +
      'blazon=' + encodeURIComponent(document.getElementById('blazon').value));
    words = document.createTextNode('click this link ');
    link.appendChild(words);
    para.appendChild(link);
    words = document.createTextNode('to transfer your blazon to the "Create" page", or click the "Refresh" button to start over. ' +
      ' This program only has a small subset of blazonry terms, but I hope it has helped you understand how blazons are constructed. ' +
          'Take a look at the help page and the suggested reading to find out more of what can be done.');
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
    if (questions.hasChildNodes()) { // last question
      questions.removeChild(questions.firstChild);
    }
    questions.appendChild(qStack.pop());
  }
  // return false;
}

function do_reset() {
  document.getElementById('blazon').disabled='disabled';
  document.getElementById("savePanel").setAttribute("style", "display: none;");
  init_build();
  return false;
}

var fixedItems = [ 'pellet', 'golpe', 'guze', 'hurt', 'orange', 'pomme', 'torteau', 'ford'];

function do_replace(answer) {
      if (fixedItems.includes(answer)) fixedColour = true;
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
      $('html,body').scrollTop(0);
      return;
  } else {
      target = target[0];
  }
  let found = true;
  while (found) {
        found = false;
        if (target == "~x-colour~" && fixedColour) {
              shadow = shadow.replace(/~x-colour~/, '');
              fixedColour = false;
              target = shadow.match(/~.*?~/);
              if (target == null) {
                    finished();
                    return;
              } else {
                    target = target[0];
              }
              found = true;
        }
        if (target == "~update~") {
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
              found = true;
        }
      $('html,body').scrollTop(0);
  }

  let sData = shieldData[target];
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
            textInput.setAttribute('size','40');
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
            if (typeof (sData[i + 2]) == 'undefined') {
                console.log("data error in " + target + " at " + i);
                continue;
            }
            if (sData[i + 2] != '') {
                var prefix = '/build/img/';
                if (sData[i + 2].substr(0,1) == '/') prefix = '';
                img.setAttribute('src', prefix + sData[i + 2]);
            } else {
                img.setAttribute('src', '/build/img/none.png');
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


function saveBuild() {
    form = document.getElementById("saveForm");
    form.action = '/include/drawshield.php';
    form.target = '_blank';
    let filename = document.getElementById('filenameInput').value;
    if (filename == '') filename = 'shield';
    form.elements['filename'].value = filename;
    let blazonText = document.getElementById('blazon').value;
    form.elements['blazon'].value = blazonText;
    var saveWidth = document.getElementById('sizeInput').value;
    if (saveWidth == 0)
          saveWidth = 1000
    else if (saveWidth > 5000)
        saveWidth = 5000
    else if (saveWidth < 50)
        saveWidth = 50;
    form.elements["size"].value = saveWidth;
    var e = document.getElementById("formatSelect");
    form.elements["saveformat"].value = e.options[e.selectedIndex].value;
    form.submit();
}

window.onload=init_build();
