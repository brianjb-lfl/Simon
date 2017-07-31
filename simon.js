let simonSeq = [];
let userSeq = [];
let colors = ['green', 'red', 'blue', 'yellow'];
//I made a change to the version on the branch

function btnStart(){
  // hide overlay
  gameRound();
}

function gameRound(){
  simonSeq.push(colors[parseInt(Math.random()*4)]);
  document.getElementById("runLevel").innerHTML = "Level " + simonSeq.length;
  document.getElementById("tempSimonSeq").innerHTML = simonSeq;       // *** remove this
}

function newGame() {
  document.getElementById("postGame").innerHTML = "";
  simonSeq = [];
  gameRound();
}

function endSession() {
  document.getElementById("postGame").innerHTML = "Thanks for playing!";
}

function btnPress(btnDesc){
/*  sequence logic pending
    placeholder process:
    green = user was successful
    other = user failed          */

  console.log('button press fielded - ' + btnDesc);

  switch(btnDesc) {
    case 'green':
      gameRound();
      break;
    
    case 'red':
    case 'blue':
    case 'yellow':
      document.getElementById("runLevel").innerHTML = "";
      document.getElementById("tempSimonSeq").innerHTML = "";       // *** remove this
      document.getElementById("postGame").innerHTML = "Game over - Play again?";
      break;
    case 'again':
      newGame();
      break;
    case 'quit':
      endSession();
      break;
  }

}
