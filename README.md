# Les Saveurs de Safia

Site vitrine du restaurant **Les Saveurs de Safia** (cuisine africaine, Vitry-sur-Seine). Les clients composent leur commande dans le menu, puis l'envoient par email au restaurant en un clic — pas de backend, pas de base de données.

## Fonctionnement

- Le client parcourt le menu par catégorie, ajoute des plats au panier.
- Il ouvre le panier, renseigne nom / téléphone / mode (sur place, à emporter, livraison) / notes.
- En cliquant sur **Envoyer la commande par email**, son application mail s'ouvre avec un email pré-rempli (destinataire, objet, détail de la commande) grâce à un lien `mailto:`. Il ne reste plus qu'à cliquer sur Envoyer dans son app mail.

Aucun service tiers, aucune clé API : tout fonctionne côté client.

## Ce qu'il reste à personnaliser

Tout est centralisé dans **`lib/products.ts`** :

- `PRODUCTS` : la liste des plats (nom, prix en euros, description, catégorie, emoji). Ajoute / modifie / supprime une entrée pour gérer le menu.
- `CATEGORIES` : les catégories affichées en onglets.
- `RESTAURANT_EMAIL` : **à remplacer** — c'est l'adresse qui recevra les commandes (actuellement un placeholder `commandes@safiasaveur.example`).
- `RESTAURANT_NAME`, `RESTAURANT_PHONE`, `RESTAURANT_ADDRESS` : affichés dans le pied de page — à remplacer par les vraies infos.

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
