# Pavillon Noir — Carnet de campagne V2

Site statique pour GitHub Pages, sans framework ni installation.

## Structure

- `index.html` : coque du site et navigation
- `style.css` : apparence générale
- `content.js` : **tout le contenu de campagne à modifier au fil des sessions**
- `script.js` : affichage des onglets et fiches détaillées
- `assets/` : illustrations utilisées pendant le JDR

## Navigation

Le site fonctionne avec des routes en `#` pour rester compatible avec GitHub Pages sans configuration :

- `#accueil`
- `#sessions`
- `#equipage`
- `#pnj`
- `#lore`
- `#chronologie`
- `#coulisses`

Les fiches détaillées utilisent aussi des ancres, par exemple `#personnage-solenn-brissac` ou `#session-01`.

## Mise à jour sur GitHub Pages

Remplace les anciens fichiers à la racine du dépôt par :

- `index.html`
- `style.css`
- `content.js`
- `script.js`

Puis ajoute le dossier `assets/` avec les deux images.

Il ne faut pas changer les réglages GitHub Pages si le site est déjà publié depuis `main / root`.

## Ajouter une nouvelle session

Dans `content.js`, ajoute une nouvelle entrée dans `sessions`, puis complète au besoin :

- `personnages[].evolution`
- `pnj`
- `lore`
- `chronologie`
- `coulisses.votes`

Le site est pensé pour éviter les copier-coller : une session référence les personnages, PNJ et éléments de lore par leur `id`.

## Illustrations

Les images sont affichées comme supports de campagne. La deuxième image est recadrée **visuellement par le CSS** afin de masquer au maximum les éléments d'interface visibles sur les côtés, sans modifier le fichier source.
