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
  "content": `
[Strophe 1]
Em7                   G
Heute sitzen wir am Feuer,
                  Dsus4               A7sus4
Tribestarter stimmt die Saiten an,
Em7                G
Im WeSpace trinken alle Mate,
        Dsus4              A7sus4
keiner weiß, was er noch labern kann.
Em7                  G           Dsus4               A7sus4
Ich glaub kaum noch, dass irgendwer 'ne Axt im Schädel spürt
             Cadd9   Dsus4   A7sus4
so wie ich jetzt hier.

[Strophe 2]
Em7                 G
Funken fliegen durch die Runde,
          Dsus4                 A7sus4
jeder singt den gleichen Schrammel-Akkord,
Em7                 G
Wir chillen kollektiv im WeSpace,
         Dsus4                A7sus4
doch die Logik ging schon lange fort.
Em7                  G           Dsus4               A7sus4
Ich glaub kaum noch, dass irgendwer 'ne Axt im Schädel spürt
             Em7   G   Dsus4   A7sus4
so wie ich jetzt hier.

[Pre-Chorus]
      Cadd9             Dsus4             Em7
Und all der Rauch zieht beißend in die Augen,
      Cadd9             Dsus4             Em7
Die alten Griffe wollen nix mehr taugen.
Cadd9              Dsus4
Ich wollt' dir sagen: „Zieh das Beil mal
G         D/F#     Em7       D        A7sus4
endlich aus meim Hirn!“, doch mir fällt's nicht mehr ein...

[Refrain]
       Cadd9      Dsus4      Em7
Denn heute...
              Cadd9    Dsus4    Em7
Gibt's Lagerfeuer für die Meute!
       Cadd9      Dsus4      Em7
Und scheißegal:
           Cadd9    Dsus4    Em7
Die Axt im Kopf ist phänomenal!

[Strophe 3]
Em7                   G
Heute sitzen wir am Feuer,
                  Dsus4               A7sus4
Tribestarter stimmt die Saiten an,
Em7                G
Im WeSpace trinken alle Mate,
        Dsus4              A7sus4
keiner weiß, was er noch labern kann.
Em7                  G           Dsus4               A7sus4
Ich glaub kaum noch, dass irgendwer 'ne Axt im Schädel spürt
             Cadd9   Dsus4   A7sus4
so wie ich jetzt hier.

[Pre-Chorus]
      Cadd9             Dsus4             Em7
Und all der Rauch zieht beißend in die Augen,
      Cadd9             Dsus4             Em7
Die alten Griffe wollen nix mehr taugen.
Cadd9              Dsus4
Ich wollt' dir sagen: „Zieh das Beil mal
G         D/F#     Em7       D        A7sus4
endlich aus meim Hirn!“, doch mir fällt's nicht mehr ein...

[Refrain]
       Cadd9      Dsus4      Em7
Denn heute...
              Cadd9    Dsus4    Em7
Gibt's Lagerfeuer für die Meute!
       Cadd9      Dsus4      Em7
Und scheißegal:
           Cadd9    Dsus4    Em7
Die Axt im Kopf ist phänomenal!
       Cadd9      Dsus4      Em7
Ich sag: Heute...
              Cadd9    Dsus4    Em7
Gibt's Lagerfeuer für die Meute!
       Cadd9      Dsus4      Em7
Und scheißegal:
           Cadd9    Dsus4    Em7
Die Axt im Kopf ist phänomenal!

[Outro]
       Cadd9      Dsus4      Em7
Ich sag: Heute...
              Cadd9    Dsus4    Em7
Gibt's Lagerfeuer für die Meute!
           Cadd9    Dsus4    Em7
Die Axt im Kopf ist phänomenal...
           Cadd9    Dsus4    Em7
Die Axt im Kopf ist phänomenal...
           Cadd9    Dsus4    Em7
Die Axt im Kopf ist phänomenal!
`
};

const existingIdx = songs.findIndex(s => s.id === tribestarterWonderwall.id);
if (existingIdx !== -1) {
  songs[existingIdx] = tribestarterWonderwall;
} else {
  songs.unshift(tribestarterWonderwall);
}

// Write back to build_songs_database.js
const newSongsCode = 'const songs = ' + JSON.stringify(songs, null, 2) + ';';
const updatedScript = dbScript.replace(match[0], newSongsCode);
fs.writeFileSync(dbPath, updatedScript, 'utf8');
console.log('Successfully updated build_songs_database.js with full length Wonderwall parody!');
