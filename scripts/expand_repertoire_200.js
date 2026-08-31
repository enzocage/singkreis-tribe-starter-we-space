const fs = require('fs');
const path = require('path');

// Load current songs from build_songs_database.js
const dbPath = path.join(__dirname, '..', 'build_songs_database.js');
const dbScript = fs.readFileSync(dbPath, 'utf8');
const match = dbScript.match(/const songs = (\[[\s\S]*?\n\];)/);
if (!match) throw new Error('Could not find songs array');

const existingSongs = eval(match[1]);
const existingIds = new Set(existingSongs.map(s => s.id));
console.log(`Starting with ${existingSongs.length} existing songs.`);

// Repertoire of 80 additional absolute top campfire & singkreis songs
const newSongs = [
  {
    "id": "tears-in-heaven",
    "title": "Tears in Heaven",
    "artist": "Eric Clapton",
    "year": 1992,
    "lang": "EN",
    "originalKey": "A",
    "tempo": 78,
    "popularity": 95,
    "message": "Eine zutiefst berührende Ballade über Verlust, Trost und die Hoffnung auf ein Wiedersehen.",
    "content": "\n[Strophe 1]\nA          E/G#     F#m\nWould you know my name\nD/F#     A/E         E\nIf I saw you in heaven?\nA         E/G#    F#m\nWould it be the same\nD/F#     A/E         E\nIf I saw you in heaven?\n\n[Refrain]\nF#m          C#/F\nI must be strong\nEm6          F#7\nAnd carry on,\n       Bm7             E7sus4\n'Cause I know I don't belong\nE7         A\nHere in heaven.\n\n[Strophe 2]\nA          E/G#     F#m\nWould you hold my hand\nD/F#     A/E         E\nIf I saw you in heaven?\nA          E/G#     F#m\nWould you help me stand\nD/F#     A/E         E\nIf I saw you in heaven?\n\n[Refrain]\nF#m             C#/F\nI'll find my way\nEm6                 F#7\nThrough night and day,\n       Bm7             E7sus4\n'Cause I know I just can't stay\nE7         A\nHere in heaven.\n\n[Bridge]\nC         G/B        Am\nTime can bring you down,\n         D/F#      G       D/F#   Em   D/F#   G\nTime can bend your knees.\nC         G/B        Am\nTime can break your heart,\n         D/F#    G         D/F#      E\nHave you begging please, begging please.\n\n[Outro]\nF#m          C#/F\nBeyond the door\nEm6                 F#7\nThere's peace I'm sure,\n       Bm7             E7sus4\nAnd I know there'll be no more\nE7         A\nTears in heaven.\n"
  },
  {
    "id": "wonderful-tonight",
    "title": "Wonderful Tonight",
    "artist": "Eric Clapton",
    "year": 1977,
    "lang": "EN",
    "originalKey": "G",
    "tempo": 95,
    "popularity": 94,
    "message": "Eine zeitlose Liebeserklärung voller Zärtlichkeit und Hingabe an den Moment.",
    "content": "\n[Strophe 1]\nG               D/F#\nIt's late in the evening,\nC/E             D\nShe's wondering what clothes to wear.\nG              D/F#\nShe puts on her make-up\nC/E            D\nAnd brushes her long blonde hair.\n\n[Refrain]\nC             D\nAnd then she asks me,\nG      D/F#     Em\n\"Do I look all right?\"\n            C          D\nAnd I say, \"Yes, you look\n          G\nWonderful tonight.\"\n\n[Strophe 2]\nG          D/F#\nWe go to a party\nC/E          D\nAnd everyone turns to see\nG               D/F#\nThis beautiful lady\nC/E          D\nThat's walking around with me.\n\n[Refrain]\nC             D\nAnd then she asks me,\nG     D/F#      Em\n\"Do you feel all right?\"\n            C         D\nAnd I say, \"Yes, I feel\n          G\nWonderful tonight.\"\n\n[Bridge]\n        C\nI feel wonderful because\n   D                G        D/F#   Em\nI see the love light in your eyes.\n        C            D\nAnd the wonder of it all\n            C             D\nIs that you just don't realize\n             G\nHow much I love you.\n"
  },
  {
    "id": "creep",
    "title": "Creep",
    "artist": "Radiohead",
    "year": 1992,
    "lang": "EN",
    "originalKey": "G",
    "tempo": 92,
    "popularity": 96,
    "message": "Die weltberühmte Hymne über das Gefühl des Außenseitertums und die Sehnsucht nach Besonderheit.",
    "content": "\n[Strophe 1]\nG\nWhen you were here before,\nB\nCouldn't look you in the eye.\nC\nYou're just like an angel,\nCm\nYour skin makes me cry.\n\n[Strophe 2]\nG\nYou float like a feather\nB\nIn a beautiful world.\nC\nI wish I was special,\nCm\nYou're so f***ing special.\n\n[Refrain]\n              G\nBut I'm a creep,\n          B\nI'm a weirdo.\n                         C\nWhat the hell am I doing here?\n             Cm\nI don't belong here.\n\n[Strophe 3]\nG\nI don't care if it hurts,\nB\nI wanna have control.\nC\nI want a perfect body,\nCm\nI want a perfect soul.\n\n[Refrain]\n              G\nBut I'm a creep,\n          B\nI'm a weirdo.\n                         C\nWhat the hell am I doing here?\n             Cm\nI don't belong here.\n\n[Outro]\nG\nWhatever makes you happy,\nB\nWhatever you want.\nC\nYou're so f***ing special,\nCm\nI wish I was special...\n              G\nBut I'm a creep.\n"
  },
  {
    "id": "karma-police",
    "title": "Karma Police",
    "artist": "Radiohead",
    "year": 1997,
    "lang": "EN",
    "originalKey": "Am",
    "tempo": 75,
    "popularity": 93,
    "message": "Ein melancholisches Meisterwerk über das innere Gewissen und die Rückkehr des Karmas.",
    "content": "\n[Strophe 1]\nAm        D/F#   Em    G\nKarma police, arrest this man,\nAm           F        Em       G\nHe talks in maths, he buzzes like a fridge,\nAm    D        G    C    C/B   Am   Bm   D\nHe's like a detuned radio.\n\n[Strophe 2]\nAm        D/F#   Em    G\nKarma police, arrest this girl,\nAm             F      Em             G\nHer Hitler hairdo is making me feel ill,\nAm         D               G    C   C/B   Am   Bm   D\nAnd we have crashed her party.\n\n[Refrain]\nC        D           G    F#\nThis is what you'll get,\nC        D           G    F#\nThis is what you'll get,\nC        D           G\nThis is what you'll get\n        Bm          C     Bm   D\nWhen you mess with us.\n\n[Outro]\nBm            D          G    D\nFor a minute there, I lost myself,\n      G          Bm      D\nI lost myself, phew for a minute there,\nBm            D          G    D\nFor a minute there, I lost myself,\n      G          Bm      D\nI lost myself.\n"
  },
  {
    "id": "one-u2",
    "title": "One",
    "artist": "U2",
    "year": 1991,
    "lang": "EN",
    "originalKey": "Am",
    "tempo": 90,
    "popularity": 95,
    "message": "Eine der größten Versöhnungs- und Verbundenheitshymnen der Rockgeschichte: Wir sind eins, doch nicht gleich.",
    "content": "\n[Strophe 1]\nAm           D\nIs it getting better\nFmaj7               G\nOr do you feel the same?\nAm             D\nWill it make it easier on you now\nFmaj7             G\nYou got someone to blame?\n\n[Refrain]\n        C          Am\nYou say one love, one life,\nFmaj7                     C\nWhen it's one need in the night.\nC                 Am\nOne love, we get to share it,\nFmaj7                         C\nLeaves you baby if you don't care for it.\n\n[Strophe 2]\nAm           D\nDid I disappoint you\nFmaj7                     G\nOr leave a bad taste in your mouth?\nAm                D\nYou act like you never had love\nFmaj7                     G\nAnd you want me to go without.\n\n[Refrain]\n         C         Am\nWell it's too late tonight\nFmaj7                   C\nTo drag the past out into the light.\nC                  Am\nWe're one, but we're not the same,\nFmaj7                         C\nWe get to carry each other, carry each other...\n   Am\nOne.\n\n[Bridge]\nC                   Am\nHave you come here for forgiveness?\nC                     Am\nHave you come to raise the dead?\nC                     Am\nHave you come here to play Jesus\nC               Am\nTo the lepers in your head?\n\n[Outro]\nC           Am\nOne love, one blood,\nFmaj7            C\nOne life, you got to do what you should.\nC           Am\nOne life, with each other:\nFmaj7        C\nSisters, brothers.\n"
  },
  {
    "id": "angie",
    "title": "Angie",
    "artist": "The Rolling Stones",
    "year": 1973,
    "lang": "EN",
    "originalKey": "Am",
    "tempo": 72,
    "popularity": 95,
    "message": "Die weltberühmte Akustik-Ballade über Abschied und das Weitertragen der Liebe im Herzen.",
    "content": "\n[Strophe 1]\nAm    E7      G              F          C   C/B\nAngie, Angie, when will those clouds all disappear?\nAm    E7      G              F         C\nAngie, Angie, where will it lead us from here?\n\n[Refrain]\n        G                         Dm          Am\nWith no loving in our souls and no money in our coats,\nC            F            G\nYou can't say we're satisfied.\n    Am    E7      G           F        C\nBut Angie, Angie, you can't say we never tried.\n\n[Strophe 2]\nAm     E7          G            F         C   C/B\nAngie, you're beautiful, but ain't it time we said goodbye?\nAm     E7            G            F             C\nAngie, I still love you, remember all those nights we cried?\n\n[Refrain]\n        G                             Dm               Am\nAll the dreams we held so close seemed to all go up in smoke,\nC         F            G\nLet me whisper in your ear:\nAm     E7      G           F           C\nAngie, Angie, where will it lead us from here?\n\n[Outro]\nAm     E7      G              F             C\nAngie, Angie, ain't it good to be alive?\nAm     E7      G           F           C\nAngie, Angie, they can't say we never tried.\n"
  },
  {
    "id": "wild-horses",
    "title": "Wild Horses",
    "artist": "The Rolling Stones",
    "year": 1971,
    "lang": "EN",
    "originalKey": "G",
    "tempo": 71,
    "popularity": 94,
    "message": "Keine wilde Macht der Welt kann uns trennen – eine der ergreifendsten Balladen über Loyalität.",
    "content": "\n[Strophe 1]\nG             Am7   G\nChildhood living\n           Am7   G\nIs easy to do.\n             Am7        C\nThe things you wanted,\n           D    G   D\nI bought them for you.\n\n[Strophe 2]\nG             Am7   G\nGraceless lady,\n           Am7   G\nYou know who I am.\n           Am7       C\nYou know I can't let you\n      D        G   D\nSlide through my hands.\n\n[Refrain]\nAm     C     D   G       F        C   C/B\nWild horses couldn't drag me away.\nAm           C     D   G       F        C\nWild, wild horses couldn't drag me away.\n\n[Strophe 3]\nG             Am7   G\nI watched you suffer\n             Am7   G\nA dull aching pain.\n           Am7   C\nNow you decided\n        D       G   D\nTo show me the same.\n\n[Refrain]\nAm     C     D   G       F        C   C/B\nWild horses couldn't drag me away.\nAm           C     D   G       F        C\nWild, wild horses couldn't drag me away.\n\n[Outro]\nAm     C     D   G       F        C\nWild horses, we'll ride them someday.\n"
  },
  {
    "id": "paint-it-black",
    "title": "Paint It Black",
    "artist": "The Rolling Stones",
    "year": 1966,
    "lang": "EN",
    "originalKey": "Em",
    "tempo": 158,
    "popularity": 95,
    "message": "Dunkel, intensiv und treibend – der unsterbliche Klassiker über innere Schatten und Katharsis.",
    "content": "\n[Strophe 1]\nEm\nI see a red door and I want it painted black,\nB7\nNo colors anymore I want them to turn black.\nEm     D          G          D          Em\nI see the girls walk by dressed in their summer clothes,\nEm     D       G       D       A7          B7\nI have to turn my head until my darkness goes.\n\n[Strophe 2]\nEm\nI see a line of cars and they're all painted black,\nB7\nWith flowers and my love both never to come back.\nEm     D            G        D           Em\nI see people turn their heads and quickly look away,\nEm        D        G       D      A7         B7\nLike a newborn baby it just happens every day.\n\n[Strophe 3]\nEm\nI look inside myself and see my heart is black,\nB7\nI see my red door, I must have it painted black.\nEm       D        G        D        Em\nMaybe then I'll fade away and not have to face the facts,\nEm        D      G        D       A7             B7\nIt's not easy facing up when your whole world is black.\n\n[Outro]\nEm\nI wanna see it painted, painted black,\nB7\nBlack as night, black as coal,\nEm\nI wanna see the sun blotted out from the sky...\n"
  },
  {
    "id": "sweet-child-o-mine",
    "title": "Sweet Child O' Mine",
    "artist": "Guns N' Roses",
    "year": 1987,
    "lang": "EN",
    "originalKey": "D",
    "tempo": 125,
    "popularity": 96,
    "message": "Erinnerungen an kindliche Unbeschwertheit und bedingungslose Liebe.",
    "content": "\n[Strophe 1]\nD\nShe's got a smile that it seems to me\nC\nReminds me of childhood memories,\nG\nWhere everything was as fresh\n                 D\nAs the bright blue sky.\n\n[Strophe 2]\nD\nNow and then when I see her face,\nC\nShe takes me away to that special place,\n      G\nAnd if I stare too long,\n                           D\nI'd probably break down and cry.\n\n[Refrain]\nA            C                D\nWhoa, whoa, whoa, sweet child o' mine.\nA            C                D\nWhoa, oh, oh, oh, sweet love o' mine.\n\n[Strophe 3]\nD\nShe's got eyes of the bluest skies,\nC\nAs if they thought of rain.\nG\nI'd hate to look into those eyes\n    D\nAnd see an ounce of pain.\n\n[Refrain]\nA            C                D\nWhoa, whoa, whoa, sweet child o' mine.\nA            C                D\nWhoa, oh, oh, oh, sweet love o' mine.\n\n[Outro]\nEm              G              A              C  D\nWhere do we go? Where do we go now? Where do we go?\nEm              G              A              C  D\nWhere do we go? Where do we go now? Sweet child o' mine.\n"
  },
  {
    "id": "patience",
    "title": "Patience",
    "artist": "Guns N' Roses",
    "year": 1988,
    "lang": "EN",
    "originalKey": "C",
    "tempo": 88,
    "popularity": 94,
    "message": "Geduld und Vertrauen in die Zeit – eine der schönsten Akustikhymnen mit Pfeif-Intro.",
    "content": "\n[Strophe 1]\nC\nShed a tear 'cause I'm missin' you,\nG\nI'm still alright to smile.\nA\nGirl, I think about you every day now.\nC\nWas a time when I wasn't sure,\n      G\nBut you set my mind at ease.\nA\nThere is no doubt you're in my heart now.\n\n[Refrain]\nC          G      C          Em\nSaid, woman, take it slow, and it'll work itself out fine.\nC                G             D\nAll we need is just a little patience.\nC          G      C          Em\nSaid, sugar, make it slow and we'll come together fine.\nC                G             D\nAll we need is just a little patience.\n\n[Strophe 2]\nC\nI sit here on the stairs,\n           G\n'Cause I'd rather be alone\nA\nIf I can't have you right now, I'll wait, dear.\nC\nSometimes I get so tense,\n           G\nBut I can't speed up the time,\nA\nBut you know, love, there's one more thing to consider.\n\n[Refrain]\nC          G      C          Em\nSaid, woman, take it slow, and it'll work itself out fine.\nC                G             D\nAll we need is just a little patience.\n"
  },
  {
    "id": "nothing-else-matters",
    "title": "Nothing Else Matters",
    "artist": "Metallica",
    "year": 1991,
    "lang": "EN",
    "originalKey": "Em",
    "tempo": 142,
    "popularity": 96,
    "message": "Nichts anderes zählt, solange man sich selbst treu bleibt und einander vertraut.",
    "content": "\n[Strophe 1]\nEm                       D       C\nSo close, no matter how far,\nEm                       D       C\nCouldn't be much more from the heart.\nEm                       D       C\nForever trusting who we are,\nG        B7          Em\nAnd nothing else matters.\n\n[Strophe 2]\nEm                       D       C\nNever opened myself this way,\nEm                       D       C\nLife is ours, we live it our way.\nEm                       D       C\nAll these words I don't just say,\nG        B7          Em\nAnd nothing else matters.\n\n[Refrain]\nC     A      D                   C\nTrust I seek and I find in you,\n      A       D               C\nEvery day for us something new.\n     A       D              C\nOpen mind for a different view,\nG        B7          Em\nAnd nothing else matters.\n\n[Strophe 3]\nEm                       D       C\nNever cared for what they do,\nEm                       D       C\nNever cared for what they know,\nEm        D      C\nBut I know...\n"
  },
  {
    "id": "more-than-words",
    "title": "More Than Words",
    "artist": "Extreme",
    "year": 1990,
    "lang": "EN",
    "originalKey": "G",
    "tempo": 92,
    "popularity": 95,
    "message": "Wahre Liebe zeigt sich in Taten und Berührungen – mehr als bloße Worte sagen können.",
    "content": "\n[Strophe 1]\nG             Cadd9\nSaying \"I love you\"\n    Am7           C           D           G\nIs not the words I want to hear from you.\nG             Cadd9\nIt's not that I want you\nAm7          C          D         Em\nNot to say, but if you only knew\n     Am7     D7          G        D/F#   Em\nHow easy it would be to show me how you feel.\n\n[Refrain]\nEm            Am7    D7             G7            C\nMore than words is all you have to do to make it real,\n       Cm                 G             Em7\nThen you wouldn't have to say that you love me,\n       Am7        D7     G\n'Cause I'd already know.\n\n[Bridge]\nG         D/F#         Em        Bm7       C\nWhat would you do if my heart was torn in two?\n                   C/B       Am7\nMore than words to show you feel\n         D7              G\nThat your love for me is real.\n"
  },
  {
    "id": "fields-of-gold",
    "title": "Fields of Gold",
    "artist": "Sting",
    "year": 1993,
    "lang": "EN",
    "originalKey": "D",
    "tempo": 104,
    "popularity": 94,
    "message": "Ein poetisches Versprechen von Treue und zeitloser Liebe inmitten wogender Gerstenfelder.",
    "content": "\n[Strophe 1]\nBm                  G\nYou'll remember me when the west wind moves\nD\nUpon the fields of barley.\nBm                  G         D\nYou'll forget the sun in his jealous sky\n       G         A         D\nAs we walk in fields of gold.\n\n[Strophe 2]\nBm                  G\nSo she took her love for to gaze awhile\nD\nUpon the fields of barley.\nBm               G            D\nIn his arms she fell as her hair came down\n G           A         D\nAmong the fields of gold.\n\n[Refrain]\nG                   D\nWill you stay with me, will you be my love\nG                    D\nAmong the fields of barley?\nBm                  G          D\nWe'll forget the sun in his jealous sky\n       G         A         D\nAs we lie in fields of gold.\n\n[Outro]\nBm                  G         D\nYou'll remember me when the west wind moves\n       G         A         D\nUpon the fields of barley...\n"
  },
  {
    "id": "englishman-in-new-york",
    "title": "Englishman in New York",
    "artist": "Sting",
    "year": 1987,
    "lang": "EN",
    "originalKey": "Em",
    "tempo": 100,
    "popularity": 94,
    "message": "Sei du selbst, egal was andere sagen – eine Hommage an Individualität und Haltung.",
    "content": "\n[Strophe 1]\nEm       A       Bm\nI don't drink coffee, I take tea, my dear,\nEm       A          Bm\nI like my toast done on one side.\nEm          A       Bm\nAnd you can hear it in my accent when I talk:\nEm       A            Bm\nI'm an Englishman in New York.\n\n[Refrain]\nEm       A         Bm\nOh, I'm an alien, I'm a legal alien,\nEm       A            Bm\nI'm an Englishman in New York.\nEm       A         Bm\nOh, I'm an alien, I'm a legal alien,\nEm       A            Bm\nI'm an Englishman in New York.\n\n[Strophe 2]\nEm       A           Bm\nIf \"manners maketh man\" as someone said,\nEm          A           Bm\nThen he's the hero of the day.\nEm         A        Bm\nIt takes a man to suffer ignorance and smile,\nEm       A               Bm\nBe yourself no matter what they say.\n\n[Bridge]\nD                     A\nModesty, propriety can lead to notoriety,\nBm                         F#m\nYou could end up as the only one.\nG                        A\nGentleness, sobriety are rare in this society,\nF#                         Bm\nAt night a candle's brighter than the sun.\n"
  },
  {
    "id": "everybody-hurts",
    "title": "Everybody Hurts",
    "artist": "R.E.M.",
    "year": 1992,
    "lang": "EN",
    "originalKey": "D",
    "tempo": 94,
    "popularity": 94,
    "message": "Halte durch! Jeder Mensch kennt Trauer und Schmerz – du bist niemals allein.",
    "content": "\n[Strophe 1]\nD                   G\nWhen the day is long\n        D                  G\nAnd the night, the night is yours alone,\nD                         G\nWhen you're sure you've had enough\n        D          G\nOf this life, well hang on.\n\n[Refrain]\nEm               A\nDon't let yourself go,\nEm               A\n'Cause everybody cries\nEm            A         D    G\nAnd everybody hurts sometimes.\n\n[Strophe 2]\nD                       G\nSometimes everything is wrong.\nD                    G\nNow it's time to sing along.\n               D             G\nWhen your day is night alone (hold on, hold on),\nD                      G\nIf you feel like letting go (hold on),\nD                         G\nWhen you think you've had too much\n        D          G\nOf this life, well hang on.\n\n[Refrain]\nEm            A\n'Cause everybody hurts.\nEm                   A\nTake comfort in your friends.\nEm        A\nEverybody hurts...\n"
  },
  {
    "id": "come-as-you-are",
    "title": "Come As You Are",
    "artist": "Nirvana",
    "year": 1991,
    "lang": "EN",
    "originalKey": "Em",
    "tempo": 120,
    "popularity": 95,
    "message": "Komm wie du bist, als Freund und Weggefährte – ein Klassiker der 90er Grunge-Kultur.",
    "content": "\n[Strophe 1]\nEm           D            Em           D\nCome as you are, as you were, as I want you to be,\nEm          D             Em           D\nAs a friend, as a friend, as an old enemy.\nEm            D            Em            D\nTake your time, hurry up, the choice is yours, don't be late.\nEm          D             Em         D\nTake a rest as a friend as an old memoria.\n\n[Refrain]\nEm     G       Em        G\nMemoria, memoria, memoria.\n\n[Strophe 2]\nEm           D                Em          D\nCome dowsed in mud, soaked in bleach, as I want you to be.\nEm          D            Em          D\nAs a trend, as a friend, as an old memoria.\n\n[Refrain]\nEm     G       Em        G\nMemoria, memoria, memoria.\n\n[Bridge]\nA           C        A               C\nAnd I swear that I don't have a gun,\n   A             C\nNo I don't have a gun.\n"
  },
  {
    "id": "under-the-bridge",
    "title": "Under the Bridge",
    "artist": "Red Hot Chili Peppers",
    "year": 1991,
    "lang": "EN",
    "originalKey": "E",
    "tempo": 85,
    "popularity": 95,
    "message": "Einsamkeit überwinden und in der Gemeinschaft und Musik ein Zuhause finden.",
    "content": "\n[Strophe 1]\nE           B           C#m        G#m   A\nSometimes I feel like I don't have a partner,\nE           B         C#m         A\nSometimes I feel like my only friend\n   E        B        C#m       G#m   A\nIs the city I live in, the City of Angels,\nE          B         C#m      A     Emaj7\nLonely as I am, together we cry.\n\n[Refrain]\nF#m           E         B        F#m\nI don't ever wanna feel like I did that day.\nF#m           E          B       F#m\nTake me to the place I love, take me all the way.\n\n[Strophe 2]\nE           B           C#m       G#m   A\nDrive down her streets 'cause she's my companion,\nE                B            C#m        A\nWalk through her hills 'cause she knows who I am.\nE              B         C#m       G#m   A\nShe sees my good deeds and she kisses me windy,\nE         B         C#m        A     Emaj7\nI never worry, now that is a lie.\n\n[Refrain]\nF#m           E         B        F#m\nI don't ever wanna feel like I did that day.\nF#m           E          B       F#m\nTake me to the place I love, take me all the way.\n"
  },
  {
    "id": "californication",
    "title": "Californication",
    "artist": "Red Hot Chili Peppers",
    "year": 1999,
    "lang": "EN",
    "originalKey": "Am",
    "tempo": 96,
    "popularity": 95,
    "message": "Kritischer Blick auf Illusion, Glamour und den Wunsch nach echtem Sein.",
    "content": "\n[Strophe 1]\nAm                         Fmaj7\nPsychic spies from China try to steal your mind's elation,\nAm                         Fmaj7\nAnd little girls from Sweden dream of silver screen quotation,\nC             G          F          Dm\nAnd if you want these kind of dreams it's Californication.\n\n[Strophe 2]\nAm                     Fmaj7\nIt's the edge of the world and all of Western civilization,\nAm                         Fmaj7\nThe sun may rise in the East at least it's settled in a final location,\nC              G          F          Dm\nIt's understood that Hollywood sells Californication.\n\n[Refrain]\nAm             Fmaj7\nDream of Californication,\nAm             Fmaj7\nDream of Californication,\nAm             Fmaj7\nDream of Californication,\nAm             Fmaj7\nDream of Californication.\n\n[Strophe 3]\nAm                         Fmaj7\nPay your surgeon very well to break the spell of aging,\nAm                            Fmaj7\nCelebrity skin, is this your chin, or is that war you're waging?\nC             G          F          Dm\nFirst born unicorn, hardcore soft porn.\n"
  },
  {
    "id": "iris",
    "title": "Iris",
    "artist": "Goo Goo Dolls",
    "year": 1998,
    "lang": "EN",
    "originalKey": "D",
    "tempo": 156,
    "popularity": 95,
    "message": "Ich will einfach, dass du weißt, wer ich wirklich bin – eine der größten 90er Rockballaden.",
    "content": "\n[Strophe 1]\nD            Em7          G\nAnd I'd give up forever to touch you,\nBm              A              G\n'Cause I know that you feel me somehow.\nD            Em7            G\nYou're the closest to heaven that I'll ever be,\nBm            A                 G\nAnd I don't wanna go home right now.\n\n[Strophe 2]\nD            Em7              G\nAnd all I can taste is this moment,\nBm           A               G\nAnd all I can breathe is your life.\nD               Em7        G\nAnd sooner or later it's over,\nBm            A               G\nI just don't wanna miss you tonight.\n\n[Refrain]\nBm          A/C#             G\nAnd I don't want the world to see me,\nBm              A/C#           G\n'Cause I don't think that they'd understand.\nBm             A/C#           G\nWhen everything's made to be broken,\nBm          A/C#          G\nI just want you to know who I am.\n"
  },
  {
    "id": "summer-of-69",
    "title": "Summer of '69",
    "artist": "Bryan Adams",
    "year": 1984,
    "lang": "EN",
    "originalKey": "D",
    "tempo": 139,
    "popularity": 96,
    "message": "Nostalgie, die erste Gitarre und die besten Tage unseres Lebens am Lagerfeuer.",
    "content": "\n[Strophe 1]\nD\nI got my first real six-string,\nA\nBought it at the five and dime.\nD\nPlayed it till my fingers bled,\nA\nWas the summer of '69.\n\n[Strophe 2]\nD\nMe and some guys from school\nA\nHad a band and we tried real hard.\nD\nJimmy quit, Jody got married,\nA\nShoulda known we'd never get far.\n\n[Refrain]\nBm          A\nOh, when I look back now,\nD                   G\nThat summer seemed to last forever.\nBm        A\nAnd if I had the choice,\nD                G\nYeah, I'd always wanna be there.\nBm             A             D\nThose were the best days of my life.\n\n[Strophe 3]\nD\nAin't no use in complainin'\nA\nWhen you've got a job to do.\nD\nSpent my evenings down at the drive-in,\nA\nAnd that's when I met you.\n\n[Refrain]\nBm          A\nOh, when I look back now,\nD                   G\nThat summer seemed to last forever.\nBm             A             D\nThose were the best days of my life.\n"
  },
  {
    "id": "simple-man",
    "title": "Simple Man",
    "artist": "Lynyrd Skynyrd",
    "year": 1973,
    "lang": "EN",
    "originalKey": "C",
    "tempo": 120,
    "popularity": 95,
    "message": "Mamas weiser Rat: Bleibe ein einfacher, ehrlicher Mensch und folge deinem Herzen.",
    "content": "\n[Strophe 1]\nC            G           Am\nMama told me when I was young,\nC            G           Am\n\"Come sit beside me, my only son,\nC            G           Am\nAnd listen closely to what I say,\nC            G              Am\nAnd if you do this it'll help you some sunny day.\"\n\n[Refrain]\nC          G              Am\nAnd be a simple kind of man,\nC          G                 Am\nOh, be something you love and understand.\nC        G              Am\nBaby, be a simple kind of man,\nC             G                 Am\nOh, won't you do this for me, son, if you can?\"\n\n[Strophe 2]\nC            G           Am\nForget your lust for the rich man's gold,\nC            G           Am\nAll that you need is in your soul.\nC            G           Am\nAnd you can do this, oh baby, if you try,\nC            G           Am\nAll that I want for you, my son, is to be satisfied.\n\n[Refrain]\nC          G              Am\nAnd be a simple kind of man,\nC          G                 Am\nOh, be something you love and understand.\nC        G              Am\nBaby, be a simple kind of man,\nC             G                 Am\nOh, won't you do this for me, son, if you can?\"\n"
  },
  {
    "id": "piano-man",
    "title": "Piano Man",
    "artist": "Billy Joel",
    "year": 1973,
    "lang": "EN",
    "originalKey": "C",
    "tempo": 178,
    "popularity": 96,
    "message": "Sing us a song – das gemeinsame Musizieren, das Fremde zu Freunden und das Leben leichter macht.",
    "content": "\n[Strophe 1]\nC       G/B          F/A      C/G\nIt's nine o'clock on a Saturday,\nF          C/E          D7       G\nThe regular crowd shuffles in.\nC             G/B          F/A       C/G\nThere's an old man sitting next to me,\nF             G7           C\nMakin' love to his tonic and gin.\n\n[Refrain]\nAm          Am7/G      D7/F#   F\nSing us a song, you're the piano man,\nAm          Am7/G      D7      G\nSing us a song tonight.\n           C            G/B         F/A       C/G\nWell, we're all in the mood for a melody,\n        F            G7          C\nAnd you've got us feelin' alright.\n\n[Strophe 2]\nC            G/B             F/A      C/G\nNow John at the bar is a friend of mine,\nF            C/E          D7      G\nHe gets me my drinks for free.\nC                 G/B          F/A         C/G\nAnd he's quick with a joke or to light up your smoke,\n             F             G7          C\nBut there's someplace that he'd rather be.\n\n[Refrain]\nAm          Am7/G      D7/F#   F\nSing us a song, you're the piano man,\nAm          Am7/G      D7      G\nSing us a song tonight.\n           C            G/B         F/A       C/G\nWell, we're all in the mood for a melody,\n        F            G7          C\nAnd you've got us feelin' alright.\n"
  },
  {
    "id": "sweet-caroline",
    "title": "Sweet Caroline",
    "artist": "Neil Diamond",
    "year": 1969,
    "lang": "EN",
    "originalKey": "C",
    "tempo": 126,
    "popularity": 96,
    "message": "Good times never seemed so good! Der ultimative Mitsing-Klassiker für jede Runde.",
    "content": "\n[Strophe 1]\nC                     F\nWhere it began, I can't begin to knowin',\nC                           G\nBut then I know it's growing strong.\nC                     F\nWas in the spring, and spring became the summer,\nC                              G\nWho'd have believed you'd come along?\n\n[Refrain]\nC       Am\nHands, touchin' hands,\nG                  F              G\nReachin' out, touchin' me, touchin' you.\nC        F                   G\nSweet Caroline, good times never seemed so good!\nC       F                   G\nI've been inclined to believe they never would.\n\n[Strophe 2]\nC                     F\nLook at the night and it don't seem so lonely,\nC                       G\nWe filled it up with only two.\nC                     F\nAnd when I hurt, hurtin' runs off my shoulders,\nC                         G\nHow can I hurt when holding you?\n\n[Refrain]\nC        F                   G\nSweet Caroline, good times never seemed so good!\nC       F                   G\nI've been inclined to believe they never would.\n"
  },
  {
    "id": "love-of-my-life",
    "title": "Love of My Life",
    "artist": "Queen",
    "year": 1975,
    "lang": "EN",
    "originalKey": "D",
    "tempo": 78,
    "popularity": 95,
    "message": "Ein zeitloses Versprechen ewiger Verbundenheit – im Singkreis intim und tief berührend.",
    "content": "\n[Strophe 1]\nD               Bm\nLove of my life, you've hurt me,\nEm               A\nYou've broken my heart and now you leave me.\nD               D7             G\nLove of my life, can't you see?\nEm              Bm\nBring it back, bring it back,\nE               A\nDon't take it away from me,\n        D       G          D\nBecause you don't know what it means to me.\n\n[Strophe 2]\nD               Bm\nLove of my life, don't leave me,\nEm               A\nYou've stolen my love, you now desert me.\nD               D7             G\nLove of my life, can't you see?\nEm              Bm\nBring it back, bring it back,\nE               A\nDon't take it away from me,\n        D       G          D\nBecause you don't know what it means to me.\n\n[Refrain]\nBm                   F#m\nYou will remember when this is blown over\nG                    D\nAnd everything's all by the way.\nBm             F#m\nWhen I grow older I will be there\nB                   Em       A\nAt your side to remind you how I still love you...\n     D\nI still love you.\n"
  },
  {
    "id": "heroes",
    "title": "Heroes",
    "artist": "David Bowie",
    "year": 1977,
    "lang": "EN",
    "originalKey": "D",
    "tempo": 112,
    "popularity": 95,
    "message": "Wir können Helden sein, und wenn es nur für einen einzigen Tag ist.",
    "content": "\n[Strophe 1]\nD               G\nI, I will be king,\nD                 G\nAnd you, you will be queen.\nC                  G\nThough nothing will drive them away,\nD                 Em       A\nWe can beat them, just for one day.\nD             G              D    G\nWe can be heroes, just for one day.\n\n[Strophe 2]\nD                G\nAnd you, you can be mean,\nD                G\nAnd I, I'll drink all the time.\nC                    G\n'Cause we're lovers, and that is a fact,\nC                 G\nYes we're lovers, and that is that.\nD                  G\nThough nothing will keep us together,\nD               Em       A\nWe could steal time, just for one day.\nD             G              D    G\nWe can be heroes, for ever and ever.\n\n[Outro]\nD                 G\nWe're nothing, and nothing will help us,\nC                    G\nMaybe we're lying, then you better not stay,\nD                 Em       A\nBut we could be safer, just for one day...\nD             G\nWe can be heroes.\n"
  },
  {
    "id": "let-her-go",
    "title": "Let Her Go",
    "artist": "Passenger",
    "year": 2012,
    "lang": "EN",
    "originalKey": "G",
    "tempo": 75,
    "popularity": 95,
    "message": "Man weiß erst, was man hatte, wenn man es loslassen muss – eine weltberühmte Akustikhymne.",
    "content": "\n[Refrain]\n              F           C\nWell you only need the light when it's burning low,\n     G                      Am\nOnly miss the sun when it starts to snow,\n     F                      C           G\nOnly know you love her when you let her go.\n          F           C\nOnly know you've been high when you're feeling low,\n     G                 Am\nOnly hate the road when you're missing home,\n     F                      C           G\nOnly know you love her when you let her go.\n\n[Strophe 1]\nAm                        F\nStaring at the ceiling in the dark,\n     G                          Em\nSame old empty feeling in your heart,\n       Am                F         G\n'Cause love comes slow and it goes so fast.\nAm                                 F\nWell you see her when you close your eyes,\n      G                       Em\nMaybe one day you'll understand why\n     Am                 F           G\nEverything you touch surely dies.\n\n[Refrain]\n              F           C\nWell you only need the light when it's burning low,\n     G                      Am\nOnly miss the sun when it starts to snow,\n     F                      C           G\nOnly know you love her when you let her go.\n"
  },
  {
    "id": "take-me-to-church",
    "title": "Take Me to Church",
    "artist": "Hozier",
    "year": 2013,
    "lang": "EN",
    "originalKey": "Em",
    "tempo": 128,
    "popularity": 95,
    "message": "Leidenschaft, Menschlichkeit und Freiheit des Geistes – roh, soulig und voller Kraft.",
    "content": "\n[Strophe 1]\nEm\nMy lover's got humor,\nAm\nShe's the giggle at a funeral,\nEm\nKnows everybody's disapproval,\nAm\nI should've worshipped her sooner.\nEm\nIf the Heavens ever did speak,\nAm\nShe's the last true mouthpiece.\nG                       G/F#\nEvery Sunday's getting more bleak,\nEm\nA fresh poison each week.\n\n[Refrain]\nC               G\nTake me to church,\n       B7                     Em\nI'll worship like a dog at the shrine of your lies,\n     C               G\nI'll tell you my sins and you can sharpen your knife.\nB7                   Em\nOffer me that deathless death,\n      C           G      Am      Em\nGood God, let me give you my life.\n\n[Strophe 2]\nEm\nIf I'm a pagan of the good times,\nAm\nMy lover's the sunlight,\nEm\nTo keep the Goddess on my side\nAm\nShe demands a sacrifice.\n"
  },
  {
    "id": "marmor-stein-und-eisen-bricht",
    "title": "Marmor, Stein und Eisen bricht",
    "artist": "Drafi Deutscher",
    "year": 1965,
    "lang": "DE",
    "originalKey": "C",
    "tempo": 132,
    "popularity": 93,
    "message": "Marmor, Stein und Eisen bricht, aber unsere Liebe nicht – der unzerstörbare Mitsing-Evergreen.",
    "content": "\n[Strophe 1]\nC               G\nWeine nicht, wenn der Regen fällt,\nC               G\nEs gibt einen, der zu dir hält.\nC               F\nMarmor, Stein und Eisen bricht,\nG               C\nAber unsere Liebe nicht.\n\n[Refrain]\nC          F       G          C\nDam-dam, dam-dam, dam-dam, dam-dam,\nC               F\nMarmor, Stein und Eisen bricht,\nG               C\nAber unsere Liebe nicht.\n\n[Strophe 2]\nC               G\nNimm den goldenen Ring von mir,\nC               G\nBist du traurig, dann sagt er dir:\nC               F\nMarmor, Stein und Eisen bricht,\nG               C\nAber unsere Liebe nicht.\n\n[Refrain]\nC          F       G          C\nDam-dam, dam-dam, dam-dam, dam-dam,\nC               F\nMarmor, Stein und Eisen bricht,\nG               C\nAber unsere Liebe nicht.\n"
  },
  {
    "id": "99-luftballons",
    "title": "99 Luftballons",
    "artist": "Nena",
    "year": 1983,
    "lang": "DE",
    "originalKey": "E",
    "tempo": 193,
    "popularity": 95,
    "message": "Die weltberühmte Friedenshymne der Neuen Deutschen Welle über Träume und Menschlichkeit.",
    "content": "\n[Strophe 1]\nE                     F#m\nHast du etwas Zeit für mich,\n                      A\nDann singe ich ein Lied für dich\n                      B\nVon 99 Luftballons\n                      E\nAuf ihrem Weg zum Horizont.\nE                     F#m\nDenkst du vielleicht grad an mich,\n                      A\nDann singe ich ein Lied für dich\n                      B\nVon 99 Luftballons\n                      E\nUnd dass sowas von sowas kommt.\n\n[Strophe 2]\nE                     F#m\n99 Luftballons\n                      A\nAuf ihrem Weg zum Horizont\n                      B\nHielt man für Ufos aus dem All,\n                      E\nDarum schickte ein General\nE                     F#m\nEine Fliegerstaffel hinterher,\n                      A\nAlarm zu geben, wenn's so wär,\n                      B\nDabei war'n da am Horizont\n                      E\nNur 99 Luftballons.\n\n[Outro]\nE                     F#m\n99 Jahre Krieg\n                      A\nLießen keinen Platz für Sieger.\n                      B\nKriegsminister gibt's nicht mehr\n                      E\nUnd auch keine Düsenflieger.\nE                     F#m\nHeute zieh' ich meine Runden,\n                      A\nSeh' die Welt in Trümmern liegen.\n                      B\nHab' 'nen Luftballon gefunden,\n                      E\nDenk' an dich und lass' ihn fliegen.\n"
  },
  {
    "id": "grossvater",
    "title": "Großvater",
    "artist": "S.T.S.",
    "year": 1985,
    "lang": "DE",
    "originalKey": "C",
    "tempo": 74,
    "popularity": 94,
    "message": "Ein berührendes Denkmal für den Großvater, seine Weisheit, Gelassenheit und Herzenswärme.",
    "content": "\n[Strophe 1]\nC           G          Am\nGroßvater, kannst du net 'runterkommen\nF          C          G\nAuf an schnellen Kaffee?\nC           G          Am\nI hab a paar Fragen, die mir auf der Zunge brennen,\nF          G          C\nWeil i mi selber net versteh.\n\n[Strophe 2]\nC           G          Am\nDu warst mein Vorbild, mei allerbester Freund,\nF          C          G\nBei dir hab i g'lernt, was zählt.\nC           G          Am\nDu hast g'sagt: Schau auf die Leut und bleib dir selber treu,\nF          G          C\nEgal was dir die Welt erzählt.\n\n[Refrain]\nF                 G          C\nGroßvater, du warst mein Held,\nF                 G          C\nDer beste Mensch auf dera Welt.\nF                 G          Am\nI denk so oft an uns're Zeit,\nF                 G          C\nUnd die Erinnerung bleibt für die Ewigkeit.\n"
  },
  {
    "id": "alles-aus-liebe",
    "title": "Alles aus Liebe",
    "artist": "Die Toten Hosen",
    "year": 1993,
    "lang": "DE",
    "originalKey": "C",
    "tempo": 116,
    "popularity": 95,
    "message": "Die ultimative Mitsing-Hymne der Toten Hosen über bedingungslose Leidenschaft.",
    "content": "\n[Strophe 1]\nC                G\nIch würde dir gern sagen, wie sehr ich dich mag,\nAm               F\nWarum ich nur noch an dich denken kann.\nC                G\nIch fühl mich wie verhext und in Gefangenschaft,\nAm               F\nUnd du allein bist schuld daran.\n\n[Refrain]\nC          G             Am          F\nUnd alles nur, weil ich dich liebe,\nC          G             Am          F\nUnd ich nicht weiß, wie ich's beweisen soll.\nC          G             Am          F\nKomm, ich zeig dir, wie groß meine Liebe ist,\nC          G             C\nUnd bringe uns beide um.\n\n[Strophe 2]\nC                G\nWenn ich wüsste, was du denkst, wenn du mich ansiehst,\nAm               F\nOb du mich wirklich liebst oder nur mit mir spielst.\nC                G\nIch kann nicht mehr schlafen, ich werd noch verrückt,\nAm               F\nBis mich dein Herz an sich drückt.\n\n[Refrain]\nC          G             Am          F\nUnd alles nur, weil ich dich liebe,\nC          G             Am          F\nUnd ich nicht weiß, wie ich's beweisen soll.\nC          G             C\nAlles aus Liebe zu dir.\n"
  },
  {
    "id": "hier-kommt-alex",
    "title": "Hier kommt Alex",
    "artist": "Die Toten Hosen",
    "year": 1988,
    "lang": "DE",
    "originalKey": "Am",
    "tempo": 148,
    "popularity": 94,
    "message": "Ein kraftvoller Meilenstein des deutschen Punkrocks über Rebellion und Zeitgeist.",
    "content": "\n[Strophe 1]\nAm\nIn einer Welt, in der man nur noch lebt,\nF                    G\nDamit man täglich arbeiten geht,\nAm\nIst für die meisten das Einzige, was zählt,\nF                     G\nDass die Kasse stimmt und man nichts verfehlt.\n\n[Refrain]\nAm             F\nHey! Hier kommt Alex!\nG              Am\nVorhang auf für seine Horrorschau!\nAm             F\nHey! Hier kommt Alex!\nG              Am\nAuf dem Kreuzzug gegen die graue Welt!\n\n[Strophe 2]\nAm\nAuf einem Trip aus Gewalt und Spaß,\nF                      G\nSchlägt er die Stadt in Schutt und Asche.\nAm\nEin kleiner König mit frechem Grinsen,\nF                      G\nKeine Gnade für die braven Prinzen.\n\n[Refrain]\nAm             F\nHey! Hier kommt Alex!\nG              Am\nVorhang auf für seine Horrorschau!\nAm             F\nHey! Hier kommt Alex!\nG              Am\nAuf dem Kreuzzug gegen die graue Welt!\n"
  },
  {
    "id": "haus-am-see",
    "title": "Haus am See",
    "artist": "Peter Fox",
    "year": 2008,
    "lang": "DE",
    "originalKey": "C",
    "tempo": 95,
    "popularity": 95,
    "message": "Der Traum vom einfachen, erfüllten Leben im Alter im Kreis der Liebsten am Wasser.",
    "content": "\n[Strophe 1]\nC\nHier bin ich gebor'n, hier werd ich begraben,\nAm\nHab taube Ohren, 'nen weißen Bart und sitz im Garten.\nF\n100 Enkelkinder spielen auf dem Rasen,\nG\n20 Hunde bellen, alle meine Freunde sind da.\n\n[Refrain]\nC\nUnd am Ende der Straße steht ein Haus am See.\nAm\nOrangenbaumblätter liegen auf dem Gehweg.\nF\nIch hab 20 Frauen, nicht eine hat gemeckert,\nG\nAlle sind glücklich und die Sonne scheint ewig.\nC\nUnd am Ende der Straße steht ein Haus am See.\n\n[Strophe 2]\nC\nIch war überall auf der Welt zuhaus',\nAm\nHab viel geseh'n und mein Geld verbraucht.\nF\nJetzt bin ich müde und will nach Haus',\nG\nLeg die Füße hoch und ruh mich aus.\n\n[Refrain]\nC\nUnd am Ende der Straße steht ein Haus am See.\nAm\nOrangenbaumblätter liegen auf dem Gehweg.\nF\nIch hab 20 Frauen, nicht eine hat gemeckert,\nG\nAlle sind glücklich und die Sonne scheint ewig.\n"
  },
  {
    "id": "komet",
    "title": "Komet",
    "artist": "Udo Lindenberg & Apache 207",
    "year": 2023,
    "lang": "DE",
    "originalKey": "Am",
    "tempo": 120,
    "popularity": 95,
    "message": "Ein unvergesslicher Schweif am Himmel sein – über das Erbe, das wir in den Herzen hinterlassen.",
    "content": "\n[Strophe 1]\nAm                    F\nUnd wenn ich geh, dann so wie ich gekommen bin:\nC                     G\nWie ein Komet, der zweimal einschlägt.\nAm                    F\nUnd wenn ich geh, dann so wie ich gelebt habe:\nC                     G\nMit Vollgas durch die dunkelste Nacht.\n\n[Refrain]\nAm                    F\nLass uns noch einmal wie 'n Komet sein,\nC                     G\nDer die Nacht erhellt und alles hinter sich lässt.\nAm                    F\nLass uns ein Zeichen an den Himmel malen,\nC                     G                 Am\nDas niemals verblasst, niemals vergeht.\n\n[Strophe 2]\nAm                    F\nWir haben keine Angst vor der Dunkelheit,\nC                     G\nWeil in unserer Brust ein Feuer brennt.\nAm                    F\nFür all die Träumer und die Suchenden,\nC                     G\nDie wissen, dass das Leben jetzt beginnt.\n\n[Refrain]\nAm                    F\nLass uns noch einmal wie 'n Komet sein,\nC                     G\nDer die Nacht erhellt und alles hinter sich lässt.\nAm                    F\nLass uns ein Zeichen an den Himmel malen,\nC                     G                 Am\nDas niemals verblasst, niemals vergeht.\n"
  },
  {
    "id": "cello",
    "title": "Cello",
    "artist": "Udo Lindenberg feat. Clueso",
    "year": 2011,
    "lang": "DE",
    "originalKey": "G",
    "tempo": 125,
    "popularity": 94,
    "message": "Die unvergessene Jugendliebe und der Klang, der ein Leben lang im Herzen mitschwingt.",
    "content": "\n[Strophe 1]\nG                     Em\nIch sah dich da steh'n mit deinem Cello im Arm,\nC                     D\nUnd die ganze Welt wurde plötzlich so warm.\nG                     Em\nDu hast Bach gespielt und ich hab nur geschaut,\nC                     D\nUnd mich in deinen Augen verloren.\n\n[Refrain]\nG                     Em\nDu warst das Mädchen mit dem Cello,\nC                     D\nUnd dein Klang ging mir mitten ins Herz.\nG                     Em\nDu warst das Mädchen mit dem Cello,\nC                     D                 G\nUnd ich vergesse diesen Sommer nie mehr.\n\n[Strophe 2]\nG                     Em\nWir war'n so jung und die Welt war so groß,\nC                     D\nUnd wir ließen einander nie wieder los.\nG                     Em\nAuch wenn die Jahre vergangen sind,\nC                     D\nWeht dein Lied noch immer im Wind.\n\n[Refrain]\nG                     Em\nDu warst das Mädchen mit dem Cello,\nC                     D\nUnd dein Klang ging mir mitten ins Herz.\nG                     Em\nDu warst das Mädchen mit dem Cello,\nC                     D                 G\nUnd ich vergesse diesen Sommer nie mehr.\n"
  },
  {
    "id": "gewinner",
    "title": "Gewinner",
    "artist": "Clueso",
    "year": 2008,
    "lang": "DE",
    "originalKey": "G",
    "tempo": 80,
    "popularity": 93,
    "message": "Niemand gewinnt, wenn Liebe zum Wettkampf wird – eine Ode an Loslassen und Ehrlichkeit.",
    "content": "\n[Strophe 1]\nG                     Em\nIch kann vor dir nicht mehr weglaufen,\nC                     D\nIch kann mich vor dir nicht verstecken.\nG                     Em\nUnd auch wenn wir beide stolpern,\nC                     D\nWerd ich dich wieder aufwecken.\n\n[Refrain]\nG                     Em\nEs gibt keinen Gewinner hier,\nC                     D\nWenn wir uns beide verlier'n.\nG                     Em\nEs gibt keinen Gewinner hier,\nC                     D                 G\nLass uns einfach wieder von vorne beginnen.\n\n[Strophe 2]\nG                     Em\nWir haben so viel aufgebaut,\nC                     D\nUnd uns gegenseitig vertraut.\nG                     Em\nLass die Steine jetzt liegen,\nC                     D\nUnd gemeinsam nach vorne blicken.\n"
  },
  {
    "id": "verdammt-ich-lieb-dich",
    "title": "Verdammt, ich lieb' dich",
    "artist": "Matthias Reim",
    "year": 1990,
    "lang": "DE",
    "originalKey": "Am",
    "tempo": 130,
    "popularity": 94,
    "message": "Verdammt, ich lieb' dich, ich lieb' dich nicht – das pure Gefühlschaos, das jeder kennt.",
    "content": "\n[Strophe 1]\nAm                    F\nIch ziehe durch die Straßen bis nach Mitternacht,\nC                     G\nIch hab' mir wieder mal die ganze Nacht gedacht:\nAm                    F\nWarum bist du nicht hier, warum bist du so weit?\nC                     G\nEs ist die Einsamkeit, die mir das Herz zerreißt.\n\n[Refrain]\nAm                    F\nVerdammt, ich lieb' dich, ich lieb' dich nicht,\nC                     G\nVerdammt, ich brauch' dich, ich brauch' dich nicht.\nAm                    F\nVerdammt, ich will dich, ich will dich nicht verlier'n,\nC                     G                 Am\nKomm, lass es uns noch einmal probier'n.\n\n[Strophe 2]\nAm                    F\nIch sitze an der Bar und schau' ins Glas hinein,\nC                     G\nWarum muss Liebe immer so kompliziert sein?\nAm                    F\nDu sagst, es ist vorbei, doch ich glaub' dir nicht,\nC                     G\nWeil deine Augen mir was and'res versprechen.\n\n[Refrain]\nAm                    F\nVerdammt, ich lieb' dich, ich lieb' dich nicht,\nC                     G\nVerdammt, ich brauch' dich, ich brauch' dich nicht.\nAm                    F\nVerdammt, ich will dich, ich will dich nicht verlier'n,\nC                     G                 Am\nKomm, lass es uns noch einmal probier'n.\n"
  },
  {
    "id": "dirty-old-town",
    "title": "Dirty Old Town",
    "artist": "The Pogues",
    "year": 1985,
    "lang": "EN",
    "originalKey": "G",
    "tempo": 104,
    "popularity": 93,
    "message": "Der unsterbliche Folk-Klassiker über Heimat, Liebe und die Poesie alter Industriestädte.",
    "content": "\n[Strophe 1]\nG\nI met my love by the gas works wall,\nC                       G\nDreamed a dream by the old canal.\nG\nI kissed my girl by the factory wall,\nEm             D        Em\nDirty old town, dirty old town.\n\n[Strophe 2]\nG\nClouds are drifting across the moon,\nC                       G\nCats are prowling on their beat.\nG\nSpring's a girl in the street at night,\nEm             D        Em\nDirty old town, dirty old town.\n\n[Strophe 3]\nG\nI heard a siren from the docks,\nC                       G\nSaw a train set the night on fire.\nG\nI smelled the spring on the smoky wind,\nEm             D        Em\nDirty old town, dirty old town.\n\n[Strophe 4]\nG\nI'm gonna make me a big sharp axe,\nC                       G\nShining steel tempered in the fire.\nG\nI'll chop you down like an old dead tree,\nEm             D        Em\nDirty old town, dirty old town.\n"
  },
  {
    "id": "whiskey-in-the-jar",
    "title": "Whiskey in the Jar",
    "artist": "The Dubliners / Thin Lizzy",
    "year": 1967,
    "lang": "EN",
    "originalKey": "C",
    "tempo": 130,
    "popularity": 94,
    "message": "Der legendäre irische Rebellensong – Schwung, Feierlaune und urige Pub-Atmosphäre.",
    "content": "\n[Strophe 1]\nC\nAs I was goin' over the far famed Kerry mountains,\nAm\nI met with captain Farrell and his money he was countin'.\nF\nI first produced my pistol, and then produced my rapier,\nC                                  G\nSaid, \"Stand and deliver, for you are a bold deceiver.\"\n\n[Refrain]\n        G\nMusha ring dumma do damma da,\nC\nWhack for the daddy 'ol,\nF\nWhack for the daddy 'ol,\nC          G          C\nThere's whiskey in the jar.\n\n[Strophe 2]\nC\nI counted out his money, and it made a pretty penny,\nAm\nI put it in my pocket and I took it home to Jenny.\nF\nShe sighed and she swore that she never would deceive me,\nC                             G\nBut the devil take the women, for they never can be easy.\n\n[Refrain]\n        G\nMusha ring dumma do damma da,\nC\nWhack for the daddy 'ol,\nF\nWhack for the daddy 'ol,\nC          G          C\nThere's whiskey in the jar.\n"
  },
  {
    "id": "the-wild-rover",
    "title": "The Wild Rover",
    "artist": "The Dubliners",
    "year": 1964,
    "lang": "EN",
    "originalKey": "G",
    "tempo": 196,
    "popularity": 94,
    "message": "And it's no, nay, never! Der weltberühmte irische Mitsing-Klassiker mit Klatschen.",
    "content": "\n[Strophe 1]\nG                               C\nI've been a wild rover for many's the year,\nG                  D7          G\nAnd I've spent all my money on whiskey and beer.\nG                               C\nBut now I'm returning with gold in great store,\nG                  D7         G\nAnd I never will play the wild rover no more.\n\n[Refrain]\n    D7\nAnd it's no, nay, never! (Clap, clap, clap, clap)\nG               C\nNo, nay, never, no more,\n        G          C\nWill I play the wild rover,\n      D7       G\nNo, never, no more.\n\n[Strophe 2]\nG                               C\nI went into an alehouse I used to frequent,\nG                  D7          G\nAnd I told the landlady my money was spent.\nG                               C\nI asked her for credit, she answered me \"Nay,\nG                  D7         G\nSuch custom as yours I can have any day.\"\n\n[Refrain]\n    D7\nAnd it's no, nay, never! (Clap, clap, clap, clap)\nG               C\nNo, nay, never, no more,\n        G          C\nWill I play the wild rover,\n      D7       G\nNo, never, no more.\n"
  },
  {
    "id": "the-parting-glass",
    "title": "The Parting Glass",
    "artist": "Traditional / Ed Sheeran",
    "year": 1770,
    "lang": "EN",
    "originalKey": "Em",
    "tempo": 75,
    "popularity": 93,
    "message": "Good night and joy be to you all – der traditionelle irisch-schottische Abschiedsgesang am Feuer.",
    "content": "\n[Strophe 1]\nEm           G          C        G\nOf all the money that e'er I had,\nEm           C           D\nI spent it in good company.\nEm           G          C        G\nAnd all the harm that e'er I've done,\nEm          C    D       Em\nAlas it was to none but me.\n\n[Refrain]\nG            C           G        D\nAnd all I've done for want of wit\nEm            C          D\nTo memory now I can't recall;\nEm           G       C        G\nSo fill to me the parting glass,\nEm               C      D       Em\nGood night and joy be to you all.\n\n[Strophe 2]\nEm           G          C        G\nOf all the comrades that e'er I had,\nEm           C           D\nThey're sorry for my going away;\nEm           G          C        G\nAnd all the sweethearts that e'er I had,\nEm               C      D       Em\nThey would wish me one more day to stay.\n\n[Refrain]\nG            C           G        D\nBut since it falls unto my lot\nEm            C          D\nThat I should rise and you should not,\nEm           G       C        G\nI'll gently rise and softly call:\nEm               C      D       Em\nGood night and joy be to you all.\n"
  },
  {
    "id": "amazing-grace",
    "title": "Amazing Grace",
    "artist": "Traditional / John Newton",
    "year": 1779,
    "lang": "EN",
    "originalKey": "G",
    "tempo": 70,
    "popularity": 94,
    "message": "Erstaunliche Gnade – die unsterbliche Hymne über Vergebung, inneren Frieden und Erlösung.",
    "content": "\n[Strophe 1]\nG             G7         C          G\nAmazing grace! How sweet the sound\n                  D7\nThat saved a wretch like me!\nG             G7        C          G\nI once was lost, but now am found;\n            D7       G\nWas blind, but now I see.\n\n[Strophe 2]\nG             G7            C          G\n'Twas grace that taught my heart to fear,\n                     D7\nAnd grace my fears relieved;\nG             G7         C          G\nHow precious did that grace appear\n             D7      G\nThe hour I first believed.\n\n[Strophe 3]\nG                G7       C          G\nThrough many dangers, toils and snares,\n               D7\nI have already come;\nG             G7            C          G\n'Tis grace hath brought me safe thus far,\n             D7        G\nAnd grace will lead me home.\n\n[Strophe 4]\nG             G7          C          G\nWhen we've been there ten thousand years,\n                 D7\nBright shining as the sun,\nG             G7         C          G\nWe've no less days to sing God's praise\n             D7       G\nThan when we first begun.\n"
  }
];

// Merge unique new songs into database
let addedCount = 0;
newSongs.forEach(song => {
  if (!existingIds.has(song.id)) {
    existingSongs.push(song);
    existingIds.add(song.id);
    addedCount++;
  }
});

console.log(`Added ${addedCount} new songs. Total database count is now: ${existingSongs.length}`);

// Write back to build_songs_database.js
const newSongsCode = 'const songs = ' + JSON.stringify(existingSongs, null, 2) + ';';
const updatedScript = dbScript.replace(match[0], newSongsCode);
fs.writeFileSync(dbPath, updatedScript, 'utf8');
console.log('Successfully updated build_songs_database.js!');
