const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'build_songs_database.js');
const dbScript = fs.readFileSync(dbPath, 'utf8');
const match = dbScript.match(/const songs = (\[[\s\S]*?\n\];)/);
if (!match) throw new Error('Could not find songs array');

let songs = eval(match[1]);

// Adjust top songs to place Tribe Starter Wonderwall precisely at rank 7
const rankOverrides = {
  'wonderwall': 99.0,
  'country-roads': 98.6,
  'here-comes-the-sun': 98.4,
  'hey-jude': 98.2,
  'hotel-california': 98.0,
  'bohemian-rhapsody': 97.8,
  'tribestarter-wonderwall': 97.6
};

songs.forEach(s => {
  if (rankOverrides[s.id] !== undefined) {
    s.popularity = rankOverrides[s.id];
  }
});

// Reorder array in source code so rank matches sequence
songs.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));

console.log('Top 10 songs after ranking update:');
songs.slice(0, 10).forEach((s, idx) => console.log(`${idx + 1}. ${s.title} (pop: ${s.popularity})`));

// Write back to build_songs_database.js
const newSongsCode = 'const songs = ' + JSON.stringify(songs, null, 2) + ';';
const updatedScript = dbScript.replace(match[0], newSongsCode);
fs.writeFileSync(dbPath, updatedScript, 'utf8');
console.log('Successfully updated build_songs_database.js with Tribe Starter on Rank 7!');
