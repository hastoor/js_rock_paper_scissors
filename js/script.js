function getComputerChoice() {
	let computerChoice = ['rock', 'paper', 'scissors'];

	return computerChoice[Math.floor(Math.random()*computerChoice.length)];
}

function getHumanChoice() {
	let humanChoice = prompt("Choose between 'Rock', 'Paper' or 'Scissors': ");

	return humanChoice;
};

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
	humanChoice = humanChoice.toLowerCase();
	computerChoice = computerChoice.toLowerCase();

	if (humanChoice == "rock" && computerChoice == 'scissors' || 
		humanChoice == "scissors" && computerChoice == 'paper' || 
		humanChoice == "paper" && computerChoice == 'rock') {
			humanScore = ++humanScore;
	} else if (humanChoice == "rock" && computerChoice == 'paper' || 
		humanChoice == "scissors" && computerChoice == 'rock' ||
		humanChoice == "paper" && computerChoice == 'scissors') {
			computerScore = ++computerScore;
		}

	return "Human Score is: " + humanScore + ". And Computer Score is: " 
	+ computerScore + ".";
};

console.log("Computer's choice is: " + computerSelection);
console.log("Human's choice is: " + humanSelection);
console.log(playRound(humanSelection, computerSelection));