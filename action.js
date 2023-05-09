
/* Initialisation des div en none */
let divstart =document.getElementById("start");
divstart.style.display="block";

let divplayer = document.getElementById("player");
divplayer.style.display="none";

let divsigneJ1= document.getElementById("signeJ1")
divsigneJ1.style.display="none";

let divsigneJ2= document.getElementById("signeJ2")
divsigneJ2.style.display="none";

let divwin = document.getElementById("win");
divwin.style.display="none";

let divpict = document.getElementById("pict1");
divpict.style.display="none";

let divvalid= document.getElementById("valid");
divvalid.style.display="none";

let divcompvalid= document.getElementById("validComp");
divcompvalid.style.display="none";

let divcomputer = document.getElementById("computer");
divcomputer.style.display="none";

let divlost = document.getElementById("lost");
divlost.style.display="none";

let divequal = document.getElementById("equal");
divequal.style.display="none";

let divend = document.getElementById("end");
divend.style.display="none";

let resJ1,resJ2;
/* si le joueur decide de ne pas jouer affiche end et cache start*/ 
function quit() {

      divend.style.display = "block";
    
      divstart.style.display="none";
    
  }

/* si le joueur decide de  jouer affiche player et cache start*/ 
  function play() {
     divplayer.style.display="block";
  
    divstart.style.display="none";
  }
  /* affiche le choix contre ordi ou joueur et affiche Joueur1 */
  function player_choice() {
  
     divvalid.style.display="block";
     divsigneJ1.style.display="block";
     divpict.style.display="block";
     divplayer.style.display="none";
   
  }

  function player_choice1() {
    divcompvalid.style.display="block";
    divsigneJ1.style.display="block";
    divpict.style.display="block";       
    divplayer.style.display="none";       
        
      }
    

/*Affiche joueur1 ou ordi */
  function player2() {
    var x = document.getElementById("image0");
    var sPath = x.src; 
     // source de l'image, en supposant qu'on traite l'objet oMyImage représentant notre image en Javascript
    resJ1 = sPath.substring(sPath.lastIndexOf("/")+1,sPath.length);
     // extraction du nom de fichier : tout ce qui est après le dernier slash
   
   
     x.setAttribute("src","photos/chifoumi.jpg");
     divsigneJ2.style.display="block";
     divsigneJ1.style.display="none";
    
      }
  /*random */

  function ordi() {
    var x = document.getElementById("image0");
    var sPath = x.src; 
     // source de l'image, en supposant qu'on traite l'objet oMyImage représentant notre image en Javascript
    resJ1 = sPath.substring(sPath.lastIndexOf("/")+1,sPath.length);
     // extraction du nom de fichier : tout ce qui est après le dernier slash
   
   
     x.setAttribute("src","photos/chifoumi.jpg");
     divcomputer.style.display="block";
     divsigneJ1.style.display="none";


    x.setAttribute("src","photos/chifoumi.jpg");
    var y= Math.floor(Math.random() * 3);
    if (y==0){x.setAttribute("src","photos/choix1.jpg")
    }else if (y==1){x.setAttribute("src","photos/choix0.jpg")

    }else{
      x.setAttribute("src","photos/choix2.jpg")
    }
  }
  


  /*Joueur 2 et affiche le resultat */

  function result(){
    var x = document.getElementById("image0");
    var sPath = x.src; 
    resJ2 = sPath.substring(sPath.lastIndexOf("/")+1,sPath.length);

   //alert(resJ1);
   //alert(resJ2);
   if (resJ1==resJ2){
    x.setAttribute("src","photos/egalite.jpg");
    divcomputer.style.display="none";
    divequal.style.display="block";  
    divsigneJ2.style.display="none";
     
   } 
   else if ((resJ1=="choix0.jpg" && resJ2=="choix2.jpg")||(resJ1=="choix1.jpg" && resJ2=="choix0.jpg")||(resJ1=="choix2.jpg" && resJ2=="choix1.jpg")){
    divwin.style.display="block";
    divcomputer.style.display="none";
   

    x.setAttribute("src","photos/true.jpg");
    divsigneJ2.style.display="none";

  }else{
    divlost.style.display="block";
    divcomputer.style.display="none";

    x.setAttribute("src","photos/false.jpg");
    divsigneJ2.style.display="none";
    
  }
  divpict.style.display="block";
  
    
  }
  function twFermer() {
    window.close();
  }
  
/* choisir les signes */
  function rock() {
    var x = document.getElementById("image0");
    x.setAttribute("src","photos/choix1.jpg");
  }
  function paper() {
    var x = document.getElementById("image0");
    x.setAttribute("src","photos/choix2.jpg");
  }
  function scissors() {
    var x = document.getElementById("image0");
    x.setAttribute("src","photos/choix0.jpg");
  }