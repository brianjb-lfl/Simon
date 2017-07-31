let simonSeq = [];
let userSeq = [];
let colors = ['green', 'red', 'blue', 'yellow'];

function btnStart(){
  // called from landing page, user triggers first game
  // hide overlay
  gameRound();
}

function gameRound(){
  // new round - add a color to sequence, reset user guess array and update text
  simonSeq.push(colors[parseInt(Math.random()*4)]);
  userSeq = [];
  document.getElementById("runLevel").innerHTML = "Level " + simonSeq.length;
  document.getElementById("tempSimonSeq").innerHTML = simonSeq;       // *** remove this
}

function newGame() {
  // in active session, after completing game user triggers another game
  document.getElementById("postGame").innerHTML = "";
  simonSeq = [];
  gameRound();
}

function endSession() {
  // in active session, after completing game user opts out
  document.getElementById("postGame").innerHTML = "Thanks for playing!";
}

function btnPress(btnDesc){
  // fields all buttons except "start" button on landing page
  switch(btnDesc) {
    // game play cases
    case 'green':
    case 'red':
    case 'blue':
    case 'yellow':
      if(simonSeq[userSeq.length] === btnDesc) {
        // current guess correct
        if(simonSeq.length === (userSeq.length + 1)) {
          // user completed level successfully, trigger new level
          gameRound();
        }
        else {
          // user successful so far, level still in progress, wait for next guess
          userSeq.push(btnDesc);
        }
      }
      else {
        // user failed, update text, prompt for "play again / exit"
        document.getElementById("runLevel").innerHTML = "Levels completed:  " + (simonSeq.length-1);
        document.getElementById("tempSimonSeq").innerHTML = "";       // *** remove this
        document.getElementById("postGame").innerHTML = "Game over - Play again?";
      }

      break;
    // game end cases
    case 'again':
      // user wants to play another game
      newGame();
      break;
    case 'quit':
      // user opts out
      endSession();
      break;
  }

}
