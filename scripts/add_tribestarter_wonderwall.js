const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'build_songs_database.js');
const dbScript = fs.readFileSync(dbPath, 'utf8');
const match = dbScript.match(/const songs = (\[[\s\S]*?\n\];)/);
if (!match) throw new Error('Could not find songs array');

let songs = eval(match[1]);

const tribestarterWonderwall = {
  "id": "tribestarter-wonderwall",
  "title": "Tribe Starter (Wonderwall Parodie)",
  "artist": "Felix",
  "year": 2026,
  "lang": "DE",
  "originalKey": "Em",
  "tempo": 87,
  "popularity": 100,
  "category": "lagerfeuer",
  "message": "Die offizielle Tribe Starter Singkreis-Hymne: Mate, WeSpace-Vibes, Lagerfeuer und Schrammel-Gitarre auf Platz 1!",
  "content": "\n[Strophe 1]\nEm7                   G\nHeute sitzen wir am Feuer,\n                  Dsus4               A7sus4\nTribestarter stimmt die Saiten an,\nEm7                G\nIm WeSpace trinken alle Mate,\n        Dsus4              A7sus4\nkeiner weiß, was er noch labern kann.\nEm7                  G           Dsus4               A7sus4\nIch glaub kaum noch, dass irgendwer 'ne Axt im Schädel spürt\n             Cadd9   Dsus4   A7sus4\nso wie ich jetzt hier.\n\n[Strophe 2]\nEm7                 G\nFunken fliegen durch die Runde,\n          Dsus4                 A7sus4\njeder singt den gleichen Schrammel-Akkord,\nEm7                 G\nWir chillen kollektiv im WeSpace,\n         Dsus4                A7sus4\ndoch die Logik ging schon lange fort.\nEm7                  G           Dsus4               A7sus4\nIch glaub kaum noch, dass irgendwer 'ne Axt im Schädel spürt\n             Em7   G   Dsus4   A7sus4\nso wie ich jetzt hier.\n\n[Pre-Chorus]\n      Cadd9             Dsus4             Em7\nUnd all der Rauch zieht beißend in die Augen,\n      Cadd9             Dsus4             Em7\nDie alten Griffe wollen nix mehr taugen.\nCadd9              Dsus4\nIch wollt' dir sagen: „Zieh das Beil mal\nG         D/F#     Em7       D        A7sus4\nendlich aus meim Hirn!“, doch mir fällt's nicht mehr ein...\n\n[Refrain]\n       Cadd9      Dsus4      Em7\nDenn heute...\n              Cadd9    Dsus4    Em7\nGibt's Lagerfeuer für die Meute!\n       Cadd9      Dsus4      Em7\nUnd scheißegal:\n           Cadd9    Dsus4    Em7\nDie Axt im Kopf ist phänomenal!\n\n[Outro]\n       Cadd9      Dsus4      Em7\nDenn heute...\n              Cadd9    Dsus4    Em7\nGibt's Lagerfeuer für die Meute!\n           Cadd9    Dsus4    Em7\nDie Axt im Kopf ist phänomenal!\n"
};

// Check if already exists, otherwise prepend / add
const existingIdx = songs.findIndex(s => s.id === tribestarterWonderwall.id);
if (existingIdx !== -1) {
  songs[existingIdx] = tribestarterWonderwall;
} else {
  // Add at the beginning of array so it also leads structurally
  songs.unshift(tribestarterWonderwall);
}

console.log(`Total songs count: ${songs.length}. Platz 1 is: ${songs[0].title} with popularity ${songs[0].popularity}`);

// Write back to build_songs_database.js
const newSongsCode = 'const songs = ' + JSON.stringify(songs, null, 2) + ';';
const updatedScript = dbScript.replace(match[0], newSongsCode);
fs.writeFileSync(dbPath, updatedScript, 'utf8');
console.log('Successfully updated build_songs_database.js with Tribe Starter Wonderwall on Platz 1!');
