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
  "image": "axtimkopf.png",
  "message": "Die phonetisch-geniale Tribe Starter Wonderwall-Parodie: Silbengenau, lautmalerisch auf Oasis abgestimmt und Platz 1 im Songbook!",
  "content": `
[Strophe 1]
Em7                 G
Tribe Star-ter, Kopf-weh, Beil tut weh,
         Dsus4               A7sus4
das der Dok-tor roh mit Axt zur Ruh
Em7                 G
Beil raus! Du sollst schon Schmerz-Hau
        Dsus4              A7sus4
re-gi-strier'n, was der Dok-tor tut
Em7                  G           Dsus4         A7sus4
Ich dröhn' bis tief, das kann nie-mand hier fühl'n,
                               Cadd9   Dsus4   A7sus4
das Weh, ich tu so laut: du raus

[Strophe 2]
Em7               G
We Space, das Wort ist an der Stirn,
          Dsus4                 A7sus4
dass das Fie-ber im Ohr hart ist aus
Em7                 G
Ich schwör', du hörst es all be-vor,
         Dsus4               A7sus4
doch du nie-mals rich-tig hast 'nen Hau
Em7                  G           Dsus4         A7sus4
Ich dröhn' bis tief, das kann nie-mand hier fühl'n,
                               Em7   G   Dsus4   A7sus4
das Weh, ich tu so laut: du raus

[Pre-Chorus 1]
      Cadd9             Dsus4            Em7
Und all die Not, wir hack-ten wach, ver-wun-det
      Cadd9             Dsus4            Em7
Und all das Leid, das As-pi-rin nicht en-det
Cadd9              Dsus4
Da sind man-che Ding', das ich würd'
G        D/F#     Em7       D        A7sus4
leicht zu sa-gen dir, doch ich denk' nur: Au!

[Refrain 1]
       Cadd9      Dsus4      Em7
Be-kloppt, mein Beil...
              Cadd9    Dsus4    Em7
Du Gott, nah bei, der Wund-arzt sägt mich
       Cadd9      Dsus4      Em7
Und Arzt, der Stahl...
           Cadd9    Dsus4    Em7
Bohr mir Wun-de voll!

[Strophe 3]
Em7                 G
Tut weh, was Kopf und Beil mir näht,
         Dsus4               A7sus4
Blut, der nie-mals zog es raus zu dir
Em7                 G
Beil raus! Du sollst schon Schmerz-Hau
        Dsus4              A7sus4
re-gi-strier'n, was du nicht zu tun
Em7                  G           Dsus4         A7sus4
Ich dröhn' bis tief, das kann nie-mand hier fühl'n,
                               Cadd9   Dsus4   A7sus4
das Weh, ich tu so laut: du raus

[Pre-Chorus 2]
      Cadd9             Dsus4            Em7
Und all die Not, die liegt zu dir, ver-wun-det
      Cadd9             Dsus4            Em7
Und all das Leid, das leicht den Weg ver-blen-det
Cadd9              Dsus4
Da sind man-che Ding', das ich würd'
G        D/F#     Em7       D        A7sus4
leicht zu sa-gen dir, doch ich denk' nur: Au!

[Refrain 2]
       Cadd9      Dsus4      Em7
Ich sag: Mein Beil...
              Cadd9    Dsus4    Em7
Du Gott, nah bei, der Wund-arzt sägt mich
       Cadd9      Dsus4      Em7
Und Arzt, der Stahl...
           Cadd9    Dsus4    Em7
Bohr mir Wun-de voll!

[Refrain 3]
       Cadd9      Dsus4      Em7
Ich sag: Mein Beil... (Ich sag: mein Beil)
              Cadd9    Dsus4    Em7
Du Gott, nah bei, der Wund-arzt sägt mich
       Cadd9      Dsus4      Em7
Und Arzt, der Stahl...
           Cadd9    Dsus4    Em7
Bohr mir Wun-de voll!

[Outro]
       Cadd9      Dsus4      Em7
Ich sag: Mein Beil... (Ich sag: mein Beil)
              Cadd9    Dsus4    Em7
Du Gott, nah bei, der Wund-arzt sägt mich (der sägt mich)
              Cadd9    Dsus4    Em7
Du Gott, nah bei, der Wund-arzt sägt mich (der sägt mich)
              Cadd9    Dsus4    Em7
Du Gott, nah bei, der Wund-arzt sägt mich (der sägt mich)
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
console.log('Successfully updated build_songs_database.js with axtimkopf.png on Tribe Starter Wonderwall!');
