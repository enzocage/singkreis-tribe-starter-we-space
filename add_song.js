const fs = require('fs');
const path = require('path');

// 1. Read API Key from .env
const envPath = path.join(__dirname, '.env');
let apiKey = '';
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  const match = envContent.match(/^GEMINI_API_KEY\s*=\s*(.*)$/m);
  if (match && match[1].trim()) {
    apiKey = match[1].trim();
  }
}

if (!apiKey) {
  console.error('\n❌ Kein GEMINI_API_KEY in .env gefunden!');
  console.error('Bitte trage deinen Key in .env ein: GEMINI_API_KEY=AIzaSy...\n');
  process.exit(1);
}

// 2. Parse arguments
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('\n📖 Verwendung:');
  console.log('  node add_song.js "Songtitel" "Interpret"');
  console.log('Beispiel:');
  console.log('  node add_song.js "I am from Austria" "Reinhard Fendrich"\n');
  process.exit(0);
}

const title = args[0] || '';
const artist = args[1] || 'Unbekannt';

console.log(`\n⏳ Gemini AI recherchiert & generiert Akkorde für: "${title}" von "${artist}"...`);

async function generateSong() {
  const models = ['gemini-3.6-flash', 'gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-1.5-flash'];
  let lastError = null;

  const promptText = `Du bist ein professioneller Musikexperte für Akustikgitarre, Lagerfeuer und Singkreis-Repertoire.
Erstelle für den Song "${title}" von "${artist}" den vollständigen Liedtext inklusive präziser Gitarren-Akkorde für Akustikgitarre.
Antworte AUSSCHLIESSLICH mit einem validen JSON-Objekt (ohne Markdown, ohne \`\`\`json Backticks):
{
  "id": "${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}",
  "title": "${title}",
  "artist": "${artist}",
  "year": 1980,
  "lang": "DE",
  "originalKey": "G",
  "tempo": 85,
  "message": "Kurze 1-Satz Kernaussage oder Stimmung auf Deutsch.",
  "content": "[Strophe 1]\\nG           C\\nErste Textzeile...\\n\\n[Refrain]\\n..."
}
WICHTIG für "content":
- Verwende Abschnitts-Tags wie [Strophe 1], [Refrain], [Strophe 2], [Brücke], [Outro].
- Setze die Akkorde in eigene Zeilen DIREKT ÜBER die zugehörigen Textzeilen.
- Verwende gängige Standard-Akkorde (z.B. G, Em, C, D, Am, F, A7, Cadd9, D/F#).
- Der Text muss vollständig und singbar sein.`;

  for (const model of models) {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: promptText }] }],
          generationConfig: {
            responseMimeType: 'application/json',
            temperature: 0.2
          }
        })
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        const msg = errData?.error?.message || `HTTP ${response.status}`;
        if (msg.includes('no longer available') || msg.includes('not found') || response.status === 404) {
          lastError = new Error(msg);
          continue;
        }
        throw new Error(msg);
      }

      const resData = await response.json();
      const rawText = resData?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!rawText) throw new Error('Leere Antwort von Gemini erhalten.');

      const cleaned = rawText.replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim();
      return JSON.parse(cleaned);
    } catch (e) {
      lastError = e;
      if (e.message && (e.message.includes('no longer available') || e.message.includes('not found'))) {
        continue;
      }
      throw e;
    }
  }

  throw lastError || new Error('Kein funktionierendes Gemini-Modell gefunden.');
}

(async () => {
  try {
    const song = await generateSong();
    song.isCommunity = true;

    // Load build_songs_database.js
    const dbPath = path.join(__dirname, 'build_songs_database.js');
    let dbContent = fs.readFileSync(dbPath, 'utf8');

    // Check if communitySongs array exists in dbContent
    if (!dbContent.includes('const communitySongs =')) {
      const insertMarker = 'const songs = [';
      dbContent = dbContent.replace(insertMarker, `const communitySongs = [];\n\nconst songs = [`);
    }

    // Append song to communitySongs array or songs array
    const commTag = 'const communitySongs = [';
    const commIdx = dbContent.indexOf(commTag);
    if (commIdx !== -1) {
      const songSnippet = '\n  ' + JSON.stringify(song, null, 2).split('\n').join('\n  ') + ',';
      dbContent = dbContent.substring(0, commIdx + commTag.length) + songSnippet + dbContent.substring(commIdx + commTag.length);
      fs.writeFileSync(dbPath, dbContent, 'utf8');
      console.log(`✅ Song "${song.title}" (${song.artist}) wurde erfolgreich in build_songs_database.js eingefügt!`);
    } else {
      console.error('Konnte Einfügestelle in build_songs_database.js nicht finden.');
    }

    // Run build to update index.html
    require('./build_songs_database.js');
    console.log(`🎉 index.html wurde aktualisiert! Der Song ist jetzt im Liederbuch verfügbar.\n`);

  } catch (err) {
    console.error('\n❌ Fehler bei der Generierung:', err.message, '\n');
  }
})();
