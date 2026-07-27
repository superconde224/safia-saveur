# Les Saveurs de Safia

Site vitrine du restaurant **Les Saveurs de Safia** (cuisine africaine, Vitry-sur-Seine). Les clients composent leur commande dans le menu, puis l'envoient par email au restaurant en un clic — pas de backend, pas de base de données.

## Fonctionnement

- Le client parcourt le menu par catégorie, ajoute des plats au panier.
- Il ouvre le panier, renseigne nom / téléphone / mode (sur place, à emporter, livraison) / notes.
- En cliquant sur **Envoyer la commande**, la commande part directement via [EmailJS](https://www.emailjs.com/) — aucune application mail ne s'ouvre, aucune connexion demandée au client.
- Le formulaire "Nous contacter" fonctionne sur le même principe.

Aucun backend : EmailJS envoie l'email directement depuis le navigateur du client vers l'adresse du restaurant.

## Configurer EmailJS (obligatoire pour que l'envoi fonctionne)

1. Crée un compte gratuit sur [emailjs.com](https://www.emailjs.com/).
2. Dans **Email Services**, ajoute un service (ex: Gmail) et connecte le compte `kemokoconde13@gmail.com` (ou l'adresse réelle du restaurant). Note le **Service ID**.
3. Dans **Email Templates**, crée un template pour les commandes avec ces variables dans le corps : `{{customer_name}}`, `{{customer_phone}}`, `{{order_mode}}`, `{{delivery_address}}`, `{{order_items}}`, `{{order_total}}`, `{{notes}}`. Mets l'adresse du restaurant en "To Email". Note le **Template ID**.
4. Crée un second template pour le formulaire de contact avec : `{{customer_name}}`, `{{customer_contact}}`, `{{message}}`. Note son **Template ID**.
5. Dans **Account > General**, récupère ta **Public Key**.
6. Renseigne ces 4 valeurs dans `lib/emailjs-config.ts` (`EMAILJS_SERVICE_ID`, `EMAILJS_ORDER_TEMPLATE_ID`, `EMAILJS_CONTACT_TEMPLATE_ID`, `EMAILJS_PUBLIC_KEY`).

Le plan gratuit permet 200 emails/mois, largement suffisant pour démarrer.

## Ce qu'il reste à personnaliser

Tout est centralisé dans **`lib/products.ts`** :

- `PRODUCTS` : la liste des plats (nom, prix en euros, description, catégorie, emoji). Ajoute / modifie / supprime une entrée pour gérer le menu.
- `CATEGORIES` : les catégories affichées en onglets.
- `RESTAURANT_EMAIL` : l'adresse qui reçoit les commandes — doit correspondre à celle configurée dans EmailJS (voir ci-dessus).
- `RESTAURANT_NAME`, `RESTAURANT_PHONE`, `RESTAURANT_ADDRESS` : affichés dans la barre du bas — à remplacer par les vraies infos.

Le logo affiché dans l'en-tête est `public/images/logo.jpg`, utilisé dans `components/Header.tsx`. Pour le changer, remplace simplement ce fichier (garde le même nom, ou mets à jour le chemin dans `Header.tsx`).

## Développement local

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Build & déploiement

Le site est exporté en statique (`output: "export"` dans `next.config.ts`) et déployé sur **GitHub Pages** via une GitHub Action (`.github/workflows/deploy.yml`) à chaque push sur `main`.

URL de prod : https://superconde224.github.io/safia-saveur/

Si un nom de domaine personnalisé est branché plus tard (fichier `CNAME` + configuration DNS), retire `basePath` et `assetPrefix` dans `next.config.ts` (ils ne sont utiles que pour servir le site depuis un sous-chemin GitHub Pages).

Pour builder localement :

```bash
npm run build
# le site statique est généré dans ./out
```
