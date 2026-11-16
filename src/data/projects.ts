export interface Project {
  slug: string;
  title: string;
  titleItalic: string;
  subtitle: string;
  intro: string;
  credits: { label: string; value: string }[];
  hero: string;
  gallery: string[];
  /** Optional sections — text between groups of images */
  sections?: { label: string; text?: string; images: string[]; bg?: "light" | "dark" }[];
  /** Optional full-width parallax image shown between credits and first section */
  parallax?: string;
  /** Optional video shown at the end of the project page */
  outroVideo?: string;
  /** Optional "moment d'exception" highlight video shown above the back CTA */
  momentVideo?: string;
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
].map((h) => `/images/projects/mt/${h}.${["ca8f3f8e","f8a3ca10","c0370563","4be8135e"].includes(h) ? "png" : "jpg"}`);

// H+J : narrative ordering — welcome signs, ceremony, reception
// Each hash maps to a specific element (see /public/images/projects/hj/)
//   7e8cc277 — bannière Tonga Soa (accueil)
//   5a11c9e8 — panneau bienvenue église (Hanta & John-Loïs)
//   da6fa0f3 — miroir de bienvenue arche
//   5ee052fd — bouquet en situation (mariée dos + demoiselles)
//   a22acc9c — boutonnière
//   bb2b34df — enfants d'honneur
//   fa3c7203 — allée de cérémonie 1
//   715891c3 — allée de cérémonie 2
//   d128eb5c — table rectangulaire réception
//   b122e591 — papeterie table
//   7e3f01e0 — numéro de table
//   8756d32e — IMG_4108 (à repositionner selon contenu final)
const hjImages = [
  "7e8cc277", "5a11c9e8", "da6fa0f3",
  "5ee052fd", "a22acc9c", "bb2b34df",
  "fa3c7203", "715891c3",
  "d128eb5c", "b122e591", "7e3f01e0", "8756d32e",
].map((h) => `/images/projects/hj/${h}.jpg`);

const efImages = [
  "b88c2457", "9c79f36a", "54587184", "492d6662", "133cc816", "baf0c9fb",
  "b0229e32", "6ab4c2f8", "e78293a1", "b45a2731", "d6f942d3", "a907026c",
  "4bcef621", "67f4f2d5", "24c7d9b8", "33680dad", "08936c52", "3691600c",
  "7980e30a", "778049ad", "01ad1414", "aec44e67", "e08ae102", "e5464f94",
  "635e1163", "09496efd", "4a03ec84", "3a4b9bca", "08b45754", "f9bdf9b5",
  "1bed96b4", "3e933860", "2c5bdbcb", "5f01928d", "f70dbd2e",
].map((h) => `/images/projects/ef/${h}.${["b0229e32","6ab4c2f8","4bcef621","33680dad","09496efd","08b45754"].includes(h) ? "png" : "jpg"}`);

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
      {
        label: "Création",
        value:
          "<ul class=\"mt-2 space-y-1 text-left inline-block\">" +
          "<li>• Plan de table</li>" +
          "<li>• Bannière avec support</li>" +
          "<li>• Lettres « H,J-L »</li>" +
          "<li>• Porte-alliances</li>" +
          "<li>• Urne</li>" +
          "<li>• Signalétiques Église & Domaine</li>" +
          "</ul>",
      },
      { label: "Photographe", value: "Mathieu Bernard Photographie" },
    ],
    hero: hjImages[2],
    gallery: hjImages,
    sections: [
      { label: "Préparations", images: [hjImages[3], hjImages[4], hjImages[5]] },
      { label: "Cérémonie", images: [hjImages[1], hjImages[6], hjImages[7]], bg: "dark" },
      { label: "Réception", images: [hjImages[0], hjImages[8], hjImages[9], hjImages[10], hjImages[11]] },
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
