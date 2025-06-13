"use strict";
fetch('https://jsonplaceholder.typicode.com/users')
    .then(reponse => reponse.json())
    .then(data => afficheUtilisateurs(data));
function afficheUtilisateurs(usersList) {
    var _a;
    for (const utilisateur of usersList) {
        const modele = document.querySelector('article');
        // 1 - Créer un clone
        // qu'est ce qu'il se passe si je trouve pas <article>?
        if (!modele) {
            console.log("Je n'ai pas trouvé <article");
            return;
        }
        const clone = modele.cloneNode(true);
        // 2 - Ajouter le clone dans la page
        // qu'est ce qu'il se passe si je trouve pas <section>?
        (_a = document.querySelector('section')) === null || _a === void 0 ? void 0 : _a.append(clone);
        // 3 - modifier l'HTML
        const h3HTML = clone.querySelector('h3');
        if (h3HTML) {
            h3HTML.innerHTML = utilisateur.name;
        }
    }
}
