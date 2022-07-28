const buttons = document.querySelectorAll("button");
var NbPoint = 0;
var NbPoint2 = 0;
var Egalités = 0;
var NbPart = 0;
var PointT = 0;


    for (let i = 0; i < buttons.length; i++) 
    {

      document.querySelector(".Money").innerHTML = `Vous avez ${PointT} coins`;

      buttons[i].addEventListener("click", function() 
      {
        const joueur = buttons[i].innerHTML;
        const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
        let resultat = "";
		console.log(joueur, robot);
          if (joueur === robot) 
          {
          
            resultat = "Egalité";
            Egalités = Egalités + 1;
          } 


          else if ((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Feuille" && robot === "Pierre") || (joueur === "Ciseaux" && robot === "Feuille")) 

          {
          
            resultat = "Gagné";
            NbPoint = NbPoint + 1;

          }

          else

          { 
          
            resultat = "Perdu";
            NbPoint2 = NbPoint2 + 1;

          }

        NbPart = Egalités + NbPoint2 + NbPoint;
        
        document.querySelector(".PlayerRobot").innerHTML = 
          `
          Joueur : ${joueur}  </br>

          Al Capone : ${robot} </br>
          `;
        document.querySelector(".PerduGagne").innerHTML = 
          `
          ${resultat} </br>
          `;
        document.querySelector(".Victoires").innerHTML = 
          `
          Nombre de Victoires : ${NbPoint} </br>
          Victoires de Al Capone : ${NbPoint2} </br>
          `;
        document.querySelector(".Parties").innerHTML = 
          `
          Vous avez fait ${NbPart} parties, il vous reste donc ${10 - NbPart} parties .
          `;

        document.querySelector(".VicDef").innerHTML = `` ;

        if (NbPart === 10) 
        {
          document.querySelector(".PlayerRobot").innerHTML = ``;
          document.querySelector(".PerduGagne").innerHTML = ``;
          document.querySelector(".Victoires").innerHTML = ``;
          document.querySelector(".Parties").innerHTML = ``;

          if (NbPoint > NbPoint2) 
          {

            document.querySelector(".VicDef").innerHTML = `VOUS AVEZ GAGNE LE COMBAT ! (vous avez gagné ${NbPoint} manches, vous gagnez donc 100 coins par manche renportées)`;
            var P = 100;

          }

          else if (NbPoint === NbPoint2)

          {

            document.querySelector(".VicDef").innerHTML = `VOUS AVEZ FAIT UNE EGALITE (vous avez gagné ${NbPoint} manches, vous gagnez donc 50 coins par manche renportées)`;
            var P = 50;

          }

          else

          {

            document.querySelector(".VicDef").innerHTML = `VOUS AVEZ PERDU LE COMBAT (vous avez gagné ${NbPoint} manches, vous gagnez donc 25 coins par manche renportées)`;
            var P = 25;

          }


          PointT = PointT + (P * NbPoint);

          NbPoint = 0;
          NbPoint2 = 0;
          NbPart = 0;
          Egalités = 0;

          document.querySelector(".Money").innerHTML = `Vous avez ${PointT} coins`;


        } 

      });

    }