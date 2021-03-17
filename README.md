# consequat-app

---
### Configuration du projet
Créer un fichier `src/models/API.js` contenant ceci :
```js
export const apiKey = "API_KEY";
export const baseUrl = "https://api.spoonacular.com/";
```
Puis une fois cela fait lancer la commande `npm install` dans un terminal.

---
### Compilation et chargement à chaud pour le développement
Lancer la commande `npm run serve` dans un terminal.

---
### Compilation et minification pour la production
Avant toute chose modifier le fichier `./vue.config.js` pour y indiquer le chemin de déploiement sur le serveur.

Puis lancer la commande `npm run build` dans un terminal.