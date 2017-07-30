
let btnPressed = 'none';




function startSimon(){
	console.log('show landing page');
}

function sessionRun(){
  let sessionOn = true;

  console.log('user clicked start');
  console.log('*** NEW SESSION');

  while(sessionOn){
    gamePlay();
    console.log('new game prompt');

    if getBtn() = 'end'{
      console.log('user opted to end session');
      sessionOn = false;
    }
  }
  alert('Thank you for playing.');
  console.log('session end');
}

function gamePlay(){
  let simonSeq=[];
  let colors=['red', 'blue', 'yellow', 'green']
  let gameOn = true;
  let button;

  console.log('*** NEW GAME');

  while(gameOn){
    simonSeq.push(colors[parseInt(Math.random()*4)]);
    console.log('level ' + simonSeq.length + ': ' + simonSeq);

    //*** replace this with sequence processing
    button = getBtn();

    switch(button){
      case 'green':
        //user successful
        console.log('User succeeded on level ' + simonSeq.length)
        break;
      case 'red':
        //user failed
        console.log('User failed on level ' + simonSeq.length)
        gameOn = false;
        break;
    }
    console.log('game over')
  }


}



function getBtn(){
  let currBtn;

  if(btnPressed === 'none'){
    setTimeout(waitForBtn, 1000);
  }
  else{
    conole.log('retrieved button press info.')
    currBtn = btnPressed;
    btnPressed = 'none';
    return currBtn;
  }
}

function btnProc(btnDesc){
  console.log('Fielded button press: ' + btnDesc);
  btnPressed = btnDesc;
}
