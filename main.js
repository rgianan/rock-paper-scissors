let playerScore = 0;
let cpuScore = 0;
let tie = 0;

let cpuPick = '';
let result = '';

function rock () {
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

  if (cpuPick === 'Rock') {
    result = 'Tie.';
    tie++;
  } else if (cpuPick === 'Paper') {
    result = 'You lose.';
    cpuScore++;
  } else if (cpuPick === 'Scissors') {
    result = 'You win.';
    playerScore++;
  }

  alert(`You picked Rock. Computer picked ${cpuPick}. ${result}`);
  document.getElementById('ps').textContent = playerScore;
  document.getElementById('cs').textContent = cpuScore;
  document.getElementById('t').textContent = tie;
}
function paper() {
const numberRandom = Math.random();
 if (numberRandom >= 0 && numberRandom <= 1/3)
      {
      cpuPick = 'Rock';
      } 
      else if (numberRandom > 1/3 && numberRandom < 2/3)
      {
      cpuPick = 'Paper';
      }
      else if (numberRandom < 1 && numberRandom >= 2/3)
      {
      cpuPick = 'Scissors';
      }
    console.log(numberRandom)

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
  alert(`You picked Paper. Computer picked ${cpuPick}. ${result}`);
  document.getElementById('ps').textContent = playerScore;
  document.getElementById('cs').textContent = cpuScore;
  document.getElementById('t').textContent = tie;
}
function scissors () {
  const numberRandom = Math.random();
 if (numberRandom >= 0 && numberRandom <= 1/3)
      {
      cpuPick = 'Rock';
      } 
      else if (numberRandom > 1/3 && numberRandom < 2/3)
      {
      cpuPick = 'Paper';
      }
      else if (numberRandom < 1 && numberRandom >= 2/3)
      {
      cpuPick = 'Scissors';
      }
    console.log(numberRandom)

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
  alert(`You picked Scissors. Computer picked ${cpuPick}. ${result}`);
  document.getElementById('ps').textContent = playerScore;
  document.getElementById('cs').textContent = cpuScore;
  document.getElementById('t').textContent = tie;
}

