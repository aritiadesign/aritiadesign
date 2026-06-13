// FR / EN dictionary for the language toggle in the header.
// Keys are referenced from templates with `data-i18n="key"` (innerHTML)
// or `data-i18n-attr="placeholder:key, alt:other.key"` (attribute values).
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
  "footer.tagline":   { fr: "<span class=\"hidden md:inline\">Créatrice de décoration de mariages et d'événements haut de gamme</span><span class=\"md:hidden\">Créatrice de décoration de mariage haut de gamme</span><br /><span class=\"hidden md:inline\">basée à Toulouse, œuvrant en Haute-Garonne</span><span class=\"md:hidden\">Toulouse, Haute-Garonne</span>",
                        en: "<span class=\"hidden md:inline\">Creator of high-end wedding &amp; event decoration</span><span class=\"md:hidden\">High-end wedding decoration</span><br /><span class=\"hidden md:inline\">based in Toulouse, crafting across Haute-Garonne</span><span class=\"md:hidden\">Toulouse, Haute-Garonne</span>" },
  "footer.follow":    { fr: "Suivez-nous", en: "Follow us" },
  "footer.credits":   { fr: "Images &amp; vidéos crédits&nbsp;: RNT Motion, Stephen Meslin",
                        en: "Images &amp; video credits: RNT Motion, Stephen Meslin" },
  "footer.legal":     { fr: "Mentions légales", en: "Legal notice" },
  "footer.privacy":   { fr: "Politique de confidentialité", en: "Privacy policy" },
  "footer.toTop":     { fr: "Retour en haut", en: "Back to top" },
  "footer.copyright": { fr: "© Aritia Design 2026", en: "© Aritia Design 2026" },
  "footer.instagram.aria": { fr: "Instagram Aritia Design", en: "Aritia Design Instagram" },
  "footer.pinterest.aria": { fr: "Pinterest Aritia Design",  en: "Aritia Design Pinterest" },

  // ─────────────────────────── Home — Hero ───────────────────────────
  "home.hero.title": {
    fr: 'DIRECTION ARTISTIQUE<br>DESIGN FLORAL<br class="md:hidden"> <span class="hidden md:inline-block mx-2 md:mx-3 align-middle text-white text-[14px] sm:text-[16px] md:text-[20px] relative top-[-3px] sm:top-[-4px] md:top-[-5px]">✦</span> SCÉNOGRAPHIE<br>CRÉATION <span class="font-italic-serif italic font-normal">de</span> PAPETERIE',
    en: 'CREATIVE DIRECTION<br>FLORAL ART <span class="inline-block mx-2 md:mx-3 align-middle text-white text-[14px] sm:text-[16px] md:text-[20px] relative top-[-3px] sm:top-[-4px] md:top-[-5px]">✦</span> SCENOGRAPHY<br><span class="font-italic-serif italic font-normal">fine</span> STATIONERY'
  },
  "home.hero.subtitle": {
    fr: "Créatrice d'univers pour mariages<br />&amp; événements d'exception",
    en: "Crafting Atmospheres for Bespoke<br />Weddings &amp; Celebrations"
  },

  // ─────────────────────────── Home — Intro ───────────────────────────
  "home.intro.h2": {
    fr: "CRÉATRICE D’UNIVERS ÉVÉNEMENTIELS<br />HAUT DE GAMME",
    en: "CURATOR OF HIGH-END<br />CELEBRATIONS"
  },
  "home.intro.p": {
    fr: "Aritia Design vous accompagne dans la conception et la décoration<br class=\"hidden md:inline\" /> de mariages et événements sur-mesure, raffinés et authentiques.<br class=\"hidden md:inline\" /> À Toulouse, en Haute-Garonne et ses environs.",
    en: "Aritia Design guides you through the design and decoration of bespoke,<br class=\"hidden md:inline\" /> refined and authentic weddings and events.<br class=\"hidden md:inline\" /> In Toulouse, Haute-Garonne and surrounding areas."
  },

  // ─────────────────────────── Home — Portfolio strip ───────────────────────────
  "home.portfolio.label": { fr: "PORTFOLIO", en: "PORTFOLIO" },
  "home.portfolio.cta":   { fr: "Voir Gallery", en: "View Gallery" },

  // ─────────────────────────── Home — Méthode ───────────────────────────
  "home.method.script": {
    fr: "Transformez chaque<br />occasion en<br />moment d’exception",
    en: "Transform every<br class=\"md:hidden\" /> occasion<br class=\"hidden md:inline\" /> into an<br class=\"md:hidden\" /> exceptional moment"
  },
  "home.method.h2": {
    fr: "MÉTHODE<br /><span class=\"font-italic-serif italic\">de</span> TRAVAIL",
    en: "<span class=\"font-italic-serif italic\">The</span> CREATIVE<br />PROCESS"
  },
  "home.method.p": {
    fr: "De la première inspiration au jour J, nous vous accompagnons avec sensibilité et exigence dans la création d'un univers qui vous ressemble&nbsp;– une approche sur-mesure, pensée pour faire naître la beauté et l'émotion.",
    en: "From the first spark of inspiration to the day itself, we guide you with sensibility and rigour in creating a vision that reflects you&nbsp;– a bespoke approach, designed to give rise to beauty and emotion."
  },
  "home.method.cta": { fr: "Découvrir", en: "Discover" },

  // ─────────────────────────── Home — Mariage / Occasion ───────────────────────────
  "home.mariage.h2": {
    fr: "MARIAGE<br /><span class=\"font-italic-serif italic\">Occasion Spéciale</span>",
    en: "WEDDINGS<br /><span class=\"font-italic-serif italic\">Special Occasions</span>"
  },
  "home.mariage.p": {
    fr: "À travers une approche transversale mêlant design floral, scénographie immersive, papeterie personnalisée et identité visuelle, nous concevons à vos côtés un univers esthétique global, où chaque choix incarne avec exigence l'essence de votre histoire.",
    en: "Through a cross-disciplinary approach blending floral design, immersive set design, bespoke stationery and visual identity, we craft a unified aesthetic by your side, where every choice thoughtfully embodies the essence of your story."
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
    fr: "Merci beaucoup pour l'organisation de notre mariage&nbsp;! Ton souci du détail, ton dévouement ont rendu notre journée parfaite voire plus que parfaite. Nous te sommes reconnaissants pour les magnifiques souvenirs que tu as contribué à créer et te souhaitons beaucoup de succès dans l'organisation de tes prochains événements.<br /><br />Nous recommandons Aritia sans aucune hésitation.",
    en: "Thank you so much for organising our wedding! Your eye for detail and your dedication made our day perfect, even more than perfect. We are grateful for the beautiful memories you helped create and wish you every success with the events ahead.<br /><br />We recommend Aritia without hesitation."
  },
  "home.testimonial.2.author": { fr: "ELITAH & FYDERANA", en: "ELITAH & FYDERANA" },
  "home.testimonial.1.imgalt": { fr: "Mariée vue d'en haut dans l'escalier", en: "Bride seen from above on the staircase" },
  "home.testimonial.2.imgalt": { fr: "Mariée avec bouquet", en: "Bride holding her bouquet" },

  // ─────────────────────────── Home — À propos teaser ───────────────────────────
  "home.about.script": {
    fr: "Allier le beau<br /><span class=\"ml-10 md:ml-16\">à l’essentiel</span>",
    en: "Pairing beauty<br /><span class=\"ml-10 md:ml-16\">with what matters</span>"
  },
  "home.about.h2": { fr: "À&nbsp;PROPOS", en: "ABOUT" },
  "home.about.p1": {
    fr: "Implantée en Haute-Garonne, Aritia Design accompagne une clientèle en quête d'expériences uniques, où l'esthétique et l'émotion occupent une place centrale.",
    en: "Based in Haute-Garonne, Aritia Design works with clients in search of unique experiences, where aesthetics and emotion take centre stage."
  },
  "home.about.p2": {
    fr: "Formée au design et passionnée par l'art de sublimer l'instant, je développe un savoir-faire complet alliant minutie, création et mise en scène.",
    en: "Trained in design and passionate about the art of elevating the moment, I cultivate a comprehensive craft uniting precision, creation and staging."
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
    fr: "Une signature où design, scénographie &amp; <br />art floral se&nbsp;rencontrent",
    en: "A signature where design, set design &amp; <br />floral art meet"
  },
  "about.founder.h2": { fr: "FONDATRICE<br />DESIGNER", en: "FOUNDER<br />DESIGNER" },
  "about.founder.kicker": {
    fr: "Une designer passionnée par les volumes,<br class=\"hidden sm:inline\" /> la matière et l'amour des autres",
    en: "A designer passionate about volume,<br class=\"hidden sm:inline\" /> materials and a love for others"
  },
  "about.founder.p1": {
    fr: "Depuis l'enfance, l'harmonie des formes, des textures et des couleurs me fascine. C'est dès l'adolescence que j'ai fait mes premiers pas sur le terrain, en contribuant à la conception d'une dizaine de mariages. J'y ai exploré toutes les facettes de l'événementiel&nbsp;: design floral, structures, décors, papeterie et direction artistique. Chaque projet a été un espace d'apprentissage et un défi pour me dépasser.",
    en: "Ever since childhood, the harmony of shapes, textures and colours has fascinated me. It was in my teenage years that I gained my first hands-on experience, contributing to the design of around a dozen weddings. I explored every facet of the field: floral design, structures, decor, stationery and creative direction. Every project has been a chance to learn and a challenge to push myself further."
  },
  "about.founder.p3": {
    fr: "Mon parcours en design produit est venu structurer cette pratique en m'apportant une approche exigeante et sensible&nbsp;: l'œil pour les textures, la maîtrise des volumes, la juste gestion de la lumière et des couleurs, un sens aigu du détail, ainsi que le savoir-faire technique nécessaire à la conception d'objets et de structures sur-mesure.",
    en: "My background in product design has shaped this practice, bringing a demanding yet sensitive approach: an eye for texture, command of volume, a considered handling of light and colour, a sharp sense of detail, along with the technical know-how needed to design bespoke objects and structures."
  },
  "about.founder.p4": {
    fr: "Ma démarche repose sur l'alliance entre sensibilité et rigueur, avec la volonté profonde de transmettre une émotion à travers chaque projet et d'offrir aux autres ces moments suspendus, gravés dans les mémoires.",
    en: "My approach rests on the alliance of sensibility and rigour, with the deep desire to convey emotion through every project and to offer others those suspended moments, etched in memory."
  },
  "about.founder.p5": {
    fr: "C'est de cette ambition qu'est née Aritia Design&nbsp;: une agence pensée pour celles et ceux qui attendent d'un événement plus qu'une simple décoration. Une vision, une intention, une signature.",
    en: "Aritia Design was born of this ambition: a studio designed for those who expect more from an event than mere decoration. A vision, an intention, a signature."
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
    fr: "De l'inspiration à la réalisation, chaque étape est pensée <br />pour refléter votre&nbsp;univers",
    en: "From inspiration to realisation, every step is designed <br />to reflect your&nbsp;vision"
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
    fr: "Aritia Design pense l'événement comme une pièce de design unique. Identité graphique, art de la table, design floral et scénographie d'espace s'orchestrent pour donner vie à une émotion.",
    en: "Aritia Design approaches every event as a unique piece of design. Graphic identity, tablescaping, floral design and spatial scenography work in concert to bring an emotion to life."
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
    fr: "<p>En direction artistique globale, nous signons votre univers de manière absolue : identité graphique, art de la table, design floral, structures sur‑mesure et mise en scène. Une seule vision sur l'ensemble pour que chaque détail réponde à la même intention, sans aucun intermédiaire. Ce contrôle absolu de la chaîne de création supprime toute rupture de ton et livre l'expression exacte de votre projet. Découvrez cette approche à travers notre collection signature : <a href=\"#pack-0\" class=\"underline underline-offset-4 decoration-from-font hover:opacity-70 transition\">L'EXCEPTION</a>.</p>",
    en: "<p>In holistic art direction, we author your vision in its entirety: graphic identity, tablescaping, floral design, bespoke structures and spatial scenography. A single vision over the whole, so every detail answers the same intention, with no intermediary. This absolute control over the creative chain removes any break in tone and delivers the exact expression of your project. Discover this approach through our signature collection: <a href=\"#pack-0\" class=\"underline underline-offset-4 decoration-from-font hover:opacity-70 transition\">L'EXCEPTION</a>.</p>"
  },
  "services.1.title": { fr: 'DECOR <span class="font-italic-serif italic font-light">Scénographie</span>', en: 'DECOR <span class="font-italic-serif italic font-light">Set Design</span>' },
  "services.1.body": {
    fr: "<p>La maîtrise globale de votre décor. Nous concevons et coordonnons l'ensemble des éléments visuels de votre événement : mobilier, éclairage, matières et accessoires. Notre rôle est de garantir l'harmonie absolue de l'espace, où chaque détail visible répond à la même intention, afin que la scénographie finale soit la traduction exacte du projet initial.</p>",
    en: "<p>Full mastery of your decor. We design and coordinate every visual element of your event: furniture, lighting, materials and accessories. Our role is to guarantee absolute harmony of the space, where every visible detail answers the same intention, so the final scenography is the exact translation of the initial project.</p>"
  },
  "services.2.title": { fr: 'FLORAL <span class="font-italic-serif italic font-light">Design</span>', en: 'FLORAL <span class="font-italic-serif italic font-light">Design</span>' },
  "services.2.body": {
    fr: "<p>Du détail intime aux installations d'ampleur, nous concevons chaque pièce végétale en résonance avec votre univers visuel. Sélection rigoureuse des variétés, maîtrise des textures, des palettes et des volumes : les fleurs s'inscrivent comme une composante essentielle de la scénographie, loin du simple accessoire.</p>",
    en: "<p>From intimate details to large-scale installations, we design each botanical piece in resonance with your aesthetic. A rigorous selection of varieties and a mastery of textures, palettes and volumes: flowers become an essential element of the scenography, far from a mere accessory.</p>"
  },
  "services.3.title": { fr: 'IDENTITÉ <span class="font-italic-serif italic font-light">Graphique</span>', en: 'GRAPHIC <span class="font-italic-serif italic font-light">Identity</span>' },
  "services.3.body": {
    fr: "<p>L'identité graphique est le premier point de contact de votre événement. Du monogramme à la signalétique du jour J, nous dessinons un univers visuel unique : choix des typographies, illustrations exclusives, textures des papiers et finitions artisanales. Chaque pièce est pensée comme un objet d'art imprimé, pour prolonger l'esthétique de votre célébration.</p>",
    en: "<p>Graphic identity is the first point of contact with your event. From monogram to day-of signage, we design a singular visual signature: chosen typography, exclusive illustrations, paper textures and artisan finishes. Every piece is conceived as a printed art object, extending the aesthetic of your celebration.</p>"
  },
  "services.cta.tab": { fr: "Prendre rendez-vous", en: "Book a consultation" },
  "services.cta.mobile": { fr: "Prendre rendez-vous", en: "Book a consultation" },
  "services.included": { fr: "✦ Compris dans l'expérience", en: "✦ Included in the experience" },
  "services.packCard.included": { fr: "Compris dans l'expérience", en: "Included in the experience" },
  "services.devisOnly": { fr: "— SUR DEVIS UNIQUEMENT", en: "— ON REQUEST ONLY" },

  // Pack cards
  "services.packs.header": { fr: "✦ Packs &amp; Formules ✦", en: "✦ Packages &amp; Offerings ✦" },
  "services.packs.h2": {
    fr: "L'<span>ÉLÉGANCE</span> <span class=\"font-italic-serif italic font-light\">sur-mesure</span><br /><span class=\"font-italic-serif italic font-light\">à votre</span> <span>IMAGE</span>",
    en: "<span>ELEGANCE</span> <span class=\"font-italic-serif italic font-light\">tailored</span><br /><span class=\"font-italic-serif italic font-light\">in your</span> <span>IMAGE</span>"
  },
  "services.packs.intro": {
    fr: "Chaque projet est unique, c'est pourquoi nos prestations s'articulent autour de packages sur-mesure et de formules personnalisables.",
    en: "Every project is unique, which is why our offerings are built around bespoke packages and customisable formats."
  },

  // Pack 0 (L'EXCEPTION)
  "services.pack.0.title":  { fr: "L'EXCEPTION", en: "THE EXCEPTION" },
  "services.pack.0.italic": { fr: "Design Intégral", en: "Integrated Design" },
  "services.pack.0.label":  { fr: "COLLECTION SIGNATURE, SUR DEVIS", en: "SIGNATURE COLLECTION, ON REQUEST" },
  "services.pack.0.desc": {
    fr: "L'expérience la plus aboutie : vous nous confiez l'univers entier de votre célébration. Votre rôle se limite à l'approbation des concepts ; nous maîtrisons toute la chaîne de création pour vous livrer, le jour J, un décor unique et impeccable. L'assurance d'une exécution fidèle à l'intention.",
    en: "Our most accomplished experience: you entrust us with the entire vision of your celebration. Your role is limited to approving the concepts; we master the full creative chain to deliver, on the day, a singular, impeccable decor. The assurance of execution faithful to the intention."
  },
  "services.pack.0.b0": { fr: "Création de votre univers et identité graphique", en: "Creation of your aesthetic and graphic identity" },
  "services.pack.0.b1": { fr: "Confection et agencement de votre décor", en: "Making and arrangement of your decor" },
  "services.pack.0.b2": { fr: "Conceptions florales signature", en: "Signature floral designs" },
  "services.pack.0.b3": { fr: "Mise en place et accompagnement complet", en: "Installation and full support" },

  // Pack 1 (Décor & Identité Visuelle)
  "services.pack.1.title":  { fr: "DÉCOR & IDENTITÉ VISUELLE", en: "DECOR & VISUAL IDENTITY" },
  "services.pack.1.italic": { fr: "", en: "" },
  "services.pack.1.label":  { fr: "SCÉNOGRAPHIE & IDENTITÉ GRAPHIQUE<br />| SUR DEVIS", en: "SET DESIGN & GRAPHIC IDENTITY<br />| ON REQUEST" },
  "services.pack.1.desc": {
    fr: "Décor et identité graphique pensés comme un ensemble : la même charte visuelle traverse l'espace et le papier, du faire‑part à la mise en scène finale. Une cohérence totale entre ce que vos invités voient, touchent et lisent le jour J. Hors production florale et structures sur‑mesure, nous orchestrons tout votre univers visuel.",
    en: "Decor and graphic identity conceived as one whole: the same visual charter runs through the space and the paper, from save-the-date to the final staging. Full coherence between what your guests see, touch and read on the day. Excluding floral production and bespoke structures, we orchestrate your entire aesthetic."
  },
  "services.pack.1.b0": { fr: "Définition de votre style et harmonie colorée", en: "Definition of your style and colour palette" },
  "services.pack.1.b1": { fr: "Aménagement et mise en scène des espaces clés", en: "Layout and staging of key spaces" },
  "services.pack.1.b2": { fr: "Graphisme et supports personnalisés", en: "Graphic design and bespoke printed pieces" },
  "services.pack.1.b3": { fr: "Coordination & installation", en: "Coordination & installation" },

  // Pack 2 (Décor & Mise en Ambiance)
  "services.pack.2.title":  { fr: "DÉCOR & MISE EN AMBIANCE", en: "DECOR & ATMOSPHERE" },
  "services.pack.2.italic": { fr: "", en: "" },
  "services.pack.2.label":  { fr: "DÉCOR & SCÉNOGRAPHIE, SUR DEVIS", en: "DECOR & SET DESIGN, ON REQUEST" },
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
  "services.pack.3.label":  { fr: "DESIGN FLORAL, SUR DEVIS", en: "FLORAL DESIGN, ON REQUEST" },
  "services.pack.3.desc": {
    fr: "Bouquets, compositions, structures suspendues ou monumentales : nous prenons en charge toute la création florale de votre événement, de l'étude à la mise en place le jour J. Hors scénographie d'espace et identité graphique, le végétal est notre unique focus.",
    en: "Bouquets, compositions, suspended or monumental structures: we take charge of all the floral creation for your event, from the study to the installation on the day. Excluding spatial scenography and graphic identity, the botanical is our sole focus."
  },
  "services.pack.3.b0": { fr: "Étude de votre univers floral personnalisé", en: "Study of your bespoke floral aesthetic" },
  "services.pack.3.b1": { fr: "Création de vos bouquets et accessoires", en: "Creation of your bouquets and accessories" },
  "services.pack.3.b2": { fr: "Réalisation de décors monumentaux", en: "Execution of large-scale floral installations" },
  "services.pack.3.b3": { fr: "Installation et mise en fleurs le jour J", en: "On-the-day installation and floral set-up" },

  // Pack 4 (PAPETERIE FINE)
  "services.pack.4.title":  { fr: "IDENTITÉ GRAPHIQUE", en: "GRAPHIC IDENTITY" },
  "services.pack.4.italic": { fr: "", en: "" },
  "services.pack.4.label":  { fr: "PAPETERIE FINE, SUR DEVIS", en: "FINE STATIONERY, ON REQUEST" },
  "services.pack.4.desc": {
    fr: "Logos, invitations, pièces de table, signalétique et papeterie d'art : nous prenons en charge toute l'identité graphique de votre événement, de l'étude à la livraison finale. Hors scénographie d'espace et design floral, notre intervention se consacre exclusivement au support visuel.",
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
    en: "YOUR VISION, YOUR STORY,<br /><span class=\"font-italic-serif italic\">a unique creation</span>"
  },
  "services.final.sub": { fr: "Ensemble, donnons-lui vie", en: "Together, let's bring it to life" },
  "services.final.cta": { fr: "Me contacter", en: "Get in touch" },

  // FAQ (services.astro)
  "services.faq.h2": {
    fr: "QUESTIONS<br /><span class=\"font-italic-serif italic font-light\">Fréquentes</span>",
    en: "FREQUENTLY<br /><span class=\"font-italic-serif italic font-light\">Asked</span>"
  },
  "services.faq.script": {
    fr: "Chaque question<br />mérite attention",
    en: "Every question<br />deserves care"
  },
  "services.faq.0.q": {
    fr: "ÊTES-VOUS PRÉSENTS LE<br class=\"md:hidden\" /> JOUR J ?",
    en: "ARE YOU PRESENT ON<br class=\"md:hidden\" /> THE BIG DAY?"
  },
  "services.faq.0.a": {
    fr: "Oui, pour toutes nos formules avec exécution (l'Exception et Pack Atmosphère). Nous sommes présents de l'installation au démontage J+1 : nous orchestrons l'arrivée des prestataires, supervisons la mise en place et veillons à ce que chaque détail reflète fidèlement la direction artistique imaginée ensemble. Vous vivez votre célébration sereinement, sans avoir à gérer la logistique. Pour la Direction Artistique seule, vous repartez avec notre vision et l'orchestrez avec vos propres prestataires.",
    en: "Yes, for all our packages with execution (The Exception and the Atmosphere Package). We are present from set-up to dismantling on D+1: we coordinate the arrival of suppliers, oversee the installation and ensure every detail faithfully reflects the creative direction imagined together. You experience your celebration with peace of mind, with no logistics to manage. For Art Direction only, you leave with our vision and orchestrate it with your own suppliers."
  },
  "services.faq.1.q": {
    fr: "QUELLE DIFFÉRENCE AVEC UN WEDDING PLANNER ?",
    en: "WHAT IS THE DIFFERENCE WITH A WEDDING PLANNER?"
  },
  "services.faq.1.a": {
    fr: "Notre rôle couvre la création artistique de votre mariage (univers visuel, scénographie, design floral, papeterie) et la coordination des prestataires qui exécutent cette vision (mobilier, éclairage, vaisselle, location décor...), tandis que le wedding planner orchestre l'organisation globale (planning, budget, traiteur, photographe, musique, lieu...). Les deux métiers sont complémentaires : l'un assure la fluidité organisationnelle, l'autre sublime l'expérience visuelle.",
    en: "Our role covers the artistic creation of your wedding (visual direction, set design, floral design, stationery) and the coordination of the suppliers who execute this vision (furniture, lighting, tableware, decor rental...), whereas the wedding planner orchestrates the overall organisation (scheduling, budget, caterer, photographer, music, venue...). The two professions are complementary: one ensures organisational fluency, the other elevates the visual experience."
  },
  "services.faq.2.q": {
    fr: "QUEL EST LE BON MOMENT POUR VOUS CONTACTER ?",
    en: "WHEN IS THE RIGHT TIME TO CONTACT YOU?"
  },
  "services.faq.2.a": {
    fr: "Les délais idéaux varient selon la formule choisie et l'ampleur du projet :<br /><br />— Pack L'Exception : 10 à 12 mois en amont (univers complet, sourcing des prestataires, coordination de la production).<br /><br />— Pack Atmosphère : 6 à 8 mois sont généralement suffisants.<br /><br />— Direction Artistique seule : à partir de 4 mois.<br /><br />Pour les événements d'envergure (scénographie complexe, grande capacité), nous recommandons d'anticiper davantage. Nous restons toutefois flexibles sur des délais plus courts selon nos disponibilités du moment.",
    en: "Ideal timeframes vary depending on the chosen package and the scale of the project:<br /><br />— The Exception Package: 10 to 12 months in advance (full creative direction, supplier sourcing, production coordination).<br /><br />— Atmosphere Package: 6 to 8 months is generally sufficient.<br /><br />— Art Direction only: from 4 months.<br /><br />For larger-scale events (complex set design, high guest count), we recommend planning further ahead. We remain flexible on shorter timelines depending on our current availability."
  },
  "services.faq.3.q": {
    fr: "ACCOMPAGNEZ-VOUS<br class=\"md:hidden\" /> D'AUTRES ÉVÉNEMENTS ?",
    en: "DO YOU WORK ON<br class=\"md:hidden\" /> OTHER EVENTS?"
  },
  "services.faq.3.a": {
    fr: "Oui. Si le mariage reste notre terrain de prédilection, notre direction artistique s'applique à toutes les célébrations qui marquent une vie : événements saisonniers, anniversaires, baby showers, événements privés ou corporate. La même rigueur esthétique, adaptée à votre occasion.<br /><br /><a href=\"/contact\" class=\"underline underline-offset-4 hover:opacity-70 transition\">Demandez un devis personnalisé →</a>",
    en: "Yes. While weddings remain our primary field, our creative direction extends to all the celebrations that mark a life: seasonal events, birthdays, baby showers, private gatherings and corporate occasions. The same aesthetic rigour, tailored to your moment.<br /><br /><a href=\"/contact\" class=\"underline underline-offset-4 hover:opacity-70 transition\">Request a personalised quote →</a>"
  },

  // ─────────────────────────── Processus page ───────────────────────────
  "process.kicker": { fr: "Processus créatif", en: "Creative process" },
  "process.pagehero.title": {
    fr: "Processus",
    en: "Process"
  },
  "process.pagehero.subtitle": {
    fr: "Une méthode pensée, façonnée<br class=\"show-mobile\" />autour de votre vision.",
    en: "A method designed and shaped<br class=\"show-mobile\" />around your vision."
  },
  "process.hero.quote": {
    fr: "«&nbsp;La création, c’est<br class=\"md:hidden\" /> l’équilibre entre<br class=\"hidden md:inline\" /> maîtrise<br class=\"md:hidden\" /> et lâcher-prise.&nbsp;»",
    en: "“Creation is the balance<br class=\"md:hidden\" /> between<br class=\"hidden md:inline\" /> mastery<br class=\"md:hidden\" /> and letting go.”"
  },
  "process.intro.h2": {
    fr: "UN ACCOMPAGNEMENT<br /><span>EN 6 ÉTAPES</span>",
    en: "A JOURNEY <span>IN 6 STEPS</span>"
  },
  "process.intro.p": {
    fr: "De la première rencontre au jour J,<br />vivez la création de votre univers<br />en toute sérénité.",
    en: "From the first meeting to the day itself,<br />experience the creation of your vision<br />with complete peace of mind."
  },

  "process.step.1.title": { fr: "PREMIÈRE RENCONTRE", en: "FIRST MEETING" },
  "process.step.1.body": {
    fr: "Tout commence par une rencontre. Nous prenons le temps de faire connaissance, d'écouter votre histoire et de comprendre ce qui rend votre projet unique. Ensemble, nous parlons des fleurs que vous aimez, des couleurs qui vous ressemblent, du mobilier que vous imaginez, du lieu que vous avez choisi. Ces informations nous permettront de vous fournir un devis personnalisé, remis sous 7 à 10 jours ouvrés selon l'ampleur de votre projet.",
    en: "It all begins with a meeting. We take the time to get to know you, to listen to your story and to understand what makes your project unique. Together, we talk about the flowers you love, the colours that resonate with you, the furniture you envision, the venue you have chosen. These details will allow us to prepare a personalised quote, sent within 7 to 10 working days depending on the scope of your project."
  },
  "process.step.2.title": { fr: "DEVIS <span class=\"amp\">&amp;</span> SIGNATURE", en: "QUOTE <span class=\"amp\">&amp;</span> SIGNATURE" },
  "process.step.2.body": {
    fr: "Votre signature ouvre officiellement notre collaboration. Au-delà du cadre formel, elle scelle un engagement mutuel au sein duquel vous nous confiez votre vision et nous nous engageons à la traduire avec exigence et passion.",
    en: "Your signature officially opens our collaboration. Beyond the formal framework, it seals a mutual commitment through which you entrust us with your vision and we commit to translating it with rigour and passion."
  },
  "process.step.3.title": { fr: "INSPIRATIONS <span class=\"amp\">&amp;</span> UNIVERS", en: "INSPIRATIONS <span class=\"amp\">&amp;</span> ATMOSPHERES" },
  "process.step.3.body": {
    fr: "Pour chaque temps fort de la célébration (cérémonie, cocktail, dîner), selon vos envies, nous composons des planches d'intentions autour des ambiances, matières, palette, fleurs et typographies. Un fil rouge visuel et émotionnel se dessine. Au gré d'échanges réguliers avec vous ou votre wedding planner, il se précise, s'ajuste, s'enrichit, jusqu'à devenir le reflet le plus juste de votre histoire.",
    en: "For each key moment of the celebration (ceremony, cocktail, dinner), tailored to your wishes, we compose boards of intentions around atmospheres, materials, palette, flowers and typography. A visual and emotional thread takes shape. Through regular exchanges with you or your wedding planner, it sharpens, adjusts and grows richer, until it becomes the truest reflection of your story."
  },
  "process.step.4.title": { fr: "PRÉSENTATION DU PROJET", en: "PROJECT REVEAL" },
  "process.step.4.body": {
    fr: "Nous traduisons cette vision en un projet complet, harmonisant compositions florales, papeterie, signalétique et agencement des espaces. C'est le moment de la révélation. Votre carnet d'atmosphère détaillé rassemble photos des pièces sélectionnées, croquis de projection et planches d'inspiration. Votre univers prend enfin forme sous vos yeux. Une fois le carnet entre vos mains, un temps d'échange reste ouvert, à vous ou à votre wedding planner, pour valider ou affiner certains détails.",
    en: "We translate this vision into a complete project, harmonising floral compositions, stationery, signage and spatial layout. This is the moment of revelation. Your detailed atmosphere booklet brings together photos of selected items, projection sketches and inspiration boards. Your universe finally takes shape before your eyes. Once the booklet is in your hands, a time for exchange remains open, for you or your wedding planner, to validate or refine certain details."
  },
  "process.step.5.title": { fr: "DANS LES COULISSES", en: "BEHIND THE SCENES" },
  "process.step.5.body": {
    fr: "Le dossier validé, nous passons commande auprès de nos partenaires et coordonnons l'ensemble. Sourcing, production sur mesure, ajustements, échanges réguliers avec vous ou votre wedding planner, tout est pris en main. Vous restez maître de la vision ; nous orchestrons en coulisses.",
    en: "Once the project is approved, we place orders with our partners and coordinate everything. Sourcing, bespoke production, adjustments, regular exchanges with you or your wedding planner, everything is taken in hand. You remain in charge of the vision; we orchestrate behind the scenes."
  },
  "process.step.6.title": { fr: "LE JOUR J", en: "THE BIG DAY" },
  "process.step.6.body": {
    fr: "Le jour J, nous nous occupons de tout. Installation, mise en place, compositions florales in situ, ajustements de dernière minute. Vivez votre journée en toute sérénité ; votre vision se déploie telle que vous l'aviez rêvée.",
    en: "On the day itself, we take care of everything. Installation, set-up, floral compositions on site, last-minute adjustments. Live your day in complete serenity; your vision unfolds just as you had dreamed it."
  },
  "process.step.6.script": { fr: `<span class="block">faites place</span>à votre instant<br />d'émotion.`, en: `<span class="block">make room</span>for your moment<br />of emotion.` },
  "process.flipbook.prev": { fr: "Page précédente", en: "Previous page" },
  "process.flipbook.next": { fr: "Page suivante", en: "Next page" },

  "process.closing": {
    fr: "Notre processus créatif allie écoute,<br class=\"hidden md:inline\" /> intuition et exigence esthétique, pour<br class=\"hidden md:inline\" /> concevoir une expérience sur mesure et<br class=\"hidden md:inline\" /> propre à votre histoire.",
    en: "Our creative process combines listening,<br class=\"hidden md:inline\" /> intuition and aesthetic rigour, to<br class=\"hidden md:inline\" /> design a bespoke experience<br class=\"hidden md:inline\" /> true to your story."
  },
  "process.closing.cta": { fr: "Contactez-nous", en: "Contact us" },

  // ─────────────────────────── Portfolio page ───────────────────────────
  "portfolio.hero.title": { fr: "Portfolio", en: "Portfolio" },
  "portfolio.hero.subtitle": {
    fr: "Des univers sur-mesure, raffinés<br class='show-mobile' />&amp; porteurs d'émotions",
    en: "Bespoke universes, refined<br class='show-mobile' />&amp; charged with emotion"
  },
  "portfolio.label": { fr: "✦ Temps forts ✦", en: "✦ Highlights ✦" },
  "portfolio.savoir.h2": {
    fr: "SAVOIR-FAIRE<br /><span class=\"font-italic-serif italic font-light\">Élégance</span><br />HARMONIE<br /><span class=\"font-italic-serif italic font-light\">Atmosphère</span><br />SUR-MESURE",
    en: "CRAFTSMANSHIP<br /><span class=\"font-italic-serif italic font-light\">Elegance</span><br />HARMONY<br /><span class=\"font-italic-serif italic font-light\">Atmosphere</span><br />BESPOKE"
  },
  "portfolio.savoir.p": {
    fr: "Découvrez une sélection de mariages et d'événements soigneusement mis en lumière. Cliquez sur chaque titre pour explorer la galerie complète.",
    en: "Discover a selection of weddings and events carefully highlighted. Click each title to explore the full gallery."
  },
  "portfolio.project.ef.title": { fr: "E+F, MARIAGE MINIMALISTE", en: "E+F, MINIMALIST WEDDING" },
  "portfolio.project.ef.italic": { fr: "aux teintes de Madagascar", en: "in Madagascar tones" },
  "portfolio.project.mt.title": { fr: "M+T, MARIAGE ÉLÉGANT", en: "M+T, ELEGANT WEDDING" },
  "portfolio.project.mt.italic": { fr: "à la Française", en: "in the French style" },
  "portfolio.project.hj.title": { fr: "H+J, ROMANTISME MODERNE", en: "H+J, MODERN ROMANTICISM" },
  "portfolio.project.hj.italic": { fr: "avec un accent culturel", en: "with a cultural accent" },
  "portfolio.project.soon": { fr: "à venir", en: "coming soon" },
  "portfolio.cta.h2": {
    fr: "NON, <span class=\"font-italic-serif italic font-light\">VOS RÊVES</span><br />NE SONT PAS TROP GRAND",
    en: "NO, <span class=\"font-italic-serif italic font-light\">YOUR DREAMS</span><br />ARE NOT TOO BIG"
  },
  "portfolio.cta.btn": { fr: "Créer mon univers", en: "Create my vision" },

  // ─────────────────────────── Contact page ───────────────────────────
  "contact.hero.title": { fr: "Contact", en: "Contact" },
  "contact.hero.subtitle": {
    fr: "Vous rêvez d'un mariage ou d'un événement <br />qui vous ressemble&nbsp;?",
    en: "Dreaming of a wedding or event <br />that truly reflects you?"
  },
  "contact.notes.label": { fr: "Notes", en: "Notes" },
  "contact.notes.p1": {
    fr: "Merci de remplir ce formulaire avec soin. Je reviendrai vers vous dans les 48 heures ouvrées afin de planifier un premier rendez-vous téléphonique, en visio ou en présentiel.",
    en: "Please fill in this form with care. I'll get back to you within 48 working hours to schedule a first appointment, by phone, video or in person."
  },
  "contact.notes.p2": { fr: "Vous pouvez aussi nous écrire directement à l'adresse suivante&nbsp;:", en: "You can also write to us directly at:" },
  "contact.h2": { fr: "FAISONS<br />CONNAISSANCE", en: "LET'S MEET" },
  "contact.p": {
    fr: "Votre histoire mérite une attention toute particulière, un regard sensible, et une mise en scène à la hauteur de vos émotions. Je serais honorée de vous accompagner dans la création d'un univers qui vous ressemble.",
    en: "Your story deserves particular attention, a sensitive eye and staging worthy of your emotions. I would be honoured to guide you in creating a vision that reflects you."
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
  "contact.label.type":    { fr: "Type d'événement",        en: "Event type" },
  "contact.label.budget":  { fr: "Budget",                  en: "Budget" },
  "contact.label.desc":    { fr: "Description",             en: "Description" },
  "contact.ph.name":   { fr: "NOM & PRÉNOM *",                  en: "NAME & SURNAME *" },
  "contact.ph.email":  { fr: "E-MAIL *",                        en: "E-MAIL *" },
  "contact.ph.phone":  { fr: "🇫🇷 TÉLÉPHONE",                     en: "🇫🇷 PHONE" },
  "contact.ph.date":   { fr: "DATE DE L'ÉVÉNEMENT *",           en: "EVENT DATE *" },
  "contact.ph.loc":    { fr: "LIEU DE L'ÉVÉNEMENT *",           en: "EVENT LOCATION *" },
  "contact.ph.budget": { fr: "BUDGET ENVISAGÉ POUR VOTRE PROJET *", en: "ESTIMATED BUDGET FOR YOUR PROJECT *" },
  "contact.ph.desc":   { fr: "DESCRIPTION *",                   en: "DESCRIPTION *" },
  "contact.opt.service.placeholder": { fr: "PRESTATION SOUHAITÉE *", en: "DESIRED SERVICE *" },
  "contact.opt.service.0": { fr: "L'Exception — Design Intégral",  en: "The Exception — Integrated Design" },
  "contact.opt.service.1": { fr: "Décor & Identité Visuelle",       en: "Decor & Visual Identity" },
  "contact.opt.service.2": { fr: "Décor & Mise en Ambiance",        en: "Decor & Atmosphere" },
  "contact.opt.service.3": { fr: "L'Art Floral",                    en: "Floral Art" },
  "contact.opt.service.4": { fr: "Papeterie Fine",                  en: "Fine Stationery" },
  "contact.opt.service.5": { fr: "Sur-mesure",                      en: "Custom" },
  "contact.opt.type.placeholder": { fr: "TYPE D'ÉVÉNEMENT *",     en: "EVENT TYPE *" },
  "contact.opt.type.0": { fr: "Mariage",               en: "Wedding" },
  "contact.opt.type.1": { fr: "Événement saisonnier",  en: "Seasonal event" },
  "contact.opt.type.2": { fr: "Anniversaire",          en: "Birthday / Anniversary" },
  "contact.opt.type.3": { fr: "Baby Shower",           en: "Baby shower" },
  "contact.opt.type.4": { fr: "Événement Corporate",   en: "Corporate event" },
  "contact.opt.type.5": { fr: "Autre",                 en: "Other" },
  "contact.submit": { fr: "Envoyer", en: "Send" },

  // ─────────────────────────── Mentions légales ───────────────────────────
  "legal.h1": {
    fr: "MENTIONS <span class=\"font-italic-serif italic font-light\">légales</span>",
    en: "LEGAL <span class=\"font-italic-serif italic font-light\">notice</span>"
  },
  "legal.updated": { fr: "Dernière mise à jour&nbsp;<span class=\"text-black/25\">✦</span> mai 2026", en: "Last updated <span class=\"text-black/25\">✦</span> May 2026" },
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
    fr: "POLITIQUE<br /><span class=\"font-italic-serif italic font-light\">de Confidentialité</span>",
    en: "PRIVACY<br /><span class=\"font-italic-serif italic font-light\">Policy</span>"
  },
  "privacy.updated": { fr: "Dernière mise à jour&nbsp;<span class=\"text-black/25\">✦</span> mai 2026", en: "Last updated <span class=\"text-black/25\">✦</span> May 2026" },
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
  "privacy.collected.li4": { fr: "Date et lieu de l'événement", en: "Date and location of the event" },
  "privacy.collected.li5": { fr: "Type d'événement et prestation souhaitée", en: "Event type and desired service" },
  "privacy.collected.li6": { fr: "Budget envisagé", en: "Estimated budget" },
  "privacy.collected.li7": { fr: "Description libre du projet", en: "Free-form project description" },
  "privacy.collected.p2": {
    fr: "Aucune donnée n'est collectée à votre insu et aucune information n'est cédée à des tiers à des fins commerciales.",
    en: "No data is collected without your knowledge and no information is shared with third parties for commercial purposes."
  },
  "privacy.purpose.h2": { fr: "Finalité et base légale", en: "Purpose and legal basis" },
  "privacy.purpose.p1": {
    fr: "Vos données sont collectées et traitées dans le but unique de répondre à votre demande de contact et d'établir, le cas échéant, une relation commerciale relative à la conception d'un événement.",
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

  // ─────────────────────────── Services page (investment.* keys, used by services.astro) ───────────────────────────
  "investment.hero.title": { fr: "Services", en: "Services" },
  "investment.hero.subtitle": {
    fr: "Sublimer chaque moment<br class=\"show-mobile\" />de votre célébration.",
    en: "Elevating every moment<br class=\"show-mobile\" />of your celebration."
  },
  "investment.intro.h2": {
    fr: "UN ENGAGEMENT<br class=\"md:hidden\" /> À LA HAUTEUR<br class=\"hidden md:inline\" /> DE<br class=\"md:hidden\" /> VOTRE ÉVÉNEMENT",
    en: "A COMMITMENT<br class=\"md:hidden\" /> WORTHY<br class=\"hidden md:inline\" /> OF<br class=\"md:hidden\" /> YOUR EVENT"
  },
  "investment.value.h3": {
    fr: "NOTRE<br /><span class=\"font-italic-serif italic\">Engagement</span>",
    en: "OUR<br /><span class=\"font-italic-serif italic\">Commitment</span>"
  },
  "investment.value.p": {
    fr: "Choisir Aritia Design, c'est confier votre célébration à un savoir-faire engagé et à une vraie culture du détail. Nous traduisons vos attentes de manière juste pour créer un événement unique, qui vous ressemble, et offrir à vos invités un moment mémorable.",
    en: "Choosing Aritia Design means entrusting your celebration to dedicated craftsmanship and a true culture of detail. We translate your expectations with precision to create a singular event that reflects you, and offer your guests a memorable moment."
  },
  "investment.disclaimer": {
    fr: "Les tarifs présentés correspondent au niveau <span class=\"font-medium not-italic tracking-[0.04em] text-[var(--color-ink)]\">ESSENTIEL</span>, pour des célébrations intimistes<span class=\"hidden md:inline\"> (≤ 50 invités)</span>. Chaque projet fait l'objet d'un <span class=\"font-medium not-italic text-[var(--color-ink)]\">devis personnalisé</span><span class=\"hidden md:inline\"> selon votre nombre d'invités, votre lieu et l'ampleur de votre projet</span>. Les <span class=\"font-medium not-italic text-[var(--color-ink)]\">échelons supérieurs</span><span class=\"hidden md:inline\">, <span class=\"font-medium not-italic tracking-[0.04em] text-[var(--color-ink)]\">CŒUR</span> et <span class=\"font-medium not-italic tracking-[0.04em] text-[var(--color-ink)]\">SIGNATURE</span>,</span> sont disponibles sur demande.",
    en: "The rates shown correspond to our <span class=\"font-medium not-italic tracking-[0.04em] text-[var(--color-ink)]\">ESSENTIEL</span> tier, for intimate celebrations<span class=\"hidden md:inline\"> (≤ 50 guests)</span>. Each project receives a <span class=\"font-medium not-italic text-[var(--color-ink)]\">personalised quote</span><span class=\"hidden md:inline\"> based on your guest count, your venue and the scale of your project</span>. The <span class=\"font-medium not-italic text-[var(--color-ink)]\">higher tiers</span><span class=\"hidden md:inline\">, <span class=\"font-medium not-italic tracking-[0.04em] text-[var(--color-ink)]\">CŒUR</span> and <span class=\"font-medium not-italic tracking-[0.04em] text-[var(--color-ink)]\">SIGNATURE</span>,</span> are available on request."
  },

  // Tiers (cards)
  "investment.tier.0.title": { fr: "L’EXCEPTION", en: "THE EXCEPTION" },
  "investment.tier.0.italic": { fr: "design intégral", en: "integrated design" },
  "investment.tier.0.price": { fr: "À partir de 6 000 €", en: "From €6,000" },
  "investment.tier.0.scope": {
    fr: "≤50 invités, un espace principal, fleurs de saison, décor sourcé. <br />DA globale incluse (valeur 1 500 €).",
    en: "≤50 guests, one main space, seasonal flowers, sourced decor. <br />Full creative direction included (worth €1,500)."
  },
  "investment.tier.0.desc": {
    fr: "L'expérience la plus aboutie : Aritia Design, votre interlocuteur unique pour orchestrer l'intégralité de votre célébration. <span class=\"hidden md:inline\">De la première inspiration à la dernière fleur posée, nous prenons en charge chaque dimension esthétique de votre journée. </span>Vous validez les concepts, nous réalisons le reste. — Structures et décor sur-mesure proposés en option selon vos envies.",
    en: "Our most accomplished experience: Aritia Design, your single point of contact to orchestrate the entirety of your celebration. <span class=\"hidden md:inline\">From the first spark of inspiration to the last flower placed, we take charge of every aesthetic dimension of your day. </span>You approve the concepts, we deliver the rest. — Bespoke structures and decor available as options to suit your wishes."
  },
  "investment.tier.0.b0": { fr: "Direction artistique globale : concepts et planches d'inspiration graphiques, décoratifs et floraux, palette de couleurs, palette de matières, charte typographique", en: "Holistic creative direction: graphic, decorative and floral concepts and inspiration boards, colour palette, material palette, typography guidelines" },
  "investment.tier.0.b1": { fr: "Papeterie essentielle : faire-part, menus, plan de table, monogramme classique", en: "Essential stationery: invitations, menus, seating chart, classic monogram" },
  "investment.tier.0.b2": { fr: "Décor & scénographie : croquis et/ou plan 2D de l'espace, sélection du mobilier et des objets décoratifs", en: "Decor & set design: sketches and/or 2D plan of the space, selection of furniture and decorative objects" },
  "investment.tier.0.b3": { fr: "Floral intimiste : bouquet de la mariée, boutonnières, 5 centres de table, arche de cérémonie minimaliste", en: "Intimate florals: bridal bouquet, boutonnieres,5 table centrepieces, minimalist ceremony arch" },
  "investment.tier.0.b4": { fr: "Coordination des prestataires sourcés", en: "Coordination of sourced suppliers" },
  "investment.tier.0.b5": { fr: "3 réunions de travail, 1 visite du lieu de réception", en: "3 working meetings,1 venue visit" },
  "investment.tier.0.b6": { fr: "Présence le jour J (10h) avec installation et démontage J+1", en: "On-site presence on the day (10h) with set-up and dismantling on D+1" },
  "investment.tier.0.b7": { fr: "Livrable : <span class=\"hidden md:inline\">carnet d'atmosphère</span><span class=\"md:hidden\">PDF</span>, croquis / plans 2D, BAT, fichiers d'impression", en: "Deliverable: <span class=\"hidden md:inline\">atmosphere booklet</span><span class=\"md:hidden\">PDF</span>, sketches / 2D plans, print proofs, print files" },

  "investment.tier.1.title": { fr: "PACK ATMOSPHÈRE", en: "ATMOSPHERE PACKAGE" },
  "investment.tier.1.italic": { fr: "décor <span class=\"amp\">&amp;</span> papeterie", en: "decor <span class=\"amp\">&amp;</span> stationery" },
  "investment.tier.1.price": { fr: "À partir de 3 600 €", en: "From €3,600" },
  "investment.tier.1.scope": {
    fr: "≤50 invités, un espace principal, décor sourcé. <br />Économie de 400 € vs prestations séparées.",
    en: "≤50 guests, one main space, sourced decor. <br />€400 saving vs separate services."
  },
  "investment.tier.1.desc": {
    fr: "Pensé pour une identité visuelle parfaitement alignée. Votre papeterie, votre signalétique et votre décor s'articulent comme un ensemble unique. — Structures sur-mesure proposées en option selon vos envies.",
    en: "Designed for a perfectly aligned visual identity. Your stationery, signage and decor come together as a single ensemble. — Bespoke structures available as options to suit your wishes."
  },
  "investment.tier.1.b0": { fr: "Direction artistique commune : concepts et planches d'inspiration graphiques et décoratifs, charte typographique, palette de couleurs, palette de matières", en: "Shared creative direction: graphic and decorative concepts and inspiration boards, typography guidelines, colour palette, material palette" },
  "investment.tier.1.b1": { fr: "Papeterie essentielle : faire-part, menus, plan de table, monogramme classique", en: "Essential stationery: invitations, menus, seating chart, classic monogram" },
  "investment.tier.1.b2": { fr: "Décor & scénographie : croquis et/ou plan 2D de l'espace, sélection du mobilier et des objets décoratifs", en: "Decor & set design: sketches and/or 2D plan of the space, selection of furniture and decorative objects" },
  "investment.tier.1.b3": { fr: "Coordination des prestataires", en: "Supplier coordination" },
  "investment.tier.1.b4": { fr: "2 réunions de travail, 1 visite du lieu de réception", en: "2 working meetings,1 venue visit" },
  "investment.tier.1.b5": { fr: "Installation le jour J et démontage J+1", en: "Set-up on the day and dismantling on D+1" },
  "investment.tier.1.b6": { fr: "Livrable : <span class=\"hidden md:inline\">livret de création</span><span class=\"md:hidden\">PDF</span>, croquis / plans 2D, BAT, fichiers d'impression", en: "Deliverable: <span class=\"hidden md:inline\">design booklet</span><span class=\"md:hidden\">PDF</span>, sketches / 2D plans, print proofs, print files" },

  "investment.tier.2.title": { fr: "DIRECTION ARTISTIQUE", en: "ART DIRECTION" },
  "investment.tier.2.italic": { fr: "seule", en: "only" },
  "investment.tier.2.price": { fr: "À partir de 1 500 €", en: "From €1,500" },
  "investment.tier.2.scope": {
    fr: "Déductible à 100 % en cas de signature d'un pack sous 60 jours",
    en: "100% deductible if a package is signed within 60 days"
  },
  "investment.tier.2.desc": {
    fr: "Vous repartez avec notre vision et l'orchestrez avec vos propres prestataires. Une option idéale pour celles et ceux qui souhaitent une signature artistique forte sans formule complète.",
    en: "You leave with our vision and orchestrate it with your own suppliers. An ideal option for those wanting a strong artistic signature without a full package."
  },
  "investment.tier.2.b0": { fr: "Concept décoratif et planches d'inspiration", en: "Decorative concept and inspiration boards" },
  "investment.tier.2.b1": { fr: "Concept graphique et charte typographique", en: "Graphic concept and typography guidelines" },
  "investment.tier.2.b2": { fr: "Concept et planche d'inspiration florale", en: "Concept and floral inspiration board" },
  "investment.tier.2.b3": { fr: "Concept art de la table", en: "Tablescaping concept" },
  "investment.tier.2.b4": { fr: "Palette de couleurs et palette de matières", en: "Colour palette and material palette" },
  "investment.tier.2.b5": { fr: "Croquis et/ou plan 2D de l'espace", en: "Sketches and/or 2D plan of the space" },
  "investment.tier.2.b6": { fr: "Liste de prestataires recommandés", en: "List of recommended suppliers" },
  "investment.tier.2.b7": { fr: "2 réunions de travail", en: "2 working meetings" },
  "investment.tier.2.b8": { fr: "Livrable : <span class=\"hidden md:inline\">carnet d'atmosphère</span><span class=\"md:hidden\">PDF</span>, liste de prestataires", en: "Deliverable: <span class=\"hidden md:inline\">atmosphere booklet</span><span class=\"md:hidden\">PDF</span>, supplier list" },

  "investment.included.summary": { fr: "✦ Compris dans l'expérience", en: "✦ Included in the experience" },
  "investment.tier.cta": { fr: "Demander un devis", en: "Request a quote" },

  // À la carte
  "investment.alacarte.label": { fr: "✦ À la carte ✦", en: "✦ À la carte ✦" },
  "investment.alacarte.h2": {
    fr: "<span class=\"tracking-normal\">Une</span> <span class=\"font-italic-serif italic font-light\">prestation</span>,<br /><span class=\"tracking-normal\">un</span> <span class=\"font-italic-serif italic font-light\">univers</span>",
    en: "<span class=\"tracking-normal\">One</span> <span class=\"font-italic-serif italic font-light\">service</span>,<br /><span class=\"tracking-normal\">one</span> <span class=\"font-italic-serif italic font-light\">signature</span>"
  },
  "investment.alacarte.intro": {
    fr: "Pour celles et ceux qui souhaitent confier une partie précise de leur événement. Chaque prestation inclut son concept artistique et son exécution complète.",
    en: "For those wishing to entrust a specific part of their event. Each service includes its artistic concept and full execution."
  },

  "investment.alacarte.0.title": { fr: "Papeterie fine", en: "Fine stationery" },
  "investment.alacarte.0.price": { fr: "à partir de 800 €", en: "from €800" },
  "investment.alacarte.0.scope": { fr: "≤50 invités, faire-part et menus", en: "≤50 guests, invitations and menus" },
  "investment.alacarte.0.b0": { fr: "Concept graphique et charte typographique", en: "Graphic concept and typography guidelines" },
  "investment.alacarte.0.b1": { fr: "2 maquettes et bon à tirer (BAT) final", en: "2 mock-ups and final print proof" },
  "investment.alacarte.0.b2": { fr: "Faire-part recto-verso", en: "Double-sided invitations" },
  "investment.alacarte.0.b3": { fr: "Menus de table individuels", en: "Individual table menus" },
  "investment.alacarte.0.b4": { fr: "Plan de table imprimé", en: "Printed seating chart" },
  "investment.alacarte.0.b5": { fr: "Impression, façonnage, livraison", en: "Printing, finishing, delivery" },
  "investment.alacarte.0.b6": { fr: "Livrable : BAT, fichiers d'impression", en: "Deliverable: print proofs, print files" },
  "investment.alacarte.0.cta": { fr: "Réserver", en: "Book" },

  "investment.alacarte.1.title": { fr: "Conception florale", en: "Floral design" },
  "investment.alacarte.1.price": { fr: "à partir de 2 700 €", en: "from €2,700" },
  "investment.alacarte.1.scope": { fr: "≤50 invités, fleurs de saison, un espace", en: "≤50 guests, seasonal flowers, one space" },
  "investment.alacarte.1.b0": { fr: "Concept et planche d'inspiration florale", en: "Concept and floral inspiration board" },
  "investment.alacarte.1.b1": { fr: "Sourcing fleurs (grossiste / producteur local)", en: "Flower sourcing (wholesaler / local grower)" },
  "investment.alacarte.1.b2": { fr: "Bouquet de la mariée et boutonnières", en: "Bridal bouquet and boutonnieres" },
  "investment.alacarte.1.b3": { fr: "5 centres de table simples", en: "5 simple table centrepieces" },
  "investment.alacarte.1.b4": { fr: "Arche de cérémonie minimaliste", en: "Minimalist ceremony arch" },
  "investment.alacarte.1.b5": { fr: "Composition en atelier et installation le jour J", en: "Studio composition and on-the-day installation" },
  "investment.alacarte.1.b6": { fr: "Livrable : <span class=\"hidden md:inline\">carnet </span>PDF", en: "Deliverable: PDF<span class=\"hidden md:inline\"> booklet</span>" },
  "investment.alacarte.1.cta": { fr: "Réserver", en: "Book" },

  "investment.alacarte.2.title": { fr: "Décor <span class=\"amp\">&amp;</span> scénographie", en: "Decor <span class=\"amp\">&amp;</span> set design" },
  "investment.alacarte.2.price": { fr: "à partir de 3 200 €", en: "from €3,200" },
  "investment.alacarte.2.scope": { fr: "≤50 invités, un espace principal", en: "≤50 guests, one main space" },
  "investment.alacarte.2.b0": { fr: "Concept décoratif et planches d'inspiration", en: "Decorative concept and inspiration boards" },
  "investment.alacarte.2.b1": { fr: "Palette de couleurs et palette de matières", en: "Colour palette and material palette" },
  "investment.alacarte.2.b2": { fr: "Croquis et/ou plan 2D de l'espace", en: "Sketches and/or 2D plan of the space" },
  "investment.alacarte.2.b3": { fr: "Sélection du mobilier et des objets décoratifs", en: "Selection of furniture and decorative objects" },
  "investment.alacarte.2.b4": { fr: "Coordination des prestataires", en: "Supplier coordination" },
  "investment.alacarte.2.b5": { fr: "2 réunions de travail, 1 visite du lieu de réception", en: "2 working meetings,1 venue visit" },
  "investment.alacarte.2.b6": { fr: "Installation le jour J et démontage J+1", en: "Set-up on the day and dismantling on D+1" },
  "investment.alacarte.2.b7": { fr: "Livrable : <span class=\"hidden md:inline\">livret de scénographie</span><span class=\"md:hidden\">PDF</span>, croquis / plans 2D", en: "Deliverable: <span class=\"hidden md:inline\">set design booklet</span><span class=\"md:hidden\">PDF</span>, sketches / 2D plans" },
  "investment.alacarte.2.cta": { fr: "Réserver", en: "Book" },

  // Each collaboration includes
  "investment.included.h2": {
    fr: "CHAQUE COLLABORATION<br /><span class=\"font-italic-serif italic font-light\">comprend</span>",
    en: "EVERY COLLABORATION<br /><span class=\"font-italic-serif italic font-light\">includes</span>"
  },
  "investment.included.item.0": { fr: "Premier échange et entretien découverte", en: "First exchange and discovery meeting" },
  "investment.included.item.1": { fr: "Conception artistique adaptée à votre univers", en: "Artistic design tailored to your vision" },
  "investment.included.item.2": { fr: "Devis détaillé, transparent et personnalisé", en: "Detailed, transparent and personalised quote" },
  "investment.included.item.3": { fr: "Coordination de votre projet jusqu'au jour J", en: "Project coordination through to the big day" },
  "investment.included.item.4": { fr: "Suivi attentif à chaque étape", en: "Attentive follow-up at every step" },

  // Payment terms
  "investment.modalites.h2": {
    fr: "MODALITÉS<br /><span class=\"font-italic-serif italic font-light\">de paiement</span>",
    en: "PAYMENT<br /><span class=\"font-italic-serif italic font-light\">terms</span>"
  },
  "investment.modalites.0.step": { fr: "30 %", en: "30%" },
  "investment.modalites.0.label": { fr: "À la signature", en: "On signature" },
  "investment.modalites.0.desc": { fr: "Acompte non remboursable réservant votre date", en: "Non-refundable deposit securing your date" },
  "investment.modalites.1.step": { fr: "40 %", en: "40%" },
  "investment.modalites.1.label": { fr: "À J–90", en: "At D–90" },
  "investment.modalites.1.desc": { fr: "Lancement de la production et des commandes", en: "Production and orders launched" },
  "investment.modalites.2.step": { fr: "30 %", en: "30%" },
  "investment.modalites.2.label": { fr: "À J–15", en: "At D–15" },
  "investment.modalites.2.desc": { fr: "Solde avant l'installation finale", en: "Balance due before final installation" },
  "investment.modalites.note": {
    fr: "— TVA non applicable, art. 293 B du CGI —",
    en: "— VAT not applicable, art. 293 B of the French Tax Code —"
  },

  // Final CTA
  "investment.cta.h2": {
    fr: "Construisons ensemble<br /><span class=\"font-italic-serif italic font-light\">votre univers</span>",
    en: "Let's build<br /><span class=\"font-italic-serif italic font-light\">your vision</span> together"
  },
  "investment.cta.p": {
    fr: "Un devis personnalisé vous est remis après notre premier échange, sur la base de vos envies et de votre cahier des charges.",
    en: "A personalised quote is sent after our first exchange, based on your wishes and your brief."
  },
  "investment.cta.btn": { fr: "Demander un devis", en: "Request a quote" },

  // ─────────────────────────── Project detail (back link) ───────────────────────────
  "project.back": { fr: "← Tous les projets", en: "← All projects" },

  // ─────────────────────────── Language toggle button ───────────────────────────
  "lang.toggle.aria.toEN": { fr: "Switch to English", en: "Passer en français" },
};
