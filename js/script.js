function getComputerChoice() {
	let computerChoice = ['Rock', 'Paper', 'Scissors'];

	return computerChoice[Math.floor(Math.random()*computerChoice.length)];
}

function getHumanChoice() {
	let humanChoice = prompt("Choose between 'Rock', 'Paper' or 'Scissors': ");

	return humanChoice;
};