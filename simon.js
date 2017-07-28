function simonMain(){

  let simonSeq;
  let gameInProg=true;
  let userPlaying=true;
  const colors = ["red", "blue", "yellow", "green"];


  startSimon();

  while (userPlaying) {
 
    console.log('\n *** STARTING NEW GAME');
  
    simonSeq=[];
  
    while(gameInProg){
      simonSeq.push(colors[parseInt(Math.random()*4)]);

      alert('LEVEL '+ simonSeq.length + ': demonstrating sequence');
      console.log('\n LEVEL ' + simonSeq.length + '\n demonstrating sequence');
      console.log(simonSeq);
      
      if(prompt("Did user get it right?","<y or n>").toLowerCase() === 'y'){
        console.log('user got it right');
      }
      else {
        console.log('user got it wrong');
        gameInProg = false;
      }
    }
    
    if(prompt('Game Over.  Play again?', '<y or n>').toLowerCase() === 'y'){
      console.log('\n keep playing')
    }
    else {
      userPlaying = false;
      console.log('\n Thanks for playing!');
    }

  }

}

function startSimon(){
	console.log('show landing page');
	console.log('user clicks \"Play!\"');
	alert('display landing - user clicks \"Play!\"')
}


simonMain();