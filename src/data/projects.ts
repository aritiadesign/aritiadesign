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
      "Plongez dans l'élégance intemporelle de ce mariage à la française au Château de Perron, une demeure historique nichée au cœur de la Normandie. Inspiré par l'art de vivre français et la noblesse du lieu, ce projet incarne la rencontre subtile entre tradition et raffinement, sublimée par une dimension musicale délicate rythmant chaque instant de la célébration.",
    credits: [
      { label: "Direction Artistique", value: "Aritia Design" },
      { label: "Lieu / Domaine", value: "Château de Perron" },
      { label: "Photographie", value: "Stephen Meslin" },
      { label: "Vidéaste", value: "RNT Motion" },
      { label: "Création Florale", value: "Alexandre Firuu Wong-Sing & Aritia Design" },
      { label: "Papeterie & Design Graphique", value: "Aritia Design" },
      { label: "Décor & Scénographie", value: "Aritia Design" },
      { label: "Décor / Objet exclusif", value: "Porte alliance & urne en violoncelle" },
    ],
    hero: "/images/projects/mt/752875c8.jpg",
    parallax: "/images/projects/mt/parallax-manor.jpg",
    outroVideo: "/videos/feux-artifices.mp4",
    gallery: mtImages,
    sections: [
      {
        label: "Préparations",
        // skip index 3 (f70dbd2e) — duplicate of the parallax manor image
        images: mtImages.slice(4, 11),
      },
      {
        label: "Cérémonie",
        text:
          "Comme une mélodie jouée en filigrane, l'univers s'anime au rythme d'une ambiance musicale élégante : des notes classiques qui accompagnent les instants solennels, un porte alliance en forme de piano, une urne en forme de violoncelle, les titres des mélodies classiques préférées des mariées en guise de nom de table ou encore un gramophone pour accueillir les invités…",
        images: mtImages.slice(11, 25),
        bg: "dark",
      },
      {
        label: "Cocktail & Réception",
        text:
          "Ce fil rouge musical guide la célébration du début à la fin, jusqu'à un final grandiose : un feu d'artifice éclatant dans le ciel, chorégraphié sur un air classique, pour sceller cette symphonie d'élégance et d'émotion.",
        images: mtImages.slice(25, -2),
      },
    ],
  },
  {
    slug: "ef",
    title: "MARIAGE MINIMALISTE",
    titleItalic: "aux teintes malgaches",
    subtitle: "DOMAINE DES OISEAUX HEUREUX, REVEL",
    intro:
      "À la croisée du bohème et de l'exotisme, découvrez ce mariage minimaliste empreint de la culture malgache. Entre épure et raffinement, le voyage s'articule autour d'un fil conducteur vibrant : la terre rouge de l'île, qui colore chaque instant de la célébration, sublimée par la pampa sous toutes ses formes. Des lignes graphiques de l'arbre du voyageur aux délicats motifs du masonjoany, des menus en tissu aux matières organiques, chaque détail rend un hommage contemporain à l'héritage malgache.",
    credits: [
      { label: "Direction Artistique", value: "Aritia Design" },
      { label: "Lieu / Domaine", value: "Domaine des Oiseaux Heureux" },
      { label: "Photographie", value: "Alliance PGS" },
      { label: "Drone", value: "" },
      { label: "Création Florale", value: "Aritia Design" },
      { label: "Papeterie & Design Graphique", value: "Aritia Design" },
      { label: "Décor & Scénographie", value: "Aritia Design" },
      { label: "Cadeaux des invités", value: "Aritia Design" },
      { label: "Décor / Objet exclusif", value: "Arche, Estrade, Suspension à frange & Vases" },
    ],
    hero: "/images/projects/ef/b88c2457.jpg",
    gallery: efImages,
    sections: [
      { label: "Préparations", images: efImages.slice(3, 14) },
      { label: "Cérémonie", images: efImages.slice(14, 25), bg: "dark" },
      { label: "Cocktail & Réception", images: efImages.slice(25) },
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
