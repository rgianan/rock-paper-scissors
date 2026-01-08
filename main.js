let score = JSON.parse(localStorage.getItem('score'));
let result = ''

console.log(score);



function pick (playerPick) {   //parameter
  const cpuPick = roll();
  if(playerPick === 'Rock') {
    if (cpuPick === "Rock") {
      result='It\'s a tie';
      score.tie++;
    } else if (cpuPick === "Paper") {
      result='You lose';
      score.cpuScore++;
    } else if (cpuPick === "Scissors") {
      result='You win';
      score.playerScore++;
    }
  } else if(playerPick === 'Paper') {
    if (cpuPick === "Rock") {
      result='You win';
      score.playerScore++;
    } else if (cpuPick === "Paper") {
      result='It\'s a tie';
      score.tie++;
    } else if (cpuPick === "Scissors") {
      result='You lose';
      score.cpuScore++;
    }
  } else if(playerPick === 'Scissors') {
    if (cpuPick === "Rock") {
      result='You lose';
      score.cpuScore++;
    } else if (cpuPick === "Paper") {
      result='You win';
      score.playerScore++;
    } else if (cpuPick === "Scissors") {
      result='It\'s a tie';
      score.tie++;
    }
  }
  alert(`You picked ${playerPick}. Computer picked ${cpuPick}. ${result} 
    Wins: ${score.playerScore}, Loses: ${score.cpuScore}, Ties: ${score.tie}`);
    localStorage.setItem('score', JSON.stringify(score));
  displayScores();
}

function roll () {
  const randomNumber = Math.random();
  let cpuPick = ''
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      cpuPick = "Rock";
    } else if (randomNumber >= 1/3 && randomNumber < 2 / 3) {
      cpuPick = "Paper";
    } else if (randomNumber >= 2/3 && randomNumber <1) {
      cpuPick = "Scissors";
    }
  console.log(randomNumber);
  return cpuPick;   //return
}

function displayScores () {
    document.getElementById('ps').textContent = score.playerScore;
    document.getElementById('cs').textContent = score.cpuScore;
    document.getElementById('t').textContent = score.tie;
}

function reset() {
  score.playerScore = 0;
  score.cpuScore = 0;
  score.tie = 0;
  displayScores();
  console.clear();
  alert('Game restarted. Scores reset');
}

function loadScores () {
  document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('ps').textContent = score.playerScore;
    document.getElementById('cs').textContent = score.cpuScore;
    document.getElementById('t').textContent = score.tie; });
}


loadScores();
