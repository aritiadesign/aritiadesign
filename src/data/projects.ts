export interface Project {
  slug: string;
  title: string;
  titleItalic: string;
  subtitle: string;
  intro: string;
  credits: { label: string; value: string }[];
  hero: string;
  gallery: string[];
  /** Optional sections — text between groups of images.
   *  Use `images` for auto-split (even indices → left, odd → right),
   *  OR `left` + `right` for explicit column assignments. */
  sections?: {
    label: string;
    text?: string;
    images?: string[];
    left?: string[];
    right?: string[];
    bg?: "light" | "dark";
    motif?: string;
  }[];
  /** Optional full-width parallax image shown between credits and first section */
  parallax?: string;
  /** Optional video shown at the end of the project page */
  outroVideo?: string;
  /** Optional "moment d'exception" highlight video shown above the back CTA */
  momentVideo?: string;
  /** Optional client testimonial — extrait legal avec (...) du commentaire complet
   *  publie sur mariages.net ou autre plateforme publique */
  testimonial?: {
    quote: string;
    author: string;
  };
}

// Hashes ordered by their first appearance in the original Wix HTML
const mtImages = [
  "752875c8", "e633e2c6", "0b726195", "f70dbd2e", "b4871064", "933f69f3",
  "ca8f3f8e", "7a552030", "53504184", "18924c53", "c6ea395d", "fcb52ff9",
  "7c4b64e5", "998079ff", "8f381e48", "80aa5dc4", "f8a3ca10", "7bc97e1f",
  "638cc130", "e79a8c57", "59f355fa", "2b1f3cc7", "0641c1e6", "e6d369bf",
  "41e5ab48", "4be8135e", "805ceacb", "c35c8671", "684f5a7c", "74131e99",
  "c0370563", "9a32e3a4", "06a401f7", "6e20f0a2", "f4afdb7c", "1683eafd",
  "3b2be2cb", "67bf8433", "4cf292b1", "3e933860", "ebc3c17e", "863ec4f5",
  "dd63d6be", "1f3b1927", "36724e7e", "18e4f701", "249fcaca", "2c5bdbcb",
  "5f01928d",
].map((h) => {
  // Hero photo 1 : version pre-croppee en 3:4 pour laisser plus de verdure
  // visible au-dessus du bouquet (le master 0.5 portrait tall etait centre
  // par object-cover et coupait la greenery en haut).
  if (h === "752875c8") return "/images/projects/mt/752875c8-hero.jpg";
  return `/images/projects/mt/${h}.${["ca8f3f8e","f8a3ca10","c0370563","4be8135e"].includes(h) ? "png" : "jpg"}`;
});

// H+J : 32 photos from Mathieu Bernard Photographie + logo monogram PNG
// Hero slice(0,3) : table rectangulaire (gauche) · domaine (centre) · bouquet mariée 1 (droite)
// Named refs so we can reuse and re-order per section narrative
const hjPhoto = {
  // Hero
  domaine: "/images/projects/hj/8f83eb72.jpg",
  tableRectReception: "/images/projects/hj/2afc7804.jpg",
  bouquetMariee1: "/images/projects/hj/5af8f235.jpg",
  // Préparatifs
  logo: "/images/projects/hj/logo.jpg",
  robeMariee: "/images/projects/hj/b46d5dca.jpg",
  detailMariee: "/images/projects/hj/0d5fb2cc.jpg",
  detailMarie: "/images/projects/hj/70e39f0b.jpg",
  boutonniere: "/images/projects/hj/9b02520d.jpg",
  bouquetMariee2: "/images/projects/hj/8189450b.jpg",
  // Cérémonie (porte-alliance fermé retiré, on garde uniquement la boîte ouverte)
  bouquetEnSituation: "/images/projects/hj/e2f22604.jpg",
  panneauBienvenueEglise: "/images/projects/hj/cf4f4132.jpg",
  allee2Hjl: "/images/projects/hj/92444954.jpg",
  ceremonie1: "/images/projects/hj/c75ed223.jpg",
  ceremonie2: "/images/projects/hj/c5a60bf5.jpg",
  enfantsHonneur: "/images/projects/hj/14c7c23d.jpg",
  echangeAlliances: "/images/projects/hj/48ea3bc9.jpg",
  porteAllianceOuvert: "/images/projects/hj/95d04245.jpg",
  sortieMaries: "/images/projects/hj/4d2b8e48.jpg",
  // Cocktail
  entreeCocktail: "/images/projects/hj/531c7f6e.jpg",
  cocktailTraiteur: "/images/projects/hj/8975d6a9.jpg",
  tongaSoa: "/images/projects/hj/03cfe656.jpg",
  cocktail1: "/images/projects/hj/c30a6e69.jpg",
  miroirBienvenue: "/images/projects/hj/40627cb4.jpg",
  planDeTable1: "/images/projects/hj/361a575e.jpg",
  planDeTable2: "/images/projects/hj/c819c291.jpg",
  lanceBouquet: "/images/projects/hj/8a8bae28.jpg",
  // Réception
  tableRectReception2: "/images/projects/hj/92cd3dde.jpg",
  tableMaries: "/images/projects/hj/d6291217.jpg",
  tableMaries2: "/images/projects/hj/0b7eb9c6.jpg",
  papeterieTable: "/images/projects/hj/a53c7583.jpg",
  numeroDeTable: "/images/projects/hj/abab819d.jpg",
  couperGateau: "/images/projects/hj/44ee1e0c.jpg",
  // Portrait
  portrait1: "/images/projects/hj/d9a3dc74.jpg",
};

const efImages = [
  "b88c2457", "9c79f36a", "54587184", "492d6662", "133cc816", "baf0c9fb",
  "b0229e32", "6ab4c2f8", "e78293a1", "b45a2731", "d6f942d3", "a907026c",
  "4bcef621", "67f4f2d5", "24c7d9b8", "33680dad", "08936c52", "3691600c",
  "7980e30a", "778049ad", "01ad1414", "aec44e67", "e08ae102", "e5464f94",
  "635e1163", "09496efd", "4a03ec84", "3a4b9bca", "08b45754", "f9bdf9b5",
  "1bed96b4", "3e933860", "2c5bdbcb", "5f01928d", "f70dbd2e",
].map((h) => {
  // 3a4b9bca (ancienne vue large de la salle de reception) remplacee par
  // salle-reception.jpg : meme angle mais photo definitive mieux cadree
  if (h === "3a4b9bca") return "/images/projects/ef/salle-reception.jpg";
  return `/images/projects/ef/${h}.${["b0229e32","6ab4c2f8","4bcef621","33680dad","09496efd","08b45754"].includes(h) ? "png" : "jpg"}`;
});

export const projects: Project[] = [
  {
    slug: "mt",
    title: "MARIAGE ÉLÉGANT",
    titleItalic: "à la Française",
    subtitle: "CHÂTEAU DE PERRON, NORMANDIE",
    intro:
      "Plongez dans l'élégance intemporelle de ce mariage à la française au Château de Perron, une demeure historique nichée au cœur de la Normandie. Inspiré par l'art de vivre français et la noblesse du lieu, ce projet incarne la rencontre subtile entre tradition et raffinement, sublimée par une dimension musicale rythmant chaque instant de la célébration.",
    credits: [
      { label: "Lieu / Domaine", value: "Château de Perron" },
      { label: "Formule", value: "L'Exception • Gamme Prestige" },
      { label: "Avec", value: "Direction artistique, graphisme, scénographie, floral, papeterie" },
      { label: "Création", value: "Porte alliance en piano, cadeaux des invités" },
      { label: "Collaboration florale", value: "Alexandre Firuu Wong-Sing" },
      { label: "Photographe", value: "Stephen Meslin" },
      { label: "Vidéaste", value: "RNT Motion" },
    ],
    hero: "/images/projects/mt/752875c8.jpg",
    parallax: "/images/projects/mt/parallax-manor.jpg",
    outroVideo: "/videos/feux-artifices.mp4",
    momentVideo: "/videos/clip-intro.mp4",
    gallery: mtImages,
    sections: [
      {
        label: "Préparations",
        // skip index 3 (f70dbd2e) — duplicate of the parallax manor image
        images: mtImages.slice(4, 11),
      },
      {
        label: "Cérémonie",
        images: mtImages.slice(11, 25),
        bg: "dark",
      },
      {
        label: "Cocktail & Réception",
        images: mtImages.slice(25, -2),
      },
    ],
    testimonial: {
      quote: "Merci encore pour ce mariage qui était tout simplement magique&nbsp;! Tu as fait un travail remarquable en moins de 6 mois&nbsp;! Je recommande à 100&nbsp;%&nbsp;!",
      author: "Mélodie & Thibault",
    },
  },
  {
    slug: "ef",
    title: "MARIAGE MINIMALISTE",
    titleItalic: "bohème-tropicale",
    subtitle: "DOMAINE DES OISEAUX HEUREUX, REVEL",
    intro:
      "Entre esprit bohème et influences exotiques, ce mariage minimaliste célèbre l'âme de Madagascar. Tout en épure et en raffinement, l'événement s'articule autour d'un fil conducteur : la terre rouge de l'île, magnifiée par la pampa sous toutes ses formes. Des menus en tissu aux matières organiques, chaque détail est une ode contemporaine à l'héritage malgache.",
    credits: [
      { label: "Lieu / Domaine", value: "Domaine des Oiseaux Heureux" },
      { label: "Formule", value: "L'Exception • Gamme Signature <em>– ajustée</em>" },
      { label: "Avec", value: "Direction artistique, graphisme, scénographie, floral, papeterie" },
      { label: "Création", value: "Arche, estrade, suspension à frange, vases, numéros de table, cadeaux des invités" },
      { label: "Photographe", value: "Alliance PGS" },
    ],
    hero: "/images/projects/ef/b88c2457.jpg",
    parallax: "/images/projects/ef/parallax.jpg",
    gallery: efImages,
    sections: [
      // skip index 3 (492d6662) — used for parallax above
      { label: "Préparations", images: [
        efImages[4], efImages[5],
        efImages[6], efImages[8],
        efImages[7],
      ] },
      { label: "Cérémonie", images: efImages.slice(9, 23), bg: "dark" },
      // skip last 4 — used as footer photos
      { label: "Cocktail & Réception", images: efImages.slice(23, -4) },
    ],
    testimonial: {
      quote: "Nous avons fait appel à Aritia pour la décoration de notre mariage, et le résultat a largement dépassé nos attentes&nbsp;! De la papeterie aux compositions florales, en passant par la décoration extérieure pour la cérémonie et la salle de réception, tout était magnifique. Ce qui nous a le plus touchés, c'est la façon dont Aritia a su concrétiser nos idées, même celles qui étaient un peu floues. Notre mariage se voulait minimaliste, et elle a réussi à créer une ambiance raffinée et authentique, avec une attention particulière aux détails. Un grand merci pour avoir rendu ce jour encore plus spécial&nbsp;!<br /><br />Nous recommandons les yeux fermés&nbsp;!",
      author: "ELITAH & FYDERANA",
    },
  },
  {
    slug: "hj",
    title: "ROMANTISME MODERNE",
    titleItalic: "avec un accent culturel",
    subtitle: "DOMAINE DE SAINT-MARTIN-DE-RONSAC, SAINTE-FOY-D'AIGREFEUILLE",
    intro:
      "Une union contemporaine mariant romantisme et héritage culturel malgache au Domaine de Saint-Martin-de-Ronsac. L'harmonie visuelle s'articule autour d'une palette douce, dynamisée par les nuances naturelles du vert genévrier. Le design intègre avec précision le graphisme du aloalo, symbole ethnique fort, apportant une sophistication unique et sur-mesure à chaque détail du décor.",
    credits: [
      { label: "Lieu / Domaine", value: "Domaine de Saint-Martin-de-Ronsac, Sainte-Foy-d'Aigrefeuille" },
      { label: "Formule", value: "L'Exception • Gamme Signature" },
      { label: "Avec", value: "Direction artistique, graphisme, scénographie, floral, papeterie" },
      { label: "Création", value: "Signalétiques Église &amp; Domaine, lettres « H,J-L », plan de table, porte-alliance, urne" },
      { label: "Photographe", value: "Mathieu Bernard Photographie" },
    ],
    hero: hjPhoto.domaine,
    parallax: "/images/projects/hj/parallax.jpg",
    gallery: [
      // Hero (slice 0..3) : gauche · centre · droite
      hjPhoto.tableRectReception, hjPhoto.domaine, hjPhoto.bouquetMariee1,
    ],
    sections: [
      // PRÉPARATIFS — 5 items : L1-R1-L2(LOGO)-R2-L3 → colonne gauche (3) plus longue
      // que la droite (2), comme EF et MT. Logo monogramme en L2.
      // L1 = horizontale (détail mariée ring retouchée). Alternance bride/groom
      // parfaite : row 1 (bride|groom), row 2 (LOGO|bride), row 3 (groom|—).
      // Bow tie (R1) et boutonnière (L3) aux coins opposés. Bouquet mariée 2 gardé
      // en R2. Robe mariée retirée (outlier tonal B&W).
      {
        label: "Préparatifs",
        images: [
          hjPhoto.detailMariee,     // L1 — bride (horizontale, ring close-up)
          hjPhoto.detailMarie,      // R1 — groom (bow tie, horizontale)
          hjPhoto.logo,             // L2 — monogramme HJ (comme EF)
          hjPhoto.bouquetMariee2,   // R2 — bride avec bouquet (portrait, gardée)
          hjPhoto.boutonniere,      // L3 — groom (horizontale, opposé du bow tie)
        ],
      },
      // CÉRÉMONIE — déroulé logique de la journée, échange alliances vers la fin,
      // sortie (lancé de pétales) à la toute fin. Panneau (R1) et allée HJL (L3)
      // séparés diagonalement par enfants + cérémonie 1
      {
        label: "Cérémonie",
        bg: "dark",
        images: [
          hjPhoto.bouquetEnSituation,     // L1 — transition depuis préparatifs
          hjPhoto.panneauBienvenueEglise, // R1 — arrivée à l'église
          hjPhoto.enfantsHonneur,         // L2 — cortège
          hjPhoto.ceremonie1,             // R2 — entrée de la mariée
          hjPhoto.allee2Hjl,              // L3 — allée + HJL (séparé du panneau)
          hjPhoto.porteAllianceOuvert,    // R3 — boîte à alliances ouverte
          hjPhoto.ceremonie2,             // L4 — moment intime du couple
          hjPhoto.echangeAlliances,       // R4 — échange des alliances (avant la fin)
          hjPhoto.sortieMaries,           // L5 — sortie, lancé de pétales (FIN)
        ],
      },
      // COCKTAIL & RÉCEPTION fusionnes (comme MT) : 17 photos en une seule section
      // fond clair. Colonne gauche (8) : cocktail L (5) puis reception L (3).
      // Colonne droite (9) : cocktail R (5) puis reception R (4). Narrative conservee :
      // cocktail d'abord (debut de soiree), reception ensuite (dressage + maries + gateau).
      {
        label: "Cocktail & Réception",
        left: [
          // Cocktail
          hjPhoto.domaine,              // L1 — domaine (reuse hero #2) : ouverture
          hjPhoto.tongaSoa,             // L2 — signalétique tongasoa
          hjPhoto.cocktail1,            // L3 — ambiance cocktail
          hjPhoto.cocktailTraiteur,     // L4 — cocktail traiteur
          hjPhoto.planDeTable2,         // L5 — signalétique plan de table 2
          // Reception
          hjPhoto.tableRectReception,   // L6 — hero #1 réutilisé (table rect vue large)
          hjPhoto.numeroDeTable,        // L7 — numéro de table
          hjPhoto.tableRectReception2,  // L8 — table rect 2 (détail roses)
        ],
        right: [
          // Cocktail
          hjPhoto.miroirBienvenue,      // R1 — signalétique miroir
          hjPhoto.entreeCocktail,       // R2 — entrée du couple
          hjPhoto.planDeTable1,         // R3 — signalétique plan de table 1
          hjPhoto.lanceBouquet,         // R4 — lancé de bouquet
          hjPhoto.portrait1,            // R5 — portrait couple
          // Reception
          hjPhoto.tableMaries,          // R6 — table des mariés JOUR ✓
          hjPhoto.papeterieTable,       // R7 — papeterie table (3 fleurs couleur) ✓
          hjPhoto.tableMaries2,         // R8 — table des mariés NUIT ✓
          hjPhoto.couperGateau,         // R9 — couper le gâteau ✓
        ],
      },
    ],
    testimonial: {
      quote: "Marié en mai 2026, Aritia nous a accompagné pendant plusieurs mois jusqu'au jour J dans la décoration et l'ambiance du mariage. Nous n'avions pas d'idées précises sur la décoration que nous souhaitions avoir, et Aritia a su nous accompagner dans nos choix jusqu'aux moindres détails, la personnalisation de l'univers, l'identité visuelle ainsi que l'ambiance.<br /><br />Créative, disponible et très humaine, elle a sans aucun doute contribué à la belle réussite de notre mariage. Un grand merci. Je recommande fortement&nbsp;!",
      author: "HANTA & JOHN-LOÏS",
    },
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
