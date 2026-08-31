const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'build_songs_database.js');
const dbScript = fs.readFileSync(dbPath, 'utf8');
const match = dbScript.match(/const songs = (\[[\s\S]*?\n\];)/);
if (!match) throw new Error('Could not find songs array');

const songs = eval(match[1]);
const existingIds = new Set(songs.map(s => s.id));
console.log(`Current songs count: ${songs.length}`);

// 5 Top Popular Singalong Mantras with complete chords & lyrics
const topMantras = [
  {
    "id": "gayatri-mantra",
    "title": "Gayatri Mantra",
    "artist": "Deva Premal / Traditional",
    "year": 1998,
    "lang": "SA",
    "originalKey": "C",
    "tempo": 72,
    "popularity": 97,
    "category": "mantren",
    "message": "Das älteste vedische Lichtgebet zur Klärung des Geistes und Erleuchtung des Herzens.",
    "content": "\n[Strophe 1]\nC                Em\nOm Bhur Bhuvaḥ Swaḥ,\nF             G\nTat Savitur Vareṇyaṃ,\nC                 Em\nBhargo Devasya Dhīmahi,\nF               G        C\nDhiyo Yo Naḥ Prachodayāt.\n\n[Refrain]\nC          Em\nOm Bhur Bhuvaḥ Swaḥ,\nF             G\nTat Savitur Vareṇyaṃ,\nC                 Em\nBhargo Devasya Dhīmahi,\nF               G        C\nDhiyo Yo Naḥ Prachodayāt.\n\n[Mantra Flow]\nAm             Em\nBhargo Devasya Dhīmahi,\nF               G        C\nDhiyo Yo Naḥ Prachodayāt.\nAm             Em\nBhargo Devasya Dhīmahi,\nF               G        C\nDhiyo Yo Naḥ Prachodayāt.\n\n[Outro]\nC       Em      F       G\nOm... Om... Om...\nC       Em      F   G   C\nShanti, Shanti, Shanti.\n"
  },
  {
    "id": "lokah-samastah",
    "title": "Lokah Samastah Sukhino Bhavantu",
    "artist": "Traditional / Singkreis",
    "year": 2000,
    "lang": "SA",
    "originalKey": "G",
    "tempo": 76,
    "popularity": 96,
    "category": "mantren",
    "message": "Mögen alle Wesen in allen Welten glücklich und frei sein – der weltweite Segensgesang.",
    "content": "\n[Strophe 1]\nG               C\nLokah Samastah Sukhino Bhavantu,\nG               D\nLokah Samastah Sukhino Bhavantu,\nEm              C\nLokah Samastah Sukhino Bhavantu,\nG       D       G\nOm Shanti, Shanti, Shanti.\n\n[Refrain]\nG               C\nLokah Samastah Sukhino Bhavantu,\nG               D\nLokah Samastah Sukhino Bhavantu,\nEm              C\nLokah Samastah Sukhino Bhavantu,\nG       D       G\nOm Shanti, Shanti, Shanti.\n\n[Bridge]\nC               G\nMögen alle Wesen frei und glücklich sein,\nC               D\nMöge Frieden sein auf dieser Erde.\nEm              C\nLokah Samastah Sukhino Bhavantu,\nG       D       G\nOm Shanti, Shanti, Shanti.\n\n[Outro]\nG   C   G   D   G\nOm Shanti, Shanti, Shanti.\n"
  },
  {
    "id": "om-namah-shivaya",
    "title": "Om Namah Shivaya",
    "artist": "Krishna Das / Traditional",
    "year": 1996,
    "lang": "SA",
    "originalKey": "Am",
    "tempo": 80,
    "popularity": 95,
    "category": "mantren",
    "message": "Ich verneige mich vor dem göttlichen Bewusstsein in mir und allem Sein.",
    "content": "\n[Strophe 1]\nAm              G\nOm Namah Shivaya,\nF               G       Am\nOm Namah Shivaya.\nAm              G\nOm Namah Shivaya,\nF               G       Am\nOm Namah Shivaya.\n\n[Refrain]\nC               G\nShivaya Namah Om,\nF               G       Am\nShivaya Namah Om.\nC               G\nShivaya Namah Om,\nF               G       Am\nShivaya Namah Om.\n\n[Kirtan Steigerung]\nAm              G\nOm Namah Shivaya,\nF               G       Am\nOm Namah Shivaya.\nAm              G\nOm Namah Shivaya,\nF               G       Am\nOm Namah Shivaya.\n\n[Outro]\nAm      G       F       G       Am\nOm... Namah Shivaya.\n"
  },
  {
    "id": "may-there-always-be-angels",
    "title": "May There Always Be Angels (Angel Heart)",
    "artist": "Nick Barber",
    "year": 2004,
    "lang": "EN",
    "originalKey": "D",
    "tempo": 74,
    "popularity": 95,
    "category": "mantren",
    "message": "Mögen immer Engel an deiner Seite sein – ein wunderschönes Herzenslied für den Kreis.",
    "content": "\n[Strophe 1]\nD                 A\nMay there always be angels\n       G                 D\nTo guide you and hold you,\n                  A\nMay there always be love\n        G                 D\nTo surround you and fold you.\n\n[Refrain]\nBm                F#m\nAngel heart, heavenly light,\nG                   D       A\nShining bright in the dark of night.\nBm                F#m\nAngel heart, walk by my side,\nG                   A       D\nWith your love as my gentle guide.\n\n[Strophe 2]\nD                 A\nMay the peace of the river\n       G                 D\nFlow deep in your soul,\n                  A\nMay the breath of the wind\n        G                 D\nMake you peaceful and whole.\n\n[Refrain]\nBm                F#m\nAngel heart, heavenly light,\nG                   D       A\nShining bright in the dark of night.\nBm                F#m\nAngel heart, walk by my side,\nG                   A       D\nWith your love as my gentle guide.\n"
  },
  {
    "id": "so-hum",
    "title": "So Hum (I Am That)",
    "artist": "Mirabai Ceiba / Traditional",
    "year": 2008,
    "lang": "SA",
    "originalKey": "C",
    "tempo": 68,
    "popularity": 95,
    "category": "mantren",
    "message": "Ich bin das reine, unendliche Bewusstsein – im Einklang mit dem natürlichen Atemfluss.",
    "content": "\n[Strophe 1]\nC               G\nSo Hum, So Hum,\nAm              F\nI am That, That I am.\nC               G\nSo Hum, So Hum,\nAm              F       C\nI am That, That I am.\n\n[Refrain]\nC               G\nWith every breath I take,\nAm              F\nWith every move I make:\nC               G\nSo Hum, So Hum,\nAm              F       C\nI am That, That I am.\n\n[Bridge]\nAm              Em\nInhale \"So\", exhale \"Hum\",\nF               G\nReturn to where you've come from.\nC               G\nSo Hum, So Hum,\nAm              F       C\nI am That, That I am.\n"
  }
];

// Add mantras if not already present
topMantras.forEach(m => {
  if (!existingIds.has(m.id)) {
    songs.push(m);
    existingIds.add(m.id);
  }
});

// Category classification heuristics
const MANTRA_IDS = new Set(['gayatri-mantra', 'lokah-samastah', 'om-namah-shivaya', 'may-there-always-be-angels', 'so-hum']);

const VERBUNDENHEIT_KEYWORDS = ['zusammen', 'gemeinsam', 'frieden', 'verbunden', 'eins', 'liebe', 'freund', 'hoffnung', 'mensch', 'einander', 'welt', 'himmel', 'mut'];

const HERZ_IDS = new Set([
  'tears-in-heaven', 'wonderful-tonight', 'hallelujah', 'sound-of-silence', 'fields-of-gold',
  'iris', 'stay-with-me', 'shallow', 'perfect', 'all-of-me', 'photograph', 'the-scientist',
  'fix-you', 'wie-schoen-du-bist', 'barfuss-am-klavier', 'oft-gefragt', 'amoi-seg-ma-uns-wieder',
  'ich-lass-fuer-dich-das-licht-an', 'halt-dich-an-mir-fest', 'angie', 'wild-horses',
  'love-of-my-life', 'let-her-go', 'just-breathe', 'more-than-words', 'the-parting-glass',
  'somewhere-over-the-rainbow', 'mad-world', 'chasing-cars', 'aint-no-sunshine', 'heart-of-gold',
  'blackbird', 'yesterday', 'in-my-life', 'bridge-over-troubled-water', 'hurt'
]);

const LAGERFEUER_IDS = new Set([
  'country-roads', 'wonderwall', 'sweet-home-alabama', 'stand-by-me', 'let-it-be', 'hey-jude',
  'sweet-caroline', 'proud-mary', 'bad-moon-rising', 'have-you-ever-seen-the-rain', 'ring-of-fire',
  'knockin-on-heavens-door', 'brown-eyed-girl', 'leaving-on-a-jet-plane', 'what-a-wonderful-world',
  'zombie', 'lemon-tree', 'hotel-california', 'summer-of-69', 'piano-man', 'don-t-stop-me-now',
  'bohemian-rhapsody', 'the-wild-rover', 'whiskey-in-the-jar', 'dirty-old-town', 'puff-the-magic-dragon',
  '500-miles', 'where-have-all-the-flowers-gone', 'marmor-stein-und-eisen-bricht', '99-luftballons',
  'ueber-den-wolken', 'fuerstenfeld', 'tage-wie-diese', 'westerland', 'cordula-gruen',
  'schrei-nach-liebe', 'alles-aus-liebe', 'hier-kommt-alex', 'zu-spaet', 'junge', 'wahnsinn',
  'verdammt-ich-lieb-dich', 'hulapalu', 'i-sing-a-liad-fuer-di', 'dust-in-the-wind', 'free-fallin',
  'good-riddance-time-of-your-life', 'basket-case', 'wake-me-up-when-september-ends', 'sweet-child-o-mine',
  'nothing-else-matters', 'paint-it-black', 'creep', 'heroes', 'take-me-to-church', 'hey-brother',
  'the-nights', 'radioactive', 'believer', 'demons', 'rip-tide', 'rips-tide', 'i-im-yours', 'wake-me-up',
  'count-on-me', 'banana-pancakes', 'better-together', 'upside-down', 'the-a-team', 'thinking-out-loud'
]);

const VERBUNDENHEIT_IDS = new Set([
  'lean-on-me', 'imagine', 'one-u2', 'one-love', 'three-little-birds', 'no-woman-no-cry',
  'redemption-song', 'is-this-love', 'could-you-be-loved', 'blowing-in-the-wind', 'with-a-little-help',
  'all-you-need-is-love', 'across-the-universe', 'the-boxer', 'people-get-ready', 'amazing-grace',
  'the-parting-glass', 'gute-nacht-freunde', 'grossvater', 'haus-am-see', 'komet', 'cello',
  'gewinner', 'lieblingsmensch', '80-millionen', 'astronaut', 'bilder-im-kopf', 'mit-dir',
  'die-immer-lacht', 'musik-sein', 'du-entschuldige-i-kenn-di', 'reif-fuer-die-insel', 'auf-uns',
  'choere', 'viva-la-vida', 'simple-man', 'the-cave', 'everlong-acoustic', 'drive'
]);

// Assign categories
songs.forEach(s => {
  if (MANTRA_IDS.has(s.id) || s.category === 'mantren') {
    s.category = 'mantren';
  } else if (HERZ_IDS.has(s.id)) {
    s.category = 'herz';
  } else if (LAGERFEUER_IDS.has(s.id)) {
    s.category = 'lagerfeuer';
  } else if (VERBUNDENHEIT_IDS.has(s.id)) {
    s.category = 'verbundenheit';
  } else if (s.lang === 'DE') {
    s.category = 'deutsch';
  } else {
    // Default categorizer based on message
    const msg = (s.message || '').toLowerCase();
    if (msg.includes('liebe') || msg.includes('herz') || msg.includes('verlust') || msg.includes('ballade')) {
      s.category = 'herz';
    } else if (msg.includes('zusammen') || msg.includes('gemeinschaft') || msg.includes('frieden') || msg.includes('freund')) {
      s.category = 'verbundenheit';
    } else {
      s.category = 'lagerfeuer';
    }
  }
});

console.log(`Final total songs count: ${songs.length}`);

// Write back to build_songs_database.js
const newSongsCode = 'const songs = ' + JSON.stringify(songs, null, 2) + ';';
const updatedScript = dbScript.replace(match[0], newSongsCode);
fs.writeFileSync(dbPath, updatedScript, 'utf8');
console.log('Successfully updated build_songs_database.js with mantras and categories!');
