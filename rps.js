var rock = false;
var paper = false;
var scissors = false;



$('#rock').click(function(){
	 $(this).css('border-color','black')
	 $('#paper').css('border-color','pink')
	 $('#scissors').css('border-color','pink')
		
		game("rock");
		

});

$('#paper').click(function(){
	 $(this).css('border-color','black')
	 $('#rock').css('border-color','pink')
	 $('#scissors').css('border-color','pink')
		

		game("paper");

});

$('#scissors').click(function(){
	 $(this).css('border-color','black')
	 $('#rock').css('border-color','pink')
	 $('#paper').css('border-color','pink')
		
	game("scissors");

});


function game(choice){

	var computer = Math.random();

	if (computer <=0.33){

		if (choice == "rock"){
			$('#result').html("Computer chose rock!  It's a tie!");
			$('#result').css('color', 'purple')
			}
		else if(choice == "paper"){
			$('#result').html("Computer chose rock!  You win!");
			$('#result').css('color', 'green')
			}
		else{
			$('#result').html("Computer chose rock!  You lose.");
			$('#result').css('color', 'red')
		}
	      }	
	else if ( computer >= 0.34 && computer <= 0.66){
			if (choice == "rock"){
			$('#result').html("Computer chose paper!  You lose!");
			$('#result').css('color', 'red')
			}
		else if(choice == "paper"){
			$('#result').html("Computer chose paper!  It's a tie!");
			$('#result').css('color', 'purple')
			}
		else{
			$('#result').html("Computer chose paper!  You win!!");
			$('#result').css('color', 'green')
			}	
		}

	else {if (choice == "rock"){
		$('#result').html("Computer chose scissors! You win!");
		$('#result').css('color', 'green')
			}
		else if(choice == "paper"){
			$('#result').html("Computer chose scissors!  You lose!");
			$('#result').css('color', 'red')
			}
		else{
			$('#result').html("Computer chose scissors!  It's a tie!");
			$('#result').css('color', 'purple')
			}	

	}


}

