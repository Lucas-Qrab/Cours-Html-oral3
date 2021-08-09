let accueil = document.getElementById('accueil');
let profils = document.getElementById('profils');
let blogs = document.getElementById('blogs');
let chat = document.getElementById('chat');
let plus = document.getElementById('plus');
let fleche_gauche = document.getElementById('fleche_g');
let fleche_droite = document.getElementById('fleche_d');
let carroussel =document.getElementById('carroussel');

document.addEventListener('DOMContentLoaded', function(){
	couleur(accueil);
})

function couleur(spann){
	spann.style.backgroundColor = "#009aff"; //change la couleur de fond en bleu
	spann.style.Color = "white"; // change la couleur du texte en blanc 
}

accueil.addEventListener('click', function(){
	couleur(accueil); // on appel la fonction de changement de couleur au click sur l'item du menu 
})

profils.addEventListener('click', function(){
	couleur(profils); // on appel la fonction de changement de couleur au click sur l'item du menu
})

blogs.addEventListener('click', function(){
	couleur(blogs); // on appel la fonction de changement de couleur au click sur l'item du menu
})

chat.addEventListener('click', function(){
	couleur(chat); // on appel la fonction de changement de couleur au click sur l'item du menu
})

plus.addEventListener('click', function(){
	couleur(plus); // on appel la fonction de changement de couleur au click sur l'item du menu
})

var compteur = 0 ; // déclaration d'un compteur en variable globale  

function imaged(){
	
	switch(compteur){ // on applique une image en fonction de la valeur du compteur en utilisant un switch
		case 2 : 
			carroussel.style.backgroundImage = "url('1.jpg')"; 
			compteur = 0; 
			break;
		case 0 : 
			carroussel.style.backgroundImage = "url('2.jpg')";
			compteur ++;
			break;
			
		case 1 :
			carroussel.style.backgroundImage = "url('3.jpg')";
			compteur ++;
			break;
		default :
			carroussel.style.backgroundImage = "url('1.jpg')";
			break;		
	}
}

function imageg(){
	switch(compteur){
		case 0 : 
			carroussel.style.backgroundImage = "url('3.jpg')";
			compteur = 2; 
			break;
		case 1 : 
			carroussel.style.backgroundImage = "url('1.jpg')";
			compteur --;
			break;
			
		case 2 :
			carroussel.style.backgroundImage = "url('2.jpg')";
			compteur --;
			break;
		default :
			carroussel.style.backgroundImage = "url('1.jpg')";
			break;		
	}
}

fleche_droite.addEventListener('click' , function(){
	imaged (compteur); // on appel la fonction de changment d'image en fonction du click sur les felches du carrousel 
})

fleche_gauche.addEventListener('click' , function(){
	imageg(compteur);
})



