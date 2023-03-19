// PSEDO-CODE:
// d'abord il faut recuperer les elements pour saisir le nomber et pour afficher le nombre et les resultats
// et puis il faut ajouter un eventEcouteur 'click' pour l'element saisi et afficher les resultats dans les elements concernants
 
// recuperer le champ pour saisir le nombre
let saisiChamp = document.querySelector('#consigne input');

// recuperer l'element pour afficher le nombre saisi
let nombre = document.getElementById('nombre');
// recuperer les elements pour afficher le resultat de carre et cube de nombre saisi
let carre = document.getElementById('carre');
let cube = document.getElementById('cube');

// ajouter eventEcouteur pour l'element de saisi, pour afficher les resultats dans les elements concernants
saisiChamp.addEventListener('input',function(e){
    nombre.innerHTML = e.target.value;
    carre.innerHTML = (e.target.value)**2;
    cube.innerHTML = (e.target.value)**3;
     
})