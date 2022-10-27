"use strict";

// Je récupère le bouton égal
let bt = document.querySelector('#bt');

// On clique du bouton = je fais faire cette fonction qui fera les fonctionnalités de la calculatrice
bt.onclick = function click(){
    // Ne pas oublier de mettre .value pour prendre la valeur de l'input 
    let nbr1 = document.querySelector('#nbr1').value;
    let nbr2 = document.querySelector('#nbr2').value;

    // récupération de la valeur du selecteur (+ - * ou /)
    let calcul = document.querySelector('#calcul').value;

    // pour convertir en nombre, parseInt pour les nombres entiers, et parseFloat pour les nombres décimaux
    let nbr1Number =parseFloat(nbr1);
    let nbr2Number =parseFloat(nbr2);
    // console.log("Le nbr1Numer est : " +typeof nbr1Number);

    // Je récupère l'input du résultat 
    let resultat = document.querySelector('#result');

    // Conditions si je choisis + - * ou /
    switch (calcul){
        case "+":
            // ne pas oublier de mettre .value car c'est dans la valeur de l'input que je vais mettre le résultat
            resultat.value = nbr1Number + nbr2Number;
            break;
        case "-":
            resultat.value = nbr1Number - nbr2Number;
            break;
        case "*":
            resultat.value = nbr1Number * nbr2Number;
            break;
        // dans la condition /, il ne faut oublier d'ajouter une condition supplément pour interdire la division par 0
        case "/":
            // Si le nbr2 est différent de zéro alors je peux faire ma division. Autrement je vais afficher la phrase "Impossible !"
            if (nbr2!=0) {
                resultat.value = nbr1Number / nbr2Number;
            } else { resultat.value = "IMPOSSIBLE !";
            }
            break;
        
    }
}

