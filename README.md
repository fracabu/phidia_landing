# Phidia Landing Project

## Struttura cartelle
```
phidia_landing/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    ├── img/     # Inserisci qui le immagini del volantino
    └── video/   # Inserisci qui eventuali video
```

* Tutte le immagini e i video che vuoi utilizzare nel volantino vanno caricati nelle rispettive cartelle `assets/img` e `assets/video`.
* Se hai bisogno di riferirti a un file nel markup, usa percorsi relativi, ad esempio:  
  ```html
  <img src="assets/img/hero.jpg" alt="Hero">
  ```
* Lo stile è definito in `css/style.css` mentre le animazioni on‑scroll sono gestite da `js/script.js`.

**Preview rapido**  
Se hai Python 3 installato:
```bash
cd phidia_landing
python -m http.server 8000
```
Poi visita http://localhost:8000 nel browser.
