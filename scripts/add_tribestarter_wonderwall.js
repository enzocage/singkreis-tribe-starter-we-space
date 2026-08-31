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
  "message": "Die offizielle Tribe Starter Singkreis-Hymne: Die Axt im Schädel, Mate, WeSpace-Vibes und Schrammel-Gitarre auf Platz 1!",
  "content": `
[Strophe 1]
Em7                   G
Tribe-star-ter: Heu-te ist der Tag,
                 Dsus4               A7sus4
wo die Axt mir tief im Schä-del steckt,
Em7                 G
We-Space, und kei-ner zieht mir
           Dsus4               A7sus4
die-ses Beil aus dem Hirn he-raus,
Em7                  G           Dsus4               A7sus4
Ich glaub' nicht dran, dass ir-gend-wer hier merkt,
                                 Cadd9   Dsus4   A7sus4
wie die-ses Beil im Schä-del pocht.

[Strophe 2]
Em7                 G
Hack-beil, das Wort stand auf der Stirn,
             Dsus4                 A7sus4
dass das Feu-er mir den Kopf ein-haut,
Em7                 G
Ein Schor-le-bier tat not vor-her,
        Dsus4                 A7sus4
a-ber nie-mand rief 'nen Dok-tor an.
Em7                  G           Dsus4               A7sus4
Ich glaub' nicht dran, dass ir-gend-wer hier merkt,
                                 Em7   G   Dsus4   A7sus4
wie die-ses Beil im Schä-del pocht.

[Pre-Chorus 1]
      Cadd9             Dsus4             Em7
Und all die Ro-he-heit im Kopf tut schwin-den,
      Cadd9             Dsus4             Em7
Und all das Leid am Beil tat weh beim Fin-den.
Cadd9              Dsus4
Da sind man-che Din-ge, die der
G        D/F#     Em7       D        A7sus4
Dok-tor nä-hen soll, doch er weiß nicht wie...

[Chorus 1]
       Cadd9      Dsus4      Em7
Be-zahlt mein Beil...
              Cadd9    Dsus4    Em7
Ju-ra-be-gabt zieht ei-ner's Beil raus?
       Cadd9      Dsus4      Em7
Ein Arz-te-fall...
           Cadd9    Dsus4    Em7
Trotz der Wun-de voll!

[Strophe 3]
Em7                   G
Tribe-star-ter, heu-te tut es weh,
                  Dsus4               A7sus4
und das Pflas-ter klebt am Hirn nicht fest,
Em7                G
We-Space, man fragt mich wie es geht,
        Dsus4                 A7sus4
wäh-rend je-der mich am Feu-er lässt.
Em7                  G           Dsus4               A7sus4
Ich glaub' nicht dran, dass ir-gend-wer hier merkt,
                                 Cadd9   Dsus4   A7sus4
wie die-ses Beil im Schä-del pocht.

[Pre-Chorus 2]
      Cadd9             Dsus4             Em7
Und all die Ro-he-heit im Kopf tut schwin-den,
      Cadd9             Dsus4             Em7
Und all das Leid am Beil tat weh beim Fin-den.
Cadd9              Dsus4
Da sind man-che Din-ge, die der
G        D/F#     Em7       D        A7sus4
Dok-tor nä-hen soll, doch er weiß nicht wie...

[Chorus 2]
       Cadd9      Dsus4      Em7
Ich sag: Mein Beil...
              Cadd9    Dsus4    Em7
Ju-ra-be-gabt zieht ei-ner's Beil raus?
       Cadd9      Dsus4      Em7
Ein Arz-te-fall...
           Cadd9    Dsus4    Em7
Trotz der Wun-de voll!

[Chorus 3]
       Cadd9      Dsus4      Em7
Ich sag: Mein Beil...
              Cadd9    Dsus4    Em7
Ju-ra-be-gabt zieht ei-ner's Beil raus?
       Cadd9      Dsus4      Em7
Ein Arz-te-fall...
           Cadd9    Dsus4    Em7
Trotz der Wun-de voll!

[Outro]
       Cadd9      Dsus4      Em7
Ich sag: Mein Beil... (Zieht ei-ner's Beil raus?)
           Cadd9    Dsus4    Em7
Ein Arz-te-fall... (Trotz der Wun-de voll!)
           Cadd9    Dsus4    Em7
Mein Beil... (Zieht ei-ner's Beil raus?)
           Cadd9    Dsus4    Em7
Ein Arz-te-fall... (Trotz der Wun-de voll!)
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
console.log('Successfully updated build_songs_database.js with new text for Tribe Starter Wonderwall!');
