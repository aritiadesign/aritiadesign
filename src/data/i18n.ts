// FR / EN dictionary for the language toggle in the header.
// Keys are referenced from templates with `data-i18n="key"` (innerHTML)
// or `data-i18n-attr="placeholder:key,alt:other.key"` (attribute values).
//
// Both FR and EN values are stored so the toggle can swap in either direction
// without losing the original copy.

export type Lang = "fr" | "en";

export const i18n: Record<string, { fr: string; en: string }> = {
  // ─────────────────────────── Navigation ───────────────────────────
  "nav.home":      { fr: "ACCUEIL",   en: "HOME" },
  "nav.about":     { fr: "À PROPOS",  en: "ABOUT" },
  "nav.services":  { fr: "SERVICES",  en: "SERVICES" },
  "nav.portfolio": { fr: "PORTFOLIO", en: "PORTFOLIO" },
  "nav.process":   { fr: "PROCESSUS", en: "PROCESS" },
  "nav.contact":   { fr: "CONTACT",   en: "CONTACT" },

  "header.mobile.menu":  { fr: "Menu", en: "Menu" },
  "header.mobile.open":  { fr: "Ouvrir le menu",  en: "Open menu" },
  "header.mobile.close": { fr: "Fermer le menu",  en: "Close menu" },
  "header.logo.aria":    { fr: "Aritia Design — Accueil", en: "Aritia Design — Home" },

  // ─────────────────────────── Footer ───────────────────────────
  "footer.tagline":   { fr: "Créatrice d'univers évènementiels haut de gamme, sur-mesure<br />basée à Toulouse, disponible partout en France",
                        en: "Creator of bespoke, high-end event worlds<br />based in Toulouse, available throughout France" },
  "footer.follow":    { fr: "Suivez-nous", en: "Follow us" },
  "footer.credits":   { fr: "Images &amp; vidéos crédits&nbsp;: RNT Motion, Stephen Meslin",
                        en: "Images &amp; video credits: RNT Motion, Stephen Meslin" },
  "footer.legal":     { fr: "Mentions légales", en: "Legal notice" },
  "footer.privacy":   { fr: "Politique de confidentialité", en: "Privacy policy" },
  "footer.toTop":     { fr: "Retour en haut", en: "Back to top" },
  "footer.copyright": { fr: "© Aritia Design 2026", en: "© Aritia Design 2026" },
  "footer.instagram.aria": { fr: "Instagram Aritia Design", en: "Aritia Design Instagram" },

  // ─────────────────────────── Home — Hero ───────────────────────────
  "home.hero.title": {
    fr: 'DIRECTRICE ARTISTIQUE<br>DESIGNER FLORAL <span class="hidden md:inline-block mx-2 md:mx-3 align-middle text-white text-[14px] sm:text-[16px] md:text-[20px] relative top-[-3px] sm:top-[-4px] md:top-[-5px]">✦</span> SCÉNOGRAPHE<br>CRÉATRICE <span class="font-italic-serif italic font-normal">de</span> PAPETERIE',
    en: 'CREATIVE DIRECTOR<br>FLORAL DESIGNER <span class="hidden md:inline-block mx-2 md:mx-3 align-middle text-white text-[14px] sm:text-[16px] md:text-[20px] relative top-[-3px] sm:top-[-4px] md:top-[-5px]">✦</span> SET DESIGNER<br>STATIONERY <span class="font-italic-serif italic font-normal">designer</span>'
  },
  "home.hero.subtitle": {
    fr: "Créatrice d'univers pour mariages &amp;<br />évènements d'exception",
    en: "Universe Designer for Bespoke<br />Weddings &amp; Celebrations"
  },

  // ─────────────────────────── Home — Intro ───────────────────────────
  "home.intro.h2": {
    fr: "CRÉATRICE D'UNIVERS ÉVÈNEMENTIELS<br />HAUT DE GAMME",
    en: "CURATOR OF HIGH-END<br />CELEBRATIONS"
  },
  "home.intro.p": {
    fr: "Aritia Design vous accompagne dans la conception de mariages<br class=\"hidden md:inline\" /> et évènements sur-mesure, raffinés et authentiques.<br class=\"hidden md:inline\" /> À Toulouse, comme partout en France.",
    en: "Aritia Design guides you through the design of bespoke,<br class=\"hidden md:inline\" /> refined and authentic weddings and events.<br class=\"hidden md:inline\" /> In Toulouse and throughout France."
  },

  // ─────────────────────────── Home — Portfolio strip ───────────────────────────
  "home.portfolio.label": { fr: "PORTFOLIO", en: "PORTFOLIO" },
  "home.portfolio.cta":   { fr: "Voir Gallery", en: "View Gallery" },

  // ─────────────────────────── Home — Méthode ───────────────────────────
  "home.method.script": {
    fr: "Transformez chaque<br />occasion en<br />moment d'exception",
    en: "Turn every<br class=\"md:hidden\" /> occasion<br class=\"hidden md:inline\" /> into an<br class=\"md:hidden\" /> exceptional moment"
  },
  "home.method.h2": {
    fr: "MÉTHODE<br /><span class=\"font-italic-serif italic\">de</span> TRAVAIL",
    en: "<span class=\"font-italic-serif italic\">The</span> CREATIVE<br />PROCESS"
  },
  "home.method.p": {
    fr: "De la première inspiration au jour J, je vous accompagne avec sensibilité et exigence dans la création d'un univers qui vous ressemble&nbsp;– une approche sur-mesure, pensée pour faire naître l'harmonie, la beauté et l'émotion.",
    en: "From the first spark of inspiration to the day itself, I guide you with sensibility and rigour in creating a world that reflects you — a bespoke approach, designed to give rise to harmony, beauty and emotion."
  },
  "home.method.cta": { fr: "Découvrir", en: "Discover" },

  // ─────────────────────────── Home — Mariage / Occasion ───────────────────────────
  "home.mariage.h2": {
    fr: "MARIAGE<br /><span class=\"font-italic-serif italic\">Occasion Spéciale</span>",
    en: "WEDDINGS<br /><span class=\"font-italic-serif italic\">Special Occasions</span>"
  },
  "home.mariage.p": {
    fr: "À travers une approche transversale mêlant design floral, scénographie immersive, papeterie personnalisée et identité visuelle, je conçois à vos côtés un univers esthétique global, où chaque choix incarne avec exigence l'essence de votre histoire&nbsp;– une alchimie subtile entre vos envies et ma vision du beau.",
    en: "Through a cross-disciplinary approach blending floral design, immersive set design, bespoke stationery and visual identity, I craft an overarching aesthetic world by your side, where every choice rigorously embodies the essence of your story — a subtle alchemy between your wishes and my vision of beauty."
  },
  "home.mariage.cta": { fr: "Explorer", en: "Explore" },

  // ─────────────────────────── Home — Testimonials ───────────────────────────
  "home.testimonial.next": { fr: "Témoignage suivant", en: "Next testimonial" },
  "home.testimonial.1.quote": {
    fr: "Merci encore pour ce mariage qui était tout simplement magique&nbsp;! Tu as fait un travail remarquable en moins de 6 mois&nbsp;! Je recommande à 100&nbsp;%&nbsp;!",
    en: "Thank you again for this wedding which was simply magical! You did remarkable work in less than 6 months! I recommend 100%!"
  },
  "home.testimonial.1.author": { fr: "Mélodie & Thibault", en: "Mélodie & Thibault" },
  "home.testimonial.2.quote": {
    fr: "Merci beaucoup pour l'organisation de notre mariage&nbsp;! Ton souci du détail, ton dévouement ont rendu notre journée parfaite voir plus que parfaite. Nous te sommes reconnaissants pour les magnifiques souvenirs que tu as contribuée à créer et te souhaitons beaucoup de succès dans l'organisation de tes prochains évènements.<br /><br /><em class=\"font-italic-serif italic text-[1.2rem] md:text-[1.9rem] leading-[1.45] md:leading-[1.4]\">Nous recommandons Aritia sans aucune hésitation.</em>",
    en: "Thank you so much for organising our wedding! Your eye for detail and your dedication made our day perfect, even more than perfect. We are grateful for the beautiful memories you helped create and wish you every success with the events ahead.<br /><br /><em class=\"font-italic-serif italic text-[1.2rem] md:text-[1.9rem] leading-[1.45] md:leading-[1.4]\">We recommend Aritia without hesitation.</em>"
  },
  "home.testimonial.2.author": { fr: "ELITAH & FYDERANA", en: "ELITAH & FYDERANA" },
  "home.testimonial.1.imgalt": { fr: "Mariée vue d'en haut dans l'escalier", en: "Bride seen from above on the staircase" },
  "home.testimonial.2.imgalt": { fr: "Mariée avec bouquet", en: "Bride holding her bouquet" },

  // ─────────────────────────── Home — À propos teaser ───────────────────────────
  "home.about.script": {
    fr: "Allier le beau<br /><span class=\"ml-10 md:ml-16\">à l'essentiel</span>",
    en: "Pairing beauty<br /><span class=\"ml-10 md:ml-16\">with what matters</span>"
  },
  "home.about.h2": { fr: "À&nbsp;PROPOS", en: "ABOUT" },
  "home.about.p1": {
    fr: "Implantée en Haute-Garonne, Aritia Design accompagne une clientèle en quête d'expériences uniques, où l'esthétique et l'émotion occupent une place centrale.",
    en: "Based in Haute-Garonne, Aritia Design works with clients in search of unique experiences, where aesthetics and emotion take centre stage."
  },
  "home.about.p2": {
    fr: "Formée au design et passionnée par l'art de sublimer l'instant, je développe un savoir-faire complet alliant minutie, création et mise en scène.",
    en: "Trained in design and passionate about the art of elevating the moment, I cultivate a complete craft uniting precision, creation and staging."
  },
  "home.about.cta": { fr: "En savoir plus", en: "Learn more" },
  "home.aritia.portrait.alt": { fr: "Aritia, fondatrice d'Aritia Design", en: "Aritia, founder of Aritia Design" },

  // ─────────────────────────── Home — CTA bas ───────────────────────────
  "home.cta.h2": {
    fr: "ENSEMBLE, CRÉONS<br />UNE ATMOSPHÈRE<br />QUI VOUS RESSEMBLE",
    en: "TOGETHER, LET'S CREATE<br />AN ATMOSPHERE<br />THAT REFLECTS YOU"
  },
  "home.cta.btn": { fr: "Laissez un message", en: "Leave a message" },

  // ─────────────────────────── À propos page ───────────────────────────
  "about.hero.title": { fr: "À Propos", en: "About" },
  "about.hero.subtitle": {
    fr: "Atmosphères raffinées, où design graphique,<br />scénographie &amp; art floral se&nbsp;rencontrent",
    en: "Refined atmospheres, where graphic design,<br />set design &amp; floral art meet"
  },
  "about.founder.h2": { fr: "FONDATRICE<br />DESIGNER", en: "FOUNDER<br />DESIGNER" },
  "about.founder.kicker": {
    fr: "Une designer passionnée par les volumes,<br class=\"hidden sm:inline\" /> la matière et l'amour des autres",
    en: "A designer passionate about volume,<br class=\"hidden sm:inline\" /> material and the love we share"
  },
  "about.founder.p1": {
    fr: "Depuis l'enfance, l'harmonie des formes, des textures et des couleurs me fascine. Adolescente déjà, j'imaginais des univers pour les célébrations de mes proches — chaque évènement avait, pour moi, son atmosphère et ses émotions propres.",
    en: "Ever since childhood, the harmony of shapes, textures and colours has fascinated me. Even as a teenager, I was imagining worlds for the celebrations of those close to me — each event had, in my eyes, its own atmosphere and its own emotions."
  },
  "about.founder.p2": {
    fr: "Sur le terrain dès mes 16 ans, j'ai contribué à la conception d'une dizaine de mariages en explorant toutes les facettes de l'évènementiel&nbsp;: design floral, structures, décor, papeterie et direction artistique. Chaque projet a été un espace d'apprentissage et un défi pour me dépasser.",
    en: "On the ground from the age of 16, I contributed to the design of around a dozen weddings, exploring every facet of the field: floral design, structures, decor, stationery and creative direction. Every project has been a space for learning and a challenge to surpass myself."
  },
  "about.founder.p3": {
    fr: "Mon parcours en design produit est venu structurer cette pratique en m'apportant une approche exigeante et sensible&nbsp;: l'œil pour les textures, la maîtrise des volumes, la juste gestion de la lumière et des couleurs, un sens aigu du détail, ainsi que le savoir-faire technique nécessaire à la conception d'objets et de structures sur-mesure.",
    en: "My background in product design has shaped this practice, bringing a demanding yet sensitive approach: an eye for texture, command of volume, the right handling of light and colour, a sharp sense of detail, along with the technical know-how needed to design bespoke objects and structures."
  },
  "about.founder.p4": {
    fr: "Ma démarche repose sur l'alliance entre sensibilité et rigueur, avec la volonté profonde de transmettre une émotion à travers chaque projet et d'offrir aux autres ces moments suspendus, gravés dans les mémoires.",
    en: "My approach rests on the alliance of sensibility and rigour, with the deep desire to convey emotion through every project and to offer others those suspended moments, etched in memory."
  },
  "about.founder.p5": {
    fr: "C'est de cette ambition qu'est née Aritia Design&nbsp;: une agence pensée pour celles et ceux qui attendent d'un évènement plus qu'une simple décoration. Une vision, une intention, une signature.",
    en: "It is from this ambition that Aritia Design was born: a studio designed for those who expect more from an event than mere decoration. A vision, an intention, a signature."
  },
  "about.ambition.h2": {
    fr: "MON AMBITION EST DE<br />CONCRÉTISER VOTRE<br />VISION",
    en: "MY AMBITION IS TO<br />BRING YOUR VISION<br />TO LIFE"
  },
  "about.ambition.sub": { fr: "Avec soin, intention et passion", en: "With care, intention and passion" },
  "about.ambition.cta": { fr: "Commencer l'aventure", en: "Start the adventure" },
  "about.keywords.creative": { fr: "CRÉATIF", en: "CREATIVE" },
  "about.keywords.refined":  { fr: "Raffiné", en: "Refined" },
  "about.keywords.modern":   { fr: "MODERNE", en: "MODERN" },

  // ─────────────────────────── Services page ───────────────────────────
  "services.hero.title": { fr: "Services<br />&amp; Packages", en: "Services<br />&amp; Packages" },
  "services.hero.subtitle": {
    fr: "De l'inspiration à la réalisation, chaque étape est pensée&nbsp;<br />pour refléter votre&nbsp;univers",
    en: "From inspiration to realisation, every step is designed&nbsp;<br />to reflect your&nbsp;world"
  },
  "services.intro.h2": {
    fr: "UNE DIRECTION ARTISTIQUE<br />POUR DONNER VIE À VOS ÉMOTIONS",
    en: "AN ARTISTIC DIRECTION<br />TO BRING YOUR EMOTIONS TO LIFE"
  },
  "services.approach.h3": {
    fr: "NOTRE<br /><span class=\"font-italic-serif italic\">Approche</span>",
    en: "OUR<br /><span class=\"font-italic-serif italic\">Approach</span>"
  },
  "services.approach.p": {
    fr: "Aritia Design pense l'évènement comme une pièce de design unique. Identité graphique, art de la table, design floral et scénographie d'espace s'orchestrent pour donner vie à une émotion. Une direction artistique globale dédiée à celles et ceux qui attendent une signature visuelle affirmée.",
    en: "Aritia Design approaches every event as a unique piece of design. Graphic identity, tablescaping, floral design and spatial scenography work in concert to bring an emotion to life. A holistic art direction for those who expect an unmistakable visual signature."
  },

  // Service tab labels (rendered with ✦ around them in the template)
  "services.tab.0": { fr: "✦ DIRECTION ARTISTIQUE ✦", en: "✦ ART DIRECTION ✦" },
  "services.tab.1": { fr: "✦ DECOR SCÉNOGRAPHIE ✦",          en: "✦ DECOR SET DESIGN ✦" },
  "services.tab.2": { fr: "✦ FLORAL DESIGN ✦",                en: "✦ FLORAL DESIGN ✦" },
  "services.tab.3": { fr: "✦ IDENTITÉ GRAPHIQUE ✦",           en: "✦ GRAPHIC IDENTITY ✦" },

  // Service detail panels
  "services.0.title":  { fr: 'DIRECTION <span class="font-italic-serif italic font-light">Artistique</span>', en: 'ART <span class="font-italic-serif italic font-light">Direction</span>' },
  "services.0.title.mobile":  { fr: 'DIRECTION <span class="font-italic-serif italic font-light">Artistique</span>', en: 'ART <span class="font-italic-serif italic font-light">Direction</span>' },
  "services.0.body": {
    fr: "<p>En direction artistique globale, nous signons votre univers de manière absolue : identité graphique, art de la table, design floral, structures sur‑mesure et mise en scène. Une seule vision sur l'ensemble pour que chaque détail réponde à la même intention — aucun intermédiaire, aucune rupture de ton, simplement l'expression exacte de votre esthétique. Découvrez cette approche à travers notre collection signature : <a href=\"#pack-0\" class=\"underline underline-offset-4 decoration-from-font hover:opacity-70 transition\">L'EXCEPTION</a>.</p>",
    en: "<p>In holistic art direction, we sign your world absolutely: graphic identity, tablescaping, floral design, bespoke structures and spatial scenography. A single vision over the whole, so every detail answers the same intention — no intermediary, no break in tone, simply the exact expression of your aesthetic. Discover this approach through our signature collection: <a href=\"#pack-0\" class=\"underline underline-offset-4 decoration-from-font hover:opacity-70 transition\">L'EXCEPTION</a>.</p>"
  },
  "services.1.title": { fr: 'DECOR <span class="font-italic-serif italic font-light">Scénographie</span>', en: 'DECOR <span class="font-italic-serif italic font-light">Set Design</span>' },
  "services.1.body": {
    fr: "<p>La maîtrise globale de votre décor. Nous concevons et coordonnons l'ensemble des éléments visuels de votre événement : mobilier, éclairage, matières et accessoires. Notre rôle est de garantir l'harmonie absolue de l'espace, où chaque détail visible répond à la même intention, afin que la scénographie finale soit la traduction exacte du projet initial.</p>",
    en: "<p>Full mastery of your decor. We design and coordinate every visual element of your event: furniture, lighting, materials and accessories. Our role is to guarantee absolute harmony of the space, where every visible detail answers the same intention, so the final scenography is the exact translation of the initial project.</p>"
  },
  "services.2.title": { fr: 'FLORAL <span class="font-italic-serif italic font-light">Design</span>', en: 'FLORAL <span class="font-italic-serif italic font-light">Design</span>' },
  "services.2.body": {
    fr: "<p>Du détail intime aux installations d'ampleur, nous concevons chaque pièce végétale en résonance avec votre univers visuel. Sélection rigoureuse des variétés, maîtrise des textures, des palettes et des volumes : les fleurs s'inscrivent comme une composante essentielle de la scénographie, loin du simple accessoire.</p>",
    en: "<p>From intimate details to large-scale installations, we design each botanical piece in resonance with your visual world. A rigorous selection of varieties and a mastery of textures, palettes and volumes: flowers become an essential element of the scenography, far from a mere accessory.</p>"
  },
  "services.3.title": { fr: 'IDENTITÉ <span class="font-italic-serif italic font-light">Graphique</span>', en: 'GRAPHIC <span class="font-italic-serif italic font-light">Identity</span>' },
  "services.3.body": {
    fr: "<p>L'identité graphique est le premier point de contact de votre événement. Du monogramme à la signalétique du jour J, nous dessinons un univers visuel unique : choix des typographies, illustrations exclusives, textures des papiers et finitions artisanales. Chaque pièce est pensée comme un objet d'art imprimé, pour prolonger l'esthétique de votre célébration.</p>",
    en: "<p>Graphic identity is the first point of contact with your event. From monogram to day-of signage, we design a singular visual world: chosen typography, exclusive illustrations, paper textures and artisan finishes. Every piece is conceived as a printed art object, extending the aesthetic of your celebration.</p>"
  },
  "services.cta.tab": { fr: "Prendre rendez-vous", en: "Book a consultation" },
  "services.cta.mobile": { fr: "Prendre rendez-vous", en: "Book a consultation" },
  "services.included": { fr: "✦ Compris dans l'expérience", en: "✦ Included in the experience" },
  "services.packCard.included": { fr: "Compris dans l'expérience", en: "Included in the experience" },

  // Pack cards
  "services.packs.header": { fr: "✦ Packs &amp; Formules ✦", en: "✦ Packages &amp; Offerings ✦" },
  "services.packs.h2": {
    fr: "L'<span>ÉLÉGANCE</span> <span class=\"font-italic-serif italic font-light\">sur-mesure</span><br /><span class=\"font-italic-serif italic font-light\">à votre</span> <span>IMAGE</span>",
    en: "<span>ELEGANCE</span> <span class=\"font-italic-serif italic font-light\">tailored</span><br /><span class=\"font-italic-serif italic font-light\">in your</span> <span>IMAGE</span>"
  },
  "services.packs.intro": {
    fr: "Chaque projet est unique, c'est pourquoi mes prestations s'articulent autour de packages sur-mesure et de formules personnalisables.",
    en: "Every project is unique, which is why my offerings are built around bespoke packages and customisable formats."
  },

  // Pack 0 (L'EXCEPTION)
  "services.pack.0.title":  { fr: "L'EXCEPTION", en: "THE EXCEPTION" },
  "services.pack.0.italic": { fr: "Design Intégral", en: "Full Design" },
  "services.pack.0.label":  { fr: "COLLECTION SIGNATURE | SUR DEVIS", en: "SIGNATURE COLLECTION | ON REQUEST" },
  "services.pack.0.desc": {
    fr: "L'expérience la plus aboutie : vous nous confiez l'univers entier de votre célébration. Votre rôle se limite à l'approbation des concepts ; nous maîtrisons toute la chaîne de création pour vous livrer, le jour J, un décor unique et impeccable. L'assurance d'une exécution fidèle à l'intention.",
    en: "Our most accomplished experience: you entrust us with the entire world of your celebration. Your role is limited to approving the concepts; we master the full creative chain to deliver, on the day, a singular, impeccable decor. The assurance of execution faithful to the intention."
  },
  "services.pack.0.b0": { fr: "Création de votre univers et identité graphique", en: "Creation of your world and graphic identity" },
  "services.pack.0.b1": { fr: "Confection et agencement de votre décor", en: "Making and arrangement of your decor" },
  "services.pack.0.b2": { fr: "Conceptions florales signature", en: "Signature floral designs" },
  "services.pack.0.b3": { fr: "Mise en place et accompagnement complet", en: "Installation and full support" },

  // Pack 1 (Décor & Identité Visuelle)
  "services.pack.1.title":  { fr: "Décor & Identité Visuelle", en: "Decor & Visual Identity" },
  "services.pack.1.italic": { fr: "", en: "" },
  "services.pack.1.label":  { fr: "SCÉNOGRAPHIE & IDENTITÉ GRAPHIQUE<br />| SUR DEVIS", en: "SET DESIGN & GRAPHIC IDENTITY<br />| ON REQUEST" },
  "services.pack.1.desc": {
    fr: "Décor et identité graphique pensés comme un ensemble : la même charte visuelle traverse l'espace et le papier, du faire‑part à la mise en scène finale. Une cohérence totale entre ce que vos invités voient, touchent et lisent le jour J. Hors production florale et structures sur‑mesure, nous orchestrons tout votre univers visuel.",
    en: "Decor and graphic identity conceived as one whole: the same visual charter runs through the space and the paper, from save-the-date to the final staging. Full coherence between what your guests see, touch and read on the day. Excluding floral production and bespoke structures, we orchestrate your entire visual world."
  },
  "services.pack.1.b0": { fr: "Définition de votre style et harmonie colorée", en: "Definition of your style and colour palette" },
  "services.pack.1.b1": { fr: "Aménagement et mise en scène des espaces clés", en: "Layout and staging of key spaces" },
  "services.pack.1.b2": { fr: "Graphisme et supports personnalisés", en: "Graphic design and bespoke printed pieces" },
  "services.pack.1.b3": { fr: "Coordination & installation", en: "Coordination & installation" },

  // Pack 2 (Décor & Mise en Ambiance)
  "services.pack.2.title":  { fr: "Décor & Mise en Ambiance", en: "Decor & Atmosphere" },
  "services.pack.2.italic": { fr: "", en: "" },
  "services.pack.2.label":  { fr: "DÉCOR & SCÉNOGRAPHIE | SUR DEVIS", en: "DECOR & SET DESIGN | ON REQUEST" },
  "services.pack.2.desc": {
    fr: "L'art de l'espace : nous concevons l'atmosphère, sélectionnons le mobilier comme les matières, et coordonnons les artisans pour assurer une installation millimétrée. L'alternative idéale pour maîtriser votre décor, hors identité graphique et design floral.",
    en: "The art of space: we design the atmosphere, select furniture as well as materials, and coordinate the artisans for an installation tuned to the millimetre. The ideal alternative for taking charge of your decor, excluding graphic identity and floral design."
  },
  "services.pack.2.b0": { fr: "Étude de style et carnet d'inspiration", en: "Style study and inspiration board" },
  "services.pack.2.b1": { fr: "Agencement et sélection du mobilier", en: "Layout and furniture selection" },
  "services.pack.2.b2": { fr: "Recherche de prestataires spécialisés", en: "Sourcing of specialist suppliers" },
  "services.pack.2.b3": { fr: "Gestion de l'installation et du démontage", en: "Installation and dismantling management" },

  // Pack 3 (L'ART FLORAL)
  "services.pack.3.title":  { fr: "L'ART FLORAL", en: "FLORAL ART" },
  "services.pack.3.italic": { fr: "", en: "" },
  "services.pack.3.label":  { fr: "DESIGN FLORAL | SUR DEVIS", en: "FLORAL DESIGN | ON REQUEST" },
  "services.pack.3.desc": {
    fr: "Bouquets, compositions, structures suspendues ou monumentales : nous prenons en charge toute la création florale de votre événement, de l'étude à la mise en place le jour J. Hors scénographie d'espace et identité graphique, le végétal est notre unique focus.",
    en: "Bouquets, compositions, suspended or monumental structures: we take charge of all the floral creation for your event, from the study to the installation on the day. Excluding spatial scenography and graphic identity, the botanical is our sole focus."
  },
  "services.pack.3.b0": { fr: "Étude de votre univers floral personnalisé", en: "Study of your personalised floral world" },
  "services.pack.3.b1": { fr: "Création de vos bouquets et accessoires", en: "Creation of your bouquets and accessories" },
  "services.pack.3.b2": { fr: "Réalisation de décors monumentaux", en: "Execution of large-scale floral installations" },
  "services.pack.3.b3": { fr: "Installation et mise en fleurs le jour J", en: "On-the-day installation and floral set-up" },

  // Pack 4 (PAPETERIE FINE)
  "services.pack.4.title":  { fr: "IDENTITÉ GRAPHIQUE", en: "GRAPHIC IDENTITY" },
  "services.pack.4.italic": { fr: "", en: "" },
  "services.pack.4.label":  { fr: "PAPETERIE FINE | SUR DEVIS", en: "FINE STATIONERY | ON REQUEST" },
  "services.pack.4.desc": {
    fr: "Logo, monogramme, invitations, pièces de table, signalétique et papeterie d'art : nous prenons en charge toute l'identité graphique de votre événement, depuis la conception jusqu'à la livraison finale. Hors scénographie d'espace et design floral, le papier est notre unique focus.",
    en: "Logo, monogram, invitations, table pieces, signage and fine stationery: we take charge of the full graphic identity of your event, from conception to final delivery. Excluding spatial scenography and floral design, paper is our sole focus."
  },
  "services.pack.4.b0": { fr: "Conception de votre logo et monogramme", en: "Design of your logo and monogram" },
  "services.pack.4.b1": { fr: "Design de vos faire-part et annonces", en: "Design of your invitations and announcements" },
  "services.pack.4.b2": { fr: "Création des supports de table et signalétique", en: "Creation of table pieces and signage" },
  "services.pack.4.b3": { fr: "Conseil en matériaux et finitions d'art", en: "Guidance on artisan materials and finishes" },

  // Moment d'exception
  "services.moment.h2": {
    fr: "UN MOMENT D'EXCEPTION&nbsp;!<br /><span class=\"font-italic-serif italic text-[0.7em]\">décor, mise en ambiance, papeterie, floral</span>",
    en: "AN EXCEPTIONAL MOMENT!<br /><span class=\"font-italic-serif italic text-[0.7em]\">decor, atmosphere, stationery, floral</span>"
  },
  "services.moment.cta": { fr: "S'inspirer", en: "Get inspired" },

  // Final CTA
  "services.final.h2": {
    fr: "VOTRE UNIVERS, VOTRE HISTOIRE,<br /><span class=\"font-italic-serif italic\">une création unique</span>",
    en: "YOUR WORLD, YOUR STORY,<br /><span class=\"font-italic-serif italic\">a unique creation</span>"
  },
  "services.final.sub": { fr: "Ensemble, donnons-lui vie", en: "Together, let's bring it to life" },
  "services.final.cta": { fr: "Me contacter", en: "Get in touch" },

  // FAQ
  "services.faq.h2": { fr: "Questions Fréquentes", en: "Frequently Asked Questions" },
  "services.faq.0.q": {
    fr: "COMMENT SE DÉROULE L'ACCOMPAGNEMENT DU DÉBUT À LA FIN DE NOTRE MARIAGE OU ÉVÈNEMENT ?",
    en: "HOW DOES THE FULL JOURNEY FROM START TO FINISH OF OUR WEDDING OR EVENT UNFOLD?"
  },
  "services.faq.0.a": {
    fr: "Chaque projet commence par une rencontre afin de découvrir votre histoire, vos envies et l'univers que vous souhaitez donner à votre mariage. Je conçois ensuite une direction artistique complète : moodboards, palettes de couleurs, choix des matières, scénographie et identité graphique. À chaque étape, vous êtes guidés avec des propositions visuelles et concrètes. Le jour J, tout est pensé en amont pour que la mise en scène se déploie harmonieusement, vous permettant de profiter pleinement de chaque instant.",
    en: "Every project begins with a meeting to discover your story, your wishes and the world you want to give your wedding. I then craft a complete creative direction: moodboards, colour palettes, material choices, set design and graphic identity. At each step, you're guided with concrete visual proposals. On the day itself, everything is planned in advance so the staging unfolds seamlessly, letting you fully enjoy every moment."
  },
  "services.faq.1.q": {
    fr: "QUELLE EST LA DIFFÉRENCE ENTRE VOS PRESTATIONS ET CELLES D'UN WEDDING PLANNER ?",
    en: "WHAT IS THE DIFFERENCE BETWEEN YOUR SERVICES AND THOSE OF A WEDDING PLANNER?"
  },
  "services.faq.1.a": {
    fr: "Mon rôle se concentre sur la création artistique et esthétique de votre mariage : univers visuel, ambiance, scénographie, créations florales et papeterie. J'imagine et façonne une identité cohérente qui se décline dans chaque détail. Le wedding planner, quant à lui, coordonne l'organisation logistique (planning, budget, gestion des prestataires). Ces deux métiers sont complémentaires : l'un assure la fluidité organisationnelle, l'autre sublime l'expérience visuelle et sensorielle.",
    en: "My role focuses on the artistic and aesthetic creation of your wedding: visual world, atmosphere, set design, floral creations and stationery. I imagine and shape a coherent identity that runs through every detail. The wedding planner, on the other hand, coordinates the logistical side (scheduling, budget, supplier management). The two professions are complementary: one ensures organisational fluency, the other elevates the visual and sensory experience."
  },
  "services.faq.2.q": {
    fr: "QUELS SONT VOS TARIFS ET COMMENT FONCTIONNENT VOS PACKAGES ET FORMULES ?",
    en: "WHAT ARE YOUR RATES AND HOW DO YOUR PACKAGES AND OFFERINGS WORK?"
  },
  "services.faq.2.a": {
    fr: "Chaque évènement fait l'objet d'une étude personnalisée. Pour offrir un cadre clair à votre projet, j'ai structuré mes interventions autour de deux niveaux de conception globale et de deux formules spécialisées&nbsp;:<br /><br />— Design intégral — L'Exception&nbsp;: La prise en charge absolue de votre évènement, de la direction artistique à la création de structures et décors sur-mesure, incluant fleurs et papeterie fine. Cet accompagnement intègre le stylisme des tables pour garantir une esthétique cohérente et une exécution maîtrisée.<br /><br />— Décor &amp; Identité visuelle&nbsp;: La création de l'ambiance esthétique générale et l'harmonisation visuelle de vos espaces.<br /><br />— L'Art floral&nbsp;: La conception artistique et la réalisation de vos décors et structures florales.<br /><br />— Papeterie fine&nbsp;: La création graphique et l'impression de votre papeterie et signalétique sur-mesure.<br /><br />Ces bases sont entièrement modulables et peuvent être enrichies d'options selon vos besoins. Les tarifs dépendent exclusivement de l'ampleur technique et logistique de votre projet. Un devis transparent et détaillé vous est présenté après notre premier échange, sur la base de votre cahier des charges.",
    en: "Every event is the subject of a personalised study. To give your project a clear framework, I've structured my work around two levels of overall design and two specialised offerings:<br /><br />— Full Design — The Exception: complete handling of your event, from creative direction to the design of bespoke structures and decor, including flowers and fine stationery. This service includes table styling to ensure a coherent aesthetic and a mastered execution.<br /><br />— Decor &amp; Visual Identity: the creation of the overall aesthetic atmosphere and the visual harmonisation of your spaces.<br /><br />— Floral Art: the artistic conception and execution of your floral decor and structures.<br /><br />— Fine Stationery: the graphic design and printing of your bespoke stationery and signage.<br /><br />These foundations are fully modular and can be enriched with options to suit your needs. Rates depend solely on the technical and logistical scale of your project. A transparent, detailed quote is provided after our first conversation, based on your brief."
  },
  "services.faq.3.q": {
    fr: "TRAVAILLEZ-VOUS UNIQUEMENT EN HAUTE-GARONNE OU VOUS DÉPLACEZ-VOUS AILLEURS ?",
    en: "DO YOU ONLY WORK IN HAUTE-GARONNE OR DO YOU TRAVEL ELSEWHERE?"
  },
  "services.faq.3.a": {
    fr: "Basée en Haute-Garonne, je travaille principalement autour de Toulouse et ses environs, mais je peux me déplacer dans d'autres régions, voire à l'étranger, selon les projets.",
    en: "Based in Haute-Garonne, I work mainly around Toulouse and the surrounding area, but I can travel to other regions, or even abroad, depending on the project."
  },
  "services.faq.4.q": {
    fr: "À PARTIR DE QUAND FAUT-IL VOUS CONTACTER POUR PRÉPARER UN MARIAGE ?",
    en: "HOW FAR IN ADVANCE SHOULD I CONTACT YOU TO PREPARE A WEDDING?"
  },
  "services.faq.4.a": {
    fr: "Idéalement, entre 8 et 12 mois avant la date du mariage afin d'avoir le temps de définir le concept, de sélectionner les prestataires et d'organiser chaque détail. Néanmoins, selon mes disponibilités, je peux m'adapter à des délais plus courts.",
    en: "Ideally, between 8 and 12 months before the wedding date, so there is time to define the concept, select suppliers and organise every detail. That said, depending on my availability, I can adapt to shorter timelines."
  },

  // ─────────────────────────── Processus page ───────────────────────────
  "process.kicker": { fr: "Processus créatif", en: "Creative process" },
  "process.hero.quote": {
    fr: "«&nbsp;La création, c'est l'équilibre entre<br />maîtrise et lâcher-prise.&nbsp;»",
    en: "“Creation is the balance between<br />mastery and letting go.”"
  },
  "process.intro.h2": {
    fr: "UN ACCOMPAGNEMENT<br /><span>EN 6 ÉTAPES</span>",
    en: "A JOURNEY<br /><span>IN 6 STEPS</span>"
  },
  "process.intro.p": {
    fr: "De la première rencontre au jour J,<br />vivez la création de votre univers<br />en toute sérénité.",
    en: "From the first meeting to the day itself,<br />experience the creation of your world<br />with complete peace of mind."
  },

  "process.step.1.title": { fr: "PREMIER ÉCHANGE", en: "FIRST CONVERSATION" },
  "process.step.1.body": {
    fr: "Tout commence par un échange. J'apprends à vous connaître, à comprendre votre histoire, vos envies, vos inspirations. Nous définissons ensemble les contours de votre univers, les priorités, les émotions à transmettre. À l'issue de cet échange, un devis personnalisé vous est remis pour validation.",
    en: "It all begins with a conversation. I get to know you, your story, your wishes, your inspirations. Together we define the contours of your world, the priorities, the emotions to convey. At the end of this exchange, a personalised quote is sent for your approval."
  },
  "process.step.2.title": { fr: "SIGNATURE DU DEVIS <span class=\"amp\">&amp;</span> CONTRAT", en: "QUOTE <span class=\"amp\">&amp;</span> CONTRACT SIGNING" },
  "process.step.2.body": {
    fr: "La collaboration débute officiellement avec la signature du contrat, qui formalise les engagements mutuels et le cadre de notre travail.",
    en: "Our collaboration officially begins with the signing of the contract, which formalises mutual commitments and the framework of our work together."
  },
  "process.step.3.title": { fr: "INTENTIONS <span class=\"amp\">&amp;</span> DIRECTION ARTISTIQUE", en: "INTENTIONS <span class=\"amp\">&amp;</span> CREATIVE DIRECTION" },
  "process.step.3.body": {
    fr: "Création d'un moodboard et d'une ligne esthétique : ambiance, matières, couleurs, fleurs, typographies, style graphique… Un fil rouge visuel et émotionnel se dessine.",
    en: "Creation of a moodboard and an aesthetic line: atmosphere, materials, colours, flowers, typography, graphic style… A visual and emotional thread takes shape."
  },
  "process.step.4.title": { fr: "CONCEPTION", en: "DESIGN" },
  "process.step.4.body": {
    fr: "Je traduis cette vision en un projet complet, harmonisant les éléments visuels et scénographiques : compositions florales, papeterie, signalétique, agencement des espaces. Chaque élément trouve sa place avec justesse et cohérence.",
    en: "I translate this vision into a complete project, harmonising visual and scenographic elements: floral compositions, stationery, signage, spatial layout. Every element finds its place with precision and coherence."
  },
  "process.step.5.title": { fr: "ORCHESTRATION <span class=\"amp\">&amp;</span> FINALISATION", en: "ORCHESTRATION <span class=\"amp\">&amp;</span> FINALISATION" },
  "process.step.5.body": {
    fr: "Je pilote la réalisation de chaque élément : sourcing, production, ajustements, échanges avec vous ou votre wedding planner. Vous êtes accompagnés en toute sérénité.",
    en: "I lead the production of every element: sourcing, production, adjustments, exchanges with you or your wedding planner. You are supported with complete serenity."
  },
  "process.step.6.title": { fr: "INSTALLATION <span class=\"amp\">&amp;</span> MISE EN SCÈNE", en: "INSTALLATION <span class=\"amp\">&amp;</span> STAGING" },
  "process.step.6.body": {
    fr: "Le jour J, l'univers prend vie. Je mets en place chaque élément du décor, compose les fleurs in situ, ajuste les volumes et sublime les espaces pour offrir une expérience à la hauteur de votre histoire. Un décor vivant, élégant, fluide — à votre image.",
    en: "On the day itself, the world comes alive. I install every decor element, compose the flowers on site, adjust the volumes and elevate the spaces to deliver an experience worthy of your story. A decor that is alive, elegant, seamless — in your image."
  },
  "process.flipbook.prev": { fr: "Page précédente", en: "Previous page" },
  "process.flipbook.next": { fr: "Page suivante", en: "Next page" },

  "process.closing": {
    fr: "Mon processus créatif allie écoute,<br class=\"hidden md:inline\" /> intuition et exigence esthétique, pour<br class=\"hidden md:inline\" /> concevoir une expérience sur mesure et<br class=\"hidden md:inline\" /> propre à votre histoire.",
    en: "My creative process combines listening,<br class=\"hidden md:inline\" /> intuition and aesthetic rigour, to<br class=\"hidden md:inline\" /> design a bespoke experience<br class=\"hidden md:inline\" /> true to your story."
  },
  "process.closing.cta": { fr: "Contactez-moi", en: "Contact me" },

  // ─────────────────────────── Portfolio page ───────────────────────────
  "portfolio.hero.title": { fr: "Portfolio", en: "Portfolio" },
  "portfolio.hero.subtitle": {
    fr: "Des univers sur-mesure, raffiné<br class='show-mobile' />&amp; porteurs d'émotions",
    en: "Bespoke worlds, refined<br class='show-mobile' />&amp; charged with emotion"
  },
  "portfolio.label": { fr: "✦ Temps forts ✦", en: "✦ Highlights ✦" },
  "portfolio.savoir.h2": {
    fr: "SAVOIR-FAIRE<br /><span class=\"font-italic-serif italic font-light\">Élégance</span><br />HARMONIE<br /><span class=\"font-italic-serif italic font-light\">Atmosphère</span><br />SUR-MESURE",
    en: "CRAFTSMANSHIP<br /><span class=\"font-italic-serif italic font-light\">Elegance</span><br />HARMONY<br /><span class=\"font-italic-serif italic font-light\">Atmosphere</span><br />BESPOKE"
  },
  "portfolio.savoir.p": {
    fr: "Découvrez une sélection de mariages et d'évènements soigneusement mis en lumière. Cliquez sur chaque titre pour explorer la galerie complète.",
    en: "Discover a selection of weddings and events carefully highlighted. Click each title to explore the full gallery."
  },
  "portfolio.project.ef.title": { fr: "E+F, MARIAGE MINIMALISTE", en: "E+F, MINIMALIST WEDDING" },
  "portfolio.project.ef.italic": { fr: "aux teintes de Madagascar", en: "in Madagascar tones" },
  "portfolio.project.mt.title": { fr: "M+T, MARIAGE ÉLÉGANT", en: "M+T, ELEGANT WEDDING" },
  "portfolio.project.mt.italic": { fr: "à la Française", en: "in the French style" },
  "portfolio.project.hj.title": { fr: "H+J, ROMANTISME MODERNE", en: "H+J, MODERN ROMANTICISM" },
  "portfolio.project.hj.italic": { fr: "avec un accent culturel", en: "with a cultural accent" },
  "portfolio.cta.h2": {
    fr: "NON, <span class=\"font-italic-serif italic font-light\">VOS RÊVES</span><br />NE SONT PAS TROP GRAND",
    en: "NO, <span class=\"font-italic-serif italic font-light\">YOUR DREAMS</span><br />ARE NOT TOO BIG"
  },
  "portfolio.cta.btn": { fr: "Créer mon univers", en: "Create my world" },

  // ─────────────────────────── Contact page ───────────────────────────
  "contact.hero.title": { fr: "Contact", en: "Contact" },
  "contact.hero.subtitle": {
    fr: "Vous rêver d'un mariage ou d'un évènement&nbsp;<br />qui vous ressemble&nbsp;?",
    en: "Dreaming of a wedding or event&nbsp;<br />that truly reflects you?"
  },
  "contact.notes.label": { fr: "Notes", en: "Notes" },
  "contact.notes.p1": {
    fr: "Merci de remplir ce formulaire avec soin. Je reviendrai vers vous dans les 48 heures ouvrées afin de planifier un premier rendez-vous téléphonique, en visio ou en présentiel.",
    en: "Please fill in this form with care. I'll get back to you within 48 working hours to schedule a first appointment, by phone, video or in person."
  },
  "contact.notes.p2": { fr: "Vous pouvez aussi m'écrire directement à l'adresse suivante&nbsp;:", en: "You can also write to me directly at:" },
  "contact.h2": { fr: "FAISONS<br />CONNAISSANCE", en: "LET'S<br />MEET" },
  "contact.p": {
    fr: "Votre histoire mérite une attention toute particulière, un regard sensible, et une mise en scène à la hauteur de vos émotions. Je serais honorée de vous accompagner dans la création d'un univers qui vous ressemble.",
    en: "Your story deserves particular attention, a sensitive eye and staging worthy of your emotions. I would be honoured to guide you in creating a world that reflects you."
  },
  "contact.thanks.h": { fr: "Merci&nbsp;!", en: "Thank you!" },
  "contact.thanks.p": {
    fr: "Votre demande a bien été envoyée. Je reviens vers vous sous 48&nbsp;h ouvrées.",
    en: "Your request has been received. I will get back to you within 48 working hours."
  },
  "contact.label.name":    { fr: "Nom &amp; Prénom",        en: "Name &amp; surname" },
  "contact.label.email":   { fr: "Email",                   en: "Email" },
  "contact.label.phone":   { fr: "Téléphone",               en: "Phone" },
  "contact.label.date":    { fr: "Date",                    en: "Date" },
  "contact.label.location":{ fr: "Lieu",                    en: "Location" },
  "contact.label.service": { fr: "Prestation",              en: "Service" },
  "contact.label.type":    { fr: "Type d'évènement",        en: "Event type" },
  "contact.label.budget":  { fr: "Budget",                  en: "Budget" },
  "contact.label.desc":    { fr: "Description",             en: "Description" },
  "contact.ph.name":   { fr: "NOM & PRÉNOM *",                  en: "NAME & SURNAME *" },
  "contact.ph.email":  { fr: "E-MAIL *",                        en: "E-MAIL *" },
  "contact.ph.phone":  { fr: "🇫🇷 TÉLÉPHONE",                     en: "🇫🇷 PHONE" },
  "contact.ph.date":   { fr: "DATE DE L'ÉVÈNEMENT *",           en: "EVENT DATE *" },
  "contact.ph.loc":    { fr: "LIEU DE L'ÉVÈNEMENT *",           en: "EVENT LOCATION *" },
  "contact.ph.budget": { fr: "BUDGET ENVISAGÉ POUR VOTRE PROJET *", en: "ESTIMATED BUDGET FOR YOUR PROJECT *" },
  "contact.ph.desc":   { fr: "DESCRIPTION *",                   en: "DESCRIPTION *" },
  "contact.opt.service.placeholder": { fr: "PRESTATION SOUHAITÉE *", en: "DESIRED SERVICE *" },
  "contact.opt.service.0": { fr: "L'Exception — Design Intégral",  en: "The Exception — Full Design" },
  "contact.opt.service.1": { fr: "Décor & Identité Visuelle",       en: "Decor & Visual Identity" },
  "contact.opt.service.2": { fr: "Décor & Mise en Ambiance",        en: "Decor & Atmosphere" },
  "contact.opt.service.3": { fr: "L'Art Floral",                    en: "Floral Art" },
  "contact.opt.service.4": { fr: "Papeterie Fine",                  en: "Fine Stationery" },
  "contact.opt.service.5": { fr: "Sur-mesure",                      en: "Custom" },
  "contact.opt.type.placeholder": { fr: "TYPE D'ÉVÈNEMENT *",     en: "EVENT TYPE *" },
  "contact.opt.type.0": { fr: "Mariage",               en: "Wedding" },
  "contact.opt.type.1": { fr: "Évènement saisonnier",  en: "Seasonal event" },
  "contact.opt.type.2": { fr: "Anniversaire",          en: "Birthday / Anniversary" },
  "contact.opt.type.3": { fr: "Baby Shower",           en: "Baby shower" },
  "contact.opt.type.4": { fr: "Évènement Corporate",   en: "Corporate event" },
  "contact.opt.type.5": { fr: "Autre",                 en: "Other" },
  "contact.submit": { fr: "Envoyer", en: "Send" },

  // ─────────────────────────── Mentions légales ───────────────────────────
  "legal.h1": {
    fr: "Mentions <span class=\"font-italic-serif italic font-light\">légales</span>",
    en: "Legal <span class=\"font-italic-serif italic font-light\">notice</span>"
  },
  "legal.updated": { fr: "Dernière mise à jour&nbsp;: mai 2026", en: "Last updated: May 2026" },
  "legal.editor.h2": { fr: "Éditeur du site", en: "Site editor" },
  "legal.editor.p":  {
    fr: 'Le présent site internet <a href="https://aritiadesign.com" class="underline underline-offset-4 hover:opacity-70">aritiadesign.com</a> est édité par&nbsp;:',
    en: 'This website <a href="https://aritiadesign.com" class="underline underline-offset-4 hover:opacity-70">aritiadesign.com</a> is published by:'
  },
  "legal.editor.li1": { fr: "<strong>Aritia Design</strong> — Entrepreneur Individuel", en: "<strong>Aritia Design</strong> — Sole proprietor" },
  "legal.editor.li2": { fr: "Siège social&nbsp;: 4 bis Chemin de Monpapou, 31650 LAUZERVILLE, France", en: "Registered office: 4 bis Chemin de Monpapou, 31650 LAUZERVILLE, France" },
  "legal.editor.li3": { fr: "SIRET&nbsp;: 101 824 696 00013", en: "SIRET: 101 824 696 00013" },
  "legal.editor.li4": { fr: "TVA non applicable, article 293 B du CGI (franchise en base)", en: "VAT not applicable, article 293 B of the French Tax Code (small-business exemption)" },
  "legal.editor.li5": { fr: "Directrice de la publication&nbsp;: Aritia Razafindrabe", en: "Publication director: Aritia Razafindrabe" },
  "legal.editor.li6": {
    fr: 'Téléphone&nbsp;: <a href="tel:+33698364379" class="underline underline-offset-4 hover:opacity-70">+33&nbsp;6&nbsp;98&nbsp;36&nbsp;43&nbsp;79</a>',
    en: 'Phone: <a href="tel:+33698364379" class="underline underline-offset-4 hover:opacity-70">+33&nbsp;6&nbsp;98&nbsp;36&nbsp;43&nbsp;79</a>'
  },
  "legal.editor.li7": {
    fr: 'Email&nbsp;: <a href="mailto:contact@aritiadesign.com" class="underline underline-offset-4 hover:opacity-70">contact@aritiadesign.com</a>',
    en: 'Email: <a href="mailto:contact@aritiadesign.com" class="underline underline-offset-4 hover:opacity-70">contact@aritiadesign.com</a>'
  },
  "legal.host.h2": { fr: "Hébergeur", en: "Hosting" },
  "legal.host.p":  { fr: "Le site est hébergé par&nbsp;:", en: "The site is hosted by:" },
  "legal.host.li1": { fr: "<strong>Vercel Inc.</strong>", en: "<strong>Vercel Inc.</strong>" },
  "legal.host.li2": { fr: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis", en: "440 N Barranca Ave #4133, Covina, CA 91723, United States" },
  "legal.host.li3": {
    fr: 'Site web&nbsp;: <a href="https://vercel.com" target="_blank" rel="noopener" class="underline underline-offset-4 hover:opacity-70">vercel.com</a>',
    en: 'Website: <a href="https://vercel.com" target="_blank" rel="noopener" class="underline underline-offset-4 hover:opacity-70">vercel.com</a>'
  },
  "legal.ip.h2": { fr: "Propriété intellectuelle", en: "Intellectual property" },
  "legal.ip.p1": {
    fr: "L'ensemble des contenus présents sur ce site — incluant la structure globale, les textes, les graphismes, les logos, les designs de papeterie, les croquis, les concepts décoratifs et les photographies — est protégé par les droits de propriété intellectuelle. Ils sont la propriété exclusive d'Aritia Design ou de ses partenaires, notamment les photographes expressément crédités.",
    en: "All content on this site — including the overall structure, texts, graphics, logos, stationery designs, sketches, decorative concepts and photographs — is protected by intellectual property law. It is the exclusive property of Aritia Design or its partners, in particular the photographers expressly credited."
  },
  "legal.ip.p2": {
    fr: "Toute représentation, reproduction, modification, adaptation ou exploitation totale ou partielle de la structure de ce site, de sa charte graphique ou de son contenu est strictement interdite sans un accord écrit et préalable de la directrice de la publication. Toute utilisation non autorisée constitue une contrefaçon passible de sanctions pénales en vertu des articles L.&nbsp;335-2 et suivants du Code de la propriété intellectuelle.",
    en: "Any representation, reproduction, modification, adaptation or exploitation, in whole or in part, of the structure of this site, its graphic identity or its content is strictly prohibited without prior written agreement from the publication director. Any unauthorised use constitutes counterfeiting subject to criminal sanctions under articles L. 335-2 and following of the French Intellectual Property Code."
  },
  "legal.ip.p3": {
    fr: "Les marques d'Aritia Design et de ses partenaires, ainsi que les logos présents sur le site, sont juridiquement protégés.",
    en: "The trademarks of Aritia Design and its partners, along with the logos present on the site, are legally protected."
  },
  "legal.data.h2": { fr: "Données personnelles", en: "Personal data" },
  "legal.data.p": {
    fr: "Les informations collectées via le formulaire de contact font l'objet d'un traitement informatique destiné exclusivement à Aritia Design, dans le cadre du suivi des demandes et de la relation client. Pour plus de détails, consultez notre <a href=\"/politique-confidentialite\" class=\"underline underline-offset-4 hover:opacity-70\">politique de confidentialité</a>.",
    en: "Information collected through the contact form is processed exclusively by Aritia Design, for the purpose of handling enquiries and managing the client relationship. For more detail, see our <a href=\"/politique-confidentialite\" class=\"underline underline-offset-4 hover:opacity-70\">privacy policy</a>."
  },
  "legal.links.h2": { fr: "Liens externes", en: "External links" },
  "legal.links.p": {
    fr: "L'éditeur ne peut être tenu responsable de l'accès de l'utilisateur aux ressources externes accessibles via les liens hypertextes présents sur le site.",
    en: "The publisher cannot be held responsible for the user's access to external resources reached via hyperlinks present on the site."
  },
  "legal.resp.h2": { fr: "Responsabilité", en: "Liability" },
  "legal.resp.p": {
    fr: "Aritia Design ne peut être tenu responsable des erreurs présentes sur le site, des problèmes techniques imprévus, de la mauvaise interprétation des informations publiées ou des conséquences d'un préjudice direct ou indirect lié à son utilisation. L'utilisateur reconnaît avoir pris connaissance de ces conditions et accepte de s'y conformer.",
    en: "Aritia Design cannot be held responsible for errors on the site, unforeseen technical issues, misinterpretation of published information or the consequences of any direct or indirect harm linked to its use. The user acknowledges these conditions and agrees to comply with them."
  },
  "legal.law.h2": { fr: "Droit applicable et juridiction", en: "Governing law and jurisdiction" },
  "legal.law.p": {
    fr: "Le présent site et ses conditions d'utilisation sont régis par le droit français. Tout litige relatif à l'utilisation du site relève de la compétence exclusive des tribunaux de Toulouse.",
    en: "This site and its terms of use are governed by French law. Any dispute relating to the use of the site falls under the exclusive jurisdiction of the courts of Toulouse."
  },

  // ─────────────────────────── Politique de confidentialité ───────────────────────────
  "privacy.h1": {
    fr: "Politique de <span class=\"font-italic-serif italic font-light\">confidentialité</span>",
    en: "Privacy <span class=\"font-italic-serif italic font-light\">policy</span>"
  },
  "privacy.updated": { fr: "Dernière mise à jour&nbsp;: mai 2026", en: "Last updated: May 2026" },
  "privacy.intro": {
    fr: "Aritia Design accorde une importance particulière à la protection de vos données personnelles. La présente politique décrit la manière dont vos informations sont collectées, utilisées et protégées lorsque vous naviguez sur <a href=\"https://aritiadesign.com\" class=\"underline underline-offset-4 hover:opacity-70\">aritiadesign.com</a> ou interagissez avec ses services, conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi française «&nbsp;Informatique et Libertés&nbsp;».",
    en: "Aritia Design pays particular attention to the protection of your personal data. This policy describes how your information is collected, used and protected when you browse <a href=\"https://aritiadesign.com\" class=\"underline underline-offset-4 hover:opacity-70\">aritiadesign.com</a> or interact with its services, in accordance with the General Data Protection Regulation (GDPR) and the French \"Informatique et Libertés\" law."
  },
  "privacy.controller.h2": { fr: "Responsable de traitement", en: "Data controller" },
  "privacy.controller.p1": {
    fr: "Le responsable de traitement est <strong>Aritia Razafindrabe</strong>, en qualité de directrice de la publication d'Aritia Design (Entrepreneur Individuel, SIRET 101 824 696 00013), domiciliée au 4 bis Chemin de Monpapou, 31650 LAUZERVILLE, France.",
    en: "The data controller is <strong>Aritia Razafindrabe</strong>, publication director of Aritia Design (sole proprietor, SIRET 101 824 696 00013), based at 4 bis Chemin de Monpapou, 31650 LAUZERVILLE, France."
  },
  "privacy.controller.p2": {
    fr: "Contact&nbsp;: <a href=\"mailto:contact@aritiadesign.com\" class=\"underline underline-offset-4 hover:opacity-70\">contact@aritiadesign.com</a>",
    en: "Contact: <a href=\"mailto:contact@aritiadesign.com\" class=\"underline underline-offset-4 hover:opacity-70\">contact@aritiadesign.com</a>"
  },
  "privacy.collected.h2": { fr: "Données collectées", en: "Data collected" },
  "privacy.collected.p1": { fr: "Les données collectées via le formulaire de contact du site sont&nbsp;:", en: "The data collected through the site's contact form are:" },
  "privacy.collected.li1": { fr: "Nom et prénom", en: "First and last name" },
  "privacy.collected.li2": { fr: "Adresse email", en: "Email address" },
  "privacy.collected.li3": { fr: "Numéro de téléphone (facultatif)", en: "Phone number (optional)" },
  "privacy.collected.li4": { fr: "Date et lieu de l'évènement", en: "Date and location of the event" },
  "privacy.collected.li5": { fr: "Type d'évènement et prestation souhaitée", en: "Event type and desired service" },
  "privacy.collected.li6": { fr: "Budget envisagé", en: "Estimated budget" },
  "privacy.collected.li7": { fr: "Description libre du projet", en: "Free-form project description" },
  "privacy.collected.p2": {
    fr: "Aucune donnée n'est collectée à votre insu et aucune information n'est cédée à des tiers à des fins commerciales.",
    en: "No data is collected without your knowledge and no information is shared with third parties for commercial purposes."
  },
  "privacy.purpose.h2": { fr: "Finalité et base légale", en: "Purpose and legal basis" },
  "privacy.purpose.p1": {
    fr: "Vos données sont collectées et traitées dans le but unique de répondre à votre demande de contact et d'établir, le cas échéant, une relation commerciale relative à la conception d'un évènement.",
    en: "Your data is collected and processed for the sole purpose of responding to your enquiry and, if applicable, establishing a business relationship around the design of an event."
  },
  "privacy.purpose.p2": {
    fr: "Base légale&nbsp;: <strong>consentement</strong> de la personne concernée (envoi volontaire du formulaire) et <strong>mesures précontractuelles</strong> prises à votre demande (article 6.1.a et 6.1.b du RGPD).",
    en: "Legal basis: <strong>consent</strong> of the person concerned (voluntary submission of the form) and <strong>pre-contractual measures</strong> taken at your request (articles 6.1.a and 6.1.b of the GDPR)."
  },
  "privacy.retention.h2": { fr: "Durée de conservation", en: "Retention period" },
  "privacy.retention.p": {
    fr: "Les données sont conservées pendant une durée maximale de <strong>3 ans</strong> à compter de notre dernier échange si aucune suite commerciale n'est donnée, ou pendant toute la durée de la relation contractuelle puis archivées conformément aux obligations légales (jusqu'à 10 ans pour les pièces comptables).",
    en: "Data is kept for a maximum of <strong>3 years</strong> from our last exchange if no business relationship follows, or for the duration of the contractual relationship then archived in line with legal obligations (up to 10 years for accounting records)."
  },
  "privacy.sub.h2": { fr: "Sous-traitants et destinataires", en: "Processors and recipients" },
  "privacy.sub.p":  {
    fr: "Vos données sont accessibles uniquement à Aritia Design. Pour assurer le fonctionnement du site et du formulaire, nous utilisons les services suivants&nbsp;:",
    en: "Your data is accessible only to Aritia Design. To run the site and the form, we use the following services:"
  },
  "privacy.sub.li1": {
    fr: "<strong>Vercel Inc.</strong> — hébergement du site (États-Unis, transfert encadré par les Clauses Contractuelles Types de la Commission européenne).",
    en: "<strong>Vercel Inc.</strong> — site hosting (United States, transfer covered by the European Commission's Standard Contractual Clauses)."
  },
  "privacy.sub.li2": {
    fr: "<strong>Web3Forms</strong> — traitement des soumissions du formulaire de contact, avec acheminement des données vers notre adresse email.",
    en: "<strong>Web3Forms</strong> — processing of contact form submissions, with data routed to our email address."
  },
  "privacy.cookies.h2": { fr: "Cookies", en: "Cookies" },
  "privacy.cookies.p": {
    fr: "Le site n'utilise <strong>aucun cookie de mesure d'audience ni de traceur publicitaire</strong>. Seuls des cookies strictement techniques nécessaires au fonctionnement du site (ex.&nbsp;: préférences de navigation) peuvent être déposés. Ces cookies ne nécessitent pas votre consentement préalable conformément aux recommandations de la CNIL.",
    en: "The site uses <strong>no analytics or advertising trackers</strong>. Only strictly technical cookies necessary for the site to function (e.g. navigation preferences) may be set. These cookies do not require your prior consent in line with CNIL recommendations."
  },
  "privacy.rights.h2": { fr: "Vos droits", en: "Your rights" },
  "privacy.rights.p1": {
    fr: "Conformément au RGPD, vous disposez à tout moment des droits suivants concernant vos données&nbsp;:",
    en: "In accordance with the GDPR, you have the following rights regarding your data at any time:"
  },
  "privacy.rights.li1": { fr: "Droit d'<strong>accès</strong> à vos données", en: "Right of <strong>access</strong> to your data" },
  "privacy.rights.li2": { fr: "Droit de <strong>rectification</strong> des données inexactes", en: "Right to <strong>rectification</strong> of inaccurate data" },
  "privacy.rights.li3": { fr: "Droit à l'<strong>effacement</strong> («&nbsp;droit à l'oubli&nbsp;»)", en: "Right to <strong>erasure</strong> (the \"right to be forgotten\")" },
  "privacy.rights.li4": { fr: "Droit à la <strong>limitation</strong> du traitement", en: "Right to <strong>restriction</strong> of processing" },
  "privacy.rights.li5": { fr: "Droit d'<strong>opposition</strong> au traitement", en: "Right to <strong>object</strong> to processing" },
  "privacy.rights.li6": { fr: "Droit à la <strong>portabilité</strong> de vos données", en: "Right to data <strong>portability</strong>" },
  "privacy.rights.li7": { fr: "Droit de <strong>retirer votre consentement</strong> à tout moment", en: "Right to <strong>withdraw consent</strong> at any time" },
  "privacy.rights.p2": {
    fr: "Pour exercer l'un de ces droits, écrivez-nous à <a href=\"mailto:contact@aritiadesign.com\" class=\"underline underline-offset-4 hover:opacity-70\">contact@aritiadesign.com</a>. Une réponse vous sera apportée dans un délai d'un mois maximum.",
    en: "To exercise any of these rights, write to us at <a href=\"mailto:contact@aritiadesign.com\" class=\"underline underline-offset-4 hover:opacity-70\">contact@aritiadesign.com</a>. A response will be provided within one month at the latest."
  },
  "privacy.rights.p3": {
    fr: "Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la <strong>CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) — <a href=\"https://www.cnil.fr\" target=\"_blank\" rel=\"noopener\" class=\"underline underline-offset-4 hover:opacity-70\">www.cnil.fr</a>.",
    en: "If, after contacting us, you believe your rights are not being respected, you may lodge a complaint with the <strong>CNIL</strong> (French data protection authority) — <a href=\"https://www.cnil.fr\" target=\"_blank\" rel=\"noopener\" class=\"underline underline-offset-4 hover:opacity-70\">www.cnil.fr</a>."
  },
  "privacy.security.h2": { fr: "Sécurité", en: "Security" },
  "privacy.security.p": {
    fr: "Aritia Design met en œuvre les mesures techniques et organisationnelles appropriées pour garantir la sécurité de vos données personnelles, notamment via une connexion HTTPS chiffrée et un accès restreint aux seules personnes habilitées.",
    en: "Aritia Design implements appropriate technical and organisational measures to ensure the security of your personal data, in particular through an encrypted HTTPS connection and access restricted to authorised personnel only."
  },

  // ─────────────────────────── Project detail (back link) ───────────────────────────
  "project.back": { fr: "← Tous les projets", en: "← All projects" },

  // ─────────────────────────── Language toggle button ───────────────────────────
  "lang.toggle.aria.toEN": { fr: "Switch to English", en: "Passer en français" },
};
