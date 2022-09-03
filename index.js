const OPTIONS = ["rock", "paper", "scissors"];

function computerPlay() {
    let randomComputerOption =
        Math.floor(Math.random() * 3);
    return OPTIONS[randomComputerOption];
}

function gameRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    return ("You Lose! Rock beats Scissors!");
                case "paper":
                    return ("You Win! Scissors beats Paper!");
                case "scissors":
                    return ("Draw! You both picked the same!");
                default:
                    return ("Oops! Not a valid option!");
            }

        case "paper":
            switch (computerSelection) {
                case "rock":
                    return ("You Win! Paper beats Rock!");
                case "paper":
                    return ("Draw! You both picked the same!");
                case "scissors":
                    return ("You Lose! Scissors beats Paper!");
                default:
                    return ("Oops! Not a valid option!");
            }

        case "rock":
            switch (computerSelection) {
                case "rock":
                    return ("Draw! You both picked the same!");
                case "paper":
                    return ("You Lose! Paper beats Rock!");
                case "scissors":
                    return ("You Win! Rock beats Scissors!");
                default:
                    return ("Oops! Not a valid option!");
            }
        default:
            return ("Oops! Not a valid option!");
    }
}

let COMPUTER_SELECTION;
let playerSelection;
let playerScore = 0
let computerScore = 0;
let gameRounds = 0;

function round() {
    playerSelection = prompt("Please select an option between Rock, Paper, Scissors", "Rock");
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == 'exit')
        return;
    COMPUTER_SELECTION = computerPlay();
    alert(gameRound(playerSelection, COMPUTER_SELECTION));
    console.log(gameRound(playerSelection, COMPUTER_SELECTION));
    let gameOutcome = gameRound(playerSelection, COMPUTER_SELECTION);
    if (gameOutcome.includes("Win")) {
        playerScore++;
        gameRounds++
    }
    else if (gameOutcome.includes("Lose")) {
        computerScore++;
        gameRounds++;
    }
    else if (gameOutcome.includes("Draw"))
        gameRounds++;
    alert(`
    Your score: ${playerScore}
    Computer score: ${computerScore}
    Round: ${gameRounds}/5`);
}

function game() {
    alert("Please note that you can type 'exit' at any moment to exit the game!");
    for (let i = 0; i < 5; i++) {
        round();
        if (playerSelection == 'exit') {
            alert(`Score is ${playerScore} for you and ${computerScore} for computer!`);
            return;
        }
        if (OPTIONS.includes(playerSelection)) {
            if (gameRounds == 5) {
                alert(`
                5 rounds have passed! 
                Score is ${playerScore} for you and ${computerScore} for computer!`);
                let finalOutcome = playerScore > computerScore ? "You won the game!"
                    : playerScore == computerScore ? "It's a draw!"
                        : "You lost vs the computer? Really?";
                alert(finalOutcome);
                let restart = prompt("Type 'Try Again' if you want to restart the game!", "Try Again");
                if (restart.toLocaleLowerCase() == 'try again')
                    game();
            }
        }
        else {
            alert("Please pick a valid option!");
            i--;
        }
    }
}

game();