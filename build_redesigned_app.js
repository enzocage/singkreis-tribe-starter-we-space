const fs = require('fs');
const path = require('path');

// 1. Load Mantras Data
const mantrasData = JSON.parse(fs.readFileSync(path.join(__dirname, 'mantras_data.json'), 'utf8'));

// 2. Load Songs Database from build_songs_database.js
const songsBuildScript = fs.readFileSync(path.join(__dirname, 'build_songs_database.js'), 'utf8');
const songsMatch = songsBuildScript.match(/const songs = (\[[\s\S]*?\n\];)/);
if (!songsMatch) {
  throw new Error('Could not find songs array in build_songs_database.js');
}

const songs = eval(songsMatch[1]);
console.log(`Loaded ${songs.length} standard songs and ${mantrasData.length} mantras.`);

// 3. Environment Config (Safe default template for public repository)
const envConfig = {
  GEMINI_API_KEY: '',
  FIREBASE_API_KEY: '',
  FIREBASE_PROJECT_ID: '',
  FIREBASE_APP_ID: '',
  FIREBASE_AUTH_DOMAIN: '',
  FIREBASE_STORAGE_BUCKET: '',
  FIREBASE_MESSAGING_SENDER_ID: ''
};

// 4. Load template.html
let template = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');

// 5. Inject data and env config
const songsCode = 'const SONGS = ' + JSON.stringify(songs, null, 2) + ';';
const mantrasCode = 'const MANTRAS = ' + JSON.stringify(mantrasData, null, 2) + ';';
const envConfigCode = 'const ENV_CONFIG = ' + JSON.stringify(envConfig, null, 2) + ';';

template = template.replace('/* SONGS_DATA_PLACEHOLDER */', songsCode);
template = template.replace('/* MANTRAS_DATA_PLACEHOLDER */', mantrasCode);
template = template.replace('/* ENV_CONFIG_PLACEHOLDER */', envConfigCode);

// 6. Write to root index.html
const rootIndexHtmlPath = path.join(__dirname, 'index.html');
fs.writeFileSync(rootIndexHtmlPath, template, 'utf8');
console.log('Successfully generated redesigned index.html (safe for public repository)!');
