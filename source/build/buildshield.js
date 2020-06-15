
var version = "0.9b";
var size=280;

var shieldData = {};
shieldData["~start-here~"] = [ "Are you intending to create a simple shield (recommended) or something complex (many questions!)?",
    '~field~ ~update~ ~ordchg~', "A simple shield", 'simple/plain.png',
    '~x-field~ ~update~ ~x-add-items~ ~motto~', "A Complex Shield", 'simple/divided.png',
];

// The complex set of charges
shieldData["~x-tincture~"] = [ "Choose the type of tincture",
      '~x-colour~', "A plain colour", 'simple/plain.png',
      '~x-treatment~',  "A treatment", 'simple/treatment.png',
      '~x-fur~',   "A fur", 'simple/fur.png',
];
shieldData["~x-field~"] = [ "Choose the type of field",
      '~x-colour~', "A plain colour", 'simple/plain.png',
      '~x-treatment~',  "A field treatment", 'simple/treatment.png',
      '~x-fur~',   "A fur", 'simple/fur.png',
    '~x-divided~', "Divided into two or more parts", 'simple/divided.png'
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
'division-stroke', "division-stroke", 'col/division-stroke.png',
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
      'and ~x-tincture~', 'simple/Yes', 'yes.png',
      '', "No", 'simple/no.png',
];
shieldData["~x-add-items~"] = [ "Do you want to add further elements?",
      '', "No", 'simple/no.png',
    ];
shieldData["~add-motto~"] = [ "Do you want to add a motto below the pauldron?",
      'motto ~string~', 'simple/Yes', 'yes.png',
      '', "No", 'simple/no.png',
      ];
shieldData["~string~"] = [ "Enter some text and press the Submit button",
      '$', 'Your text', '',
      ];

// The simple set of elements 
shieldData["~field~"] = [ "Choose the type of field",
      '~plain~', "A single colour or pattern", 'simple/plain.png',
      '~divided~', "Divided into two or more parts", 'simple/divided.png'
      ];
shieldData["~plain~"] = [ "Now choose a type of colour",
      '~colour~', "A plain colour", 'simple/plain.png',
      '~treatment~',  "A field treatment", 'simple/treatment.png',
      '~fur~',   "A fur", 'simple/fur.png'
      ];
shieldData["~fur~"] = [ "Choose one of the furs",
      'ermine', "Ermine", 'simple/ermine.png',
      'potent', "Potent", 'simple/potent.png',
      'pean', "Pean", 'simple/pean.png',
      'vair', "Vair", 'simple/vair.png',
      'counter-ermine', "Counter-ermine", 'simple/ermines.png',
      'vair-en-point', "Vair-en-point", 'simple/vair-en-point.png',
      'counter-potent', "Counter-potent", 'simple/counter-potent.png',
      'erminois', "Erminois", 'erminois.png'
      ];
shieldData["~colour~"] = [ "Choose a plain colour",
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
      'orange', "Orange", 'simple/orange.png',
      'tenne', "Tenne", 'tenne.png'
      ];
shieldData["~treatment~"] = [ "Choose the type of treatment",
      'masoned ~colour~ ~and~ ~colour~', "Masoned", 'simple/masoned.png',
      'honeycombed ~colour~ ~and~ ~colour~', "Honeycombed", 'simple/honeycombed.png',
      'fretty ~colour~ ~and~ ~colour~', "Fretty", 'simple/fretty.png',
      'crusilly ~colour~ ~and~ ~colour~', "Crusilly", 'simple/crusilly.png',
      'annuletty ~colour~ ~and~ ~colour~', "Anuletty", 'simple/annuletty.png',
      'fleury ~colour~ ~and~ ~colour~', "Fleury", 'simple/fleury.png',
      'scaly ~colour~ ~and~ ~colour~', "Scaly", 'simple/scaly.png',
      'lozengy ~colour~ ~and~ ~colour~', "Lozengy", 'lozengy.png'
      ];
shieldData["~and~"] = [ "Now choose another, different colour",
      'and', "Click to continue", 'simple/next.png',
      ];
shieldData["~ordchg~"] = [ "Do you want to add something else?",
      '~ordinary~ ~update~', "An Ordinary", 'simple/ordinary.png',
      '~diminutives~ ~update~', "Some Smaller Ordinaries", 'simple/diminutive.png',
      '~numcharges~', "Some Charges", 'simple/charge.png',
      'on ~ordinary~ ~numcharges~ ~update~', "Some charges on an ordinary", 'simple/chgonord.png',
      'A ~chargegroup~ ~chargeinposition~ ~update~', "One charge in a set position", 'simple/indexterchief.png',
      ];
shieldData["~chargeinposition~"] = [ "Where do you want to place the charge?",
      'in dexter chief', "In dexter chief", 'simple/indexterchief.png',
      'in middle chief', "In middle chief", 'simple/inmiddlechief.png',
      'in sinister chief', "In sinister chief", 'simple/insinisterchief.png',
      'in dexter base', "In dexter base", 'simple/indexterbase.png',
      'in middle base', "In middle base", 'simple/inmiddlebase.png',
      'in sinister base', "In sinister base", 'simple/insinisterbase.png',
      'in fess point', "In fess point", 'simple/infesspoint.png',
      'in nombril', "In nombril", 'simple/innombril.png',
      ];
shieldData["~divided~"] = [ "How do you want to divide the shield? (You will colour the black area first)",
      'per pale ~linemod~ ~plain~ and ~plain~', "Per Pale", 'simple/perpale.png',
      'per bend ~plain~ and ~plain~', "Per Bend", 'simple/perbend.png',
      'quarterly ~plain~ and ~plain~', "Quartely", 'simple/quarterly.png',
      'tierced in pale ~plain~, ~plain~ and ~plain~', "Tierced in pale", 'simple/tierced-in-pale.png',
      'per pall ~plain~, ~plain~ and ~plain~', "Per pall", 'simple/perpall.png',
      'per chevron ~plain~ and ~plain~', "Per Chevron", 'simple/perchevron.png',
      'barry ~plain~ and ~plain~', "Barry", 'simple/barry.png',
      'per fess ~linemod~ ~plain~ and ~plain~', "Per Fess", 'simple/perfess.png',
      'paly ~plain~ and ~plain~', "Paly", 'simple/paly.png',
      'per pile ~plain~ and ~plain~', "Per pile", 'simple/perpile.png',
      'per bend sinister ~plain~ and ~plain~', "Per Bend Sinister", 'simple/perbendsin.png',
      'gyronny ~plain~ and ~plain~', "Gyronny", 'simple/gyronny.png',
      ];
shieldData["~ordinary~"] = [ "Choose an ordinary to add to the shield",
      'a bend ~ordlinemod~ ~plain~', "A Bend", 'simple/bend.png',
      'a fess ~ordlinemod~ ~plain~', "A Fess", 'simple/fess.png',
      'a pale ~plain~', "A Pale", 'simple/pale.png',
      'a chief ~linemod~ ~plain~', "A Chief", 'simple/chief.png',
      'a chevron ~plain~', "A Chevron", 'simple/chevron.png',
      'a cross ~plain~', "A Cross", 'simple/cross.png',
      'a bordure ~plain~', "A Bordure", 'simple/bordure.png',
      'a canton ~plain~', "A Canton", 'simple/canton.png',
      ];
shieldData["~ordlinemod~"] = [ "How should the edges of the ordinary be drawn?",
      '', "Plain", 'simple/perfess.png',
      'angled', "Angled", 'simple/angled.png',
      'bevilled', "Bevilled", 'simple/bevilled.png',
      'escartelly', "Escartelly", 'simple/escartelly.png',
      'indented', "Indented", 'simple/indented.png',
      ];
shieldData["~linemod~"] = [ "How should the lines or edges be drawn?",
      '', "Plain", 'simple/perfess.png',
      'angled', "Angled", 'simple/angled.png',
      'bevilled', "Bevilled", 'simple/bevilled.png',
      'escartelly', "Escartelly", 'simple/escartelly.png',
      'indented', "Indented", 'simple/indented.png',
      'engrailed', "Engrailed", 'simple/engrailed.png',
      'embattled', "Embattled", 'simple/embattled.png',
      'nebuly', "Nebuly", 'simple/nebuly.png',
      ];
shieldData["~numcharges~"] = [ "How many charges do you want to add?",
      'a ~chargegroup~', "One", 'simple/one.png',
      'two ~chargegroup~', "Two", 'simple/two.png',
      'three ~chargegroup~', "Three", 'simple/three.png',
      'four ~chargegroup~', "Four", 'simple/four.png',
      'five ~chargegroup~', "Five", 'simple/five.png',
      'six ~chargegroup~', "Six", 'simple/six.png',
      ];
shieldData["~diminutives~"] = [ "How many small ordinaries (known as diminutives) would you like to add?",
      'a ~diminutive~ ~colour~', "One", 'simple/one.png',
      'two ~diminutive~ ~colour~', "Two", 'simple/two.png',
      'three ~diminutive~ ~colour~', "Three", 'simple/three.png',
      'four ~diminutive~ ~colour~', "Four", 'simple/four.png',
      ];
shieldData["~diminutive~"] = [ "Which diminutive would you like to add?",
      'bar', "Bar", "bar.png",
      'palet', "Palet", "palet.png",
      'bendlet', "Bendlet", "bendlet.png",
      'chevronel', "Chevronel", "chevronel.png",
      'chevronel interlaced', "Chevronel Interlaced", "chevronel-interlaced.png",
      'piles', "Piles", "piles.png",
      ];
shieldData["~chargegroup~"] = [ "What type of charge would you like to add?",
      '~shapecharge~', "Shapes", 'simple/shape.png',
      '~lioncharge~', "Lions", 'simple/lions.png',
      '~birdcharge~', "Birds", 'simple/birds.png',
      '~weaponcharge~', "Weapons", 'simple/weapons.png',
      '~plantcharge~', "Plants", 'simple/plants.png',
      ];
shieldData["~shapecharge~"] = ["Which shape would you like to use?",
      'mullet ~colour~', "Mullet", 'simple/mullet.png',
      'bezant ~colour~', "Bezant", 'simple/bezant.png',
      'crescent ~colour~', "Crescent", 'simple/crescent.png',
      'lozenge ~colour~', "Lozenge", 'simple/lozenge.png',
      'billet ~colour~', "Billet", 'simple/billet.png',
      'annulet ~colour~', "Annulet", 'simple/annulet.png',
      ];
shieldData["~lioncharge~"] = ["Which type of lion would you like to use?",
      'lion passant ~colour~', "Lion Passant", 'simple/lion-passant.png',
      'lion rampant ~colour~', "Lion Rampant", 'simple/lion-rampant.png',
      'lion sejant ~colour~', "Lion Sejant", 'simple/lion-sejant.png',
      'lion statant ~colour~', "Lion Statant", 'simple/lion-statant.png',
      'lion dormant ~colour~', "Lion Dormant", 'simple/lion-dormant.png',
      'lion courant ~colour~', "Lion Courant", 'simple/lion-courant.png',
      'lion head guardant ~colour~', "Lion Head Guardant", 'simple/lion-head-guardant.png',
      ];
shieldData["~birdcharge~"] = ["Which type of bird would you like to use?",
      'cornish chough proper', "Cornish Chough", 'simple/chough.png',
      'owl ~colour~', "Owl", 'simple/owl.png',
      'crow ~colour~', "Crow", 'simple/crow.png',
      'peacock ~colour~', "Peacock", 'simple/peacock.png',
      'eagle ~colour~', "Eagle", 'simple/eagle.png',
      'duck ~colour~', "Duck", 'simple/duck.png',
      ];
shieldData["~weaponcharge~"] = ["Which type of weapon would you like to use?",
      'crossbow ~colour~', "Crossbow", 'simple/crossbow.png',
      'dagger ~colour~', "Dagger", 'simple/dagger.png',
      'sabre ~colour~', "Sabre", 'simple/sabre.png',
      'cannon ~colour~', "Cannon", 'simple/cannon.png',
      'bundle of arrows ~colour~', "Bundle of Arrows", 'simple/arrows.png',
      ];
shieldData["~plantcharge~"] = ["Which type of plant would you like to use?",
      'rose ~colour~ seeded argent barbed gules', "Rose", "rose.png",
      'lily ~colour~', "Lily", 'simple/lily.png',
      'vine ~colour~', "Vine", 'simple/vine.png',
      'thistle ~colour~', "Thistle", 'simple/thistle.png',
      'cinquefoil ~colour~', "Cinquefoil", 'simple/cinquefoil.png',
      'oak tree ~colour~', "Oak Tree", 'simple/oak-tree.png',
      ];

var urlArgs = 'highlight=0&size=' + size;

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
        '&blazon=Argent%20the%20word%20shield%20sable%20the%20word%20Your%20sable%20in%20chief%20the%20word%20here%20in%20base%20sable','shieldimg');
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
