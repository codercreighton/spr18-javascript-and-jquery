var choice = prompt(" Choose rock, paper, scissors");

var computer = Math.random();

if (computer <=0.33){

	if (choice == "rock"){
	alert("Computer chose rock!  It's a tie!");
		}
	else if(choice == "paper"){
		alert("Computer chose rock!  You win!");
		}
	else{
		alert("Computer chose rock!  You lose.");
	}
      }	
else if ( 0.34 >= computer >= 0.66){
		if (choice == "rock"){
	alert("Computer chose paper!  You lose!");
		}
	else if(choice == "paper"){
		alert("Computer chosepaper!  It's a tie!");
		}
	else{
		alert("Computer chose paper!  You win!");
		}	
	}

else {if (choice == "rock"){
	alert("Computer chose scissors!  You win!");
		}
	else if(choice == "paper"){
		alert("Computer chose scissors!  It's a lose!");
		}
	else{
		alert("Computer chose scissors!  It's a tie!");
		}	

}
