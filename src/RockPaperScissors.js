var rock = "rock";
var paper = "paper";
var scissors = "scissors";


shoot(userTurn(), computerTurn());

function userTurn() {

	var userSelection = prompt("Choose rock, paper, or scissors to begin!");

	if (userSelection == rock || userSelection == paper || userSelection == scissors) {
		return userSelection;
	} else {
		userTurn();
	}
}

function computerTurn(computerSelectionArgument) {

	// This is where I tend to get stuck when testing. This function works/
	// It gives me rock, paper or scissors randomly. But the trouble I have 
	// is in testing it. I have even added a redundant argument as a means of 
	// testing it. In my specs on the left, I pass in certain number combos 
	// to see if I get the desired result. The problem is all of these tests
	// are failing. I am getting stuck quite often when it comes to situations
	// like this one and I don't seem to have an answer for it. Any advice?

	// Attempt at only using the random method if nothing is passed in
	// If something is passed in, use that number instead to test this function
	// There has to be a better way...
	if (computerSelectionArgument !== null) {
		this.computerSelection = computerSelectionArgument;
	} else {
		computerSelection = Math.random();
	}

	if (computerSelection <= 0.33) {
   		 return rock;
    
    } else if(computerSelection >= 0.34 && computerSelection <= 0.66) {
    	return paper;
    
    } else if (computerSelection >= 0.67) {
    	return scissors;
    }
}

function shoot(userSelection, computerSelection) {
	
	if (userSelection == computerSelection) {
		alert("It's a tie!");
		return "tie";
	
	} else if (userSelection == rock) {
		if (computerSelection == scissors) {
			alert("Your rock beats their scissors. You win!");
			return "win";
		} else if (computerSelection == paper) {
			alert("Their paper beats your rock. You lose!");
			return "lose";
		}
	
	} else if (userSelection == paper) {
		if (computerSelection == rock) {
			alert("Your paper beats their rock. You win!");
			return "win";
		} else if (computerSelection == scissors) {
			alert("Their scissors beat your paper. You lose!");
			return "lose";
		}
	
	} else if (userSelection == scissors) {
		if (computerSelection == paper) {
			alert("Your scissors beat their paper. You win!");
			return "win";
		} else if (computerSelection == rock) {
			alert("Their rock beats your scissors. You lose!");
			return "lose";
		}
	}
}