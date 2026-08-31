const fs = require('fs');
const path = require('path');

const mantrasData = JSON.parse(fs.readFileSync(path.join(__dirname, 'mantras_data.json'), 'utf8'));
const htmlPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// 1. Prepare Mantras Modal Markup
const mantrasModalHtml = `
  <!-- ==================== MANTRAS & HEILSAME LIEDER MODAL ==================== -->
  <div id="mantrasModal" class="fixed inset-0 z-[125] bg-stone-950/95 backdrop-blur-md hidden flex flex-col justify-between p-2 sm:p-4 overflow-hidden" onclick="closeMantrasModal()">
    <div class="relative max-w-4xl w-full mx-auto bg-stone-900 border border-violet-500/40 rounded-2xl shadow-2xl flex flex-col text-stone-100 my-auto h-[92vh] max-h-[850px] overflow-hidden animate-scale-up" onclick="event.stopPropagation()">
      
      <!-- Modal Header -->
      <div class="p-4 sm:p-5 border-b border-stone-800 flex items-center justify-between gap-3 bg-gradient-to-r from-violet-950/40 to-stone-900 shrink-0">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-purple-800 text-white font-black flex items-center justify-center text-xl shadow-md border border-violet-400/30">🕉️</div>
          <div>
            <div class="flex items-center gap-2">
              <h2 class="text-base sm:text-xl font-black text-white leading-tight tracking-tight">Mantren & Heilsame Lieder</h2>
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-violet-900/60 text-violet-300 font-bold border border-violet-500/40">${mantrasData.length} Lieder</span>
            </div>
            <p class="text-[11px] text-stone-400 font-medium">Chants, Herzenslieder & Mantren • Quelle: <a href="https://heilsame-lieder.de" target="_blank" rel="noopener noreferrer" class="text-violet-400 hover:underline">heilsame-lieder.de</a></p>
          </div>
        </div>
        
        <div class="flex items-center gap-2">
          <button onclick="pickRandomMantra()" class="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-violet-950 hover:bg-violet-900 border border-violet-500/40 text-violet-200 text-xs font-bold rounded-xl transition active:scale-95 shadow" title="Zufälliges Mantra auswählen">
            <span>🔀 Zufällig</span>
          </button>
          <button onclick="closeMantrasModal()" class="w-8 h-8 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white font-bold flex items-center justify-center transition">✕</button>
        </div>
      </div>

      <!-- Suche & Filter Leiste -->
      <div class="p-3 sm:px-5 sm:py-3 bg-stone-950/80 border-b border-stone-800 flex items-center justify-between gap-2 shrink-0">
        <div class="relative flex-1">
          <input 
            type="text" 
            id="mantraSearchInput" 
            oninput="handleMantraSearch(this.value)" 
            placeholder="🔎 Suche nach Titel, Mantra, Interpret oder Nr. (z.B. Gayatri, Krishna Das, 0634)..." 
            class="w-full pl-9 pr-8 py-2 bg-stone-900 border border-stone-700 focus:border-violet-500 rounded-xl text-xs sm:text-sm text-white placeholder-stone-500 focus:outline-none"
          >
          <span class="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500 text-xs">🔍</span>
          <button id="clearMantraSearchBtn" onclick="clearMantraSearch()" class="hidden absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white text-xs">✕</button>
        </div>
        
        <button onclick="pickRandomMantra()" class="sm:hidden px-3 py-2 bg-violet-950 border border-violet-500/40 text-violet-200 text-xs font-bold rounded-xl shrink-0">
          🔀
        </button>
      </div>

      <!-- Liste der Mantren -->
      <div class="flex-1 overflow-y-auto p-3 sm:p-5 space-y-2 no-scrollbar" id="mantrasListContainer">
        <!-- Dynamisch gerendert -->
      </div>

      <!-- Modal Footer -->
      <div class="p-3 sm:px-5 sm:py-2.5 border-t border-stone-800 bg-stone-950 flex items-center justify-between text-xs text-stone-400 shrink-0">
        <span id="mantraCountDisplay" class="font-bold text-stone-400">Zeige ${mantrasData.length} Mantren</span>
        <div class="flex items-center gap-2">
          <span class="text-[11px] text-stone-500 hidden sm:inline">Klicke auf ✨ um Akkorde & Text mit AI zu laden</span>
          <button onclick="closeMantrasModal()" class="px-4 py-1.5 bg-stone-800 hover:bg-stone-700 text-white font-bold rounded-xl text-xs transition">
            Schließen
          </button>
        </div>
      </div>

    </div>
  </div>
`;

// 2. Prepare JavaScript Functions and Data
const mantrasJsCode = `
    // ==================== MANTREN & HEILSAME LIEDER DATABASE & LOGIK ====================
    const MANTRAS = ${JSON.stringify(mantrasData)};
    let filteredMantras = [...MANTRAS];

    function openMantrasModal() {
      const modal = document.getElementById("mantrasModal");
      if (!modal) return;
      document.getElementById("mantraSearchInput").value = "";
      filteredMantras = [...MANTRAS];
      renderMantrasList();
      modal.classList.remove("hidden");
      setTimeout(() => {
        document.getElementById("mantraSearchInput").focus();
      }, 50);
    }

    function closeMantrasModal() {
      const modal = document.getElementById("mantrasModal");
      if (modal) modal.classList.add("hidden");
    }

    function handleMantraSearch(val) {
      const q = (val || "").trim().toLowerCase();
      const clearBtn = document.getElementById("clearMantraSearchBtn");
      if (clearBtn) {
        if (q) clearBtn.classList.remove("hidden");
        else clearBtn.classList.add("hidden");
      }

      if (!q) {
        filteredMantras = [...MANTRAS];
      } else {
        filteredMantras = MANTRAS.filter(m => 
          m.title.toLowerCase().includes(q) || 
          m.artist.toLowerCase().includes(q) || 
          m.code.toLowerCase().includes(q)
        );
      }
      renderMantrasList();
    }

    function clearMantraSearch() {
      const input = document.getElementById("mantraSearchInput");
      if (input) input.value = "";
      handleMantraSearch("");
      if (input) input.focus();
    }

    function pickRandomMantra() {
      if (MANTRAS.length === 0) return;
      const rand = MANTRAS[Math.floor(Math.random() * MANTRAS.length)];
      const input = document.getElementById("mantraSearchInput");
      if (input) input.value = rand.title;
      handleMantraSearch(rand.title);
      showToast(\`🔀 Zufall: "\${rand.title}"\`);
    }

    function renderMantrasList() {
      const container = document.getElementById("mantrasListContainer");
      const countDisplay = document.getElementById("mantraCountDisplay");
      if (!container) return;

      countDisplay.textContent = \`Zeige \${filteredMantras.length} von \${MANTRAS.length} Mantren\`;

      if (filteredMantras.length === 0) {
        container.innerHTML = \`
          <div class="text-center py-12 text-stone-500">
            <p class="text-3xl mb-2">🔍</p>
            <p class="text-sm font-bold">Kein Mantra gefunden</p>
            <p class="text-xs mt-1">Versuche einen anderen Suchbegriff oder eine andere Liednummer.</p>
          </div>
        \`;
        return;
      }

      // Rendere bis zu 150 Einträge für maximale Performance
      const displayItems = filteredMantras.slice(0, 150);
      container.innerHTML = displayItems.map(item => \`
        <div class="p-3 bg-stone-950 border border-stone-800 hover:border-violet-500/50 rounded-xl flex items-center justify-between gap-3 transition group">
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-[10px] font-mono font-black px-1.5 py-0.5 rounded bg-violet-950 border border-violet-600/40 text-violet-300">
                #\${escapeHtml(item.code)}
              </span>
              <span class="text-[11px] text-stone-400 font-medium truncate">
                \${escapeHtml(item.artist)}
              </span>
            </div>
            <h3 class="text-sm sm:text-base font-black text-white truncate leading-snug group-hover:text-violet-200 transition">
              \${escapeHtml(item.title)}
            </h3>
          </div>

          <div class="flex items-center gap-1.5 shrink-0">
            <a 
              href="\${escapeHtml(item.sourceUrl)}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="px-2.5 py-1.5 bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-400 hover:text-white rounded-lg text-xs font-bold transition flex items-center gap-1"
              title="Auf heilsame-lieder.de öffnen"
            >
              <span>🌐</span>
              <span class="hidden md:inline">Noten</span>
            </a>

            <button 
              onclick="generateMantraSong('\${escapeHtml(item.title)}', '\${escapeHtml(item.artist)}', '\${escapeHtml(item.code)}')" 
              class="px-3 py-1.5 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-bold rounded-lg text-xs flex items-center gap-1.5 shadow active:scale-95 transition"
              title="Akkorde & Text mit AI generieren und in die Liederliste aufnehmen"
            >
              <span>✨</span>
              <span>Chords</span>
            </button>
          </div>
        </div>
      \`).join("");

      if (filteredMantras.length > 150) {
        container.innerHTML += \`
          <p class="text-center text-xs text-stone-500 py-3 italic">
            ... und \${filteredMantras.length - 150} weitere Mantren. Nutze die Suche oben, um gezielt zu filtern!
          </p>
        \`;
      }
    }

    function generateMantraSong(title, artist, code) {
      closeMantrasModal();
      openAddSongModal(title + " " + (artist !== 'Traditionell' ? artist : ''));
      showToast(\`Lade "\${title}" in den AI Generator... ✨\`);
    }
`;

// Insert Mantras Modal HTML before </body>
if (!html.includes('id="mantrasModal"')) {
  html = html.replace('<!-- ==================== HEADER', mantrasModalHtml + '\n  <!-- ==================== HEADER');
}

// Insert Subtle Button at the bottom of the page
const subtleButtonHtml = `
      <!-- Subtiler Button für Mantren & Heilsame Lieder -->
      <div class="mt-10 mb-14 text-center flex flex-wrap items-center justify-center gap-3 no-print">
        <button onclick="openMantrasModal()" class="px-4 py-2.5 bg-gradient-to-r from-violet-950/70 via-stone-900 to-purple-950/70 hover:from-violet-900 hover:to-purple-900 border border-violet-500/40 text-violet-200 hover:text-white font-bold rounded-2xl text-xs inline-flex items-center gap-2 transition active:scale-95 shadow-lg hover:border-violet-400">
          <span class="text-base">🕉️</span>
          <span>Mantren & Heilsame Lieder</span>
          <span class="px-2 py-0.5 bg-violet-900/80 rounded-full text-[10px] text-violet-300 font-mono font-bold">${mantrasData.length}</span>
        </button>
      </div>
`;

if (!html.includes('openMantrasModal()')) {
  html = html.replace('</main>', subtleButtonHtml + '\n  </main>');
}

// Insert JS functions
if (!html.includes('// ==================== MANTREN & HEILSAME LIEDER DATABASE')) {
  html = html.replace('// ==================== SONG HINZUFÜGEN & GEMINI AI LOGIK', mantrasJsCode + '\n\n    // ==================== SONG HINZUFÜGEN & GEMINI AI LOGIK');
}

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('Successfully integrated Mantras & Heilsame Lieder (' + mantrasData.length + ' songs) into index.html!');
