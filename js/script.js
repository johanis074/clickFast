// let count = 0;
// let bestscore = 0;
// let timerStarted = false;
// let timeLeft = 5;

// document
//   .getElementById("button-clicker")
//   .addEventListener("click", () => {
//     if (!timerStarted) {
//       timerStarted = true;

//       const timerInterval = setInterval(() => {
//         timeLeft--;
//         document.getElementById("timer").innerHTML = `Temps restant : ${timeLeft}s`;

//         if (timeLeft <= 0) {
//           clearInterval(timerInterval);
//           document.getElementById("button-clicker").disabled = true;
//           // document.getElementById("score").innerHTML = `Ton score est : ${count}`;
//           let renitilaliser = document.getElementById("renitialiser");
//           renitilaliser.innerHTML = `<button id="button-reni">renitialiser</button>`;
//         }
//       }, 1000);
//     }
    
//     count++;
//     document.getElementById("counter").innerHTML = count;
//     if(count >= bestscore){
//           bestscore = count;
//           document.getElementById("bestscore").innerHTML = `Ton meilleur score est : ${bestscore}`;
//         }

//   });
//   document
//   .getElementById("button-reni")
//   .addEventListener("click", () => {
//     document.getElementById("button-clicker").disabled = false;
//     count = 0;
//     timeLeft = 5;
//   });

  let count = 0;
let bestscore = 0;
let timerStarted = false;
let timeLeft = 5;

document
  .getElementById("button-clicker")
  .addEventListener("click", () => {
    if (!timerStarted) {
      timerStarted = true;

      const timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerHTML = `残り時間 : ${timeLeft}s`;

        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          document.getElementById("button-clicker").disabled = true;

          
          // Afficher le bouton de réinitialisation
          let renitialiser = document.getElementById("renitialiser");
          renitialiser.innerHTML = `<button id="button-reni">Réinitialiser</button>`;
          
          // Ajouter l'événement pour le bouton de réinitialisation
          document
            .getElementById("button-reni")
            .addEventListener("click", () => {
              // Réinitialiser le jeu
              count = 0;
              timeLeft = 5;
              timerStarted = false; // Réinitialiser le statut du minuteur
              document.getElementById("button-clicker").disabled = false;
              document.getElementById("counter").innerHTML = count;
              document.getElementById("timer").innerHTML = `残り時間 : ${timeLeft} 秒`;
              renitialiser.innerHTML = ""; // Effacer le bouton de réinitialisation
            });
        }
      }, 1000);
    }
    
    count++;
    document.getElementById("counter").innerHTML = count;
    if (count > bestscore) { // Changer >= en > pour éviter de mettre à jour le meilleur score avec le même score
      bestscore = count;
      document.getElementById("bestscore").innerHTML = `あなたの最高得点は : ${bestscore}`;
    }
  });
