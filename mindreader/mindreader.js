$(document).ready(function (){ 
	var tries = 3
	var goal = Math.floor((Math.random() * 5) + 1);
	var guess;
	
	do
	{
		guess = prompt("GUESS A NUMBER FROM 0 - 5")

		if(guess == goal)
		{
			alert("YOU CAN READ MINDS");
			break;
		}
		else
		{
			tries = tries - 1;
			if(tries <=0)
			{
				alert("YOU LOSE")
				break;
			}

			alert("TRY AGAIN");
		}
	}while(tries > 0);
})