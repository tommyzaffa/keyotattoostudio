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
    "review.3": { it: "È il mio secondo tatuaggio che faccio da Omar e posso dire che oltre ad essere un grandissimo professionista lavora veramente molto bene. Se dovessi consigliarlo direi di andare da lui al 100%.", en: "This is my second tattoo with Omar and I can say that besides being a great professional, he truly does excellent work. If I had to recommend him, I'd say go to him 100%.", de: "Es ist mein zweites Tattoo bei Omar und ich kann sagen, dass er nicht nur ein grossartiger Profi ist, sondern wirklich hervorragend arbeitet. Wenn ich ihn empfehlen müsste, würde ich sagen: geh zu 100% zu ihm.", fr: "C'est mon deuxième tatouage chez Omar et je peux dire qu'en plus d'être un grand professionnel, il travaille vraiment très bien. Si je devais le recommander, je dirais d'aller chez lui à 100%." },

    /* ===== ACADEMY ===== */
    "nav.academy":   { it: "Academy", en: "Academy", de: "Academy", fr: "Academy" },
    "ac.back":       { it: "← Torna al sito", en: "← Back to site", de: "← Zurück zur Seite", fr: "← Retour au site" },
    "ac.hero.tag":   { it: "la scuola di keyo tattoo studio", en: "the keyo tattoo studio school", de: "die schule des keyo tattoo studio", fr: "l'école du keyo tattoo studio" },
    "ac.hero.sub":   { it: "diventa tatuatore professionista in 8 mesi", en: "become a professional tattooist in 8 months", de: "werde in 8 monaten professioneller tätowierer", fr: "deviens tatoueur professionnel en 8 mois" },
    "ac.hero.cta1":  { it: "Iscriviti al corso", en: "Enroll now", de: "Jetzt anmelden", fr: "S'inscrire au cours" },
    "ac.hero.cta2":  { it: "Scopri il programma", en: "See the program", de: "Programm ansehen", fr: "Voir le programme" },

    "ac.intro.num":  { it: "Il corso", en: "The course", de: "Der Kurs", fr: "Le cours" },
    "ac.intro.title":{ it: "Da zero a professionista", en: "From zero to professional", de: "Vom Anfänger zum Profi", fr: "De zéro à professionnel" },
    "ac.intro.lead": { it: "Un percorso completo di 8 mesi che ti accompagna dalle fondamenta teoriche fino al tuo primo tatuaggio su pelle reale, con un portfolio professionale e gli strumenti per avviare la tua carriera.", en: "A complete 8-month path that takes you from the theoretical foundations to your first tattoo on real skin, with a professional portfolio and the tools to launch your career.", de: "Ein kompletter 8-monatiger Weg, der dich von den theoretischen Grundlagen bis zu deinem ersten Tattoo auf echter Haut führt – mit einem professionellen Portfolio und den Werkzeugen für deinen Karrierestart.", fr: "Un parcours complet de 8 mois qui te mène des fondations théoriques à ton premier tatouage sur peau réelle, avec un portfolio professionnel et les outils pour lancer ta carrière." },

    "ac.stat.months":   { it: "Mesi di percorso", en: "Months of training", de: "Monate Ausbildung", fr: "Mois de formation" },
    "ac.stat.hours":    { it: "Ore tra teoria e pratica", en: "Hours of theory and practice", de: "Stunden Theorie und Praxis", fr: "Heures de théorie et pratique" },
    "ac.stat.real":     { it: "Tatuaggi reali supervisionati", en: "Supervised real tattoos", de: "Echte Tattoos unter Aufsicht", fr: "Tatouages réels supervisés" },
    "ac.stat.portfolio":{ it: "Portfolio professionale", en: "Professional portfolio", de: "Professionelles Portfolio", fr: "Portfolio professionnel" },

    "ac.prog.num":   { it: "Il programma", en: "The program", de: "Das Programm", fr: "Le programme" },
    "ac.prog.title": { it: "8 mesi, passo dopo passo", en: "8 months, step by step", de: "8 Monate, Schritt für Schritt", fr: "8 mois, étape par étape" },

    /* Category labels (shared) */
    "ac.cat.teoria":       { it: "Teoria", en: "Theory", de: "Theorie", fr: "Théorie" },
    "ac.cat.igiene":       { it: "Igiene", en: "Hygiene", de: "Hygiene", fr: "Hygiène" },
    "ac.cat.pratica":      { it: "Pratica", en: "Practice", de: "Praxis", fr: "Pratique" },
    "ac.cat.disegno":      { it: "Disegno", en: "Drawing", de: "Zeichnen", fr: "Dessin" },
    "ac.cat.anatomia":     { it: "Anatomia", en: "Anatomy", de: "Anatomie", fr: "Anatomie" },
    "ac.cat.stili":        { it: "Studio degli stili", en: "Style study", de: "Stilstudium", fr: "Étude des styles" },
    "ac.cat.composizione": { it: "Composizione", en: "Composition", de: "Komposition", fr: "Composition" },
    "ac.cat.tecnica":      { it: "Tecnica", en: "Technique", de: "Technik", fr: "Technique" },
    "ac.cat.stencil":      { it: "Stencil", en: "Stencil", de: "Stencil", fr: "Stencil" },
    "ac.cat.linework":     { it: "Linework", en: "Linework", de: "Linework", fr: "Linework" },
    "ac.cat.riempimenti":  { it: "Riempimenti", en: "Fills", de: "Füllungen", fr: "Remplissages" },
    "ac.cat.whip":         { it: "Whip Shading", en: "Whip Shading", de: "Whip Shading", fr: "Whip Shading" },
    "ac.cat.praticaint":   { it: "Pratica intensiva", en: "Intensive practice", de: "Intensives Üben", fr: "Pratique intensive" },
    "ac.cat.workflow":     { it: "Tattoo Workflow", en: "Tattoo Workflow", de: "Tattoo Workflow", fr: "Tattoo Workflow" },
    "ac.cat.avanzate":     { it: "Tecniche avanzate", en: "Advanced techniques", de: "Fortgeschrittene Techniken", fr: "Techniques avancées" },
    "ac.cat.preparazione": { it: "Preparazione", en: "Preparation", de: "Vorbereitung", fr: "Préparation" },
    "ac.cat.valutazione":  { it: "Valutazione", en: "Assessment", de: "Bewertung", fr: "Évaluation" },
    "ac.cat.marketing":    { it: "Marketing", en: "Marketing", de: "Marketing", fr: "Marketing" },
    "ac.cat.business":     { it: "Business", en: "Business", de: "Business", fr: "Business" },
    "ac.cat.portfolio":    { it: "Portfolio", en: "Portfolio", de: "Portfolio", fr: "Portfolio" },
    "ac.cat.esame":        { it: "Esame finale", en: "Final exam", de: "Abschlussprüfung", fr: "Examen final" },
    "ac.cat.obiettivo":    { it: "Obiettivo", en: "Goal", de: "Ziel", fr: "Objectif" },

    /* Month titles + numbers */
    "ac.m1.num": { it: "Mese 1", en: "Month 1", de: "Monat 1", fr: "Mois 1" },
    "ac.m2.num": { it: "Mese 2", en: "Month 2", de: "Monat 2", fr: "Mois 2" },
    "ac.m3.num": { it: "Mese 3", en: "Month 3", de: "Monat 3", fr: "Mois 3" },
    "ac.m4.num": { it: "Mese 4", en: "Month 4", de: "Monat 4", fr: "Mois 4" },
    "ac.m5.num": { it: "Mese 5", en: "Month 5", de: "Monat 5", fr: "Mois 5" },
    "ac.m6.num": { it: "Mese 6", en: "Month 6", de: "Monat 6", fr: "Mois 6" },
    "ac.m7.num": { it: "Mese 7", en: "Month 7", de: "Monat 7", fr: "Mois 7" },
    "ac.m8.num": { it: "Mese 8", en: "Month 8", de: "Monat 8", fr: "Mois 8" },

    "ac.m1.title": { it: "Fondamenta del tatuatore", en: "Foundations of the tattooist", de: "Grundlagen des Tätowierers", fr: "Fondamentaux du tatoueur" },
    "ac.m2.title": { it: "Disegno applicato al tatuaggio", en: "Drawing applied to tattooing", de: "Zeichnen fürs Tätowieren", fr: "Dessin appliqué au tatouage" },
    "ac.m3.title": { it: "Stili e composizione", en: "Styles and composition", de: "Stile und Komposition", fr: "Styles et composition" },
    "ac.m4.title": { it: "Macchinette e attrezzatura", en: "Machines and equipment", de: "Maschinen und Ausrüstung", fr: "Machines et équipement" },
    "ac.m5.title": { it: "Tecniche di tatuaggio", en: "Tattooing techniques", de: "Tätowiertechniken", fr: "Techniques de tatouage" },
    "ac.m6.title": { it: "Progetti completi", en: "Complete projects", de: "Komplette Projekte", fr: "Projets complets" },
    "ac.m7.title": { it: "Pelle umana supervisionata", en: "Supervised human skin", de: "Echte Haut unter Aufsicht", fr: "Peau humaine supervisée" },
    "ac.m8.title": { it: "Business e certificazione", en: "Business and certification", de: "Business und Zertifizierung", fr: "Business et certification" },

    /* Month 1 */
    "ac.m1.teoria":  { it: "<li>Storia del tatuaggio</li><li>Evoluzione degli stili</li><li>Etica professionale</li><li>Mentalità del tatuatore professionista</li><li>Normative e responsabilità</li>", en: "<li>History of tattooing</li><li>Evolution of styles</li><li>Professional ethics</li><li>Mindset of the professional tattooist</li><li>Regulations and responsibilities</li>", de: "<li>Geschichte des Tätowierens</li><li>Entwicklung der Stile</li><li>Berufsethik</li><li>Mentalität des professionellen Tätowierers</li><li>Vorschriften und Verantwortung</li>", fr: "<li>Histoire du tatouage</li><li>Évolution des styles</li><li>Éthique professionnelle</li><li>Mentalité du tatoueur professionnel</li><li>Réglementations et responsabilités</li>" },
    "ac.m1.igiene":  { it: "<li>Contaminazione crociata</li><li>DPI e materiali monouso</li><li>Preparazione postazione</li><li>Smaltimento rifiuti</li>", en: "<li>Cross-contamination</li><li>PPE and single-use materials</li><li>Workstation setup</li><li>Waste disposal</li>", de: "<li>Kreuzkontamination</li><li>PSA und Einwegmaterialien</li><li>Vorbereitung des Arbeitsplatzes</li><li>Abfallentsorgung</li>", fr: "<li>Contamination croisée</li><li>EPI et matériel à usage unique</li><li>Préparation du poste</li><li>Élimination des déchets</li>" },
    "ac.m1.pratica": { it: "<li>Linee su carta</li><li>Controllo del tratto</li><li>Esercizi quotidiani di precisione</li>", en: "<li>Lines on paper</li><li>Stroke control</li><li>Daily precision exercises</li>", de: "<li>Linien auf Papier</li><li>Strichkontrolle</li><li>Tägliche Präzisionsübungen</li>", fr: "<li>Lignes sur papier</li><li>Contrôle du trait</li><li>Exercices quotidiens de précision</li>" },

    /* Month 2 */
    "ac.m2.disegno":  { it: "<li>Linea</li><li>Forme geometriche</li><li>Volumi</li><li>Chiaroscuro</li><li>Contrasto</li>", en: "<li>Line</li><li>Geometric shapes</li><li>Volumes</li><li>Chiaroscuro</li><li>Contrast</li>", de: "<li>Linie</li><li>Geometrische Formen</li><li>Volumen</li><li>Hell-Dunkel</li><li>Kontrast</li>", fr: "<li>Ligne</li><li>Formes géométriques</li><li>Volumes</li><li>Clair-obscur</li><li>Contraste</li>" },
    "ac.m2.anatomia": { it: "<li>Principali gruppi muscolari</li><li>Movimento del corpo</li><li>Flusso del tatuaggio</li>", en: "<li>Main muscle groups</li><li>Body movement</li><li>Tattoo flow</li>", de: "<li>Wichtigste Muskelgruppen</li><li>Körperbewegung</li><li>Tattoo-Fluss</li>", fr: "<li>Principaux groupes musculaires</li><li>Mouvement du corps</li><li>Flux du tatouage</li>" },
    "ac.m2.pratica":  { it: "<li>Flash tattoo</li><li>Composizioni semplici</li><li>Disegni giornalieri</li>", en: "<li>Flash tattoo</li><li>Simple compositions</li><li>Daily drawings</li>", de: "<li>Flash-Tattoo</li><li>Einfache Kompositionen</li><li>Tägliche Zeichnungen</li>", fr: "<li>Flash tattoo</li><li>Compositions simples</li><li>Dessins quotidiens</li>" },
    "ac.m2.goal":     { it: "Creare i primi 20 flash personali", en: "Create your first 20 personal flash designs", de: "Erstelle deine ersten 20 persönlichen Flash-Designs", fr: "Créer tes 20 premiers flashs personnels" },

    /* Month 3 */
    "ac.m3.stili":        { it: "<li>Traditional</li><li>Colore</li><li>Blackwork</li><li>Fine Line</li><li>Black &amp; Grey</li>", en: "<li>Traditional</li><li>Color</li><li>Blackwork</li><li>Fine Line</li><li>Black &amp; Grey</li>", de: "<li>Traditional</li><li>Color</li><li>Blackwork</li><li>Fine Line</li><li>Black &amp; Grey</li>", fr: "<li>Traditional</li><li>Couleur</li><li>Blackwork</li><li>Fine Line</li><li>Black &amp; Grey</li>" },
    "ac.m3.composizione": { it: "<li>Posizionamento sul corpo</li><li>Lettura a distanza</li><li>Equilibrio visivo</li>", en: "<li>Placement on the body</li><li>Readability from a distance</li><li>Visual balance</li>", de: "<li>Platzierung am Körper</li><li>Lesbarkeit aus Distanz</li><li>Visuelle Balance</li>", fr: "<li>Placement sur le corps</li><li>Lisibilité à distance</li><li>Équilibre visuel</li>" },
    "ac.m3.pratica":      { it: "<li>Progettazione di tatuaggi completi</li><li>Adattamento su sagome anatomiche</li>", en: "<li>Designing complete tattoos</li><li>Adapting to anatomical outlines</li>", de: "<li>Gestaltung kompletter Tattoos</li><li>Anpassung an anatomische Vorlagen</li>", fr: "<li>Conception de tatouages complets</li><li>Adaptation sur gabarits anatomiques</li>" },

    /* Month 4 */
    "ac.m4.tecnica": { it: "<li>Rotary</li><li>Pen</li><li>Aghi e configurazioni</li><li>Voltaggi</li><li>Inchiostri</li>", en: "<li>Rotary</li><li>Pen</li><li>Needles and configurations</li><li>Voltages</li><li>Inks</li>", de: "<li>Rotary</li><li>Pen</li><li>Nadeln und Konfigurationen</li><li>Spannungen</li><li>Tinten</li>", fr: "<li>Rotary</li><li>Pen</li><li>Aiguilles et configurations</li><li>Voltages</li><li>Encres</li>" },
    "ac.m4.stencil": { it: "<li>Creazione</li><li>Applicazione</li><li>Posizionamento corretto</li>", en: "<li>Creation</li><li>Application</li><li>Correct placement</li>", de: "<li>Erstellung</li><li>Anwendung</li><li>Korrekte Platzierung</li>", fr: "<li>Création</li><li>Application</li><li>Placement correct</li>" },
    "ac.m4.pratica": { it: "<li>Prime esercitazioni su pelle sintetica</li><li>Linee dritte</li><li>Curve</li><li>Cerchi perfetti</li>", en: "<li>First exercises on synthetic skin</li><li>Straight lines</li><li>Curves</li><li>Perfect circles</li>", de: "<li>Erste Übungen auf Kunsthaut</li><li>Gerade Linien</li><li>Kurven</li><li>Perfekte Kreise</li>", fr: "<li>Premiers exercices sur peau synthétique</li><li>Lignes droites</li><li>Courbes</li><li>Cercles parfaits</li>" },
    "ac.m4.goal":    { it: "Padronanza dell'attrezzatura", en: "Mastery of the equipment", de: "Beherrschung der Ausrüstung", fr: "Maîtrise de l'équipement" },

    /* Month 5 */
    "ac.m5.linework":    { it: "<li>Linee sottili</li><li>Linee spesse</li><li>Saturazione</li>", en: "<li>Thin lines</li><li>Thick lines</li><li>Saturation</li>", de: "<li>Dünne Linien</li><li>Dicke Linien</li><li>Sättigung</li>", fr: "<li>Lignes fines</li><li>Lignes épaisses</li><li>Saturation</li>" },
    "ac.m5.riempimenti": { it: "<li>Nero pieno</li><li>Packing</li>", en: "<li>Solid black</li><li>Packing</li>", de: "<li>Vollschwarz</li><li>Packing</li>", fr: "<li>Noir plein</li><li>Packing</li>" },
    "ac.m5.whip":        { it: "<li>Tecniche base</li><li>Tecniche avanzate</li>", en: "<li>Basic techniques</li><li>Advanced techniques</li>", de: "<li>Grundtechniken</li><li>Fortgeschrittene Techniken</li>", fr: "<li>Techniques de base</li><li>Techniques avancées</li>" },
    "ac.m5.pratica":     { it: "<li>Pelle sintetica</li><li>Progetti completi</li>", en: "<li>Synthetic skin</li><li>Complete projects</li>", de: "<li>Kunsthaut</li><li>Komplette Projekte</li>", fr: "<li>Peau synthétique</li><li>Projets complets</li>" },
    "ac.m5.goal":        { it: "Completare almeno 8 tatuaggi sintetici", en: "Complete at least 8 synthetic tattoos", de: "Mindestens 8 Tattoos auf Kunsthaut fertigstellen", fr: "Réaliser au moins 8 tatouages sur peau synthétique" },

    /* Month 6 */
    "ac.m6.workflow": { it: "<li>Consulenza cliente</li><li>Preparazione stencil</li><li>Esecuzione completa</li>", en: "<li>Client consultation</li><li>Stencil preparation</li><li>Full execution</li>", de: "<li>Kundenberatung</li><li>Stencil-Vorbereitung</li><li>Komplette Ausführung</li>", fr: "<li>Consultation client</li><li>Préparation du stencil</li><li>Exécution complète</li>" },
    "ac.m6.avanzate": { it: "<li>Cover-up base</li><li>Correzione errori</li><li>Gestione diverse tipologie di pelle</li>", en: "<li>Basic cover-up</li><li>Error correction</li><li>Managing different skin types</li>", de: "<li>Basis-Cover-up</li><li>Fehlerkorrektur</li><li>Umgang mit verschiedenen Hauttypen</li>", fr: "<li>Cover-up de base</li><li>Correction des erreurs</li><li>Gestion des différents types de peau</li>" },
    "ac.m6.pratica":  { it: "<li>Simulazioni reali</li><li>Sessioni complete</li>", en: "<li>Realistic simulations</li><li>Full sessions</li>", de: "<li>Realitätsnahe Simulationen</li><li>Komplette Sitzungen</li>", fr: "<li>Simulations réelles</li><li>Sessions complètes</li>" },
    "ac.m6.goal":     { it: "Realizzare tatuaggi completi in autonomia su sintetica", en: "Produce complete tattoos independently on synthetic skin", de: "Komplette Tattoos eigenständig auf Kunsthaut umsetzen", fr: "Réaliser des tatouages complets en autonomie sur peau synthétique" },

    /* Month 7 */
    "ac.m7.preparazione": { it: "<li>Consenso informato</li><li>Gestione cliente</li><li>Aftercare</li>", en: "<li>Informed consent</li><li>Client management</li><li>Aftercare</li>", de: "<li>Einverständniserklärung</li><li>Kundenbetreuung</li><li>Nachsorge</li>", fr: "<li>Consentement éclairé</li><li>Gestion du client</li><li>Aftercare</li>" },
    "ac.m7.pratica":      { it: "<li>Piccoli tatuaggi reali</li><li>Supervisione costante</li><li>Debriefing dopo ogni lavoro</li>", en: "<li>Small real tattoos</li><li>Constant supervision</li><li>Debrief after each session</li>", de: "<li>Kleine echte Tattoos</li><li>Ständige Aufsicht</li><li>Debriefing nach jeder Arbeit</li>", fr: "<li>Petits tatouages réels</li><li>Supervision constante</li><li>Débriefing après chaque travail</li>" },
    "ac.m7.valutazione":  { it: "<li>Tecnica</li><li>Igiene</li><li>Comportamento professionale</li>", en: "<li>Technique</li><li>Hygiene</li><li>Professional conduct</li>", de: "<li>Technik</li><li>Hygiene</li><li>Professionelles Verhalten</li>", fr: "<li>Technique</li><li>Hygiène</li><li>Comportement professionnel</li>" },
    "ac.m7.goal":         { it: "3-5 tatuaggi reali eseguiti", en: "3–5 real tattoos completed", de: "3–5 echte Tattoos ausgeführt", fr: "3 à 5 tatouages réels réalisés" },

    /* Month 8 */
    "ac.m8.marketing": { it: "<li>Instagram e TikTok</li><li>Creazione contenuti</li><li>Fotografia del tatuaggio</li>", en: "<li>Instagram and TikTok</li><li>Content creation</li><li>Tattoo photography</li>", de: "<li>Instagram und TikTok</li><li>Content-Erstellung</li><li>Tattoo-Fotografie</li>", fr: "<li>Instagram et TikTok</li><li>Création de contenu</li><li>Photographie du tatouage</li>" },
    "ac.m8.business":  { it: "<li>Prezzi</li><li>Preventivi</li><li>Gestione agenda</li><li>Collaborazioni con studi</li>", en: "<li>Pricing</li><li>Quotes</li><li>Schedule management</li><li>Collaborations with studios</li>", de: "<li>Preise</li><li>Kostenvoranschläge</li><li>Terminverwaltung</li><li>Zusammenarbeit mit Studios</li>", fr: "<li>Tarifs</li><li>Devis</li><li>Gestion de l'agenda</li><li>Collaborations avec des studios</li>" },
    "ac.m8.portfolio": { it: "<li>Selezione lavori</li><li>Presentazione professionale</li>", en: "<li>Work selection</li><li>Professional presentation</li>", de: "<li>Auswahl der Arbeiten</li><li>Professionelle Präsentation</li>", fr: "<li>Sélection des travaux</li><li>Présentation professionnelle</li>" },
    "ac.m8.esame":     { it: "<li>Test teorico</li><li>Tattoo finale</li><li>Revisione portfolio</li><li>Colloquio individuale</li>", en: "<li>Theory test</li><li>Final tattoo</li><li>Portfolio review</li><li>Individual interview</li>", de: "<li>Theorietest</li><li>Abschluss-Tattoo</li><li>Portfolio-Review</li><li>Einzelgespräch</li>", fr: "<li>Test théorique</li><li>Tatouage final</li><li>Revue du portfolio</li><li>Entretien individuel</li>" },

    /* Format */
    "ac.format.num":          { it: "Organizzazione", en: "Schedule", de: "Organisation", fr: "Organisation" },
    "ac.format.title":        { it: "Format settimanale consigliato", en: "Recommended weekly format", de: "Empfohlenes Wochenformat", fr: "Format hebdomadaire conseillé" },
    "ac.format.lessons.label":{ it: "Lezioni", en: "Lessons", de: "Lektionen", fr: "Cours" },
    "ac.format.lessons.val":  { it: "4 al mese · 6—8 ore", en: "4 per month · 6—8 hours", de: "4 pro Monat · 6—8 Std.", fr: "4 par mois · 6—8 h" },
    "ac.format.hours.label":  { it: "Monte ore", en: "Total hours", de: "Gesamtstunden", fr: "Volume horaire" },
    "ac.format.hours.val":    { it: "Circa 400 ore tra teoria e pratica", en: "About 400 hours of theory and practice", de: "Rund 400 Stunden Theorie und Praxis", fr: "Environ 400 heures entre théorie et pratique" },
    "ac.format.note":         { it: "La frequenza delle lezioni viene definita all'inizio del percorso e adattata al gruppo.", en: "The lesson schedule is defined at the start of the course and adapted to the group.", de: "Der Unterrichtsrhythmus wird zu Beginn des Kurses festgelegt und an die Gruppe angepasst.", fr: "La fréquence des cours est définie au début du parcours et adaptée au groupe." },

    /* Result */
    "ac.result.num":   { it: "Il risultato", en: "The result", de: "Das Ergebnis", fr: "Le résultat" },
    "ac.result.title": { it: "Al termine sarai in grado di", en: "By the end you'll be able to", de: "Am Ende kannst du", fr: "À la fin tu sauras" },
    "ac.result.list":  { it: "<li>Progettare un tatuaggio professionale</li><li>Gestire correttamente una postazione di lavoro</li><li>Eseguire linework, riempimenti e whip shading</li><li>Lavorare su pelle reale in sicurezza</li><li>Costruire un portfolio professionale</li><li>Iniziare una collaborazione con uno studio o avviare la propria attività</li>", en: "<li>Design a professional tattoo</li><li>Properly manage a workstation</li><li>Perform linework, fills and whip shading</li><li>Work safely on real skin</li><li>Build a professional portfolio</li><li>Start a collaboration with a studio or launch your own business</li>", de: "<li>Ein professionelles Tattoo entwerfen</li><li>Einen Arbeitsplatz korrekt führen</li><li>Linework, Füllungen und Whip Shading ausführen</li><li>Sicher auf echter Haut arbeiten</li><li>Ein professionelles Portfolio aufbauen</li><li>Eine Zusammenarbeit mit einem Studio beginnen oder dein eigenes Business starten</li>", fr: "<li>Concevoir un tatouage professionnel</li><li>Gérer correctement un poste de travail</li><li>Réaliser linework, remplissages et whip shading</li><li>Travailler sur peau réelle en toute sécurité</li><li>Construire un portfolio professionnel</li><li>Démarrer une collaboration avec un studio ou lancer ta propre activité</li>" },

    /* Enrollment */
    "ac.enroll.num":   { it: "Iscrizione", en: "Enrollment", de: "Anmeldung", fr: "Inscription" },
    "ac.enroll.title": { it: "Iscriviti all'Academy", en: "Enroll in the Academy", de: "Melde dich zur Academy an", fr: "Inscris-toi à l'Academy" },
    "ac.enroll.lead":  { it: "Posti limitati. Lascia i tuoi dati e ti ricontatteremo per un colloquio conoscitivo.", en: "Limited spots. Leave your details and we'll contact you for an introductory interview.", de: "Begrenzte Plätze. Hinterlasse deine Daten und wir melden uns für ein Kennenlerngespräch.", fr: "Places limitées. Laisse tes coordonnées et nous te recontacterons pour un entretien." },
    "ac.form.lastname":   { it: "Cognome", en: "Surname", de: "Nachname", fr: "Nom" },
    "ac.form.phone":      { it: "Telefono", en: "Phone", de: "Telefon", fr: "Téléphone" },
    "ac.form.experience": { it: "Esperienza nel disegno / tatuaggio", en: "Drawing / tattoo experience", de: "Erfahrung im Zeichnen / Tätowieren", fr: "Expérience en dessin / tatouage" },
    "ac.form.exp.none":     { it: "Nessuna", en: "None", de: "Keine", fr: "Aucune" },
    "ac.form.exp.basic":    { it: "Base", en: "Basic", de: "Grundkenntnisse", fr: "Notions de base" },
    "ac.form.exp.inter":    { it: "Intermedia", en: "Intermediate", de: "Fortgeschritten", fr: "Intermédiaire" },
    "ac.form.exp.advanced": { it: "Avanzata", en: "Advanced", de: "Sehr fortgeschritten", fr: "Avancée" },
    "ac.form.motivation": { it: "Raccontaci la tua motivazione", en: "Tell us your motivation", de: "Erzähl uns deine Motivation", fr: "Parle-nous de ta motivation" },
    "ac.form.submit":     { it: "Invia iscrizione", en: "Send application", de: "Anmeldung senden", fr: "Envoyer l'inscription" }
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

  // Honor an incoming hash (e.g. arriving from academy.html via index.html#artisti):
  // after the loader hides, scroll to the requested section instead of the top.
  function scrollToIncomingHash() {
    const hash = window.location.hash;
    const target = hash && hash.length > 1 ? document.querySelector(hash) : null;
    if (!target || hash === "#home" || target.classList.contains("band")) {
      window.scrollTo(0, 0);
      return;
    }
    const navEl = document.getElementById("nav");
    const navH = navEl ? navEl.getBoundingClientRect().height : 60;
    const top = target.getBoundingClientRect().top + window.pageYOffset - navH + 40;
    window.scrollTo(0, Math.max(0, top));
  }

  window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    if (!loader) { scrollToIncomingHash(); return; }
    setTimeout(() => {
      loader.classList.add("hide");
      document.documentElement.classList.remove("no-scroll");
      document.body.classList.remove("no-scroll");
      scrollToIncomingHash();
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
      // The hero is a permanently-pinned band, so its rect.top is always ~0;
      // scroll straight to the very top instead of using the offset calc.
      if (href === "#home" || target.classList.contains("band")) { scrollTo(0); return; }
      const navH = nav ? nav.getBoundingClientRect().height : 60;
      // Land the section higher, tucked right under the nav (inverted direction).
      const top = target.getBoundingClientRect().top + window.pageYOffset - navH + 40;
      scrollTo(top);
    });
  });

  /* -------- Fit bracketed titles to one line (shrink, never wrap/orphan 「」) -------- */
  function fitTitle(el) {
    el.style.fontSize = "";
    const parent = el.parentElement;
    const pcs = getComputedStyle(parent);
    // The title uses white-space:nowrap, so it grows to its content width and
    // never "overflows itself" — compare its content width to the AVAILABLE
    // width instead (parent inner box, capped to the viewport with a small margin).
    const avail = Math.min(
      parent.clientWidth - parseFloat(pcs.paddingLeft) - parseFloat(pcs.paddingRight),
      document.documentElement.clientWidth - 28
    );
    for (let i = 0; i < 6 && el.scrollWidth > avail + 1; i++) {
      const base = parseFloat(getComputedStyle(el).fontSize);
      el.style.fontSize = Math.max(16, base * (avail / el.scrollWidth) * 0.97) + "px";
    }
  }
  function fitTitles() {
    document.querySelectorAll(".hero-title, .band-title, .page-hero-title").forEach(fitTitle);
  }
  fitTitles();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitTitles);
  let fitT;
  window.addEventListener("resize", () => { clearTimeout(fitT); fitT = setTimeout(fitTitles, 120); });

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
