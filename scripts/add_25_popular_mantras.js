const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'build_songs_database.js');
const dbScript = fs.readFileSync(dbPath, 'utf8');
const match = dbScript.match(/const songs = (\[[\s\S]*?\n\];)/);
if (!match) throw new Error('Could not find songs array');

let songs = eval(match[1]);
console.log(`Current songs count before adding mantras: ${songs.length}`);

// The 25 top popular traditional mantras & spiritual chants
const top25Mantras = [
  {
    "id": "om-mani-padme-hum",
    "title": "Om Mani Padme Hum",
    "artist": "Traditional (Tibetischer Buddhismus)",
    "year": 1990,
    "lang": "SA",
    "originalKey": "Am",
    "tempo": 74,
    "popularity": 98,
    "category": "mantren",
    "message": "Das universelle Mitgefühls-Mantra von Avalokiteshvara – möge das Juwel im Lotus des Herzens erblühen.",
    "content": "\n[Strophe 1]\nAm              G\nOm Mani Padme Hum,\nF               G       Am\nOm Mani Padme Hum.\nAm              G\nOm Mani Padme Hum,\nF       G       Am\nOm Mani Padme Hum.\n\n[Refrain]\nC               G\nOm Mani Padme Hum,\nDm              Am\nOm Mani Padme Hum,\nF               G\nOm Mani Padme Hum,\nF       G       Am\nOm Mani Padme Hum.\n\n[Steigerung]\nAm      G       F       G\nOm Mani Padme Hum...\nAm      G       F   G   Am\nOm Mani Padme Hum...\n"
  },
  {
    "id": "gayatri-mantra",
    "title": "Gayatri Mantra (Om Bhur Bhuva Svaha)",
    "artist": "Deva Premal / Traditional",
    "year": 1998,
    "lang": "SA",
    "originalKey": "C",
    "tempo": 72,
    "popularity": 98,
    "category": "mantren",
    "message": "Das älteste vedische Lichtgebet (Rigveda) zur Klärung des Geistes und Erleuchtung des Herzens.",
    "content": "\n[Strophe 1]\nC                Em\nOm Bhur Bhuvaḥ Swaḥ,\nF             G\nTat Savitur Vareṇyaṃ,\nC                 Em\nBhargo Devasya Dhīmahi,\nF               G        C\nDhiyo Yo Naḥ Prachodayāt.\n\n[Refrain]\nC          Em\nOm Bhur Bhuvaḥ Swaḥ,\nF             G\nTat Savitur Vareṇyaṃ,\nC                 Em\nBhargo Devasya Dhīmahi,\nF               G        C\nDhiyo Yo Naḥ Prachodayāt.\n\n[Mantra Flow]\nAm             Em\nBhargo Devasya Dhīmahi,\nF               G        C\nDhiyo Yo Naḥ Prachodayāt.\nAm             Em\nBhargo Devasya Dhīmahi,\nF               G        C\nDhiyo Yo Naḥ Prachodayāt.\n\n[Outro]\nC       Em      F   G   C\nShanti, Shanti, Shanti Om.\n"
  },
  {
    "id": "om-namah-shivaya",
    "title": "Om Namah Shivaya",
    "artist": "Krishna Das / Traditional",
    "year": 1996,
    "lang": "SA",
    "originalKey": "Am",
    "tempo": 80,
    "popularity": 98,
    "category": "mantren",
    "message": "Das fünf-silbige Panchakshara-Mantra: Verneigung vor dem transformierenden Ur-Bewusstsein in allem.",
    "content": "\n[Strophe 1]\nAm              G\nOm Namah Shivaya,\nF               G       Am\nOm Namah Shivaya.\nAm              G\nOm Namah Shivaya,\nF               G       Am\nOm Namah Shivaya.\n\n[Refrain]\nC               G\nShivaya Namah Om,\nF               G       Am\nShivaya Namah Om.\nC               G\nShivaya Namah Om,\nF               G       Am\nShivaya Namah Om.\n\n[Kirtan Flow]\nAm              G\nOm Namah Shivaya, Om Namah Shivaya,\nF               G       Am\nShivaya Namah Om, Namah Shivaya.\n"
  },
  {
    "id": "hare-krishna-maha-mantra",
    "title": "Hare Krishna (Maha Mantra)",
    "artist": "Traditional (Bhakti Kirtan)",
    "year": 1969,
    "lang": "SA",
    "originalKey": "A",
    "tempo": 90,
    "popularity": 97,
    "category": "mantren",
    "message": "Das große Erlösungs- und Freuden-Mantra der Hingabe an die göttliche Liebe und universelle Freude.",
    "content": "\n[Strophe 1]\nA               D\nHare Krishna, Hare Krishna,\nA               E\nKrishna Krishna, Hare Hare,\nA               D\nHare Rama, Hare Rama,\nA       E       A\nRama Rama, Hare Hare.\n\n[Refrain]\nA               D\nHare Krishna, Hare Krishna,\nA               E\nKrishna Krishna, Hare Hare,\nA               D\nHare Rama, Hare Rama,\nA       E       A\nRama Rama, Hare Hare.\n\n[Kirtan Tempo]\nA       D       A       E\nHare Krishna... Hare Rama...\nA       D       A   E   A\nHare Krishna... Hare Rama...\n"
  },
  {
    "id": "om-gam-ganapataye-namaha",
    "title": "Om Gam Ganapataye Namaha",
    "artist": "Deva Premal / Traditional",
    "year": 2002,
    "lang": "SA",
    "originalKey": "G",
    "tempo": 84,
    "popularity": 97,
    "category": "mantren",
    "message": "Anrufung von Ganesha – dem Hüter der Schwelle zur Beseitigung aller Hindernisse und für einen glücklichen Neubeginn.",
    "content": "\n[Strophe 1]\nG               C\nOm Gam Ganapataye Namaha,\nG               D\nOm Gam Ganapataye Namaha,\nEm              C\nOm Gam Ganapataye Namaha,\nG       D       G\nSharanam Ganesha.\n\n[Refrain]\nG               C\nOm Gam Ganapataye Namaha,\nG               D\nOm Gam Ganapataye Namaha,\nEm              C\nOm Gam Ganapataye Namaha,\nG       D       G\nSharanam Ganesha.\n\n[Bridge]\nC               G\nGanesha Sharanam, Sharanam Ganesha,\nC               D\nGanesha Sharanam, Sharanam Ganesha.\nEm              C\nOm Gam Ganapataye Namaha,\nG       D       G\nSharanam Ganesha.\n"
  },
  {
    "id": "om-tare-tuttare",
    "title": "Om Tare Tuttare Ture Soha (Grüne Tara)",
    "artist": "Deva Premal / Traditional",
    "year": 2004,
    "lang": "SA",
    "originalKey": "Am",
    "tempo": 76,
    "popularity": 97,
    "category": "mantren",
    "message": "Das Schutzmantra der Grünen Tara für furchtloses Handeln, Befreiung von inneren Ängsten und schnellen Beistand.",
    "content": "\n[Strophe 1]\nAm              G\nOm Tare Tuttare Ture Soha,\nF               G       Am\nOm Tare Tuttare Ture Soha.\nAm              G\nOm Tare Tuttare Ture Soha,\nF               G       Am\nOm Tare Tuttare Ture Soha.\n\n[Refrain]\nC               G\nTare Tuttare Ture Soha,\nDm              Am\nTare Tuttare Ture Soha,\nF               G\nTare Tuttare Ture Soha,\nF       G       Am\nOm Tare Tuttare Soha.\n\n[Outro]\nAm      G       F   G   Am\nOm Tare Tuttare Ture Soha...\n"
  },
  {
    "id": "lokah-samastah",
    "title": "Lokah Samastah Sukhino Bhavantu",
    "artist": "Traditional / Singkreis",
    "year": 2000,
    "lang": "SA",
    "originalKey": "G",
    "tempo": 76,
    "popularity": 98,
    "category": "mantren",
    "message": "Mögen alle Wesen in allen Welten glücklich und frei sein – das weltweite Friedens- und Segensgebet.",
    "content": "\n[Strophe 1]\nG               C\nLokah Samastah Sukhino Bhavantu,\nG               D\nLokah Samastah Sukhino Bhavantu,\nEm              C\nLokah Samastah Sukhino Bhavantu,\nG       D       G\nOm Shanti, Shanti, Shanti.\n\n[Refrain]\nG               C\nLokah Samastah Sukhino Bhavantu,\nG               D\nLokah Samastah Sukhino Bhavantu,\nEm              C\nLokah Samastah Sukhino Bhavantu,\nG       D       G\nOm Shanti, Shanti, Shanti.\n\n[Bridge]\nC               G\nMögen alle Wesen frei und glücklich sein,\nC               D\nMöge Frieden sein auf dieser Erde.\nEm              C\nLokah Samastah Sukhino Bhavantu,\nG       D       G\nOm Shanti, Shanti, Shanti.\n"
  },
  {
    "id": "maha-mrityunjaya-mantra",
    "title": "Maha Mrityunjaya Mantra (Om Tryambakam)",
    "artist": "Traditional (Rigveda)",
    "year": 1995,
    "lang": "SA",
    "originalKey": "Dm",
    "tempo": 70,
    "popularity": 96,
    "category": "mantren",
    "message": "Das große Heil- und Lebensschutz-Mantra zur Überwindung von Krankheiten, Ängsten und für seelische Unsterblichkeit.",
    "content": "\n[Strophe 1]\nDm              C\nOm Tryambakaṃ Yajāmahe\nBb              C      Dm\nSugandhiṃ Puṣṭi-vardhanam,\nDm                C\nUrvārukam Iva Bandhanān\nBb              C         Dm\nMṛtyor Mukṣīya Māmṛtāt.\n\n[Refrain]\nF                 C\nOm Tryambakaṃ Yajāmahe\nGm                Dm\nSugandhiṃ Puṣṭi-vardhanam,\nF                 C\nUrvārukam Iva Bandhanān\nBb        C       Dm\nMṛtyor Mukṣīya Māmṛtāt.\n\n[Outro]\nDm      C       Bb      C       Dm\nOm Shanti, Shanti, Shanti Om.\n"
  },
  {
    "id": "ra-ma-da-sa",
    "title": "Ra Ma Da Sa (Siri Gaitri Mantra)",
    "artist": "Snatam Kaur / Kundalini Yoga",
    "year": 2002,
    "lang": "SA",
    "originalKey": "C",
    "tempo": 68,
    "popularity": 96,
    "category": "mantren",
    "message": "Das achtteilige Kundalini-Heilungsmantra zur Energetisierung, Harmonisierung und Ausstrahlung von Heilkraft.",
    "content": "\n[Strophe 1]\nC       G       Am      F\nRa Ma Da Sa, Sa Say So Hung,\nC       G       Am      F       C\nRa Ma Da Sa, Sa Say So Hung.\n\n[Refrain]\nAm      Em      F       C\nRa Ma Da Sa, Sa Say So Hung,\nAm      Em      F       G       C\nRa Ma Da Sa, Sa Say So Hung.\n\n[Heilkreis Flow]\nC               G\nSonne, Mond, Erde, Unendlichkeit,\nAm              F\nIch bin Eins mit dem göttlichen Licht.\nC       G       Am  F   C\nRa Ma Da Sa, Sa Say So Hung.\n"
  },
  {
    "id": "aad-guray-nameh",
    "title": "Aad Guray Nameh (Mangala Charan Mantra)",
    "artist": "Snatam Kaur / Deva Premal",
    "year": 2003,
    "lang": "SA",
    "originalKey": "G",
    "tempo": 75,
    "popularity": 96,
    "category": "mantren",
    "message": "Uraltes Schutzmantra der Sikh-Tradition – umhüllt den Geist mit einer schützenden Lichtaura der Urweisheit.",
    "content": "\n[Strophe 1]\nG               D\nAad Guray Nameh,\nEm              C\nJugaad Guray Nameh,\nG               D\nSat Guray Nameh,\nEm      D       G\nSiri Guru Devay Nameh.\n\n[Refrain]\nG               D\nAad Guray Nameh,\nEm              C\nJugaad Guray Nameh,\nG               D\nSat Guray Nameh,\nEm      D       G\nSiri Guru Devay Nameh.\n\n[Outro]\nG       D       Em      C\nIch verneige mich vor der Ur-Weisheit,\nG       D       Em  D   G\nSiri Guru Devay Nameh.\n"
  },
  {
    "id": "so-hum",
    "title": "Soham / Shivoham (Ich bin Das)",
    "artist": "Mirabai Ceiba / Traditional",
    "year": 2008,
    "lang": "SA",
    "originalKey": "C",
    "tempo": 68,
    "popularity": 96,
    "category": "mantren",
    "message": "Vedanta Atem- und Einheitsmantra: „Ich bin reines, unendliches Bewusstsein“ – im Einklang mit Ein- und Ausatmung.",
    "content": "\n[Strophe 1]\nC               G\nSo Hum, So Hum,\nAm              F\nI am That, That I am.\nC               G\nShivoham, Shivoham,\nAm              F       C\nPure Consciousness I am.\n\n[Refrain]\nC               G\nWith every breath I take,\nAm              F\nWith every move I make:\nC               G\nSo Hum, So Hum,\nAm              F       C\nI am That, That I am.\n\n[Bridge]\nAm              Em\nEinatmen „So“ — Ausatmen „Hum“,\nF               G\nZurückkehren zur eigenen Quelle.\nC               G\nSo Hum, So Hum,\nAm              F       C\nI am That, That I am.\n"
  },
  {
    "id": "bhaisajyaguru-medizinbuddha",
    "title": "Medizinbuddha Mantra (Teyata Om Bekandze)",
    "artist": "Deva Premal / Traditional",
    "year": 2006,
    "lang": "SA",
    "originalKey": "Am",
    "tempo": 72,
    "popularity": 95,
    "category": "mantren",
    "message": "Heilungsmantra des Medizinbuddha Bhaisajyaguru zur Beseitigung aller physischen, emotionalen und geistigen Leiden.",
    "content": "\n[Strophe 1]\nAm                G\nTeyata Om Bekandze Bekandze,\nF                 G       Am\nMaha Bekandze Radza Samudgate Soha.\nAm                G\nTeyata Om Bekandze Bekandze,\nF                 G       Am\nMaha Bekandze Radza Samudgate Soha.\n\n[Refrain]\nC                 G\nBekandze Bekandze Maha Bekandze,\nDm                Am\nBekandze Bekandze Maha Bekandze,\nF                 G\nSamudgate Soha,\nF         G       Am\nTeyata Om Bekandze Soha.\n"
  },
  {
    "id": "om-namo-bhagavate-vasudevaya",
    "title": "Om Namo Bhagavate Vasudevaya",
    "artist": "Krishna Das / Deva Premal",
    "year": 1999,
    "lang": "SA",
    "originalKey": "C",
    "tempo": 78,
    "popularity": 96,
    "category": "mantren",
    "message": "Das 12-silbige Mukti-Mantra (Befreiungsmantra) der Bhagavata Purana zur Ausrichtung auf das allgegenwärtige Göttliche.",
    "content": "\n[Strophe 1]\nC               G\nOm Namo Bhagavate,\nAm              F\nVasudevaya,\nC               G\nOm Namo Bhagavate,\nAm      F       C\nVasudevaya.\n\n[Refrain]\nC          G          Am         F\nOm Namo... Bhagavate... Vasudevaya...\nC          G          Am    F    C\nOm Namo... Bhagavate... Vasudevaya...\n\n[Outro]\nAm      Em      F       G       C\nVasudevaya... Vasudevaya...\n"
  },
  {
    "id": "heart-sutra-gate-gate",
    "title": "Herz-Sutra (Gate Gate Paragate)",
    "artist": "Traditional (Prajnaparamita)",
    "year": 2005,
    "lang": "SA",
    "originalKey": "Em",
    "tempo": 80,
    "popularity": 95,
    "category": "mantren",
    "message": "Das Mantra der höchsten Weisheit: „Gegangen, hinübergegangen, ans andere Ufer gelangt — Erwachen, Heil!“",
    "content": "\n[Strophe 1]\nEm              D\nGate Gate Paragate,\nC               D       Em\nParasamgate Bodhi Svaha.\nEm              D\nGate Gate Paragate,\nC               D       Em\nParasamgate Bodhi Svaha.\n\n[Refrain]\nG               D\nGate Gate Paragate,\nAm              Em\nParasamgate Bodhi Svaha,\nC               D\nGate Gate Paragate,\nC       D       Em\nBodhi Svaha, Bodhi Svaha.\n"
  },
  {
    "id": "om-namo-narayanaya",
    "title": "Om Namo Narayanaya",
    "artist": "Deva Premal / Traditional",
    "year": 2002,
    "lang": "SA",
    "originalKey": "D",
    "tempo": 76,
    "popularity": 95,
    "category": "mantren",
    "message": "Ashtakshara-Friedensmantra: Verneigung vor der kosmischen Kraft, die alles Leben erhält und im Herzen wohnt.",
    "content": "\n[Strophe 1]\nD               A\nOm Namo Narayanaya,\nG               A       D\nOm Namo Narayanaya.\nD               A\nOm Namo Narayanaya,\nG       A       D\nOm Namo Narayanaya.\n\n[Refrain]\nBm              F#m\nNarayanaya, Narayanaya,\nG               A       D\nOm Namo Narayanaya.\nBm              F#m\nNarayanaya, Narayanaya,\nG       A       D\nOm Namo Narayanaya.\n"
  },
  {
    "id": "adi-shakti",
    "title": "Adi Shakti (Kundalini Bhakti Mantra)",
    "artist": "Nirinjan Kaur / Snatam Kaur",
    "year": 2010,
    "lang": "SA",
    "originalKey": "Am",
    "tempo": 72,
    "popularity": 95,
    "category": "mantren",
    "message": "Hymne an die urweibliche Schöpferkraft, die nährende Mutterenergie und universelle Manifestationskraft.",
    "content": "\n[Strophe 1]\nAm              G\nAdi Shakti, Adi Shakti, Adi Shakti, Namo Namo,\nF               G                              Am\nSarab Shakti, Sarab Shakti, Sarab Shakti, Namo Namo.\nAm               G\nPrithum Bhagvati, Prithum Bhagvati, Prithum Bhagvati, Namo Namo,\nF                G                               Am\nKundalini Mata Shakti, Mata Shakti, Namo Namo.\n\n[Refrain]\nC               G\nNamo Namo, Namo Namo,\nDm              Am\nNamo Namo, Namo Namo,\nF               G\nKundalini Mata Shakti,\nF       G       Am\nMata Shakti, Namo Namo.\n"
  },
  {
    "id": "sat-nam-sa-ta-na-ma",
    "title": "Sa Ta Na Ma / Sat Nam",
    "artist": "Mirabai Ceiba / Kundalini Yoga",
    "year": 2007,
    "lang": "SA",
    "originalKey": "C",
    "tempo": 65,
    "popularity": 95,
    "category": "mantren",
    "message": "Die fünf Urklänge des Seins: Geburt (Sa), Leben (Ta), Transformation/Tod (Na), Wiedergeburt/Ewigkeit (Ma).",
    "content": "\n[Strophe 1]\nC       G       Am      F\nSa Ta Na Ma, Sa Ta Na Ma,\nC       G       Am      F       C\nSa Ta Na Ma, Sa Ta Na Ma.\n\n[Refrain]\nAm      Em      F       C\nSat Nam, Sat Nam, Sat Nam Ji,\nAm      Em      F       G       C\nSat Nam, Sat Nam, Wahe Guru Ji.\n\n[Meditation]\nC       G       Am      F\nUnendlichkeit... Schöpfung... Wandel... Ewiges Licht...\nC       G       Am  F   C\nSa Ta Na Ma, Sat Nam.\n"
  },
  {
    "id": "ong-namo-guru-dev-namo",
    "title": "Ong Namo Guru Dev Namo (Adi Mantra)",
    "artist": "Snatam Kaur / Kundalini Yoga",
    "year": 2002,
    "lang": "SA",
    "originalKey": "D",
    "tempo": 70,
    "popularity": 95,
    "category": "mantren",
    "message": "Das Adi Mantra: „Ich verneige mich vor der unendlichen Schöpferkraft und dem göttlichen Lehrer im Inneren.“",
    "content": "\n[Strophe 1]\nD               A\nOng Namo Guru Dev Namo,\nG               A       D\nOng Namo Guru Dev Namo.\nD               A\nOng Namo Guru Dev Namo,\nG       A       D\nGuru Dev, Guru Dev Namo.\n\n[Refrain]\nBm              F#m\nOng Namo, Ong Namo,\nG               A       D\nGuru Dev Namo.\nBm              F#m\nOng Namo, Ong Namo,\nG       A       D\nGuru Dev Namo.\n"
  },
  {
    "id": "asato-ma-sadgamaya",
    "title": "Asato Ma Sadgamaya (Pavamana Mantra)",
    "artist": "Deva Premal / Upanishaden",
    "year": 2005,
    "lang": "SA",
    "originalKey": "Em",
    "tempo": 70,
    "popularity": 96,
    "category": "mantren",
    "message": "Führe uns vom Unwirklichen zur Wahrheit, aus der Dunkelheit zum Licht, von der Vergänglichkeit zur Unsterblichkeit.",
    "content": "\n[Strophe 1]\nEm              D\nAsato Mā Sad Gamaya,\nC               D       Em\nTamaso Mā Jyotir Gamaya,\nEm                D\nMṛtyor Māmṛtaṃ Gamaya,\nC               D       Em\nOm Shanti, Shanti, Shanti.\n\n[Refrain]\nG                 D\nFühre mich zum Licht,\nAm                Em\nFühre mich zur Wahrheit,\nC                 D\nFühre mich zum ewigen Frieden,\nC       D       Em\nOm Shanti, Shanti Om.\n"
  },
  {
    "id": "om-sahana-vavatu",
    "title": "Om Sahana Vavatu (Shanti Mantra)",
    "artist": "Traditional (Taittiriya Upanishad)",
    "year": 1998,
    "lang": "SA",
    "originalKey": "C",
    "tempo": 72,
    "popularity": 94,
    "category": "mantren",
    "message": "Mögen wir gemeinsam geschützt und genährt werden, mit Kraft zusammenwirken und in Harmonie lernen.",
    "content": "\n[Strophe 1]\nC                 G\nOm Saha Nāvavatu,\nAm                F\nSaha Nau Bhunaktu,\nC                 G\nSaha Vīryaṃ Karavāvahai,\nAm                F        C\nTejasvi Nāvadhītamastu Mā Vidviṣāvahai.\n\n[Refrain]\nC       G       Am      F\nOm Shanti, Shanti, Shanti,\nC       G       Am  F   C\nOm Shanti, Shanti, Shanti.\n"
  },
  {
    "id": "sita-ram-jay-jay-ram",
    "title": "Shri Ram / Sita Ram (Jay Jay Ram)",
    "artist": "Krishna Das / Bhakti Singkreis",
    "year": 2001,
    "lang": "SA",
    "originalKey": "G",
    "tempo": 84,
    "popularity": 96,
    "category": "mantren",
    "message": "Bhakti-Herzschwingung: Lobpreisung von Sita und Ram – Verkörperung von Treue, göttlicher Liebe und Rechtschaffenheit.",
    "content": "\n[Strophe 1]\nG               C\nShri Ram Jaya Ram Jaya Jaya Ram,\nG               D\nShri Ram Jaya Ram Jaya Jaya Ram,\nEm              C\nSita Ram, Sita Ram, Sita Ram Jaya Ram,\nG       D       G\nShri Ram Jaya Jaya Ram.\n\n[Refrain]\nG               C\nSita Ram, Sita Ram, Sita Ram,\nG               D\nSita Ram, Sita Ram, Sita Ram,\nEm              C\nSita Ram, Sita Ram, Sita Ram,\nG       D       G\nJay Jay Sita Ram.\n"
  },
  {
    "id": "om-shri-maha-lakshmi",
    "title": "Maha Lakshmi Mantra (Om Shrim Maha Lakshmiyei)",
    "artist": "Deva Premal / Traditional",
    "year": 2003,
    "lang": "SA",
    "originalKey": "D",
    "tempo": 76,
    "popularity": 95,
    "category": "mantren",
    "message": "Anrufung von Lakshmi – der Göttin der spirituellen und materiellen Fülle, Schönheit, Anmut und Herzensgüte.",
    "content": "\n[Strophe 1]\nD                 A\nOm Shrim Maha Lakshmiyei Namaha,\nG                 A         D\nOm Shrim Maha Lakshmiyei Namaha.\nD                 A\nOm Shrim Maha Lakshmiyei Namaha,\nG         A         D\nOm Shrim Lakshmiyei Namaha.\n\n[Refrain]\nBm                F#m\nMaha Lakshmi, Maha Lakshmi,\nG                 A       D\nOm Shrim Lakshmiyei Namaha.\nBm                F#m\nMaha Lakshmi, Maha Lakshmi,\nG         A       D\nOm Shrim Lakshmiyei Namaha.\n"
  },
  {
    "id": "jay-jay-ma-kali",
    "title": "Jay Jay Ma Kali / Jay Jagadambe",
    "artist": "Traditional (Shaktismus)",
    "year": 2000,
    "lang": "SA",
    "originalKey": "Am",
    "tempo": 88,
    "popularity": 95,
    "category": "mantren",
    "message": "Feuriger Gesang an die göttliche Mutter (Kali & Jagadambe) zur Überwindung von Illusionen und für mutigen Wandel.",
    "content": "\n[Strophe 1]\nAm              G\nJay Jay Ma Kali, Jay Jay Ma Durga,\nF               G       Am\nJay Jagadambe, He Ma Durga.\nAm              G\nJay Jay Ma Kali, Jay Jay Ma Durga,\nF               G       Am\nJay Jagadambe, He Ma Durga.\n\n[Refrain]\nC               G\nHe Ma Durga, He Ma Durga,\nDm              Am\nHe Ma Durga, He Ma Durga,\nF               G\nJay Jagadambe, Jay Jagadambe,\nF       G       Am\nHe Ma Durga.\n"
  },
  {
    "id": "ek-ong-kar-sat-nam",
    "title": "Ek Ong Kar (Mul Mantra)",
    "artist": "Snatam Kaur / Japji Sahib",
    "year": 2004,
    "lang": "SA",
    "originalKey": "C",
    "tempo": 74,
    "popularity": 95,
    "category": "mantren",
    "message": "Das grundlegende Mul Mantra der Sikh-Tradition: „Ein Schöpfer, Wahrheit ist Sein Name, furchtlos, ohne Feindschaft, unsterblich.“",
    "content": "\n[Strophe 1]\nC                 G\nEk Ong Kar, Sat Nam, Karta Purakh,\nAm                F\nNirbhao, Nirvair, Akal Moorat,\nC                 G\nAjoonee, Saibhang, Gurprasaad, Jap,\nAm                F          C\nAad Sach, Jugaad Sach, Hai Bhee Sach, Nanak Hosee Bhee Sach.\n\n[Refrain]\nC          G          Am         F\nEk Ong Kar... Sat Nam... Wahe Guru...\nC          G          Am    F    C\nEk Ong Kar... Sat Nam... Wahe Guru...\n"
  },
  {
    "id": "govinda-jaya-jaya",
    "title": "Govinda Jaya Jaya (Gopala Jaya Jaya)",
    "artist": "Krishna Das / Traditional",
    "year": 1997,
    "lang": "SA",
    "originalKey": "G",
    "tempo": 92,
    "popularity": 96,
    "category": "mantren",
    "message": "Freudvoller Kirtan-Klassiker: Lobpreisung von Govinda und Gopala als Beschützer aller Seelen und göttliche Freude.",
    "content": "\n[Strophe 1]\nG               C\nGovinda Jaya Jaya, Gopala Jaya Jaya,\nG               D\nRadha Ramana Hari, Govinda Jaya Jaya.\nEm              C\nGovinda Jaya Jaya, Gopala Jaya Jaya,\nG       D       G\nRadha Ramana Hari, Govinda Jaya Jaya.\n\n[Refrain]\nG               C\nGovinda Jaya Jaya, Gopala Jaya Jaya,\nG               D\nRadha Ramana Hari, Govinda Jaya Jaya.\nEm              C\nGovinda Jaya Jaya, Gopala Jaya Jaya,\nG       D       G\nRadha Ramana Hari, Govinda Jaya Jaya.\n\n[Kirtan Steigerung]\nG       C       G       D\nGovinda! Gopala! Radha Ramana Hari!\nEm      C       G   D   G\nGovinda Jaya Jaya, Gopala Jaya Jaya!\n"
  }
];

// Merge into songs array: update existing or append
const existingMap = new Map(songs.map((s, idx) => [s.id, idx]));

let added = 0;
let updated = 0;

top25Mantras.forEach(m => {
  if (existingMap.has(m.id)) {
    const idx = existingMap.get(m.id);
    songs[idx] = Object.assign({}, songs[idx], m);
    updated++;
  } else {
    songs.push(m);
    existingMap.set(m.id, songs.length - 1);
    added++;
  }
});

console.log(`Added ${added} new mantras, updated ${updated} existing mantras. Total songs database: ${songs.length}`);

// Write back to build_songs_database.js
const newSongsCode = 'const songs = ' + JSON.stringify(songs, null, 2) + ';';
const updatedScript = dbScript.replace(match[0], newSongsCode);
fs.writeFileSync(dbPath, updatedScript, 'utf8');
console.log('Successfully updated build_songs_database.js with all 25 top popular mantras!');
