/**
 * Menu de Safia Saveur.
 * Pour ajouter / modifier / retirer un produit, édite simplement ce tableau.
 * - id : identifiant unique (ne pas dupliquer)
 * - category : doit correspondre à un id de CATEGORIES ci-dessous
 * - image : emoji utilisé comme visuel de secours si aucune photo n'est fournie
 * - photo : chemin vers une vraie photo dans public/images/ (optionnel, prioritaire sur l'emoji)
 * - price : en euros (nombre décimal, ex: 8.5)
 */

export type Category = {
  id: string;
  label: string;
};

export type Product = {
  id: string;
  category: string;
  name: string;
  price: number;
  description: string;
  image: string;
  photo?: string;
};

export const CATEGORIES: Category[] = [
  { id: "entrees", label: "Entrées" },
  { id: "plats", label: "Plats" },
  { id: "accompagnements", label: "Accompagnements" },
  { id: "boissons", label: "Boissons" },
  { id: "desserts", label: "Desserts" },
];

export const PRODUCTS: Product[] = [
  {
    id: "pastels",
    category: "entrees",
    name: "Pastels",
    price: 6.5,
    description: "Chaussons frits garnis de poisson ou de viande épicés, servis avec une sauce tomate pimentée.",
    image: "🥟",
    photo: "/images/pastels.jpg",
  },
  {
    id: "yassa-poulet",
    category: "plats",
    name: "Yassa au poulet",
    price: 14,
    description: "Poulet mariné au citron et à la moutarde, mijoté avec des oignons caramélisés et quelques olives. Servi avec du riz blanc.",
    image: "🍋",
    photo: "/images/yassa-poulet.jpg",
  },
  {
    id: "thiebou-dieune",
    category: "plats",
    name: "Thiéboudieune",
    price: 15,
    description: "Riz brisé mijoté dans un bouillon tomaté, poisson farci aux herbes et légumes fondants (chou, carotte, manioc). Le plat national sénégalais.",
    image: "🐟",
    photo: "/images/thieboudienne.jpg",
  },
  {
    id: "mafe-poulet",
    category: "plats",
    name: "Mafé au poulet",
    price: 14,
    description: "Sauce à la pâte d'arachide et à la tomate, morceaux de poulet mijotés, servie avec du riz blanc.",
    image: "🍲",
    photo: "/images/mafe-poulet.jpg",
  },
  {
    id: "feuilles-manioc",
    category: "plats",
    name: "Feuilles de manioc",
    price: 14,
    description: "Feuilles de manioc pilées et mijotées longuement à l'huile de palme, viande ou poisson fumé, servies avec du riz blanc.",
    image: "🍃",
    photo: "/images/feuille-manioc.jpg",
  },
  {
    id: "poisson-braise",
    category: "plats",
    name: "Poisson braisé",
    price: 16,
    description: "Poisson entier mariné aux herbes et épices, braisé et servi avec une sauce pimentée.",
    image: "🐠",
    photo: "/images/poisson-braise.jpg",
  },
  {
    id: "alloco",
    category: "accompagnements",
    name: "Alloco",
    price: 5.5,
    description: "Bananes plantains frites, sauce tomate maison.",
    image: "🍌",
    photo: "/images/alloco.jpg",
  },
  {
    id: "attieke",
    category: "accompagnements",
    name: "Attiéké",
    price: 5,
    description: "Semoule de manioc, portion nature ou en accompagnement.",
    image: "🌾",
    photo: "/images/attieke.jpg",
  },
  {
    id: "riz-blanc",
    category: "accompagnements",
    name: "Riz blanc",
    price: 4,
    description: "Portion de riz blanc nature, en accompagnement.",
    image: "🍚",
    photo: "/images/riz-blanc.jpg",
  },
  {
    id: "bissap",
    category: "boissons",
    name: "Jus de bissap",
    price: 4,
    description: "Infusion rafraîchissante de fleurs d'hibiscus, sucrée et parfumée, parfois relevée de menthe ou de vanille.",
    image: "🥤",
    photo: "/images/jus-bissap.jpg",
  },
  {
    id: "gingembre",
    category: "boissons",
    name: "Jus de gingembre",
    price: 4,
    description: "Jus de gingembre maison, rafraîchissant et épicé.",
    image: "🥤",
    photo: "/images/jus-gingembre.jpg",
  },
  {
    id: "thiakry",
    category: "desserts",
    name: "Thiakry",
    price: 5,
    description: "Dessert de couscous de mil, yaourt et vanille.",
    image: "🍮",
  },
  {
    id: "beignets-sucres",
    category: "desserts",
    name: "Beignets sucrés",
    price: 4.5,
    description: "Beignets moelleux saupoudrés de sucre.",
    image: "🍩",
  },
];

/** Adresse email qui recevra les commandes — à remplacer par la vraie adresse du restaurant. */
export const RESTAURANT_EMAIL = "commandes@safiasaveur.example";

export const RESTAURANT_NAME = "Les Saveurs de Safia";
export const RESTAURANT_PHONE = "+33 1 23 45 67 89"; // à remplacer
export const RESTAURANT_ADDRESS = "Vitry-sur-Seine, France"; // à remplacer par l'adresse exacte

// Réseaux sociaux — à remplacer par les vrais liens du restaurant.
export const RESTAURANT_WHATSAPP_URL = "https://wa.me/33123456789";
export const RESTAURANT_FACEBOOK_URL = "https://facebook.com/lessaveursdesafia";
export const RESTAURANT_TIKTOK_URL = "https://tiktok.com/@lessaveursdesafia";
