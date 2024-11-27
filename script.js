let contenuTitre = "Azertype"
let contenuParagraphe = "L'application pour apprendre a taper plus vite"

let nouvelleDiv = document.createElement("div")
let nouveauTitre = document.createElement("h1")
let nouveauParagraphe = document.createElement("p") 

nouveauTitre.textContent = contenuTitre
nouveauParagraphe.textContent = contenuParagraphe

nouvelleDiv.appendChild(nouveauTitre)
nouvelleDiv.appendChild(nouveauParagraphe)

let body = document.querySelector("body")
body.appendChild(nouvelleDiv)

let monBouton = document.getElementById("monBouton");
monBouton.addEventListener("click", function () {
    console.log("Vous avez cliqué sur le bouton")
});
document.addEventListener('keydown', (event) => {
    console.log(event.key);
});

