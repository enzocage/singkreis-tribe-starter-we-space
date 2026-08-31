const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'build_songs_database.js');
const dbScript = fs.readFileSync(dbPath, 'utf8');
const match = dbScript.match(/const songs = (\[[\s\S]*?\n\];)/);
if (!match) throw new Error('Could not find songs array');

const existingSongs = eval(match[1]);
const existingIds = new Set(existingSongs.map(s => s.id));
console.log(`Current count: ${existingSongs.length}`);

const batch2 = [
  {
    "id": "wake-me-up-when-september-ends",
    "title": "Wake Me Up When September Ends",
    "artist": "Green Day",
    "year": 2004,
    "lang": "EN",
    "originalKey": "G",
    "tempo": 104,
    "popularity": 95,
    "message": "Erinnerungen verblassen, doch die Liebe und die gemeinsamen Momente bleiben unvergänglich.",
    "content": "\n[Strophe 1]\nG               G/F#\nSummer has come and passed,\nEm                  D\nThe innocent can never last.\nC               Cm               G\nWake me up when September ends.\n\n[Strophe 2]\nG                  G/F#\nLike my fathers' come to pass,\nEm                D\nSeven years has gone so fast.\nC               Cm               G\nWake me up when September ends.\n\n[Refrain]\nEm            Bm\nHere comes the rain again,\nC                   G       D/F#\nFalling from the stars.\nEm             Bm\nDrenched in my pain again,\nC               D\nBecoming who we are.\n\n[Strophe 3]\nG                G/F#\nAs the memory rests,\nEm                   D\nBut never forgets what I lost.\nC               Cm               G\nWake me up when September ends.\n"
  },
  {
    "id": "basket-case",
    "title": "Basket Case",
    "artist": "Green Day",
    "year": 1994,
    "lang": "EN",
    "originalKey": "E",
    "tempo": 175,
    "popularity": 95,
    "message": "Der Punkrock-Mitsing-Klassiker über Überforderung, Ehrlichkeit und Selbstironie.",
    "content": "\n[Strophe 1]\nE                 B\nDo you have the time to listen to me whine\nC#m                 G#m\nAbout nothing and everything all at once?\nA                E\nI am one of those melodramatic fools,\nB\nNeurotic to the bone no doubt about it.\n\n[Refrain]\nA          B           E\nSometimes I give myself the creeps,\nA          B              E\nSometimes my mind plays tricks on me.\nA               B\nIt all keeps adding up,\nE           D       C#m\nI think I'm cracking up.\nA           B\nAm I just paranoid or am I just stoned?\n\n[Strophe 2]\nE               B\nI went to a shrink to analyze my dreams,\nC#m                    G#m\nShe said it's lack of sex that's bringing me down.\nA                E\nI went to a whore, he said my life's a bore,\nB\nAnd quit my whining 'cause it's bringing her down.\n\n[Refrain]\nA          B           E\nSometimes I give myself the creeps,\nA          B              E\nSometimes my mind plays tricks on me.\nA               B\nIt all keeps adding up,\nE           D       C#m\nI think I'm cracking up.\nA           B\nAm I just paranoid or am I just stoned?\n"
  },
  {
    "id": "the-cave",
    "title": "The Cave",
    "artist": "Mumford & Sons",
    "year": 2009,
    "lang": "EN",
    "originalKey": "C",
    "tempo": 142,
    "popularity": 93,
    "message": "Freiheit, Mut und der Aufbruch aus der Dunkelheit hinein ins Licht der Hoffnung.",
    "content": "\n[Strophe 1]\nC\nIt's empty in the valley of your heart,\nC\nThe sun, it rises slowly as you walk.\nC\nAway from all the fears and all the faults you've left behind.\n\n[Refrain]\n        Am         F       C\nAnd I will hold on hope,\n        Am            F         C\nAnd I won't let you choke\n        Am         F          C\nOn the noose around your neck.\n        Am              F              C\nAnd I'll find strength in pain,\n        Am         F        C\nAnd I will change my ways,\n        Am               F              C\nI'll know my name as it's called again.\n\n[Strophe 2]\nC\n'Cause I have other things to fill my time,\nC\nYou take what is yours and I'll take mine.\nC\nNow let me at the truth, which will refresh my broken mind.\n\n[Refrain]\n        Am         F       C\nAnd I will hold on hope,\n        Am            F         C\nAnd I won't let you choke\n        Am         F          C\nOn the noose around your neck.\n        Am              F              C\nAnd I'll find strength in pain,\n        Am         F        C\nAnd I will change my ways,\n        Am               F              C\nI'll know my name as it's called again.\n"
  },
  {
    "id": "roll-away-your-stone",
    "title": "Roll Away Your Stone",
    "artist": "Mumford & Sons",
    "year": 2009,
    "lang": "EN",
    "originalKey": "D",
    "tempo": 130,
    "popularity": 91,
    "message": "Räume die Steine aus dem Weg und öffne dein Herz für die Liebe.",
    "content": "\n[Strophe 1]\nD\nRoll away your stone, I'll roll away mine,\n         G                      D\nTogether we can see what we will find.\nD\nDon't leave me alone at this time,\n    G                       D\nFor I am afraid of what is inside.\n\n[Refrain]\nBm                G        D\nIt seems that all my bridges have been burnt,\nBm                G        D\nBut you say that's how we learn.\nBm             G        D\nRoll away your stone and see\n     A                 D\nWhat love was made to be.\n"
  },
  {
    "id": "hey-brother",
    "title": "Hey Brother",
    "artist": "Avicii",
    "year": 2013,
    "lang": "EN",
    "originalKey": "G",
    "tempo": 125,
    "popularity": 94,
    "message": "Bedingungslose Geschwisterlichkeit und Fürsorge – wir stehen füreinander ein.",
    "content": "\n[Strophe 1]\nEm\nHey brother, there's an endless road to rediscover.\nEm\nHey sister, know the water's sweet but blood is thicker.\n\n[Refrain]\nD              G      C          D\nOh, if the sky comes falling down, for you,\nEm        C               D       Em\nThere's nothing in this world I wouldn't do.\n\n[Strophe 2]\nEm\nHey brother, do you still believe in one another?\nEm\nHey sister, do you still believe in love, I wonder?\n\n[Refrain]\nD              G      C          D\nOh, if the sky comes falling down, for you,\nEm        C               D       Em\nThere's nothing in this world I wouldn't do.\n\n[Bridge]\nEm                     C\nWhat if I'm far from home?\n        G             D\nOh brother, I will hear you call.\nEm                  C\nWhat if I lose it all?\n     G             D          Em\nOh sister, I will help you out.\n"
  },
  {
    "id": "the-nights",
    "title": "The Nights",
    "artist": "Avicii",
    "year": 2014,
    "lang": "EN",
    "originalKey": "F#",
    "tempo": 126,
    "popularity": 94,
    "message": "Lebe ein Leben, an das du dich immer erinnern wirst – Vaters weiser Rat am Lagerfeuer.",
    "content": "\n[Strophe 1]\nF#                    B\nOnce upon a younger year\n         C#                  F#\nWhen all our shadows disappeared,\nF#                      B\nThe animals inside came out to play.\nF#                       B\nWent face to face with all our fears,\n        C#                  F#\nLearned every lesson through the tears,\nF#                      B\nMade memories we knew would never fade.\n\n[Refrain]\n        D#m                      B\nHe said, \"One day you'll leave this world behind,\n   F#                     C#\nSo live a life you will remember.\"\n   D#m                        B\nMy father told me when I was just a child,\n       F#                    C#\n\"These are the nights that never die,\"\n   F#\nMy father told me.\n"
  },
  {
    "id": "demons",
    "title": "Demons",
    "artist": "Imagine Dragons",
    "year": 2012,
    "lang": "EN",
    "originalKey": "Eb",
    "tempo": 90,
    "popularity": 95,
    "message": "Das Annehmen unserer eigenen Unvollkommenheit und Schattenseiten.",
    "content": "\n[Strophe 1]\nEb\nWhen the days are cold and the cards all fold,\nBb\nAnd the saints we see are all made of gold.\nCm\nWhen your dreams all fail and the ones we hail\nAb\nAre the worst of all, and the blood's run stale.\n\n[Refrain]\nEb\nWhen you feel my heat, look into my eyes,\nBb\nIt's where my demons hide, it's where my demons hide.\nCm\nDon't get too close, it's dark inside,\nAb\nIt's where my demons hide, it's where my demons hide.\n\n[Strophe 2]\nEb\nAt the curtain's call it's the last of all,\nBb\nWhen the lights fade out, all the sinners crawl.\nCm\nSo they dug your grave and the masquerade\nAb\nWill come calling out at the mess you made.\n\n[Refrain]\nEb\nWhen you feel my heat, look into my eyes,\nBb\nIt's where my demons hide, it's where my demons hide.\nCm\nDon't get too close, it's dark inside,\nAb\nIt's where my demons hide, it's where my demons hide.\n"
  },
  {
    "id": "radioactive",
    "title": "Radioactive",
    "artist": "Imagine Dragons",
    "year": 2012,
    "lang": "EN",
    "originalKey": "Bm",
    "tempo": 136,
    "popularity": 95,
    "message": "Erwachen, Neuanfang und die unbändige Energie des Wandels.",
    "content": "\n[Strophe 1]\nBm         D/F#\nI'm waking up to ash and dust,\nA              E\nI wipe my brow and I sweat my rust.\nBm             D/F#\nI'm breathing in the chemicals.\nA              E\nI'm breaking in, shaping up,\nBm             D/F#\nThen checking out on the prison bus.\nA              E\nThis is it, the apocalypse, whoa.\n\n[Refrain]\nBm        D/F#\nI'm waking up, I feel it in my bones,\nA              E\nEnough to make my system blow.\nBm             D/F#\nWelcome to the new age, to the new age,\nA              E\nWelcome to the new age, to the new age.\nBm    D/F#   A     E\nWhoa, whoa, I'm radioactive, radioactive.\nBm    D/F#   A     E\nWhoa, whoa, I'm radioactive, radioactive.\n"
  },
  {
    "id": "believer",
    "title": "Believer",
    "artist": "Imagine Dragons",
    "year": 2017,
    "lang": "EN",
    "originalKey": "Bbm",
    "tempo": 125,
    "popularity": 95,
    "message": "Schmerz und Hindernisse formen unseren Charakter und machen uns stärker.",
    "content": "\n[Strophe 1]\nBbm\nFirst things first: I'ma say all the words inside my head,\nGb7                  F\nI'm fired up and tired of the way that things have been, oh-ooh,\nGb7                  F\nThe way that things have been, oh-ooh.\n\n[Refrain]\nBbm\nPain! You made me a, you made me a believer, believer!\nGb7                 F\nPain! You break me down, you build me up, believer, believer!\nBbm\nPain! Oh, let the bullets fly, oh, let them rain,\nGb7                 F\nMy life, my love, my drive, it came from...\nBbm\nPain! You made me a, you made me a believer, believer!\n"
  },
  {
    "id": "stay-with-me",
    "title": "Stay with Me",
    "artist": "Sam Smith",
    "year": 2014,
    "lang": "EN",
    "originalKey": "C",
    "tempo": 84,
    "popularity": 94,
    "message": "Die Sehnsucht nach Nähe und menschlicher Wärme in der Einsamkeit der Nacht.",
    "content": "\n[Strophe 1]\nAm      F       C\nGuess it's true, I'm not good at a one-night stand,\nAm      F       C\n'Cause I still need love 'cause I'm just a man.\nAm      F       C\nThese nights never seem to go to plan,\nAm      F       C\nI don't want you to leave, will you hold my hand?\n\n[Refrain]\n           Am   F   C\nWon't you stay with me?\n         Am   F   C\n'Cause you're all I need.\nAm             F            C\nThis ain't love, it's clear to see,\n       Am   F   C\nBut darling, stay with me.\n\n[Strophe 2]\nAm      F       C\nWhy am I so emotional?\nAm      F       C\nNo, it's not a good look, gain some self-control.\nAm      F       C\nAnd deep down I know this never works,\nAm      F       C\nBut you can lay with me so it doesn't hurt.\n\n[Refrain]\n           Am   F   C\nWon't you stay with me?\n         Am   F   C\n'Cause you're all I need.\nAm             F            C\nThis ain't love, it's clear to see,\n       Am   F   C\nBut darling, stay with me.\n"
  },
  {
    "id": "zu-spaet",
    "title": "Zu spät",
    "artist": "Die Ärzte",
    "year": 1984,
    "lang": "DE",
    "originalKey": "C",
    "tempo": 140,
    "popularity": 94,
    "message": "Der unsterbliche Punkrock-Klassiker über verschmähte Liebe und süße späte Genugtuung.",
    "content": "\n[Strophe 1]\nC                   Am\nWarum hast du mir das angetan?\nF                   G\nIch hab' ein Recht darauf, es zu erfahren.\nC                   Am\nDu hast gesagt, du liebst mich sehr,\nF                   G\nDoch plötzlich willst du mich nicht mehr.\n\n[Refrain]\nC                   Am\nDoch eines Tages werd' ich mich rächen,\nF                   G\nIch werd' die Herzen aller Mädchen brechen.\nC                   Am\nDann bin ich ein Star, der über allen steht,\nF                   G                 C\nUnd dann ist es für dich zu spät, zu spät!\n\n[Strophe 2]\nC                   Am\nDu läufst jetzt mit 'nem and'ren rum,\nF                   G\nDer hat viel Geld, ist aber dumm.\nC                   Am\nEr fährt 'nen dicken Sportwagen,\nF                   G\nDoch was hast du davon, kannst du mir das sagen?\n\n[Refrain]\nC                   Am\nDoch eines Tages werd' ich mich rächen,\nF                   G\nIch werd' die Herzen aller Mädchen brechen.\nC                   Am\nDann bin ich ein Star, der über allen steht,\nF                   G                 C\nUnd dann ist es für dich zu spät, zu spät!\n"
  },
  {
    "id": "junge",
    "title": "Junge",
    "artist": "Die Ärzte",
    "year": 2007,
    "lang": "DE",
    "originalKey": "C",
    "tempo": 155,
    "popularity": 94,
    "message": "Junge, warum hast du nichts gelernt? Generationenkonflikt humorvoll auf den Punkt gebracht.",
    "content": "\n[Strophe 1]\nC\nJunge, warum hast du nichts gelernt?\nAm\nGuck dir den Dieter an, der hat sogar ein Auto.\nF\nWarum gehst du nicht zu Onkel Werner in die Werkstatt?\nG\nDer gibt dir 'ne Festanstellung, wenn du ihn darum bittest.\n\n[Refrain]\nC\nJunge...\nAm\nUnd wie du wieder aussiehst:\nF\nLöcher in der Hose und ständige Frustration!\nG\nUnd dann noch deine Haare, da fehlen mir die Worte!\nC\nMusst du die Nachbarn so erschrecken?\n\n[Strophe 2]\nC\nNie kommst du nach Hause, wir wissen nicht mehr weiter.\nAm\nDu redest nicht mit uns und bist immer nur dagegen.\nF\nWir haben dir doch alles gegeben, was wir hatten,\nG\nUnd du wirfst alles einfach so weg.\n"
  },
  {
    "id": "lasse-redn",
    "title": "Lasse redn",
    "artist": "Die Ärzte",
    "year": 2007,
    "lang": "DE",
    "originalKey": "C",
    "tempo": 120,
    "popularity": 93,
    "message": "Lass die Leute reden – bleib gelassen, freundlich und geh deinen eigenen Weg.",
    "content": "\n[Strophe 1]\nC                     Am\nHast du schon gehört und sag mal, wusstest du schon,\nF                     G\nDass die Nachbarn über dich reden im Flur?\nC                     Am\nSie wissen alles besser und erfinden noch was dazu,\nF                     G\nUnd sie lassen dir einfach keine Ruh'.\n\n[Refrain]\nC                     Am\nLass die Leute reden und hör einfach nicht hin,\nF                     G\nDie meisten Leute haben ja gar nichts im Sinn.\nC                     Am\nLass die Leute reden, das tun sie sowieso,\nF                     G                 C\nSei einfach höflich und sag leise: \"Hallo\".\n\n[Strophe 2]\nC                     Am\nSie reden über deine Kleidung und deinen Lebensstil,\nF                     G\nFür manche Leute ist jedes Gerücht ein großes Spiel.\nC                     Am\nDoch was sie sagen, kann dir völlig egal sein,\nF                     G\nWeil du glücklich bist und mit dir im Rein'n.\n"
  },
  {
    "id": "bohemian-rhapsody",
    "title": "Bohemian Rhapsody",
    "artist": "Queen",
    "year": 1975,
    "lang": "EN",
    "originalKey": "Bb",
    "tempo": 72,
    "popularity": 98,
    "message": "Das epochale Meisterwerk über Schicksal, Reue und Befreiung – ein weltweites Phänomen.",
    "content": "\n[Intro]\nBb6         C7\nIs this the real life?\nF7          Bb\nIs this just fantasy?\nGm7          C7\nCaught in a landslide,\nEb    F7         Bb\nNo escape from reality.\nGm\nOpen your eyes,\nBb7              Eb     Ab      Eb\nLook up to the skies and see...\nCm               F7\nI'm just a poor boy, I need no sympathy,\n       B     Bb      A     Bb\nBecause I'm easy come, easy go,\nB      Bb      A     Bb\nLittle high, little low.\nEb           Bb/D          C#dim           F7/C\nAny way the wind blows doesn't really matter to me, to me.\n\n[Ballad]\nBb               Gm\nMama, just killed a man,\nCm                       Cm7              F\nPut a gun against his head, pulled my trigger, now he's dead.\nBb               Gm              Cm\nMama, life had just begun,\nEb              Cdim            F\nBut now I've gone and thrown it all away.\nEb   Bb/D   Cm       Fm               Dbdim\nMama, ooh, didn't mean to make you cry,\n   F7\nIf I'm not back again this time tomorrow,\nBb            Bb/D         Gm\nCarry on, carry on as if nothing really matters.\n\n[Outro]\nEb          Bb/D          Cm\nNothing really matters, anyone can see,\nEb          Bb/D          Ab/C            Bb\nNothing really matters, nothing really matters to me...\nF/A   Abdim   Eb/G\nAny way the wind blows.\n"
  },
  {
    "id": "don-t-stop-me-now",
    "title": "Don't Stop Me Now",
    "artist": "Queen",
    "year": 1978,
    "lang": "EN",
    "originalKey": "F",
    "tempo": 156,
    "popularity": 96,
    "message": "Pure Lebensfreude, Energie und das Gefühl, unaufhaltsam durch das Leben zu fliegen.",
    "content": "\n[Strophe 1]\nF              Am7        Dm7        Gm7        C7\nTonight I'm gonna have myself a real good time,\nF              F7          Bb\nI feel alive and the world I'll turn it inside out, yeah,\nGm7          D7          Gm\nAnd floating around in ecstasy, so...\nC   Bb/D   C/E   F       Gm7    F/A\nDon't stop me now,\nC   Bb/D   C/E   F       Gm7    F/A\nDon't stop me, 'cause I'm having a good time,\nC7\nHaving a good time.\n\n[Refrain]\nF                           Am7            Dm7\nDon't stop me now, I'm having such a good time, I'm having a ball,\nGm7                 C7\nDon't stop me now, if you wanna have a good time just give me a call.\nGm7        D7\nDon't stop me 'cause I'm having a good time,\nGm7        D7\nDon't stop me 'cause I'm having a good time,\nC                      Bb\nI don't wanna stop at all!\n"
  }
];

let added = 0;
batch2.forEach(s => {
  if (!existingIds.has(s.id)) {
    existingSongs.push(s);
    existingIds.add(s.id);
    added++;
  }
});

console.log(`Added ${added} new songs from batch 2. Total database count is now: ${existingSongs.length}`);

const newSongsCode = 'const songs = ' + JSON.stringify(existingSongs, null, 2) + ';';
const updatedScript = dbScript.replace(match[0], newSongsCode);
fs.writeFileSync(dbPath, updatedScript, 'utf8');
console.log('Successfully updated build_songs_database.js!');
