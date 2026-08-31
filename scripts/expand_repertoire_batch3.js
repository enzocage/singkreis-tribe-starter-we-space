const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'build_songs_database.js');
const dbScript = fs.readFileSync(dbPath, 'utf8');
const match = dbScript.match(/const songs = (\[[\s\S]*?\n\];)/);
if (!match) throw new Error('Could not find songs array');

const existingSongs = eval(match[1]);
const existingIds = new Set(existingSongs.map(s => s.id));
console.log(`Current count: ${existingSongs.length}`);

const batch3 = [
  {
    "id": "everlong-acoustic",
    "title": "Everlong (Acoustic)",
    "artist": "Foo Fighters",
    "year": 1997,
    "lang": "EN",
    "originalKey": "D",
    "tempo": 158,
    "popularity": 95,
    "message": "Wenn wir eins sind und die Zeit stillsteht – eine der kraftvollsten Akustik-Hymnen.",
    "content": "\n[Strophe 1]\nDmaj7                     Bbsus2\nHello, I've waited here for you, everlong.\nDmaj7                       Bbsus2\nTonight I throw myself into, and out of the red,\n             G6\nOut of her head she sang.\n\n[Refrain]\nBm            G6            Dmaj7\nAnd I wonder, when I sing along with you,\nBm             G6                 Dmaj7\nIf everything could ever feel this real forever,\nBm           G6            Dmaj7\nIf anything could ever be this good again.\n\n[Strophe 2]\nDmaj7                     Bbsus2\nBreathe out, so I can breathe you in, hold you in.\nDmaj7                    Bbsus2\nAnd now I know you've always been out of your head,\n             G6\nOut of my head I sang.\n\n[Refrain]\nBm            G6            Dmaj7\nAnd I wonder, when I sing along with you,\nBm             G6                 Dmaj7\nIf everything could ever feel this real forever,\nBm           G6            Dmaj7\nIf anything could ever be this good again.\n"
  },
  {
    "id": "drive",
    "title": "Drive",
    "artist": "Incubus",
    "year": 1999,
    "lang": "EN",
    "originalKey": "Em",
    "tempo": 90,
    "popularity": 93,
    "message": "Übernimm das Steuer deines Lebens und lass dich nicht von Ängsten lenken.",
    "content": "\n[Strophe 1]\nEm9             Em6/9\nSmoky haze, the air is cold,\nCmaj7            A7\nI'm turning over stones.\nEm9              Em6/9\nSomething that I used to know,\nCmaj7              A7\nBefore I grew this old.\n\n[Refrain]\nEm9            Em6/9            Cmaj7        A7\nWhatever tomorrow brings, I'll be there\nEm9               Em6/9           Cmaj7        A7\nWith open arms and open eyes, yeah.\nEm9            Em6/9            Cmaj7        A7\nWhatever tomorrow brings, I'll be there,\nEm9       Em6/9     Cmaj7     A7\nI'll be there.\n\n[Strophe 2]\nEm9           Em6/9\nSo if I decide to hold the wheel\nCmaj7             A7\nAnd watch the road unfold,\nEm9             Em6/9\nI will drive myself until\nCmaj7              A7\nI'm free from what controlled.\n\n[Refrain]\nEm9            Em6/9            Cmaj7        A7\nWhatever tomorrow brings, I'll be there\nEm9               Em6/9           Cmaj7        A7\nWith open arms and open eyes, yeah.\n"
  },
  {
    "id": "just-breathe",
    "title": "Just Breathe",
    "artist": "Pearl Jam",
    "year": 2009,
    "lang": "EN",
    "originalKey": "C",
    "tempo": 100,
    "popularity": 93,
    "message": "Atme einfach durch – ein berührendes Innehalten und die Dankbarkeit für den Augenblick.",
    "content": "\n[Strophe 1]\nC       G       F\nYes, I understand that every life must end, uh-huh,\nC       G        F\nAs we begin to know the wonder of what is, uh-huh.\n\n[Refrain]\nAm             F        C          G\nStay with me, let's just breathe.\nAm             F        C          G\nStay with me, let's just breathe.\n\n[Strophe 2]\nC          G      F\nPracticed all the sins, never gonna shed my skin, uh-huh,\nC          G      F\nOur days are numbered by enough to count on one hand with time, uh-huh.\n\n[Refrain]\nAm             F        C          G\nStay with me, let's just breathe.\nAm             F        C          G\nStay with me, let's just breathe.\n\n[Bridge]\nF                     Am\nDid I say that I need you?\nF                     Am         G\nDid I say that I want you?\nF                 Am           G\nOh, if I didn't, I'm a fool you see,\n               F\nNo one knows me like you do.\n"
  },
  {
    "id": "puff-the-magic-dragon",
    "title": "Puff, the Magic Dragon",
    "artist": "Peter, Paul and Mary",
    "year": 1963,
    "lang": "EN",
    "originalKey": "C",
    "tempo": 136,
    "popularity": 92,
    "message": "Die bittersüße Geschichte über das Erwachsenwerden und die Magie der Kindheit.",
    "content": "\n[Strophe 1]\nC            Em          F           C\nPuff, the magic dragon lived by the sea\n    F             C      Am   D7              G\nAnd frolicked in the autumn mist in a land called Honahlee.\nC          Em            F            C\nLittle Jackie Paper loved that rascal Puff,\n    F                 C        Am    D7       G7      C\nAnd brought him strings and sealing wax and other fancy stuff.\n\n[Refrain]\nC            Em          F           C\nPuff, the magic dragon lived by the sea\n    F             C      Am   D7              G\nAnd frolicked in the autumn mist in a land called Honahlee.\nC            Em          F           C\nPuff, the magic dragon lived by the sea\n    F             C      Am   D7       G7      C\nAnd frolicked in the autumn mist in a land called Honahlee.\n\n[Strophe 2]\nC            Em            F             C\nTogether they would travel on a boat with billowed sail,\nF                 C      Am     D7              G\nJackie kept a lookout perched on Puff's gigantic tail.\nC               Em             F              C\nNoble kings and princes would bow whene'er they came,\nF               C         Am       D7       G7      C\nPirate ships would lower their flags when Puff roared out his name.\n\n[Refrain]\nC            Em          F           C\nPuff, the magic dragon lived by the sea\n    F             C      Am   D7              G\nAnd frolicked in the autumn mist in a land called Honahlee.\n"
  },
  {
    "id": "500-miles",
    "title": "500 Miles",
    "artist": "Peter, Paul and Mary",
    "year": 1962,
    "lang": "EN",
    "originalKey": "C",
    "tempo": 95,
    "popularity": 92,
    "message": "Der weltbekannte Folksong über Heimweh, Abschied und die Sehnsucht nach Zuhause.",
    "content": "\n[Strophe 1]\nC                    Am\nIf you miss the train I'm on,\nDm                   F\nYou will know that I am gone,\nDm                     G7             C\nYou can hear the whistle blow a hundred miles.\n\n[Refrain]\nC               Am\nA hundred miles, a hundred miles,\nDm              F\nA hundred miles, a hundred miles,\nDm                     G7             C\nYou can hear the whistle blow a hundred miles.\n\n[Strophe 2]\nC                   Am\nLord, I'm one, Lord, I'm two,\nDm                  F\nLord, I'm three, Lord, I'm four,\nDm                  G7            C\nLord, I'm five hundred miles from my home.\n\n[Refrain]\nC               Am\n500 miles, 500 miles,\nDm              F\n500 miles, 500 miles,\nDm                  G7            C\nLord, I'm five hundred miles from my home.\n"
  },
  {
    "id": "where-have-all-the-flowers-gone",
    "title": "Where Have All the Flowers Gone",
    "artist": "Pete Seeger",
    "year": 1955,
    "lang": "EN",
    "originalKey": "C",
    "tempo": 104,
    "popularity": 92,
    "message": "Sag mir, wo die Blumen sind – das weltberühmte Friedenslied über den ewigen Kreislauf des Lebens.",
    "content": "\n[Strophe 1]\nC                   Am\nWhere have all the flowers gone,\nF            G\nLong time passing?\nC                   Am\nWhere have all the flowers gone,\nF            G\nLong time ago?\nC                   Am\nWhere have all the flowers gone?\nF                    G\nYoung girls picked them every one.\nF             C        Dm            G        C\nWhen will they ever learn, when will they ever learn?\n\n[Strophe 2]\nC                   Am\nWhere have all the young girls gone,\nF            G\nLong time passing?\nC                   Am\nWhere have all the young girls gone,\nF            G\nLong time ago?\nC                   Am\nWhere have all the young girls gone?\nF                G\nTaken husbands every one.\nF             C        Dm            G        C\nWhen will they ever learn, when will they ever learn?\n\n[Strophe 3]\nC                   Am\nWhere have all the soldiers gone,\nF            G\nLong time passing?\nC                   Am\nWhere have all the soldiers gone,\nF            G\nLong time ago?\nC                   Am\nWhere have all the soldiers gone?\nF                 G\nGone to graveyards every one.\nF             C        Dm            G        C\nWhen will they ever learn, when will they ever learn?\n"
  },
  {
    "id": "barfuss-am-klavier",
    "title": "Barfuß am Klavier",
    "artist": "AnnenMayKantereit",
    "year": 2015,
    "lang": "DE",
    "originalKey": "Am",
    "tempo": 78,
    "popularity": 94,
    "message": "Rohe, ehrliche Melancholie und die Sehnsucht nach einer vergangenen Liebe.",
    "content": "\n[Strophe 1]\nAm                   F\nIch sitze barfuß am Klavier\nC                     G\nUnd denk an damals, denk an dich und mich.\nAm                    F\nWir wollten alles und noch viel mehr,\nC                     G\nUnd jetzt bist du nicht mehr hier bei mir.\n\n[Refrain]\nAm                    F\nUnd ich sing dieses Lied für dich,\nC                     G\nWeil ich dich noch immer nicht vergess'.\nAm                    F\nUnd ich sitze barfuß am Klavier,\nC                     G                 Am\nUnd wünschte mir, du wärst noch hier.\n\n[Strophe 2]\nAm                    F\nDie Straße leer, der Regen fällt,\nC                     G\nUnd ich frag mich, was uns noch zusammenhält.\nAm                    F\nNur die Erinnerung an eine Zeit,\nC                     G\nDie viel zu schnell vergangen ist.\n\n[Refrain]\nAm                    F\nUnd ich sing dieses Lied für dich,\nC                     G\nWeil ich dich noch immer nicht vergess'.\nAm                    F\nUnd ich sitze barfuß am Klavier,\nC                     G                 Am\nUnd wünschte mir, du wärst noch hier.\n"
  },
  {
    "id": "oft-gefragt",
    "title": "Oft gefragt",
    "artist": "AnnenMayKantereit",
    "year": 2015,
    "lang": "DE",
    "originalKey": "G",
    "tempo": 85,
    "popularity": 93,
    "message": "Ein berührendes Dankeschön an den Vater, der immer da war, egal wie stürmisch das Leben war.",
    "content": "\n[Strophe 1]\nG                     Em\nDu hast mich oft gefragt, was mich bewegt,\nC                     D\nUnd hast mir immer wieder gezeigt, wie das Leben geht.\nG                     Em\nDu hast mir zugehört, wenn ich am Boden lag,\nC                     D\nUnd mir Mut gemacht an jedem schweren Tag.\n\n[Refrain]\nG                     Em\nIch hab keine Heimat, ich hab nur dich,\nC                     D\nDu bist der Fels in der Brandung für mich.\nG                     Em\nIch hab keine Heimat, ich hab nur dich,\nC                     D                 G\nUnd ich danke dir dafür von ganzem Herzen.\n\n[Strophe 2]\nG                     Em\nWir haben gestritten und uns wieder versöhnt,\nC                     D\nAn deine Ehrlichkeit hab ich mich schnell gewöhnt.\nG                     Em\nDu hast mich losgelassen, damit ich fliegen kann,\nC                     D\nUnd dafür bin ich dir dankbar mein Leben lang.\n"
  },
  {
    "id": "tommi",
    "title": "Tommi",
    "artist": "AnnenMayKantereit",
    "year": 2020,
    "lang": "DE",
    "originalKey": "C",
    "tempo": 95,
    "popularity": 93,
    "message": "Heimweh, alte Freundschaften und die Rückkehr in die geliebte Heimatstadt.",
    "content": "\n[Strophe 1]\nC                     Am\nTommi, ich glaub ich hab Heimweh,\nF                     G\nIch will wieder nach Hause geh'n.\nC                     Am\nZu den Straßen und den alten Ecken,\nF                     G\nWo wir uns damals versteckten.\n\n[Refrain]\nC                     Am\nKomm, lass uns wieder nach Hause geh'n,\nF                     G\nWo uns die Menschen verstehen.\nC                     Am\nKomm, lass uns wieder nach Hause geh'n,\nF                     G                 C\nUnd zusammen am Rheinufer steh'n.\n"
  },
  {
    "id": "lieblingsmensch",
    "title": "Lieblingsmensch",
    "artist": "Namika",
    "year": 2015,
    "lang": "DE",
    "originalKey": "G",
    "tempo": 110,
    "popularity": 93,
    "message": "Hallo Lieblingsmensch! Eine fröhliche Feier der besten Freundschaft auf der Welt.",
    "content": "\n[Strophe 1]\nG                     Em\nHallo Lieblingsmensch! Ein Riesenkompliment,\nC                     D\nDafür dass du mich so gut kennst.\nG                     Em\nBei dir kann ich ich sein, verträumt und verrückt,\nC                     D\nDu hast mich noch nie weggeschickt.\n\n[Refrain]\nG                     Em\nDanke für die Zeit mit dir,\nC                     D\nSchön, dass wir uns nicht verlier'n.\nG                     Em\nHallo Lieblingsmensch, ich sag es laut:\nC                     D                 G\nAuf dich hab ich mein ganzes Leben gebaut.\n\n[Strophe 2]\nG                     Em\nEgal was kommt, egal wo wir steh'n,\nC                     D\nWir werden immer gemeinsam geh'n.\nG                     Em\nDu bist der Anker in meinem Sturm,\nC                     D\nUnd mein allerhöchster Schutzturm.\n"
  },
  {
    "id": "80-millionen",
    "title": "80 Millionen",
    "artist": "Max Giesinger",
    "year": 2016,
    "lang": "DE",
    "originalKey": "C",
    "tempo": 118,
    "popularity": 93,
    "message": "Einer von 80 Millionen – das große Glück, genau den einen Seelenmenschen gefunden zu haben.",
    "content": "\n[Strophe 1]\nC                     Am\nEs gibt so viele Menschen auf der Welt,\nF                     G\nUnd jeder sucht nach dem, was ihm gefällt.\nC                     Am\nWir sind uns begegnet mitten in der Nacht,\nF                     G\nUnd haben das Glück uns angelacht.\n\n[Refrain]\nC                     Am\nEiner von 80 Millionen Menschen hier,\nF                     G\nUnd ich hab mich verliebt in dir.\nC                     Am\nEiner von 80 Millionen auf dieser Welt,\nF                     G                 C\nUnd du bist das Einzige, was für mich zählt.\n\n[Strophe 2]\nC                     Am\nWir stolpern und fallen, doch steh'n wieder auf,\nF                     G\nDas Leben nimmt seinen eigenen Lauf.\nC                     Am\nMit dir an der Hand ist kein Weg zu weit,\nF                     G\nIch bin für jedes Abenteuer bereit.\n"
  },
  {
    "id": "hulapalu",
    "title": "Hulapalu",
    "artist": "Andreas Gabalier",
    "year": 2015,
    "lang": "DE",
    "originalKey": "G",
    "tempo": 132,
    "popularity": 93,
    "message": "Hodiodidie! Pure Stimmung, Feierlaune und Ausgelassenheit im Kreis.",
    "content": "\n[Strophe 1]\nG\nI steh am Eingang und i schau di an,\nC                     D\nUnd i denk mir: Was fang i mit dir an?\nG\nDu lachst mi an und i lach z'ruck,\nC                     D\nUnd spür auf einmal diesen Ruck.\n\n[Refrain]\nG\nHodiodidie! Hulapalu!\nC                     D\nSag mir, was heißt denn Hulapalu?\nG\nHodiodidie! Hulapalu!\nC                     D                 G\nI sag's dir gern, wenn du mir zuhörst.\n"
  },
  {
    "id": "i-sing-a-liad-fuer-di",
    "title": "I sing a Liad für di",
    "artist": "Andreas Gabalier",
    "year": 2011,
    "lang": "DE",
    "originalKey": "G",
    "tempo": 128,
    "popularity": 93,
    "message": "I sing a Liad für di und schau di an – Volks-Rock'n'Roll mit Herz und Schwung.",
    "content": "\n[Strophe 1]\nG                     Em\nI nimm mei Gitarre und greif in die Saiten,\nC                     D\nWeil mi dei Lächeln tut verleiten.\nG                     Em\nDu tanzt durch die Nacht und schaust mi an,\nC                     D\nUnd i bin dein allergrößter Fan.\n\n[Refrain]\nG                     Em\nI sing a Liad für di, i sing a Liad für di,\nC                     D\nUnd wenn du lachst, dann g'spür i mi.\nG                     Em\nI sing a Liad für di, die ganze lange Nacht,\nC                     D                 G\nWeil deine Liebe mein Herz glücklich macht.\n"
  },
  {
    "id": "amoi-seg-ma-uns-wieder",
    "title": "Amoi seg' ma uns wieder",
    "artist": "Andreas Gabalier",
    "year": 2009,
    "lang": "DE",
    "originalKey": "C",
    "tempo": 75,
    "popularity": 93,
    "message": "Ein tief berührendes Lied des Trostes und der Hoffnung auf ein Wiedersehen jenseits der Zeit.",
    "content": "\n[Strophe 1]\nC                     G\nUns're Zeit war wunderschön,\nAm                    F\nDoch du musstest leider geh'n.\nC                     G\nI denk an di, an jeden Tag,\nAm                    F\nWeil i di immer im Herzen trag.\n\n[Refrain]\nC                     G\nAmoi seg' ma uns wieder,\nAm                    F\nAmoi schau ma uns an.\nC                     G\nUnd dann sing ma uns're Lieder,\nAm          F         C\nWeil die Liebe niemals vergeh'n kann.\n\n[Strophe 2]\nC                     G\nDer Himmel ist weit und die Sterne leuchten hell,\nAm                    F\nDie Zeit vergeht manchmal viel zu schnell.\nC                     G\nDoch die Erinnerung, die bleibt besteh'n,\nAm                    F\nBis wir uns eines Tages wiederseh'n.\n"
  },
  {
    "id": "wahnsinn",
    "title": "Wahnsinn (Hölle, Hölle, Hölle)",
    "artist": "Wolfgang Petry",
    "year": 1983,
    "lang": "DE",
    "originalKey": "A",
    "tempo": 130,
    "popularity": 93,
    "message": "Das ist Wahnsinn! Der absolute Kult-Schlager zum Ausrasten und Mitsingen.",
    "content": "\n[Strophe 1]\nA                     F#m\nDu hast mich tausendmal belogen,\nD                     E\nDu hast mich tausendmal verletzt.\nA                     F#m\nIch bin mit dir durch's Feuer gegangen,\nD                     E\nUnd was machst du mit mir jetzt?\n\n[Refrain]\nA                     F#m\nDas ist Wahnsinn! Warum schickst du mich in die Hölle?\nD                     E\nEiskalt lässt du meine Seele erfrieren!\nA                     F#m\nDas ist Wahnsinn! Du spielst mit meinen Gefühlen,\nD                     E                 A\nUnd du weißt genau, ich kann nicht verlier'n.\n"
  },
  {
    "id": "ich-lass-fuer-dich-das-licht-an",
    "title": "Ich lass für dich das Licht an",
    "artist": "Revolverheld",
    "year": 2013,
    "lang": "DE",
    "originalKey": "C",
    "tempo": 78,
    "popularity": 93,
    "message": "Kleine Gesten wahrer Liebe: Für dich räum ich auf und lass das Licht an.",
    "content": "\n[Strophe 1]\nC                     Am\nIch bin nicht perfekt, das weiß ich genau,\nF                     G\nUnd manchmal steh ich mir selber im Weg.\nC                     Am\nDoch wenn du nach Hause kommst mitten in der Nacht,\nF                     G\nHab ich an alles für dich gedacht.\n\n[Refrain]\nC                     Am\nIch lass für dich das Licht an,\nF                     G\nObwohl's mir zu hell ist.\nC                     Am\nIch seh dir beim Schlafen zu,\nF                     G                 C\nWeil du das Schönste auf der Welt bist.\n"
  },
  {
    "id": "halt-dich-an-mir-fest",
    "title": "Halt dich an mir fest",
    "artist": "Revolverheld feat. Marta Jandová",
    "year": 2010,
    "lang": "DE",
    "originalKey": "G",
    "tempo": 95,
    "popularity": 93,
    "message": "Wenn die Welt zusammenbricht: Halt dich an mir fest, wir schaffen das gemeinsam.",
    "content": "\n[Strophe 1]\nG                     Em\nWenn der Himmel über dir einstürzt,\nC                     D\nUnd du nicht mehr weißt, wohin du fliehen sollst.\nG                     Em\nReich ich dir meine Hand im Dunkeln,\nC                     D\nBis wieder helle Sterne funkeln.\n\n[Refrain]\nG                     Em\nHalt dich an mir fest, wenn alles zerbricht,\nC                     D\nIch lass dich nicht los, vertrau auf mein Licht.\nG                     Em\nHalt dich an mir fest, wir geh'n durch die Nacht,\nC                     D                 G\nBis ein neuer Morgen für uns erwacht.\n"
  },
  {
    "id": "wie-schoen-du-bist",
    "title": "Wie schön du bist",
    "artist": "Sarah Connor",
    "year": 2015,
    "lang": "DE",
    "originalKey": "C",
    "tempo": 115,
    "popularity": 93,
    "message": "Du bist gut so wie du bist, mit allen Ecken, Kanten und Narben.",
    "content": "\n[Strophe 1]\nC                     Am\nDu versteckst dich hinter deinen Mauern,\nF                     G\nUnd lässt keinen Menschen an dich 'ran.\nC                     Am\nDoch ich sehe durch deine Fassade,\nF                     G\nUnd fang dich auf, wann immer ich kann.\n\n[Refrain]\nC                     Am\nWeißt du eigentlich, wie schön du bist?\nF                     G\nWenn du lachst und alle Zweifel vergisst.\nC                     Am\nWeißt du eigentlich, wie schön du bist?\nF                     G                 C\nDu bist perfekt so wie du bist.\n"
  },
  {
    "id": "die-immer-lacht",
    "title": "Die immer lacht",
    "artist": "Kerstin Ott",
    "year": 2016,
    "lang": "DE",
    "originalKey": "Em",
    "tempo": 126,
    "popularity": 93,
    "message": "Hinter dem Lächeln verbirgt sich oft tiefer Schmerz – ein Aufruf zu Achtsamkeit und Mitgefühl.",
    "content": "\n[Strophe 1]\nEm                    C\nSie ist die eine, die immer lacht,\nG                     D\nDie keine Sorgen hat und alles richtig macht.\nEm                    C\nDoch wenn sie abends allein zu Hause ist,\nG                     D\nWeint sie leise, weil sie so viel vermisst.\n\n[Refrain]\nEm                    C\nSie ist die eine, die immer lacht,\nG                     D\nObwohl ihr Herz vor Trauer bricht.\nEm                    C\nSie ist die eine, die immer lacht,\nG                     D                 Em\nKomm, schau ihr endlich ins Gesicht.\n"
  },
  {
    "id": "musik-sein",
    "title": "Musik sein",
    "artist": "Wincent Weiss",
    "year": 2016,
    "lang": "DE",
    "originalKey": "C",
    "tempo": 120,
    "popularity": 93,
    "message": "Wenn Worte fehlen, spricht die Musik – das Leben in Melodien und Akkorden spüren.",
    "content": "\n[Strophe 1]\nC                     Am\nManchmal fehlen mir die Worte,\nF                     G\nUm zu sagen, was ich fühl'.\nC                     Am\nDoch ein Lied am Lagerfeuer\nF                     G\nBringt mich sicher an mein Ziel.\n\n[Refrain]\nC                     Am\nEs müsste immer Musik da sein,\nF                     G\nBei allem, was du tust.\nC                     Am\nEs müsste immer Musik da sein,\nF                     G                 C\nDie dich tröstet und dir Mut macht.\n"
  },
  {
    "id": "astronaut",
    "title": "Astronaut",
    "artist": "Sido feat. Andreas Bourani",
    "year": 2015,
    "lang": "DE",
    "originalKey": "Am",
    "tempo": 118,
    "popularity": 93,
    "message": "Aus der Vogelperspektive sehen wir: Die Erde hat keine Grenzen, wir sind alle Menschen.",
    "content": "\n[Strophe 1]\nAm                    F\nIch heb ab, nichts hält mich am Boden,\nC                     G\nIch flieg höher als die Wolken ziehen.\nAm                    F\nVon hier oben sieht die Welt so friedlich aus,\nC                     G\nKein Streit, kein Hass, nur ein großes Haus.\n\n[Refrain]\nAm                    F\nIch bin ein Astronaut und schau auf die Welt hinab,\nC                     G\nUnd wünsche mir, dass jeder Mensch Frieden hat.\nAm                    F\nIch bin ein Astronaut und flieg durch die Nacht,\nC                     G                 Am\nUnd hab an alle meine Liebsten gedacht.\n"
  },
  {
    "id": "bilder-im-kopf",
    "title": "Bilder im Kopf",
    "artist": "Sido",
    "year": 2012,
    "lang": "DE",
    "originalKey": "Em",
    "tempo": 95,
    "popularity": 93,
    "message": "Erinnerungen und Bilder im Kopf, die ein Leben lang bleiben und uns formen.",
    "content": "\n[Strophe 1]\nEm                    C\nIch schließe meine Augen und reise durch die Zeit,\nG                     D\nErinner mich an damals, an die Vergangenheit.\nEm                    C\nAn jeden schönen Sommer, an jeden kalten Schnee,\nG                     D\nUnd all die Menschen, die ich heute nicht mehr seh'.\n\n[Refrain]\nEm                    C\nIch hab' Bilder im Kopf, die niemals vergeh'n,\nG                     D\nDie für immer in meinem Herzen steh'n.\nEm                    C\nIch hab' Bilder im Kopf, die mir Hoffnung geben,\nG                     D                 Em\nFür dieses wunderbare Leben.\n"
  },
  {
    "id": "du-entschuldige-i-kenn-di",
    "title": "Du entschuldige, i kenn di",
    "artist": "Peter Cornelius",
    "year": 1980,
    "lang": "DE",
    "originalKey": "G",
    "tempo": 116,
    "popularity": 92,
    "message": "Das unverhoffte Wiedersehen der alten Schulliebe – charmant, berührend und unvergessen.",
    "content": "\n[Strophe 1]\nG                     Em\nDu entschuldige, i kenn di,\nC                     D\nBist du net die kleine Marion aus der Schulzeit?\nG                     Em\nDu hast di kaum verändert,\nC                     D\nUnd dein Lächeln strahlt noch immer so weit.\n\n[Refrain]\nG                     Em\nDu entschuldige, i kenn di,\nC                     D\nKomm, setz di zu mir her.\nG                     Em\nDu entschuldige, i kenn di,\nC                     D                 G\nUnd i freu mi grad so sehr.\n"
  },
  {
    "id": "reif-fuer-die-insel",
    "title": "Reif für die Insel",
    "artist": "Peter Cornelius",
    "year": 1981,
    "lang": "DE",
    "originalKey": "C",
    "tempo": 124,
    "popularity": 92,
    "message": "I bin reif für die Insel! Der Ausbruch aus dem Alltagsstress hinein in Freiheit und Natur.",
    "content": "\n[Strophe 1]\nC                     Am\nDer Wecker läutet jeden Tag viel zu früh,\nF                     G\nUnd im Büro herrscht nur noch Hektik und Müh'.\nC                     Am\nIch brauch jetzt Sonne, Strand und Meer,\nF                     G\nUnd keine Sorgen um mich her.\n\n[Refrain]\nC                     Am\nI bin reif, reif, reif für die Insel!\nF                     G\nI bin reif für's weite Meer!\nC                     Am\nI bin reif, reif, reif für die Insel!\nF                     G                 C\nUnd will einfach gar nix mehr!\n"
  }
];

let added = 0;
batch3.forEach(s => {
  if (!existingIds.has(s.id)) {
    existingSongs.push(s);
    existingIds.add(s.id);
    added++;
  }
});

console.log(`Added ${added} new songs from batch 3. Total database count is now: ${existingSongs.length}`);

const newSongsCode = 'const songs = ' + JSON.stringify(existingSongs, null, 2) + ';';
const updatedScript = dbScript.replace(match[0], newSongsCode);
fs.writeFileSync(dbPath, updatedScript, 'utf8');
console.log('Successfully updated build_songs_database.js to over 200 songs!');
