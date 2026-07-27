/**
 * Menu de Safia Saveur.
 * Pour ajouter / modifier / retirer un produit, édite simplement ce tableau.
 * - id : identifiant unique (ne pas dupliquer)
 * - category : doit correspondre à un id de CATEGORIES ci-dessous
 * - image : emoji utilisé comme visuel (remplaçable plus tard par une vraie photo)
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
    id: "salade-avocat",
    category: "entrees",
    name: "Salade d'avocat",
    price: 7.5,
    description: "Avocat frais, tomates, oignons rouges et vinaigrette maison.",
    image: "🥑",
  },
  {
    id: "beignets-crevettes",
    category: "entrees",
    name: "Beignets de crevettes",
    price: 9,
    description: "Beignets croustillants aux crevettes, sauce pimentée douce.",
    image: "🍤",
  },
  {
    id: "riz-gras",
    category: "plats",
    name: "Riz gras",
    price: 14,
    description: "Riz mijoté à la viande de bœuf, légumes et épices traditionnelles.",
    image: "🍚",
  },
  {
    id: "poulet-braise",
    category: "plats",
    name: "Poulet braisé",
    price: 15,
    description: "Poulet fermier mariné puis braisé, servi avec sa sauce.",
    image: "🍗",
  },
  {
    id: "yassa-poulet",
    category: "plats",
    name: "Yassa au poulet",
    price: 14,
    description: "Poulet mariné au citron et à la moutarde, mijoté avec des oignons caramélisés et quelques olives. Servi avec du riz blanc.",
    image: "🍋",
  },
  {
    id: "thiebou-dieune",
    category: "plats",
    name: "Thiéboudieune",
    price: 15,
    description: "Riz brisé mijoté dans un bouillon tomaté, poisson farci aux herbes et légumes fondants (chou, carotte, manioc). Le plat national sénégalais.",
    image: "🐟",
  },
  {
    id: "mafe",
    category: "plats",
    name: "Mafé",
    price: 14,
    description: "Sauce arachide onctueuse, viande de bœuf, riz blanc.",
    image: "🍲",
  },
  {
    id: "alloco",
    category: "accompagnements",
    name: "Alloco",
    price: 5.5,
    description: "Bananes plantains frites, sauce tomate maison.",
    image: "🍌",
  },
  {
    id: "attieke",
    category: "accompagnements",
    name: "Attiéké",
    price: 5,
    description: "Semoule de manioc, portion nature ou en accompagnement.",
    image: "🌾",
  },
  {
    id: "bissap",
    category: "boissons",
    name: "Jus de bissap",
    price: 4,
    description: "Infusion rafraîchissante de fleurs d'hibiscus, sucrée et parfumée, parfois relevée de menthe ou de vanille.",
    image: "🥤",
  },
  {
    id: "gingembre",
    category: "boissons",
    name: "Jus de gingembre",
    price: 4,
    description: "Jus de gingembre maison, rafraîchissant et épicé.",
    image: "🥤",
  },
  {
    id: "eau-minerale",
    category: "boissons",
    name: "Eau minérale",
    price: 2,
    description: "Bouteille d'eau 50cl.",
    image: "💧",
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

export const RESTAURANT_NAME = "Safia Saveur";
export const RESTAURANT_PHONE = "+33 1 23 45 67 89"; // à remplacer
export const RESTAURANT_ADDRESS = "Vitry-sur-Seine, France"; // à remplacer par l'adresse exacte
