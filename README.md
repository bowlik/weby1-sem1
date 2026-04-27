# Výzvář – Generátor náhodných výzev

Semestrální projekt do předmětu **Webové aplikace 1**.

## Popis

Výzvář je interaktivní webová aplikace, která generuje náhodné výzvy a pravdy. Uživatel si může filtrovat výzvy podle kategorie a obtížnosti, ukládat oblíbené, přidávat vlastní výzvy a prohlížet historii.

## Funkce

-  Generátor náhodných výzev z 5 kategorií (Pravda, Výzva, Kreativita, Pohyb, Sociální)
-  3 úrovně obtížnosti (Lehká, Střední, Těžká)
-  Ukládání oblíbených výzev
-  Historie posledních 100 výzev
-  Přidání vlastní výzvy
-  Přezdívka hráče
-  Sdílení výzvy

## Technologie

- **HTML5** – sémantické elementy, ARIA atributy
- **CSS** – vlastní styly + **Bootstrap 5**
- **JavaScript** – vanilla JS
  - `localStorage` – ukládání výzev, historie a oblíbených
  - `cookies` – zapamatování přezdívky
  - DOM manipulace – dynamické generování obsahu

## Struktura projektu

```
vyzvar/
├── index.html   # HTML struktura
├── style.css    # Styly
└── script.js    # Logika aplikace
```

## Spuštění

1. Stáhni všechny soubory do jedné složky
2. Otevři **CMD** ve složce projektu
3. Spusť lokální server příkazem:
```powershell
npx live-server
```
4. Aplikace se automaticky otevře v prohlížeči na `http://127.0.0.1:8080`
5. Server ukončíš stiskem **Ctrl+C** v PowerShell okně

> Vyžaduje nainstalovaný [Node.js](https://nodejs.org)

## Autor

- **Martin Pešek st72475** – [github.com/bowlik](https://github.com/bowlik)
