let playerScore = 0;
let cpuScore = 0;
let tie = 0;

let cpuPick = '';
let result = '';

function roll () {
const numberRandom = Math.random();
 if (numberRandom >= 0 && numberRandom <= 1/3)
      {
      cpuPick = 'Rock';
      } 
      else if (numberRandom > 1/3 && numberRandom < 2/3)
      {
      cpuPick = 'Paper'
      }
      else if (numberRandom < 1 && numberRandom >= 2/3)
      {
      cpuPick = 'Scissors' ; 
      }
    console.log(numberRandom)
}

function pick (playerPick) {
  roll();
  if (playerPick === 'rock')
    if (cpuPick === 'Rock') {
      result = 'Tie.';
      tie++;
    } else if (cpuPick === 'Paper') {
      result = 'You lose.';
      cpuScore++;
    } else if (cpuPick === 'Scissors') {
      result = 'You win.';
      playerScore++;
  } else if  (playerPick === 'paper') {
    if (cpuPick === 'Rock') {
      result = 'You win.';
      playerScore++;
    } else if (cpuPick === 'Paper') {
      result = 'Tie.';
      tie++;
    } else if (cpuPick === 'Scissors') {
      result = 'You lose.';
      cpuScore++;
    }
  } else if (playerPick === 'scissors') {
      if (cpuPick === 'Rock') {
      result = 'You lose.';
      cpuScore++;
    } else if (cpuPick === 'Paper') {
      result = 'You win.';
      playerScore++;
    } else if (cpuPick === 'Scissors') {
      result = 'Tie.';
      tie++;
    }
  }

  alert(`You picked ${playerPick}. Computer picked ${cpuPick}. ${result}`);
  dispResult();
}
function dispResult () {
  document.getElementById('ps').textContent = playerScore;
  document.getElementById('cs').textContent = cpuScore;
  document.getElementById('t').textContent = tie;
}