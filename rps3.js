let playerScore = 0;
let computerScore = 0;

//Gets the computers choice
function getComputerChoice(computerSelection){
    let choice = ["rock","paper","scissors"];
    computerSelection = choice[Math.floor(Math.random()*choice.length)]
    return computerSelection;
}

//Gets the users choice
let getUserChoice = (playerSelection) => {
    while(true) {
        playerSelection = prompt("Pick your weapon! \n Rock, paper or scissors?");
        playerSelection - playerSelection.toLowerCase();
        if (playerSelection === "rock"|| playerSelection === "paper" || playerSelection === "scissors") {
            return playerSelection;
            break; 
    } else {
        alert("Please pick either rock, paper or scissors");
    }}}

//Play one round 
function playRound() {
    let playerSelection = getUserChoice();
    let computerSelection = getComputerChoice();
if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection=== "rock")||
    (playerSelection === "paper" && computerSelection === "scissors"))
{
        ++computerScore;
        return ("Computer picked " + computerSelection + ". You lost. Computer score is " + computerScore + ". Your score is " + playerScore + "."); 
        
} else if (
    (playerSelection === "rock" && computerSelection === "scissors")||
    (playerSelection === "paper" && computerSelection === "rock")||
(   playerSelection === "scissors" && computerSelection === "paper"))
{
    ++playerScore;    
    return ("Computer picked " + computerSelection + ". You win. Computer score is " + computerScore + ". Your score is " + playerScore + ".");

} else if 
    (playerSelection === computerSelection) {
        return ("It's a tie! Computer score is " + computerScore + ". Your score is " + playerScore + "."); }
else {
        return ("invalid game");
    }

}
//Play best out of 5
function game(){
    for (let i = 0; i < 10;  i++) 
        { console.log(playRound()); 
            if (playerScore === 3) {
            console.log("You won best out of 5!")
                    break;
            } else if (computerScore === 3)
            {console.log("The computer won best out of 5")
                    break;
}}}

//play the game
console.log(game());