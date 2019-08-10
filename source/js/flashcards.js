const cards = [
    ['angled', 'What is this edge called?', 'This is an Angled edge.' ],
    ['annulet','What is the name of this charge?','This is an annulet'],
    ['annuletty', 'What is this treatment?', 'This is called annuletty, there is also a charge called annulet.' ],
    ['argent', 'What is this metal?', 'This is called Argent (silver, altough normally shown as white). Arg. for short.' ],
    ['azure', 'What is this colour?', 'This is called Azure (blue) or Az. for short.' ],
    ['bar', 'What is this sub-ordinary?', 'This is the smaller version of a Fess, known as a Bar.' ],
    ['barry', 'What is this division?', 'This is a Barry division, you can specify the number of bars.' ],
    ['bend', 'What is this ordinary?', 'This is a Bend. There is also the Bend Sinister.' ],
    ['bendlet', 'What is this diminutive?', 'This is a small Bend, known as a Bendlet.' ],
    ['bevilled', 'What is this edge called?', 'This edge is called Bevilled.' ],
    ['bezant', 'What is this charge?', 'This is a Bezant, a type of coin. It can also be described as a Roundel Or' ],
    ['billet', 'Can you name this charge?', 'This is the billet, possibly representing a clod of earth'],
    ['bordure', 'What is this sub-ordinary?', 'This is a Bordure.' ],
    ['brunatre', 'What is this colour?', 'This is called Brunatre (brown], a less common colour.' ],
    ['canton', 'What is this sub-ordinary?', 'This is a Canton, it can be in the sinister or there can be two.' ],
    ['carnation', 'What is this colour?', 'This pink colour is called Carnation, it is not commonly found' ],
    ['chevron', 'What is this ordinary?', 'This is a Chevron. There are several variant types.' ],
    ['chevronel', 'What is this diminutive?', 'This is a small Chevron, know as a chevronel' ],
    ['chevronel-interlaced', 'What is this diminutive?', 'chevronel-interlaced' ],
    ['chief', 'What is this ordinary?', 'This is the Chief. Charges can also be placed In Chief.' ],
    ['chough', 'What is this charge?', 'This bird is a Cornish Chough, although many birds are similar.' ],
    ['counter-potent', 'What is this fur?', 'This fur is known as Counter-Potent' ],
    ['cross', 'What is this ordinary?', 'Not difficult, this is a Cross.' ],
    ['cross', 'What is the name of this charge?', 'This charge is a crossbow.' ],
    ['crown', 'What is this charge?', 'This is a type of Crown, known as an Antique crown.' ],
    ['crescent', 'What is this charge?', 'This charge is a crescent'],
    ['crusilly', 'What is this treatment?', 'This is called Crusilly, a field strewn with crosses.' ],
    ['eagle','What type of bird is this?', 'This is the heraldic eagle'],
    ['embattled', 'What is this edge called?', 'This edge is known as Embattled.' ],
    ['engrailed', 'What is this edge called?', 'It is called Engrailed' ],
    ['ermine', 'What is this fur?', 'This is known as Ermine, the spots represent tails.' ],
    ['ermines', 'What is this fur?', 'This is called Ermines, the inverse of Ermine.' ],
    ['erminois', 'What is this fur?', 'This is Erminois, a different coloured variant of Ermine tails.' ],
    ['escartelly', 'What is this edge called?', 'This is known as Escartelly.' ],
    ['fess', 'What is this ordinary?', 'This is the Fess, a very common early ordinary.' ],
    ['fleury', 'What is this treatment?', 'This called Fleury, or Semy de Lys.' ],
    ['fretty', 'What is this treatment?', 'This is called Fretty, there is also a similar charge called a Fret.' ],
    ['gauntlet', 'What is this charge?', 'This is a Gauntlet. Many items of armour appear in heraldry.' ],
    ['gules', 'What is this colour?', 'This is Gules (red], or Gu. for short.' ],
    ['gyronny', 'What is this division?', 'This is Gyronny of eight. You can also use 6, 10, or 12.' ],
    ['honeycombed', 'What is this treatment?', 'This known (for obvious reasons) as Honeycombed' ],
    ['indented', 'What is this edge called?', 'It is an Indented edge.' ],
    ['lion-passant', 'In what stance, or pose, is this lion?', 'This is a Lion Passant.' ],
    ['lion-couchant', 'In what stance, or pose, is this lion?', 'This is a Lion Couchant.' ],
    ['lion-courant', 'In what stance, or pose, is this lion?', 'This is a Lion courant.' ],
    ['lion-dormant', 'In what stance, or pose, is this lion?', 'This is a Lion dormant.' ],
    ['lion-rampant', 'In what stance, or pose, is this lion?', 'This is a Lion rampant.' ],
    ['lion-sejant', 'In what stance, or pose, is this lion?', 'This is a Lion sejant.' ],
    ['lozengy', 'What is this treatment?', 'This is Lozengy, there is also a charge called Lozenge.' ],
    ['lozenge', 'What is this the name of this charge?', 'This is a Lozenge.' ],
    ['maltese-cross', 'What is this charge?', 'This is called a Maltese Cross.' ],
    ['masoned', 'What is this treatment?', 'This is Masoned' ],
    ['mullet', 'What is this charge?', 'This is a mullet. You can also specify the number of points in the shape.' ],
    ['murrey', 'What is this colour?', 'This is called Murrey, a less common colour sometimes know as a stain.' ],
    ['nebuly', 'What is this edge called?', 'The edge is called Nebuly.' ],
    ['or', 'What is this metal?', 'This metal is called Or. (Gold, but normally shown as yellow).' ],
    ['orange', 'What is this colour?', 'This is Orange, a less commonly found colour.' ],
    ['pale', 'What is this ordinary?', 'This is a Pale, it can also be truncated at the top or bottom.' ],
    ['palet', 'What is this diminutive?', 'This is a small Pale, called a Palet. More than one is possible.' ],
    ['paly', 'What is this division?', 'This is called Paly, a series of alternately coloured Palets.' ],
    ['pean', 'What is this fur?', 'The fur is called Pean.' ],
    ['perbend', 'What is this division?', 'This is a a Per Bend division, sometimes also called Parted Bendwise.' ],
    ['perbendsin', 'What is this division?', 'It is a Per Bend Sinister division, also Parted Bendwise Sinister.' ],
    ['perchevron', 'What is this division?', 'This is a Per Chevron division.' ],
    ['perfess', 'What is this division?', 'This is Per Fess, the upper tincture is given first.' ],
    ['perpale', 'What is this division?', 'This is Per Pale, you can also have a patterned edge.' ],
    ['perpall', 'What is this division?', 'The division is called Per Pall.' ],
    ['perpile', 'What is this division?', 'This division is known as Per Pile' ],
    ['piles', 'What is this diminutive?', 'This is a Pile, there can be two or more of these.' ],
    ['potent', 'What is this fur?', 'This type of fur is known as Potent' ],
    ['purpure', 'What is this colour?', 'This is called purpure, it is not a common colour.' ],
    ['quarterly', 'What is this division?', 'This is Quarterly - do not confuse this with a quartered shield.' ],
    ['rose', 'What is this colour?', 'This colour is Rose, not a commonly found colour.' ],
    ['sable', 'What is this colour?', 'This is called Sable (black], or Sa. for short.' ],
    ['sabre', 'Can you name this type of sword?', 'This sword is a Sabre'],
    ['scaly', 'What is this treatment?', 'This is a treatment called Scaly.' ],
    ['tenne', 'What is this colour?', 'This (rather uncommon) colour is called Tenne.' ],
    ['thistle', 'What type of plant is this charge?', 'This charge is the thistle'],
    ['tierced-in-pale', 'What is this division?', 'This is called Tierced-in-pale, it requires three tinctures.' ],
    ['vair', 'What is this fur?', 'This type of fur is known as Vair' ],
    ['oak-tree','How do you describe the roots of this tree?','A tree eradicated has been pulled up with its roots'],
    ['vair-en-point', 'What is this fur?', 'This type of fur is known as Vair-en-Point, a variant of Vair.' ],
    ['vert', 'What is this colour?', 'This is called Vert (green], there is no abbreviation.' ],
    ['indexterchief', 'In what part of the shield is the roundel?', 'The Roundel is in dexter chief.' ],
    ['insinisterchief', 'In what part of the shield is the roundel?', 'The Roundel is in sinister chief.' ],
    ['inmiddlechief', 'In what part of the shield is the roundel?', 'The Roundel is in middle chief.' ],
    ['innombril', 'In what part of the shield is the roundel?', 'The Roundel is in nombril, or in navel point.' ],
    ['inmiddlebase', 'In what part of the shield is the roundel?', 'The Roundel is in middle base.' ],
    ['indexterbase', 'In what part of the shield is the roundel?', 'The Roundel is in dexter base.' ],
    ['insinisterbase', 'In what part of the shield is the roundel?', 'The Roundel is in sinister base.' ],
    ['infesspoint', 'In what part of the shield is the roundel?', 'The Roundel is in fess point.' ]
];
  
var prevQno = -1;
var buttonState = 'giveAnswer';

function buttonHandler() {
    if (buttonState === 'giveAnswer') {
        showAnswer();
    } else {
        askQuestion();
    }
}

function askQuestion() {
    var thisQno = -1;
    do {
        thisQno = Math.floor(Math.random() * cards.length);
    } while (thisQno === prevQno);
    prevQno = thisQno;
    $('#flashcard p.question').text(cards[thisQno][1]);
    $('#flashcard img').attr('src', '/build/img/' + cards[thisQno][0] + '.png');
    $('#flashcard button').text('Reveal Answer');
    $('#flashcard p.answer').text("");
    buttonState = 'giveAnswer';
}

function showAnswer() {
    $('#flashcard p.answer').text(cards[prevQno][2]);
    $('#flashcard button').text('Ask another');
    buttonState = 'askQuestion';
}

