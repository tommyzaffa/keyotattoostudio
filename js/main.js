/* =========================================
   KEYO Tattoo Studio — keyo 2 — main JS
   ========================================= */
(function () {
  "use strict";

  /* -------- i18n (IT / EN / DE / FR) -------- */
  const I18N = {
    "nav.artists":      { it: "Artisti", en: "Artists", de: "Künstler", fr: "Artistes" },
    "nav.gallery":      { it: "Galleria", en: "Gallery", de: "Galerie", fr: "Galerie" },
    "nav.studio":       { it: "Studio", en: "Studio", de: "Studio", fr: "Studio" },
    "nav.reviews":      { it: "Recensioni", en: "Reviews", de: "Bewertungen", fr: "Avis" },
    "nav.contact":      { it: "Contatti", en: "Contact", de: "Kontakt", fr: "Contact" },
    "nav.book":         { it: "Prenota", en: "Book", de: "Buchen", fr: "Réserver" },

    "hero.cta1":        { it: "Prenota un appuntamento", en: "Book an appointment", de: "Termin buchen", fr: "Prendre rendez-vous" },
    "hero.cta2":        { it: "Galleria", en: "Gallery", de: "Galerie", fr: "Galerie" },

    "book.num":         { it: "01 — Prenota", en: "01 — Book", de: "01 — Buchen", fr: "01 — Réserver" },
    "book.title":       { it: "Il tuo prossimo tatuaggio inizia qui", en: "Your next tattoo starts here", de: "Dein nächstes Tattoo beginnt hier", fr: "Ton prochain tatouage commence ici" },
    "book.lead":        { it: "Raccontaci la tua idea e disegniamo insieme un progetto su misura. Consulenza gratuita, su appuntamento.", en: "Tell us your idea and we'll design a tailor-made project together. Free consultation, by appointment.", de: "Erzähl uns deine Idee und wir gestalten gemeinsam ein massgeschneidertes Projekt. Kostenlose Beratung, nach Vereinbarung.", fr: "Parle-nous de ton idée et créons ensemble un projet sur mesure. Consultation gratuite, sur rendez-vous." },
    "book.cta1":        { it: "Prenota una consulenza", en: "Book a consultation", de: "Beratung buchen", fr: "Réserver une consultation" },
    "book.fact.where":  { it: "Dove", en: "Where", de: "Wo", fr: "Où" },
    "book.fact.hours":  { it: "Orari", en: "Hours", de: "Öffnungszeiten", fr: "Horaires" },
    "book.fact.contact":{ it: "Contatto", en: "Contact", de: "Kontakt", fr: "Contact" },
    "book.hoursval":    { it: "Lun — Sab<br/>10—12 · 14—18:30", en: "Mon — Sat<br/>10—12 · 14—18:30", de: "Mo — Sa<br/>10—12 · 14—18:30", fr: "Lun — Sam<br/>10—12 · 14—18:30" },

    "artistsBand.sub":  { it: "talenti diversi · un'unica visione", en: "different talents · one vision", de: "verschiedene Talente · eine Vision", fr: "des talents variés · une seule vision" },
    "artists.num":      { it: "02 — Artisti", en: "02 — Artists", de: "02 — Künstler", fr: "02 — Artistes" },
    "artists.lead":     { it: "Quattro mani, quattro linguaggi. Scegli il tuo artista e guarda i suoi lavori.", en: "Four hands, four languages. Choose your artist and see their work.", de: "Vier Hände, vier Sprachen. Wähle deinen Künstler und sieh dir seine Arbeiten an.", fr: "Quatre mains, quatre langages. Choisis ton artiste et découvre ses œuvres." },
    "artists.viewwork": { it: "Vedi i lavori", en: "View work", de: "Arbeiten ansehen", fr: "Voir les œuvres" },

    "galleryBand.sub":  { it: "una selezione dei nostri lavori", en: "a selection of our work", de: "eine Auswahl unserer Arbeiten", fr: "une sélection de nos œuvres" },
    "gallery.num":      { it: "03 — Galleria", en: "03 — Gallery", de: "03 — Galerie", fr: "03 — Galerie" },

    "spaceBand.title":  { it: "Space", en: "Space", de: "Space", fr: "Space" },
    "spaceBand.sub":    { it: "il nostro studio · locarno", en: "our studio · locarno", de: "unser Studio · Locarno", fr: "notre studio · locarno" },
    "space.num":        { it: "04 — Studio", en: "04 — Studio", de: "04 — Studio", fr: "04 — Studio" },
    "space.title":      { it: "Il nostro spazio", en: "Our space", de: "Unser Raum", fr: "Notre espace" },
    "space.lead":       { it: "Un ambiente curato, igiene impeccabile, materiali certificati. Uno spazio pensato per metterti a tuo agio.", en: "A refined environment, impeccable hygiene, certified materials. A space designed to put you at ease.", de: "Ein gepflegtes Ambiente, einwandfreie Hygiene, zertifizierte Materialien. Ein Raum, in dem du dich wohlfühlst.", fr: "Un cadre soigné, une hygiène impeccable, des matériaux certifiés. Un espace pensé pour te mettre à l'aise." },

    "reviewsBand.sub":  { it: "le parole di chi è già passato", en: "words from those who've been here", de: "Worte von denen, die schon da waren", fr: "les mots de ceux qui sont déjà passés" },
    "reviews.num":      { it: "05 — Recensioni", en: "05 — Reviews", de: "05 — Bewertungen", fr: "05 — Avis" },
    "reviews.based":    { it: "Basato su <strong>81</strong> recensioni Google", en: "Based on <strong>81</strong> Google reviews", de: "Basierend auf <strong>81</strong> Google-Bewertungen", fr: "Basé sur <strong>81</strong> avis Google" },
    "reviews.readall":  { it: "Leggi tutte ↗", en: "Read all ↗", de: "Alle lesen ↗", fr: "Tout lire ↗" },

    "contactBand.sub":  { it: "hai un'idea? iniziamo a parlarne", en: "got an idea? let's talk", de: "hast du eine Idee? sprechen wir darüber", fr: "une idée ? parlons-en" },
    "contact.num":      { it: "06 — Contatti", en: "06 — Contact", de: "06 — Kontakt", fr: "06 — Contact" },
    "contact.label.address": { it: "Indirizzo", en: "Address", de: "Adresse", fr: "Adresse" },
    "contact.label.phone":   { it: "Telefono", en: "Phone", de: "Telefon", fr: "Téléphone" },
    "contact.label.email":   { it: "Email", en: "Email", de: "E-Mail", fr: "E-mail" },
    "contact.label.hours":   { it: "Orari", en: "Hours", de: "Öffnungszeiten", fr: "Horaires" },
    "contact.label.social":  { it: "Social", en: "Social", de: "Social", fr: "Réseaux" },
    "contact.hoursval": { it: "Lun — Sab: 10—12 · 14—18:30<br/>Domenica: <em>chiuso</em>", en: "Mon — Sat: 10—12 · 14—18:30<br/>Sunday: <em>closed</em>", de: "Mo — Sa: 10—12 · 14—18:30<br/>Sonntag: <em>geschlossen</em>", fr: "Lun — Sam : 10—12 · 14—18:30<br/>Dimanche : <em>fermé</em>" },

    "form.intro":       { it: "Raccontaci il tuo progetto. Ti risponderemo entro 48 ore.", en: "Tell us about your project. We'll reply within 48 hours.", de: "Erzähl uns von deinem Projekt. Wir antworten innerhalb von 48 Stunden.", fr: "Parle-nous de ton projet. Nous répondrons sous 48 heures." },
    "form.name":        { it: "Nome", en: "Name", de: "Name", fr: "Nom" },
    "form.email":       { it: "Email", en: "Email", de: "E-Mail", fr: "E-mail" },
    "form.style":       { it: "Stile", en: "Style", de: "Stil", fr: "Style" },
    "form.msg":         { it: "Descrivi il tuo progetto", en: "Describe your project", de: "Beschreibe dein Projekt", fr: "Décris ton projet" },
    "form.submit":      { it: "Invia richiesta", en: "Send request", de: "Anfrage senden", fr: "Envoyer la demande" },
    "form.opt.other":   { it: "Altro", en: "Other", de: "Andere", fr: "Autre" },

    "map.where":        { it: "Dove siamo", en: "Find us", de: "So findest du uns", fr: "Nous trouver" },
    "map.open":         { it: "Apri in Google Maps ↗", en: "Open in Google Maps ↗", de: "In Google Maps öffnen ↗", fr: "Ouvrir dans Google Maps ↗" },

    "footer.credit":    { it: "Sviluppato da", en: "Developed by", de: "Entwickelt von", fr: "Développé par" },

    "artist.back":      { it: "← Tutti gli artisti", en: "← All artists", de: "← Alle Künstler", fr: "← Tous les artistes" },
    "artist.role.founder": { it: "Founder · Resident", en: "Founder · Resident", de: "Founder · Resident", fr: "Founder · Resident" },
    "artist.role.resident":{ it: "Resident", en: "Resident", de: "Resident", fr: "Resident" },

    "side.l1": { it: "artisti residenti", en: "artists in residence", de: "künstler in residenz", fr: "artistes en résidence" },
    "side.l2": { it: "realismo · microrealismo", en: "realism · micro-realism", de: "realismus · mikrorealismus", fr: "réalisme · micro-réalisme" },
    "side.l3": { it: "ogni linea una storia", en: "every line a story", de: "jede linie eine geschichte", fr: "chaque ligne une histoire" },
    "side.l4": { it: "il rituale del segno", en: "the ritual of the mark", de: "das ritual des zeichens", fr: "le rituel du trait" },
    "side.r1": { it: "locarno ch", en: "locarno ch", de: "locarno ch", fr: "locarno ch" },
    "side.r2": { it: "via al castello 1", en: "via al castello 1", de: "via al castello 1", fr: "via al castello 1" },
    "side.r3": { it: "est. 2019", en: "est. 2019", de: "est. 2019", fr: "est. 2019" },
    "side.r4": { it: "su appuntamento", en: "by appointment", de: "nach vereinbarung", fr: "sur rendez-vous" },
    "side.b1": { it: "appuntamenti aperti", en: "appointment open", de: "termine offen", fr: "rendez-vous ouverts" },
    "side.b2": { it: "walk-in benvenuti", en: "walk-in welcome", de: "walk-in willkommen", fr: "walk-in bienvenue" },
    "side.b3": { it: "design su misura", en: "custom design", de: "individuelles design", fr: "design sur mesure" },

    "style.realismo":      { it: "Realismo", en: "Realism", de: "Realismus", fr: "Réalisme" },
    "style.microrealismo": { it: "Microrealismo", en: "Micro-realism", de: "Mikrorealismus", fr: "Micro-réalisme" },
    "style.blackwork":     { it: "Blackwork", en: "Blackwork", de: "Blackwork", fr: "Blackwork" },
    "style.color":         { it: "Color", en: "Color", de: "Color", fr: "Couleur" },

    "artiststyle.keyo":  { it: "Realismo · Concettuale", en: "Realism · Conceptual", de: "Realismus · Konzeptionell", fr: "Réalisme · Conceptuel" },
    "artiststyle.dario": { it: "Microrealismo · Fine line", en: "Micro-realism · Fine line", de: "Mikrorealismus · Fine Line", fr: "Micro-réalisme · Fine line" },
    "artiststyle.marta": { it: "Color · Illustrativo", en: "Color · Illustrative", de: "Color · Illustrativ", fr: "Couleur · Illustratif" },
    "artiststyle.sofia": { it: "Blackwork · Dotwork", en: "Blackwork · Dotwork", de: "Blackwork · Dotwork", fr: "Blackwork · Dotwork" },

    "review.1": { it: "Non è solo un tatuatore, Omar è un artista che trasforma emozioni in pelle. Ogni idea viene ascoltata, capita e valorizzata. La sua bravura si vede nei dettagli, ma si sente soprattutto nell'anima di ogni tatuaggio.", en: "He's not just a tattooist — Omar is an artist who turns emotions into skin. Every idea is heard, understood and elevated. His skill shows in the details, but you feel it most in the soul of every tattoo.", de: "Er ist nicht nur ein Tätowierer — Omar ist ein Künstler, der Emotionen in Haut verwandelt. Jede Idee wird gehört, verstanden und veredelt. Sein Können zeigt sich in den Details, aber man spürt es vor allem in der Seele jedes Tattoos.", fr: "Ce n'est pas qu'un tatoueur — Omar est un artiste qui transforme les émotions en peau. Chaque idée est écoutée, comprise et valorisée. Son talent se voit dans les détails, mais se ressent surtout dans l'âme de chaque tatouage." },
    "review.2": { it: "La qualità dei tatuaggi è superba, come persona è spettacolare, accoglie ogni suo cliente con calore.", en: "The quality of the tattoos is superb, and as a person he's spectacular — he welcomes every client with warmth.", de: "Die Qualität der Tattoos ist hervorragend, und als Mensch ist er spektakulär — er empfängt jeden Kunden herzlich.", fr: "La qualité des tatouages est superbe, et en tant que personne il est spectaculaire — il accueille chaque client avec chaleur." },
    "review.3": { it: "È il mio secondo tatuaggio che faccio da Omar e posso dire che oltre ad essere un grandissimo professionista lavora veramente molto bene. Se dovessi consigliarlo direi di andare da lui al 100%.", en: "This is my second tattoo with Omar and I can say that besides being a great professional, he truly does excellent work. If I had to recommend him, I'd say go to him 100%.", de: "Es ist mein zweites Tattoo bei Omar und ich kann sagen, dass er nicht nur ein grossartiger Profi ist, sondern wirklich hervorragend arbeitet. Wenn ich ihn empfehlen müsste, würde ich sagen: geh zu 100% zu ihm.", fr: "C'est mon deuxième tatouage chez Omar et je peux dire qu'en plus d'être un grand professionnel, il travaille vraiment très bien. Si je devais le recommander, je dirais d'aller chez lui à 100%." }
  };
  const STATUS = {
    ok:  { it: "Richiesta inviata. Ti risponderemo a breve.", en: "Request sent. We'll get back to you soon.", de: "Anfrage gesendet. Wir melden uns in Kürze.", fr: "Demande envoyée. Nous vous répondrons bientôt." },
    err: { it: "Si è verificato un errore. Riprova o scrivici su Instagram.", en: "Something went wrong. Try again or message us on Instagram.", de: "Ein Fehler ist aufgetreten. Versuch es erneut oder schreib uns auf Instagram.", fr: "Une erreur s'est produite. Réessaie ou écris-nous sur Instagram." }
  };
  const LANGS = ["it", "en", "de", "fr"];
  let currentLang = (function () {
    try { const s = localStorage.getItem("keyo-lang"); if (s && LANGS.includes(s)) return s; } catch (e) {}
    return "it";
  })();
  function applyLang(lang) {
    if (!LANGS.includes(lang)) lang = "it";
    currentLang = lang;
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const dict = I18N[el.getAttribute("data-i18n")];
      if (dict && dict[lang] != null) el.innerHTML = dict[lang];
    });
    document.querySelectorAll(".lang-switch button").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem("keyo-lang", lang); } catch (e) {}
  }
  applyLang(currentLang);
  document.querySelectorAll(".lang-switch button").forEach((b) => {
    b.addEventListener("click", () => applyLang(b.getAttribute("data-lang")));
  });

  /* -------- Loader: lock scroll during intro -------- */
  const hasLoader = !!document.getElementById("loader");
  if (hasLoader) {
    document.documentElement.classList.add("no-scroll");
    document.body.classList.add("no-scroll");
  }
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";

  const blockScroll = (e) => { if (document.body.classList.contains("no-scroll")) e.preventDefault(); };
  const blockKeys = (e) => {
    if (!document.body.classList.contains("no-scroll")) return;
    if ([" ", "ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(e.key)) e.preventDefault();
  };
  window.addEventListener("wheel", blockScroll, { passive: false });
  window.addEventListener("touchmove", blockScroll, { passive: false });
  window.addEventListener("keydown", blockKeys);

  window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    if (!loader) return;
    setTimeout(() => {
      loader.classList.add("hide");
      document.documentElement.classList.remove("no-scroll");
      document.body.classList.remove("no-scroll");
      window.scrollTo(0, 0);
    }, 2300);
    setTimeout(() => loader.remove(), 3300);
  });

  /* -------- Year -------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* -------- Nav scrolled state -------- */
  const nav = document.getElementById("nav");
  if (nav) {
    const onScroll = () => { nav.classList.toggle("scrolled", window.scrollY > 30); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* -------- Mobile menu -------- */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("open");
      navLinks.classList.toggle("open");
    });
    navLinks.querySelectorAll("a").forEach(a =>
      a.addEventListener("click", () => {
        navToggle.classList.remove("open");
        navLinks.classList.remove("open");
      })
    );
  }

  /* -------- Side rotating phrases -------- */
  document.querySelectorAll(".phrase-stack").forEach((stack, sIdx) => {
    const phrases = Array.from(stack.querySelectorAll(".phrase"));
    if (phrases.length <= 1) return;
    let i = 0;
    const interval = 4800 + sIdx * 800;
    setInterval(() => {
      phrases[i].classList.remove("active");
      i = (i + 1) % phrases.length;
      phrases[i].classList.add("active");
    }, interval);
  });

  /* -------- Media band sliders (the "video" slots) -------- */
  const hero = document.getElementById("heroSlider");
  const sliders = [];
  if (hero) sliders.push(hero);
  document.querySelectorAll("[data-slider]").forEach(s => sliders.push(s));
  sliders.forEach((slider, sIdx) => {
    const slides = slider.querySelectorAll(".band-slide");
    if (slides.length <= 1) return;
    let idx = 0;
    setInterval(() => {
      slides[idx].classList.remove("active");
      idx = (idx + 1) % slides.length;
      slides[idx].classList.add("active");
    }, 5200 + sIdx * 300);
  });

  /* -------- Reveal on scroll -------- */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  /* -------- Lightbox -------- */
  const items = Array.from(document.querySelectorAll(".g-item"));
  const lb = document.getElementById("lightbox");
  if (lb && items.length) {
    const lbImg = document.getElementById("lbImg");
    const lbClose = document.getElementById("lbClose");
    const lbPrev = document.getElementById("lbPrev");
    const lbNext = document.getElementById("lbNext");
    let lbIdx = 0;
    const openLb = (i) => {
      lbIdx = i;
      lbImg.src = items[i].getAttribute("data-src");
      lb.classList.add("open");
      lb.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    };
    const closeLb = () => {
      lb.classList.remove("open");
      lb.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    };
    const move = (dir) => {
      lbIdx = (lbIdx + dir + items.length) % items.length;
      lbImg.src = items[lbIdx].getAttribute("data-src");
    };
    items.forEach((it, i) => it.addEventListener("click", () => openLb(i)));
    lbClose.addEventListener("click", closeLb);
    lbPrev.addEventListener("click", () => move(-1));
    lbNext.addEventListener("click", () => move(1));
    lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
    document.addEventListener("keydown", (e) => {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") closeLb();
      else if (e.key === "ArrowLeft") move(-1);
      else if (e.key === "ArrowRight") move(1);
    });
  }

  /* -------- Smooth anchor scroll -------- */
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  let frame = null;
  const scrollTo = (targetTop) => {
    if (frame) cancelAnimationFrame(frame);
    const startTop = window.pageYOffset;
    const maxTop = document.documentElement.scrollHeight - window.innerHeight;
    const endTop = Math.max(0, Math.min(targetTop, maxTop));
    const distance = endTop - startTop;
    if (prefersReduced || Math.abs(distance) < 1) { window.scrollTo(0, endTop); return; }
    const duration = Math.min(1300, Math.max(850, Math.abs(distance) * 0.5));
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      window.scrollTo(0, startTop + distance * easeInOutCubic(p));
      if (p < 1) frame = requestAnimationFrame(tick); else frame = null;
    };
    frame = requestAnimationFrame(tick);
  };
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const navH = nav ? nav.getBoundingClientRect().height : 60;
      // Scroll a touch further down so the section tucks slightly under the nav.
      const top = target.getBoundingClientRect().top + window.pageYOffset - navH + 10;
      scrollTo(top);
    });
  });

  /* -------- Contact form (Formspree) -------- */
  const cf = document.getElementById("contactForm");
  const cfStatus = document.getElementById("formStatus");
  const cfBtn = document.getElementById("cfSubmit");
  if (cf && cfStatus) {
    cf.addEventListener("submit", async (e) => {
      e.preventDefault();
      cfStatus.classList.remove("show", "ok", "err");
      if (cfBtn) { cfBtn.disabled = true; cfBtn.style.opacity = .6; }
      try {
        const res = await fetch(cf.action, { method: "POST", body: new FormData(cf), headers: { Accept: "application/json" } });
        if (res.ok) {
          cfStatus.textContent = STATUS.ok[currentLang] || STATUS.ok.it;
          cfStatus.classList.add("show", "ok");
          cf.reset();
        } else {
          cfStatus.textContent = STATUS.err[currentLang] || STATUS.err.it;
          cfStatus.classList.add("show", "err");
        }
      } catch {
        cfStatus.textContent = STATUS.err[currentLang] || STATUS.err.it;
        cfStatus.classList.add("show", "err");
      } finally {
        if (cfBtn) { cfBtn.disabled = false; cfBtn.style.opacity = 1; }
      }
    });
  }
})();
