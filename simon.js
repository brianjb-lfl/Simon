let simonSeq = [];
let userSeq = [];
let colors = ['green', 'red', 'blue', 'yellow'];
let simonStat = 'waiting';

function btnStart(){
  // called from landing page, user triggers first game
  document.getElementById("landing-Overlay").style.width = "0%";
  gameRound();
}

function gameRound(){
  // new round - add a color to sequence, reset user guess array and update text
  console.log('start gameRound')
  simonSeq.push(colors[parseInt(Math.random()*4)]);
  userSeq = [];
  document.getElementById("runLevel").innerHTML = "Level " + simonSeq.length;
  document.getElementById("tempSimonSeq").innerHTML = simonSeq;       // *** remove this
  simonStat = 'playing';
  playSimonSeq();
  simonStat = 'waiting';
}

function newGame() {
  // in active session, after completing game user triggers another game
  document.getElementById("postGame").innerHTML = "";
  playMode();
  simonSeq = [];
  gameRound();
}

function procGuess(gColor){
  if(simonSeq[userSeq.length] === gColor) {
    // current guess correct
    if(simonSeq.length === (userSeq.length + 1)) {
      // user completed level successfully, trigger new level
      gameRound();
    }
    else {
      // user successful so far, level still in progress, wait for next guess
      userSeq.push(gColor);
    }
  }
  else {
    // user failed, update text, prompt for "play again / exit"
    document.getElementById("runLevel").innerHTML = "Levels completed:  " + (simonSeq.length-1);
    document.getElementById("tempSimonSeq").innerHTML = "";       // *** remove this
    document.getElementById("postGame").innerHTML = "Game over - Play again?";
    endGMode();
  }
}

function btnPress(btnDesc){
  if(simonStat === 'waiting'){
    // fields all buttons except "start" button on landing page
    switch(btnDesc) {
      // game play cases
      case 'green':
      case 'red':
      case 'blue':
      case 'yellow':
        procGuess(btnDesc);
        break;
      // game end cases
      case 'again':
        // user wants to play another game
        newGame();
        break;
      case 'quit':
        // user opts out
        closeMode();
        break;
    }
  }
}

function playSimonSeq(){
  document.getElementById("btnG").click();
  setTimeout()
  document.getElementById("btnR").click();
  document.getElementById("btnB").click();
  document.getElementById("btnY").click(); 
}


function playMode(){
  // color buttons active, post-game buttons hidden
  document.getElementById("btnG").disabled = false;
  document.getElementById("btnR").disabled = false;
  document.getElementById("btnB").disabled = false;
  document.getElementById("btnY").disabled = false;

  document.getElementById("btnPA").style.visibility = "hidden";
  document.getElementById("btnQ").style.visibility = "hidden";
}

function endGMode(){
  // post-game buttons visible, color buttons disabled
  document.getElementById("btnG").disabled = true;
  document.getElementById("btnR").disabled = true;
  document.getElementById("btnB").disabled = true;
  document.getElementById("btnY").disabled = true;

  document.getElementById("btnPA").style.visibility = "visible";
  document.getElementById("btnQ").style.visibility = "visible";  
}

function closeMode(){
  // after user quits session, re-hide post-game buttons, update text
  document.getElementById("postGame").innerHTML = "Thanks for playing!";
  document.getElementById("btnPA").style.visibility = "hidden";
  document.getElementById("btnQ").style.visibility = "hidden";    
}