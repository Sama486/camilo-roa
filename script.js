/* Camilo Roa — Personal Trainer | interactions + i18n */
(() => {
  "use strict";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- translations ---------- */
  const I18N = {
    de: {
      "nav.about": "Über mich", "nav.principles": "Prinzipien", "nav.training": "Training",
      "nav.contact": "Kontakt", "nav.cta": "Erstgespräch", "idx.process": "Ablauf",
      "hero.eyebrow": "Personal Trainer — Frankfurt & Online",
      "hero.title": "Nicht denken.<br><span class=\"ital\">Tun.</span>",
      "hero.lead": "Kopf aus. Zweifel leise. Taten laut. Ich baue mit dir Schritt für Schritt den Körper und die Disziplin, die du dir seit Jahren vornimmst.",
      "hero.cta": "Kostenloses Erstgespräch", "hero.instagram": "Instagram ansehen",
      "statement.label": "Philosophie",
      "statement.text": "Disziplin schlägt <span class=\"ital\">Motivation.</span> Wir bauen Gewohnheiten, die auch an schlechten Tagen tragen — ohne Lärm, ohne Ausreden.",
      "about.h2": "Aus Kolumbien.<br>Für dein bestes Ich.",
      "about.p1": "Ich bin Camilo — zu Hause zwischen Kolumbien und Deutschland. Training ist für mich keine Phase, sondern eine Haltung: jeden Tag eine ruhige, klare Entscheidung für dich selbst, auch wenn du keine Lust hast.",
      "about.p2": "Als Personal Trainer arbeite ich mit Menschen, die genug von halben Sachen haben. Kein Plan von der Stange, sondern ein System, das zu deinem Alltag, deinem Körper und deinem Kopf passt.",
      "tag.strength": "Kraft & Ästhetik", "tag.fatloss": "Fettabbau", "tag.nutrition": "Ernährung", "tag.mindset": "Mindset",
      "about.langs": "Coaching auf Deutsch · Español · English",
      "stat.years": "Jahre Erfahrung", "stat.clients": "Betreute Klienten", "stat.languages": "Sprachen",
      "principles.title": "Woran ich glaube",
      "p1.h3": "Disziplin schlägt Motivation", "p1.p": "Motivation kommt und geht. Disziplin bleibt. Wir bauen Gewohnheiten, die auch an schlechten Tagen tragen.",
      "p2.h3": "Keine Ausreden", "p2.p": "„Keine Zeit\", „kein Kopf\", „nächste Woche\". Wir streichen die Ausreden und ersetzen sie durch einen klaren Plan.",
      "p3.h3": "Respect yourself", "p3.p": "Dein Körper ist die Wohnung, in der du lebst. Training ist Selbstrespekt — kein Luxus, sondern Basis.",
      "p4.h3": "Choose yourself", "p4.p": "Jeden Tag triffst du eine Entscheidung. Ich sorge dafür, dass du sie ruhig und konsequent für dich selbst triffst.",
      "offers.title": "Such dir deinen Weg",
      "o1.tag": "Einzeln", "o1.h3": "Personal Training", "o1.desc": "Du und ich, im Gym. Jede Wiederholung kontrolliert, jede Woche progressiv.",
      "o1.li1": "Individueller Trainingsplan", "o1.li2": "Technik-Korrektur live", "o1.li3": "Wöchentliche Anpassung", "o1.unit": "/ Einheit",
      "o2.tag": "Empfohlen", "o2.h3": "Online-Coaching", "o2.desc": "Volles Coaching, ortsunabhängig. Plan, Check-ins und Support direkt aufs Handy.",
      "o2.li1": "App-basierter Plan", "o2.li2": "Video-Feedback", "o2.li3": "Chat-Support, 7 Tage", "o2.li4": "Monatlicher Strategie-Call", "o2.unit": "/ Monat",
      "o3.tag": "Ernährung", "o3.h3": "Ernährungsplan", "o3.desc": "Kein Verzicht-Dogma. Ein Ernährungssystem, das zu deinem Leben passt.",
      "o3.li1": "Kalorien & Makros", "o3.li2": "Alltagstaugliche Rezepte", "o3.li3": "Anpassung nach 4 Wochen", "o3.unit": "/ Plan",
      "offer.from": "ab", "offer.cta": "Anfragen",
      "offers.note": "Platzhalter-Preise — Pakete & Konditionen legen wir gemeinsam im Erstgespräch fest.",
      "ps1.h3": "Erstgespräch", "ps1.p": "Wir klären dein Ziel, deinen Alltag und wo du stehst. Kostenlos & unverbindlich.",
      "ps2.h3": "Dein Plan", "ps2.p": "Training & Ernährung, exakt auf dich zugeschnitten. Kein Copy-Paste.",
      "ps3.h3": "Umsetzung", "ps3.p": "Wir arbeiten ruhig und konsequent. Ich korrigiere und halte dich accountable.",
      "ps4.h3": "Fortschritt", "ps4.p": "Wir messen, passen an und feiern echte Ergebnisse — Woche für Woche.",
      "cta.title": "Hör auf zu warten.<br><span class=\"ital\">Fang an.</span>",
      "cta.lead": "Schreib mir eine Nachricht — wir finden in Ruhe heraus, ob wir zusammenpassen. Keine Verpflichtung, nur Klartext.",
      "cta.whatsapp": "WhatsApp schreiben", "cta.email": "E-Mail senden",
      "cta.hint": "WhatsApp-Nummer & E-Mail sind Platzhalter — hier kommen Camilos echte Kontaktdaten rein.",
      "footer.role": "Personal Trainer", "footer.claim": "Nicht denken. Tun."
    },
    en: {
      "nav.about": "About", "nav.principles": "Principles", "nav.training": "Training",
      "nav.contact": "Contact", "nav.cta": "Free Call", "idx.process": "Process",
      "hero.eyebrow": "Personal Trainer — Frankfurt & Online",
      "hero.title": "Don't think.<br><span class=\"ital\">Do it.</span>",
      "hero.lead": "Mind off. Doubts quiet. Actions loud. Step by step, I build with you the body and the discipline you've been promising yourself for years.",
      "hero.cta": "Free intro call", "hero.instagram": "View Instagram",
      "statement.label": "Philosophy",
      "statement.text": "Discipline beats <span class=\"ital\">motivation.</span> We build habits that hold even on bad days — no noise, no excuses.",
      "about.h2": "From Colombia.<br>For your best self.",
      "about.p1": "I'm Camilo — at home between Colombia and Germany. Training isn't a phase for me, it's an attitude: every day a calm, clear decision for yourself, even when you don't feel like it.",
      "about.p2": "As a personal trainer I work with people who are done with half measures. No off-the-shelf plan, but a system that fits your everyday life, your body and your mind.",
      "tag.strength": "Strength & Aesthetics", "tag.fatloss": "Fat loss", "tag.nutrition": "Nutrition", "tag.mindset": "Mindset",
      "about.langs": "Coaching in German · Spanish · English",
      "stat.years": "Years of experience", "stat.clients": "Clients coached", "stat.languages": "Languages",
      "principles.title": "What I believe in",
      "p1.h3": "Discipline beats motivation", "p1.p": "Motivation comes and goes. Discipline stays. We build habits that hold even on bad days.",
      "p2.h3": "No excuses", "p2.p": "“No time”, “not in the mood”, “next week”. We cut the excuses and replace them with a clear plan.",
      "p3.h3": "Respect yourself", "p3.p": "Your body is the home you live in. Training is self-respect — not a luxury, but a basis.",
      "p4.h3": "Choose yourself", "p4.p": "Every day you make a decision. I make sure you make it calmly and consistently for yourself.",
      "offers.title": "Choose your path",
      "o1.tag": "1-on-1", "o1.h3": "Personal Training", "o1.desc": "You and me, in the gym. Every rep controlled, every week progressive.",
      "o1.li1": "Individual training plan", "o1.li2": "Live technique correction", "o1.li3": "Weekly adjustments", "o1.unit": "/ session",
      "o2.tag": "Recommended", "o2.h3": "Online Coaching", "o2.desc": "Full coaching, wherever you are. Plan, check-ins and support straight to your phone.",
      "o2.li1": "App-based plan", "o2.li2": "Video feedback", "o2.li3": "Chat support, 7 days", "o2.li4": "Monthly strategy call", "o2.unit": "/ month",
      "o3.tag": "Nutrition", "o3.h3": "Nutrition Plan", "o3.desc": "No deprivation dogma. A nutrition system that fits your life.",
      "o3.li1": "Calories & macros", "o3.li2": "Everyday recipes", "o3.li3": "Adjustment after 4 weeks", "o3.unit": "/ plan",
      "offer.from": "from", "offer.cta": "Enquire",
      "offers.note": "Placeholder prices — packages & terms are set together in the intro call.",
      "ps1.h3": "Intro call", "ps1.p": "We clarify your goal, your routine and where you stand. Free & no obligation.",
      "ps2.h3": "Your plan", "ps2.p": "Training & nutrition, tailored exactly to you. No copy-paste.",
      "ps3.h3": "Execution", "ps3.p": "We work calmly and consistently. I correct you and keep you accountable.",
      "ps4.h3": "Progress", "ps4.p": "We measure, adjust and celebrate real results — week after week.",
      "cta.title": "Stop waiting.<br><span class=\"ital\">Start now.</span>",
      "cta.lead": "Send me a message — we'll calmly find out if we're a fit. No obligation, just straight talk.",
      "cta.whatsapp": "Message on WhatsApp", "cta.email": "Send an email",
      "cta.hint": "WhatsApp number & email are placeholders — Camilo's real contact details go here.",
      "footer.role": "Personal Trainer", "footer.claim": "Don't think. Do it."
    },
    es: {
      "nav.about": "Sobre mí", "nav.principles": "Principios", "nav.training": "Entrenamiento",
      "nav.contact": "Contacto", "nav.cta": "Consulta", "idx.process": "Proceso",
      "hero.eyebrow": "Entrenador Personal — Frankfurt & Online",
      "hero.title": "No pienses.<br><span class=\"ital\">Hazlo.</span>",
      "hero.lead": "Mente en pausa. Dudas en silencio. Acciones que hablan. Paso a paso construyo contigo el cuerpo y la disciplina que llevas años proponiéndote.",
      "hero.cta": "Consulta gratuita", "hero.instagram": "Ver Instagram",
      "statement.label": "Filosofía",
      "statement.text": "La disciplina vence a la <span class=\"ital\">motivación.</span> Creamos hábitos que aguantan incluso en los días malos — sin ruido, sin excusas.",
      "about.h2": "Desde Colombia.<br>Para tu mejor versión.",
      "about.p1": "Soy Camilo — entre Colombia y Alemania. Para mí entrenar no es una etapa, es una actitud: cada día una decisión tranquila y clara por ti mismo, aunque no tengas ganas.",
      "about.p2": "Como entrenador personal trabajo con personas cansadas de las medias tintas. Nada de planes genéricos, sino un sistema que encaja con tu día a día, tu cuerpo y tu mente.",
      "tag.strength": "Fuerza y estética", "tag.fatloss": "Pérdida de grasa", "tag.nutrition": "Nutrición", "tag.mindset": "Mentalidad",
      "about.langs": "Coaching en alemán · español · inglés",
      "stat.years": "Años de experiencia", "stat.clients": "Clientes acompañados", "stat.languages": "Idiomas",
      "principles.title": "En lo que creo",
      "p1.h3": "La disciplina vence a la motivación", "p1.p": "La motivación va y viene. La disciplina se queda. Creamos hábitos que aguantan incluso en los días malos.",
      "p2.h3": "Sin excusas", "p2.p": "«No hay tiempo», «no estoy», «la próxima semana». Eliminamos las excusas y las cambiamos por un plan claro.",
      "p3.h3": "Respétate", "p3.p": "Tu cuerpo es la casa en la que vives. Entrenar es respeto propio — no un lujo, sino la base.",
      "p4.h3": "Elígete a ti", "p4.p": "Cada día tomas una decisión. Yo me aseguro de que la tomes con calma y constancia por ti mismo.",
      "offers.title": "Elige tu camino",
      "o1.tag": "Individual", "o1.h3": "Entrenamiento personal", "o1.desc": "Tú y yo, en el gym. Cada repetición controlada, cada semana progresiva.",
      "o1.li1": "Plan de entrenamiento individual", "o1.li2": "Corrección de técnica en vivo", "o1.li3": "Ajuste semanal", "o1.unit": "/ sesión",
      "o2.tag": "Recomendado", "o2.h3": "Coaching online", "o2.desc": "Coaching completo, estés donde estés. Plan, seguimiento y soporte directo al móvil.",
      "o2.li1": "Plan en la app", "o2.li2": "Feedback en vídeo", "o2.li3": "Soporte por chat, 7 días", "o2.li4": "Llamada de estrategia mensual", "o2.unit": "/ mes",
      "o3.tag": "Nutrición", "o3.h3": "Plan de nutrición", "o3.desc": "Sin dogmas de privación. Un sistema de nutrición que encaja con tu vida.",
      "o3.li1": "Calorías y macros", "o3.li2": "Recetas para el día a día", "o3.li3": "Ajuste tras 4 semanas", "o3.unit": "/ plan",
      "offer.from": "desde", "offer.cta": "Consultar",
      "offers.note": "Precios de ejemplo — los paquetes y condiciones los definimos juntos en la consulta.",
      "ps1.h3": "Consulta", "ps1.p": "Aclaramos tu objetivo, tu rutina y tu punto de partida. Gratis y sin compromiso.",
      "ps2.h3": "Tu plan", "ps2.p": "Entrenamiento y nutrición hechos a tu medida. Nada de copiar y pegar.",
      "ps3.h3": "Ejecución", "ps3.p": "Trabajamos con calma y constancia. Te corrijo y te mantengo responsable.",
      "ps4.h3": "Progreso", "ps4.p": "Medimos, ajustamos y celebramos resultados reales — semana tras semana.",
      "cta.title": "Deja de esperar.<br><span class=\"ital\">Empieza ya.</span>",
      "cta.lead": "Escríbeme un mensaje — vemos con calma si encajamos. Sin compromiso, solo claridad.",
      "cta.whatsapp": "Escribir por WhatsApp", "cta.email": "Enviar un email",
      "cta.hint": "El número de WhatsApp y el email son de ejemplo — aquí irán los datos reales de Camilo.",
      "footer.role": "Entrenador personal", "footer.claim": "No pienses. Hazlo."
    }
  };

  const STORE = "camilo-lang";
  function applyLang(lang) {
    if (!I18N[lang]) lang = "de";
    const t = I18N[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const v = t[el.dataset.i18n]; if (v != null) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const v = t[el.dataset.i18nHtml]; if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll(".lang-btn").forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang))
    );
    try { localStorage.setItem(STORE, lang); } catch (e) {}
  }
  let start = "de";
  try { start = localStorage.getItem(STORE) || "de"; } catch (e) {}
  applyLang(start);
  document.querySelectorAll(".lang-btn").forEach((b) =>
    b.addEventListener("click", () => applyLang(b.dataset.lang))
  );

  /* ---------- mobile menu ---------- */
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("mobileMenu");
  function setMenu(open) {
    document.body.classList.toggle("menu-open", open);
    if (toggle) toggle.setAttribute("aria-expanded", String(open));
    if (menu) menu.setAttribute("aria-hidden", String(!open));
  }
  if (toggle && menu) {
    toggle.addEventListener("click", () =>
      setMenu(!document.body.classList.contains("menu-open"))
    );
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
    window.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
    window.addEventListener("resize", () => { if (window.innerWidth > 900) setMenu(false); });
  }

  /* ---------- year ---------- */
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  /* ---------- subtle nav state on scroll ---------- */
  const nav = document.getElementById("nav");
  const onScroll = () => { if (nav) nav.classList.toggle("scrolled", window.scrollY > 24); };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- gentle reveal on view ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  /* ---------- animated counters ---------- */
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.count, 10) || 0;
      if (reduce) { el.textContent = target; countIO.unobserve(el); return; }
      const dur = 1600, t0 = performance.now();
      const tick = (now) => {
        const p = Math.min((now - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      countIO.unobserve(el);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll("[data-count]").forEach((el) => countIO.observe(el));
})();
