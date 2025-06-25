// Reveal-on-scroll: anima gli elementi con class="reveal"
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);      // anima solo la prima volta
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


function chatbotReply() {
  const input = document.getElementById("userInput").value.toLowerCase();
  const responseBox = document.getElementById("chatResponse");

  const faq = {
    "corsi": "Phidia offre corsi finanziati e privati, inclusi percorsi con Apprendistato Online e formazione continua autorizzata Regione Lazio, anche per sicurezza sul lavoro.",
    "apprendistato": "Abbiamo progetti specifici per l’Apprendistato Online, con corsi gratuiti e finanziati per giovani e lavoratori.",
    "finanziata": "Sì – Phidia gestisce fondi interprofessionali e bandi pubblici (es. FSE Regione Lazio), permettendo di formare il tuo personale a costo zero.",
    "software": "Phidia Software House sviluppa software gestionali custom, applicazioni web/mobile e soluzioni IT integrate per migliorare i processi aziendali.",
    "web": "La nostra Web Agency crea siti web, e-commerce, campagne digitali, SEO, social media e content marketing per aumentare visibilità e ROI.",
    "podcast": "Sì, abbiamo un podcast in cui parliamo di innovazione, formazione e digital transformation – lo ascolti qui sulla pagina.",
    "contatto": "Puoi contattarci tramite il nostro sito ufficiale Phidia.it o scrivere a info@phidia.it – sede a Roma in via A. Cialdi 7B, tel 06‑51606162."
  };

  let matched = false;
  let answer = "";

  for (let key in faq) {
    if (input.includes(key)) {
      answer = faq[key];
      matched = true;
      break;
    }
  }

  if (!matched) {
    answer = "Mi spiace, non ho trovato quella informazione. Ti suggerisco di visitare phidia.it o contattarci direttamente.";
  }

  responseBox.innerText = answer;
}


function chatbotQuickReply(message) {
  document.getElementById("userInput").value = message;
  chatbotReply();
}

