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
//         document.getElementById("timer").innerHTML = `残り時間 : ${timeLeft}s`;

//         if (timeLeft <= 0) {
//           clearInterval(timerInterval);
//           document.getElementById("button-clicker").disabled = true;

          
//           // Afficher le bouton de réinitialisation
//           let renitialiser = document.getElementById("renitialiser");
//           renitialiser.innerHTML = `<button id="button-reni">Réinitialiser</button>`;
          
//           // Ajouter l'événement pour le bouton de réinitialisation
//           document
//             .getElementById("button-reni")
//             .addEventListener("click", () => {
//               // Réinitialiser le jeu
//               count = 0;
//               timeLeft = 5;
//               timerStarted = false; // Réinitialiser le statut du minuteur
//               document.getElementById("button-clicker").disabled = false;
//               document.getElementById("counter").innerHTML = count;
//               document.getElementById("timer").innerHTML = `残り時間 : ${timeLeft} 秒`;
//               renitialiser.innerHTML = ""; // Effacer le bouton de réinitialisation
//             });
//         }
//       }, 1000);
//     }
    
//     count++;
//     document.getElementById("counter").innerHTML = count;
//     if (count > bestscore) { // Changer >= en > pour éviter de mettre à jour le meilleur score avec le même score
//       bestscore = count;
//       document.getElementById("bestscore").innerHTML = `あなたの最高得点は : ${bestscore}`;
//     }
//   });



let score = 0;
let timer = 5;
let timerInterval;

function handleGameButton() {
  const buttonClicker = document.getElementById('button-clicker');
  buttonClicker.addEventListener('click', () => {
    if (timer > 0) {
      score++;
      document.getElementById('score').innerText = score;
    }
  });
}

function handleResetButton() {
  const buttonReset = document.getElementById('button-reset');
  buttonReset.addEventListener('click', () => {
    score = 0;
    timer = 5;
    document.getElementById('score').innerText = score;
    document.getElementById('timer').innerText = timer;
    clearInterval(timerInterval);
  });
}

function startTimer() {
  timerInterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.getElementById('timer').innerText = timer;
    } else {
      clearInterval(timerInterval);
    }
  }, 1000);
}

// Start the timer when the game button is clicked
document.getElementById('button-clicker').addEventListener('click', () => {
  if (timer === 5) {
    startTimer();
  }
});
