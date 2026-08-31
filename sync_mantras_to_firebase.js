const fs = require('fs');
const path = require('path');
const https = require('https');

const mantras = JSON.parse(fs.readFileSync(path.join(__dirname, 'mantras_data.json'), 'utf8'));
console.log('Total mantras to sync:', mantras.length);

const projectId = "singkreis-7217f";
const apiKey = "AIzaSyCAAFPJuClH1V8tqWVS6PM9N2hUjAyD3zg";

async function syncMantra(item) {
  const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/mantras/${item.id}?key=${apiKey}`;
  
  const payload = {
    fields: {
      id: { stringValue: item.id },
      code: { stringValue: item.code },
      title: { stringValue: item.title },
      artist: { stringValue: item.artist },
      sourceUrl: { stringValue: item.sourceUrl },
      category: { stringValue: item.category },
      isMantra: { booleanValue: true },
      createdAt: { integerValue: String(Date.now()) }
    }
  };

  return new Promise((resolve, reject) => {
    const data = JSON.stringify(payload);
    const req = https.request(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(true);
        } else {
          reject(new Error(`Status ${res.statusCode}: ${body}`));
        }
      });
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function syncAll() {
  const chunkSize = 25;
  let success = 0;
  for (let i = 0; i < mantras.length; i += chunkSize) {
    const chunk = mantras.slice(i, i + chunkSize);
    await Promise.all(chunk.map(async (m) => {
      try {
        await syncMantra(m);
        success++;
      } catch (e) {
        console.warn(`Error on ${m.title}:`, e.message);
      }
    }));
    process.stdout.write(`\rProgress: ${success} / ${mantras.length} mantras synced to Firebase Firestore...`);
  }
  console.log(`\n🎉 Successfully synced all ${success} mantras to Firebase Firestore!`);
}

syncAll();
