// let nombreElément : variable stockant le nombre d'élements au panier;
// let totalAchat : variable stockant le total des achats;
// let listeElément : variable contenant la liste des éléments au panier;
// let boutonEffacer : bouton chargez d'effacer l'ensemble du panier;
// let boutonConfirmer : bouton chargez de confirmer l'achat dans le du panier;
// let boutonRetirer : bouton chargez de retirer un élément du panier;

//let boutonAjouter : bouton chargez de l'ajout d'un élément au panier;

// let élémentImg : variable stockant l'image de l'élément achetez;
// let élémentNom : variable stockant le nom de l'élément achetez;
// let élémentPrix : variable stockant le prix de l'élément achetez;

//Création de la variable stockant le nombre d'élément ajoutez au panier et affectation de sa valeur dans le HTML
let nombreAchat = document.getElementById("nombre-achat");
let nombre = nombreAchat.innerHTML;
nombre = 0;
nombreAchat.innerHTML = nombre;

//Création de la variable stockant le total des achats ajoutez au panier et affectation de sa valeur dans le HTML(pour le bouton qui lance le modal uniquement)
let totalAchat = document.getElementById("total-achat");
let total = totalAchat.innerHTML;
total = 0;
totalAchat.innerHTML = total;

//Création de la variable stockant le total des achats ajoutez au panier et affectation de sa valeur dans le HTML(pour le modal uniquement)
let tatolAchat = document.getElementById("tatol-achat");
let tatol = tatolAchat.innerHTML;
tatol = 0;
tatolAchat.innerHTML = tatol;



//fonction chargez de la gestion de certains boutons : Ajouter au Panier; bouton icone de poubelle.
function gestionBouton(){
    let boutonAjouter = document.getElementsByClassName("bouton-achat");
    for(let i = 0; boutonAjouter.length > i; i++){
        boutonAjouter[i].addEventListener("click", ajoutAuPanierInfo);
    };
    function ajoutAuPanierInfo (event) {
        let élement = event.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        let élémentImg = élement.getElementsByClassName("élémentImg")[0].src;
        let élémentNom = élement.getElementsByClassName("élémentNom")[0].innerText;
        let élémentPrix = élement.getElementsByClassName("élémentPrix")[0].innerText;
        ajoutAuPanier(élémentImg, élémentNom, élémentPrix); 
        nombre ++;
        nombreAchat.innerHTML = nombre;
        total += Number(élémentPrix);
        totalAchat.innerHTML = Math.floor(total*100)/100;
        tatol += Number(élémentPrix);
        tatolAchat.innerHTML = Math.floor(tatol*100)/100;



        function ajoutAuPanier(élémentImg, élémentNom, élémentPrix){
            let liste = document.getElementById("liste-achat");
            let élémentDuPanier = document.createElement('div');
            élémentDuPanier.innerHTML = `
            <div class="container">
                    <div class="row">
                    <div class="col-3"><img src="${élémentImg}" alt="" class="img-fluid rounded-circle élémentImg" style="width: 100%;"></div>
                    <div class="col-3"><p class="élémentNom">${élémentNom}</p></div>
                    <div class="col-3"><p class="élémentPrix">${élémentPrix}</p></div>
                    <div class="col-3"><button class="btn btn-outline-danger boutonRetirer"><i class="fas fa-trash fa-2"></i></button></div>
                    </div>
                </div>`
            liste.appendChild(élémentDuPanier);    
            alert("Eléments ajouter au panier");
            élémentDuPanier.getElementsByClassName("boutonRetirer")[0].addEventListener("click", boutonRetirerF);
        }


        function boutonRetirerF (){
            let boutonRetirer = document.getElementsByClassName("boutonRetirer");
            for (let i = 0; boutonRetirer.length > i; i++){
                boutonRetirer[i].addEventListener("click", retirerUnElément); 
            };
            function retirerUnElément (event) {
                event.target.parentElement.parentElement.parentElement.remove();
                nombre --;
                nombreAchat.innerHTML = nombre;
                total -= Number(élémentPrix);
                totalAchat.innerHTML = Math.floor(total*100)/100;
                tatol -= Number(élémentPrix);
                tatolAchat.innerHTML = Math.floor(tatol*100)/100;
            };
        
        };
    };
};
gestionBouton();

//Fonction chargez de retirer tout les éléments via le bouton tout effacer. 
function retirerToutLesEléments(){
    let boutonEffacer = document.getElementById("effacer");
    let liste = document.getElementById("liste-achat");
    boutonEffacer.addEventListener("click",() => {
        liste.innerHTML =``;
        nombre = 0;
        nombreAchat.innerHTML = nombre;
        total = 0;
        totalAchat.innerHTML = total;
        tatol = 0;
        tatolAchat.innerHTML = tatol;
    });
};
retirerToutLesEléments()

//Fonction chargez de confirmez l'achat via le bouton confirmer.
function confirmerAchat () {
    let bouton = document.getElementById("confirmer");
    bouton.addEventListener("click", ()=>{
        alert("Achat confirmé");
    });
};
confirmerAchat();









