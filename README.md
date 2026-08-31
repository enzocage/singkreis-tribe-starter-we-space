# 🎶 Tribe Starter – Digitales Liederbuch & Notenständer (We Space)

Ein moderner, interaktiver **digitaler Notenständer & Songbook** für Singkreise, Lagerfeuer-Abende, Chöre, Hauskreise und We-Space-Gruppen.

Mit über **200 beliebten Pop-, Rock-, Folk- & Lagerfeuer-Klassikern**, **673 Mantren & heilsamen Liedern**, integrierter **Google Gemini AI** für automatisches Generieren neuer Songs und **Echtzeit-Synchronisation via Google Firebase Firestore**.

---

<p align="center">
  <img src="tribe-starter-logo.png" alt="Tribe Starter Singkreis" width="340" style="border-radius: 12px; filter: drop-shadow(0 8px 24px rgba(0,0,0,0.6));" />
  <br><br>
  <a href="https://www.tribestarter.org" target="_blank">
    <strong>🌐 www.tribestarter.org</strong>
  </a>
</p>

---

## 📱 Direkt ausprobieren & Mitsingen

Scanne den QR-Code mit deinem Smartphone, um die Singkreis-App sofort im mobilen Browser zu öffnen:

<p align="center">
  <img src="qr.png" alt="QR Code zur App" width="220" style="border-radius: 16px; border: 3px solid #d67f48; box-shadow: 0 8px 25px rgba(214, 127, 72, 0.25);" />
  <br>
  <em>(Öffnet die Web-App direkt auf deinem Smartphone)</em>
</p>

---

## ✨ Features im Überblick

### 🎸 Digitaler Bühnen-Notenständer (Stage Mode)
* **Vollbild-Fokus für Musik:** Minimalistisches, augenschonendes Design mit maximalem Platz für Text & Akkorde. Vollbild lässt sich durch Antippen des Tribe Starter Logos oder des Songtitels umschalten.
* **Pinch-to-Zoom (60 FPS):** Verändere die Textgröße stufenlos & extrem flüssig mit zwei Fingern direkt auf dem Touchscreen (oder per Mausrad am Desktop). Mit Echtzeit-Größenanzeige (`🔍 xx px`).
* **Vollbreiter Geschwindigkeits-Slider:** Der Auto-Scroll-Slider spannt sich über die gesamte Breite und erlaubt eine stufenlose Anpassung von `0.2×` bis `4.0×`.
* **Inaktivitäts-Dimmer:** Die Steuerungsleiste blendet sich nach 2 Sekunden Inaktivität automatisch auf 90% Transparenz ab, um den Lesefluss nicht zu stören.
* **BPM-Tock-Funktion (Metronom):** Spielt auf Knopfdruck 3 Takte à 4 Beats (12 Tocks) im exakten Songtempo mit warmem Holzblock-Sound und Akzentuierung auf dem 1. Schlag jedes Taktes ab.
* **Echtzeit-Transponieren (− / +):** Ändere die Tonart mit einem Klick in Halbtonschritten. Alle Akkorde passen sich sofort mathematisch präzise an.
* **Akkorde Ein/Aus:** Für reine Mitsänger können Akkorde mit einem Klick ausgeblendet werden.
* **Akkord-Diagramme & Badges:** Übersicht aller im Song vorkommenden Griffe am Ende jedes Liedes.
* **YouTube-Direktlink:** Rotes YouTube-Logo im Header für direktes Anhören der Originalversion.
* **Display bleibt an (Wake-Lock):** Hält den Bildschirm während des Musizierens automatisch aktiv.

### 🌟 Sortierung nach Popularität (Standard)
* Alle Songs sind nach ihrer weltweiten und singkreis-relevanten Popularität und Mitsingbarkeit gewichtet (von *Wonderwall*, *Country Roads*, *Let It Be*, *Stand by Me* bis hin zu deutschen Evergreens wie *Über den Wolken*, *Tage wie diese*, *Griechischer Wein* und *Großvater*).
* Zusätzliche Sortiermöglichkeiten: Alphabetisch (A-Z), Interpret, Erscheinungsjahr (neu/alt), Tempo (BPM) und Aus dem Kreis.

### 🕉️ Mantren & Heilsame Lieder (673 Songs)
* Vollständige Sammlung von 673 Chants, Herzensliedern & Mantren (Deva Premal, Krishna Das, May There Always Be Angels, u.v.m.).
* Schnelle Volltextsuche und Zufalls-Button (`🔀 Zufällig`).
* Ein Klick auf ein Mantra füllt sofort die AI-Suche aus, um Text & Gitarrenakkorde zu recherchieren.
* *Hinweis zum reflektierten Umgang:* Das rhythmische Wiederholen von Mantren und Texten wirkt über kognitive und suggestive Mechanismen direkt auf das Unterbewusstsein. Bei regelmäßiger und intensiver Anwendung können sich sprachliche Muster, Glaubenssätze und emotionale Zustände tief im Denken verankern. Achte daher auf einen eigenverantwortlichen und reflektierten Umgang.

### 🤖 AI Song-Finder & Generator (Google Gemini)
* **Intelligente 2-Schritt-Suche:** Sucht nach jedem beliebigen Lied, ermittelt Tonart, Tempo, Kernaussage und generiert fehlerfreie Strophen, Refrains und exakt platzierte Akkorde.
* **Live-Fortschrittsanzeige:** Übersichtliche Statusanzeige während der Recherche.

### 🌐 Cloud-Echtzeit-Synchronisation (Firebase Firestore)
* Erstellte Community-Songs werden **in Echtzeit** auf die Geräte aller anderen Mitsänger im Kreis synchronisiert.
* Automatische Offline-Pufferung via `localStorage`.

---

## 🛠️ Selbst hosten (Self-Hosting)

Die App ist als Single-Page-Anwendung (`index.html`) konzipiert und benötigt keine serverseitige Logik.

### Option A: GitHub Pages (Kostenlos)
1. Forke oder klone dieses Repository:
   ```bash
   git clone https://github.com/enzocage/singkreis-tribe-starter-we-space.git
   ```
2. Gehe in deinem GitHub-Repository auf **Settings** → **Pages**.
3. Wähle als Source `Deploy from a branch`, Branch `main` und Ordner `/(root)`.
4. Klicke auf **Save**.

### Option B: Lokaler Webserver
```bash
# Mit Node.js npx serve:
npx serve .

# Oder mit Python 3:
python -m http.server 8080
```

---

## 📡 Eigene Firebase-Datenbank einrichten (Cloud-Sync)

1. Erstelle ein Projekt in der [Google Firebase Console](https://console.firebase.google.com/).
2. Lege eine **Cloud Firestore-Datenbank** an und setze die Sicherheitsregeln:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /songs/{songId} {
         allow read, write: if true;
       }
     }
   }
   ```
3. Kopiere die Web-Konfigurationsdaten (`apiKey`, `projectId`, etc.) in die `.env`-Datei oder trage sie direkt in den Einstellungen der Web-App ein.

---

## 📄 Lizenz & Open Source
Dieses Projekt ist Open Source unter der MIT-Lizenz.
Weitere Informationen: [www.tribestarter.org](https://www.tribestarter.org)
