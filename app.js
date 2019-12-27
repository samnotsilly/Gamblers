/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores , roundscores, activeplayer;

init();

document.getElementById('rollbtn').addEventListener("click",function(){

			if (gameplaying){

				//1. we want a random number to be printed when a dice is rolled
			var dice = Math.floor(Math.random () * 6) + 1;
		//2. we want to display the result 
				var diceDOM = document.querySelector('.dice');
					diceDOM.style.display ='block';
					diceDOM.src='dice-' + dice + '.png';
			//3. updqate the round score if the rolled no is not a one

				if(dice!==1){
					//add score
					roundscores += dice;
					document.querySelector('#current-'+activeplayer).textContent=roundscores;
				}
				else{

						nextplayer();
					
					//document.querySelector('.player-0-panel').classList.remove('active');
					//document.querySelector('.player-1-panel').classList.add('active');

			}


			} 

}) ;

document.getElementById('holdbtn').addEventListener('click' , function(){

		if (gameplaying){

// 1. update the score 
		scores [activeplayer ] += roundscores;

		// update the uI
		document.querySelector('#score-'+ activeplayer).textContent = scores[activeplayer];

		if (scores[activeplayer] >=20){
			document.querySelector('#name-' + activeplayer).textContent = "winner" ;
			document.querySelector('.dice').style.display='none';
			document.querySelector('.player-'+ activeplayer + '-panel').classList.add('winner');
						document.querySelector('.player-'+ activeplayer + '-panel').classList.remove('active');
						gameplaying = false;
		}
			else{

				nextplayer();
				}


			
		}
	


});

function nextplayer(){

	activeplayer===0 ? activeplayer=1 : activeplayer =0;
					roundscores =0;

					document.getElementById('current-0').textContent = 0;
					document.getElementById('current-1').textContent = 0;

					document.querySelector('.player-0-panel').classList.toggle('active');
					document.querySelector('.player-1-panel').classList.toggle('active');

					document.querySelector('.dice').style.display = 'none';


}
document.querySelector('.btn-new').addEventListener('click', init);

function init(){

	scores =[0,0];
	roundscores=0;
	activeplayer = 0;
	gameplaying = true;


document.querySelector('.dice').style.display ='none';

document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('name-0').textContent='player 1';

document.getElementById('name-1').textContent='player 2';

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}








//document.querySelector('#current-' + activeplayer).textContent = dice;
//document.querySelector('#current-' + activeplayer).innerHTML = '<em>' + dice + '<em>';
//var x= document.querySelector('#score-0').textContent;
//console.log(x);























