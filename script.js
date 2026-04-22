/* ══════════════════════════════════════════
   DATA – vestavěné výzvy
══════════════════════════════════════════ */
const BUILT_IN = [
  // PRAVDA – lehká
  { text: "Jaká je tvoje nejzabavnější trapná vzpomínka?", cat: "pravda", diff: "easy" },
  { text: "Co jsi naposledy hledal/a na internetu?",        cat: "pravda", diff: "easy" },
  { text: "Kdybys byl/a zvíře, které by to bylo?",          cat: "pravda", diff: "easy" },
  { text: "Jaké je tvoje tajné nadání?",                    cat: "pravda", diff: "easy" },
  { text: "Jaká píseň ti momentálně leze z uší?",           cat: "pravda", diff: "easy" },
  // PRAVDA – střední
  { text: "Co bys nikdy nepřiznal/a rodičům?",              cat: "pravda", diff: "medium" },
  { text: "Jaká je tvoje největší iracionální fóbie?",      cat: "pravda", diff: "medium" },
  { text: "Kdybys mohl/a být někým jiným jeden den, kdo?",  cat: "pravda", diff: "medium" },
  // PRAVDA – těžká
  { text: "Jaká je tvoje největší lítost z posledního roku?",              cat: "pravda", diff: "hard" },
  { text: "Co by tě nejvíce překvapilo, kdybys to o sobě zjistil/a?",     cat: "pravda", diff: "hard" },

  // VÝZVA – lehká
  { text: "Udělej 10 dřepů právě teď!",                                   cat: "vyzva", diff: "easy" },
  { text: "Zkus minutu mluvit jako robot.",                                cat: "vyzva", diff: "easy" },
  { text: "Napiš kohokoli ze skupiny kompliment.",                         cat: "vyzva", diff: "easy" },
  { text: "Zavolej náhodný kontakt a řekni: 'Omlouvám se, špatné číslo'.",cat: "vyzva", diff: "easy" },
  // VÝZVA – střední
  { text: "Sněz lžíci medu s hořčicí.",                                   cat: "vyzva", diff: "medium" },
  { text: "Nech ostatní, aby ti napsali status na sociální sítě.",         cat: "vyzva", diff: "medium" },
  { text: "Mluv šeptem příštích 10 minut.",                               cat: "vyzva", diff: "medium" },
  // VÝZVA – těžká
  { text: "Zavolej svému ex a řekni mu, jak se máš.",                     cat: "vyzva", diff: "hard" },
  { text: "Vylezoutep na stůl a zazpívej první sloku oblíbené písně.",    cat: "vyzva", diff: "hard" },

  // KREATIVITA – lehká
  { text: "Nakresli portrét osoby po tvé levici za 60 sekund.",           cat: "kreativita", diff: "easy" },
  { text: "Vymysli a řekni rap o aktuální situaci (alespoň 4 řádky).",    cat: "kreativita", diff: "easy" },
  { text: "Pojmenuj novou planetu a popiš, kdo na ní žije.",              cat: "kreativita", diff: "easy" },
  // KREATIVITA – střední
  { text: "Napiš krátkou báseň (4 řádky) o předmětu, který právě vidíš.",cat: "kreativita", diff: "medium" },
  { text: "Vymysli reklamu na produkt, který nikdy nebude existovat.",     cat: "kreativita", diff: "medium" },
  // KREATIVITA – těžká
  { text: "Zaimprovizuj 2minutový stand-up o svém dni.",                  cat: "kreativita", diff: "hard" },
  { text: "Napiš celou pohádku za 3 minuty – začátek, střed a konec.",   cat: "kreativita", diff: "hard" },

  // POHYB – lehká
  { text: "Udělej 20 výskoků!",                                           cat: "pohyb", diff: "easy" },
  { text: "Stůj na jedné noze 30 sekund.",                                cat: "pohyb", diff: "easy" },
  { text: "Projdi místnost pozpátku 3×.",                                 cat: "pohyb", diff: "easy" },
  // POHYB – střední
  { text: "Udělej 15 kliků.",                                             cat: "pohyb", diff: "medium" },
  { text: "Drž plank 45 sekund.",                                         cat: "pohyb", diff: "medium" },
  { text: "Přeskákej celou místnost po jedné noze.",                      cat: "pohyb", diff: "medium" },
  // POHYB – těžká
  { text: "Udělej 30 burpees co nejrychleji.",                            cat: "pohyb", diff: "hard" },
  { text: "Drž plank minutu a půl.",                                      cat: "pohyb", diff: "hard" },

  // SOCIÁLNÍ – lehká
  { text: "Napiš upřímný kompliment každému ve skupině.",                 cat: "socialni", diff: "easy" },
  { text: "Poděkuj zprávou někomu, na koho jsi myslel/a.",               cat: "socialni", diff: "easy" },
  // SOCIÁLNÍ – střední
  { text: "Přiznej skupině něco, o čem si myslíš, že o tobě nevědí.",   cat: "socialni", diff: "medium" },
  { text: "Řekni každému ve skupině, co tě na něm nejvíce obdivuje.",    cat: "socialni", diff: "medium" },
  // SOCIÁLNÍ – těžká
  { text: "Napiš veřejný status, ve kterém poděkuješ lidem ve svém životě.", cat: "socialni", diff: "hard" },
  { text: "Zavolej rodičům a řekni jim, že je miluješ.",                 cat: "socialni", diff: "hard" },
];

/* Mapování kategorií na ikony a popisky */
const CAT_ICONS = {
  pravda: "💬", vyzva: "🔥", kreativita: "🎨",
  pohyb: "🏃", socialni: "🤝", vlastni: "🌟", all: "🎲",
};
const CAT_LABELS = {
  pravda: "Pravda", vyzva: "Výzva", kreativita: "Kreativita",
  pohyb: "Pohyb", socialni: "Sociální", vlastni: "Vlastní",
};
const DIFF_STARS = { easy: "⭐", medium: "⭐⭐", hard: "⭐⭐⭐" };


/* ══════════════════════════════════════════
   STAV APLIKACE
   – localStorage: vlastní výzvy, historie, oblíbené
   – cookie:       přezdívka hráče
══════════════════════════════════════════ */
let customChallenges = JSON.parse(localStorage.getItem("vyzvar_custom")  || "[]");
let history          = JSON.parse(localStorage.getItem("vyzvar_history") || "[]");
let liked            = JSON.parse(localStorage.getItem("vyzvar_liked")   || "[]");
let nickname         = getCookie("vyzvar_nick") || "";

let activeCat        = "all";
let activeDiff       = "easy";
let currentChallenge = null;


/* ══════════════════════════════════════════
   UKLÁDÁNÍ – localStorage
══════════════════════════════════════════ */
function saveAll() {
  localStorage.setItem("vyzvar_custom",  JSON.stringify(customChallenges));
  localStorage.setItem("vyzvar_history", JSON.stringify(history));
  localStorage.setItem("vyzvar_liked",   JSON.stringify(liked));
}


/* ══════════════════════════════════════════
   COOKIES – přezdívka
══════════════════════════════════════════ */
function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires};path=/;SameSite=Lax`;
}

function getCookie(name) {
  return document.cookie.split("; ").reduce((result, pair) => {
    const [key, val] = pair.split("=");
    return key === name ? decodeURIComponent(val) : result;
  }, "");
}


/* ══════════════════════════════════════════
   SPRÁVA POHLEDŮ (main / oblíbené / historie)
══════════════════════════════════════════ */
function showView(view) {
  document.getElementById("mainView").style.display    = view === "main"    ? "" : "none";
  document.getElementById("likedView").style.display   = view === "liked"   ? "" : "none";
  document.getElementById("historyView").style.display = view === "history" ? "" : "none";

  document.getElementById("navMain").classList.toggle("active",    view === "main");
  document.getElementById("navLiked").classList.toggle("active",   view === "liked");
  document.getElementById("navHistory").classList.toggle("active", view === "history");

  if (view === "history") renderHistory();
  if (view === "liked")   renderLiked();
}


/* ══════════════════════════════════════════
   GENERÁTOR VÝZEV
══════════════════════════════════════════ */

/** Vrátí dostupné výzvy podle aktivních filtrů */
function getPool() {
  return [...BUILT_IN, ...customChallenges].filter(c =>
    (activeCat === "all" || c.cat === activeCat) && c.diff === activeDiff
  );
}

/** Vygeneruje novou náhodnou výzvu a zobrazí ji */
function generate() {
  const pool = getPool();
  if (!pool.length) { showCard(null); return; }

  // vyhni se opakování poslední výzvy (pokud je z čeho vybírat)
  const filtered = pool.length > 1 && currentChallenge
    ? pool.filter(c => c.text !== currentChallenge.text)
    : pool;

  currentChallenge = filtered[Math.floor(Math.random() * filtered.length)];

  // přidej do historie
  history.unshift({ ...currentChallenge, ts: Date.now(), nick: nickname });
  if (history.length > 100) history.pop();
  saveAll();

  showCard(currentChallenge);
}

/** Vykreslí výzvu (nebo prázdný stav) do karty */
function showCard(ch) {
  const card      = document.getElementById("challengeCard");
  const actionRow = document.getElementById("actionRow");

  // animace překlápění
  card.classList.remove("card-flip");
  void card.offsetWidth; // vynutí reflow
  card.classList.add("card-flip");

  if (!ch) {
    card.innerHTML = `
      <div class="empty-state">
        <i class="bi bi-emoji-frown"></i>
        Žádné výzvy v této kategorii a obtížnosti.<br>
        <small>Zkus jiné filtry nebo přidej vlastní!</small>
      </div>`;
    actionRow.style.setProperty("display", "none", "important");
    return;
  }

  const isLiked = liked.some(l => l.text === ch.text);
  card.innerHTML = `
    <span class="cat-tag bg-${ch.cat}">${CAT_ICONS[ch.cat]} ${CAT_LABELS[ch.cat] || ch.cat}</span>
    <p class="challenge-text">${escHtml(ch.text)}</p>
    <div class="diff-stars" aria-label="Obtížnost: ${ch.diff}">${DIFF_STARS[ch.diff]}</div>
  `;

  actionRow.style.removeProperty("display");
  updateLikeBtn(isLiked);
}

/** Aktualizuje stav tlačítka „Oblíbit" */
function updateLikeBtn(isLiked) {
  if (isLiked === undefined) {
    isLiked = currentChallenge && liked.some(l => l.text === currentChallenge.text);
  }
  const btn = document.getElementById("btnLike");
  btn.classList.toggle("liked", isLiked);
  btn.textContent = isLiked ? "❤️ Oblíbená" : "🤍 Oblíbit";
}


/* ══════════════════════════════════════════
   RENDEROVÁNÍ SEZNAMŮ
══════════════════════════════════════════ */

/** Generická funkce pro vykreslení listu */
function renderList(items, containerId, emptyMsg, itemBuilder) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  if (!items.length) {
    container.innerHTML = `<p style="color:var(--muted);text-align:center">${emptyMsg}</p>`;
    return;
  }
  items.forEach(item => container.appendChild(itemBuilder(item)));
}

/** Vytvoří DOM element pro položku historie */
function buildHistoryItem(item) {
  const el = document.createElement("article");
  el.className = "history-item";
  const d = new Date(item.ts);
  el.innerHTML = `
    <span class="h-icon c-${item.cat}">${CAT_ICONS[item.cat] || "🎲"}</span>
    <div>
      <div class="h-cat c-${item.cat}">${CAT_LABELS[item.cat] || item.cat} · ${DIFF_STARS[item.diff]}</div>
      <div class="h-text">${escHtml(item.text)}</div>
      <div class="h-meta">
        ${item.nick ? item.nick + " · " : ""}
        ${d.toLocaleDateString("cs-CZ")} ${d.toLocaleTimeString("cs-CZ", { hour: "2-digit", minute: "2-digit" })}
      </div>
    </div>
  `;
  return el;
}

/** Vytvoří DOM element pro oblíbenou výzvu */
function buildLikedItem(item) {
  const el = document.createElement("article");
  el.className = "history-item";
  el.innerHTML = `
    <span class="h-icon c-${item.cat}">${CAT_ICONS[item.cat] || "🎲"}</span>
    <div style="flex:1">
      <div class="h-cat c-${item.cat}">${CAT_LABELS[item.cat] || item.cat} · ${DIFF_STARS[item.diff]}</div>
      <div class="h-text">${escHtml(item.text)}</div>
    </div>
    <button class="btn-icon" aria-label="Odebrat z oblíbených">🗑️</button>
  `;
  el.querySelector("button").addEventListener("click", () => {
    liked = liked.filter(l => l.text !== item.text);
    saveAll();
    toast("Odebráno z oblíbených");
    renderLiked();
    updateLikeBtn();
  });
  return el;
}

function renderHistory() {
  renderList(history, "historyList", "Zatím žádná historie.", buildHistoryItem);
}
function renderLiked() {
  renderList(liked, "likedList", "Zatím žádné oblíbené.", buildLikedItem);
}


/* ══════════════════════════════════════════
   PŘEZDÍVKA
══════════════════════════════════════════ */
function updateNickDisplay() {
  document.getElementById("nicknameDisplay").textContent = nickname || "Nastavit přezdívku";
}

function openNicknameModal() {
  document.getElementById("nicknameInput").value = nickname;
  document.getElementById("nicknameModal").classList.add("open");
  document.getElementById("nicknameInput").focus();
}

function saveNickname() {
  nickname = document.getElementById("nicknameInput").value.trim();
  setCookie("vyzvar_nick", nickname, 365);
  updateNickDisplay();
  document.getElementById("nicknameModal").classList.remove("open");
  if (nickname) toast(`Ahoj, ${nickname}! 👋`);
}


/* ══════════════════════════════════════════
   TOAST NOTIFIKACE
══════════════════════════════════════════ */
function toast(msg) {
  const el = document.createElement("div");
  el.className = "toast-msg";
  el.textContent = msg;
  document.getElementById("toastWrap").appendChild(el);
  setTimeout(() => el.remove(), 2600);
}


/* ══════════════════════════════════════════
   POMOCNÉ FUNKCE
══════════════════════════════════════════ */
function escHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}


/* ══════════════════════════════════════════
   EVENT LISTENERY
══════════════════════════════════════════ */

// Navigace
document.getElementById("navMain").addEventListener("click",    () => showView("main"));
document.getElementById("navLiked").addEventListener("click",   () => showView("liked"));
document.getElementById("navHistory").addEventListener("click", () => showView("history"));

// Generátor
document.getElementById("btnGenerate").addEventListener("click", generate);
document.getElementById("btnSkip").addEventListener("click", generate);

// Filtry – kategorie
document.querySelectorAll(".pill").forEach(pill => {
  pill.addEventListener("click", () => {
    document.querySelectorAll(".pill").forEach(p => p.classList.remove("selected"));
    pill.classList.add("selected");
    activeCat = pill.dataset.cat;
  });
});

// Filtry – obtížnost
document.querySelectorAll(".diff-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".diff-btn").forEach(b => {
      b.classList.remove("active-easy", "active-medium", "active-hard");
      b.setAttribute("aria-pressed", "false");
    });
    btn.classList.add(`active-${btn.dataset.diff}`);
    btn.setAttribute("aria-pressed", "true");
    activeDiff = btn.dataset.diff;
  });
});

// Oblíbení
document.getElementById("btnLike").addEventListener("click", () => {
  if (!currentChallenge) return;
  const idx = liked.findIndex(l => l.text === currentChallenge.text);
  if (idx === -1) {
    liked.unshift({ ...currentChallenge });
    toast("Přidáno do oblíbených ❤️");
  } else {
    liked.splice(idx, 1);
    toast("Odebráno z oblíbených");
  }
  saveAll();
  updateLikeBtn();
});

// Sdílení
document.getElementById("btnShare").addEventListener("click", () => {
  if (!currentChallenge) return;
  const txt = `⚡ Výzva od Výzváře: "${currentChallenge.text}"`;
  if (navigator.share) {
    navigator.share({ title: "Výzvář", text: txt }).catch(() => {});
  } else {
    navigator.clipboard.writeText(txt).then(() => toast("Výzva zkopírována! 🔗"));
  }
});

// Vlastní výzva
document.getElementById("btnAddCustom").addEventListener("click", () => {
  const text = document.getElementById("customText").value.trim();
  if (!text)         { toast("Napiš text výzvy!"); return; }
  if (text.length < 5) { toast("Výzva je příliš krátká."); return; }

  customChallenges.push({
    text,
    cat:  document.getElementById("customCat").value,
    diff: document.getElementById("customDiff").value,
  });
  saveAll();
  document.getElementById("customText").value = "";
  toast("Vlastní výzva přidána! 🌟");
});

// Smazat historii
document.getElementById("btnClearHistory").addEventListener("click", () => {
  if (!history.length) return;
  history = [];
  saveAll();
  renderHistory();
  toast("Historie smazána.");
});

// Smazat oblíbené
document.getElementById("btnClearLiked").addEventListener("click", () => {
  if (!liked.length) return;
  liked = [];
  saveAll();
  renderLiked();
  updateLikeBtn();
  toast("Oblíbené smazány.");
});

// Modal – přezdívka
document.getElementById("nicknameBadge").addEventListener("click", openNicknameModal);
document.getElementById("btnSaveNick").addEventListener("click", saveNickname);
document.getElementById("nicknameInput").addEventListener("keydown", e => {
  if (e.key === "Enter") saveNickname();
});
document.getElementById("nicknameModal").addEventListener("click", e => {
  if (e.target.id === "nicknameModal")
    document.getElementById("nicknameModal").classList.remove("open");
});


/* ══════════════════════════════════════════
   INICIALIZACE
══════════════════════════════════════════ */
updateNickDisplay();
if (nickname) toast(`Vítej zpět, ${nickname}! ⚡`);
