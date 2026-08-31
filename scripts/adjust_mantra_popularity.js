const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'build_songs_database.js');
const dbScript = fs.readFileSync(dbPath, 'utf8');
const match = dbScript.match(/const songs = (\[[\s\S]*?\n\];)/);
if (!match) throw new Error('Could not find songs array');

let songs = eval(match[1]);

// Map relative mantra ranking to scores between 40 and 55
const mantraPopularityOrder = [
  'gayatri-mantra',
  'om-namah-shivaya',
  'om-mani-padme-hum',
  'lokah-samastah',
  'hare-krishna-maha-mantra',
  'om-gam-ganapataye-namaha',
  'om-tare-tuttare',
  'maha-mrityunjaya-mantra',
  'ra-ma-da-sa',
  'aad-guray-nameh',
  'so-hum',
  'bhaisajyaguru-medizinbuddha',
  'om-namo-bhagavate-vasudevaya',
  'heart-sutra-gate-gate',
  'om-namo-narayanaya',
  'adi-shakti',
  'sat-nam-sa-ta-na-ma',
  'ong-namo-guru-dev-namo',
  'asato-ma-sadgamaya',
  'om-sahana-vavatu',
  'sita-ram-jay-jay-ram',
  'om-shri-maha-lakshmi',
  'jay-jay-ma-kali',
  'ek-ong-kar-sat-nam',
  'govinda-jaya-jaya',
  'may-there-always-be-angels'
];

let updatedCount = 0;
songs.forEach(s => {
  if (s.category === 'mantren') {
    const rank = mantraPopularityOrder.indexOf(s.id);
    if (rank !== -1) {
      s.popularity = 55 - rank; // 55 down to 30
    } else {
      s.popularity = 45;
    }
    updatedCount++;
  }
});

console.log(`Updated ${updatedCount} mantra popularity scores to lower half (30-55).`);

// Write back to build_songs_database.js
const newSongsCode = 'const songs = ' + JSON.stringify(songs, null, 2) + ';';
const updatedScript = dbScript.replace(match[0], newSongsCode);
fs.writeFileSync(dbPath, updatedScript, 'utf8');
console.log('Successfully saved build_songs_database.js!');
