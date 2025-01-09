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
