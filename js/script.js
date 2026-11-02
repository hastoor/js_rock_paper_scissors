function getComputerChoice() {
	let computerChoice = ['rock', 'paper', 'scissors'];

	return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function getHumanChoice() {
	let humanChoice = prompt("Choose between 'Rock', 'Paper' or 'Scissors': ");

	return humanChoice;
}

function playGame() {
	let humanScore = 0;
	let computerScore = 0;

	function playRound(humanChoice, computerChoice) {
		humanChoice = humanChoice.toLowerCase();
		computerChoice = computerChoice.toLowerCase();

		if (
			humanChoice == "rock" && computerChoice == 'scissors' ||
			humanChoice == "scissors" && computerChoice == 'paper' ||
			humanChoice == "paper" && computerChoice == 'rock'
		) {
			humanScore++;
			console.log("You win! " + humanChoice + " beats " + computerChoice);
		} else if (
			humanChoice == "rock" && computerChoice == 'paper' ||
			humanChoice == "scissors" && computerChoice == 'rock' ||
			humanChoice == "paper" && computerChoice == 'scissors'
		) {
			computerScore++;
			console.log("You lose! " + computerChoice + " beats " + humanChoice);
		} else {
			console.log("It's a tie!");
		}
	}

	for (let i = 0; i < 5; i++) {
		let humanSelection = getHumanChoice();
		let computerSelection = getComputerChoice();

		console.log("Human's choice: " + humanSelection);
		console.log("Computer's choice: " + computerSelection);

		playRound(humanSelection, computerSelection);
	}

	console.log("Final score:");
	console.log("Human: " + humanScore);
	console.log("Computer: " + computerScore);

	if (humanScore > computerScore) {
		console.log("You won the game!");
	} else if (computerScore > humanScore) {
		console.log("Computer won the game!");
	} else {
		console.log("The game ended in a tie!");
	}
}

playGame();