// calls a random number to be assigned as a weapon
function getComputerChoice () {
    let randomWeapon = Math.floor(Math.random() * 3) - 1;
    console.log("random number is: ", randomWeapon)
    return randomWeapon;
};


//determines weapon
function getChoice(chosenWeapon) {
    if (chosenWeapon == "rock") {
        return -1;
    } else if (chosenWeapon == "paper") {
        return 0;
    } else if (chosenWeapon == "scissors") { 
        return 1;
    }
};

// determines who wins this round
function decideWinner (playersChoice, computersChoice) {
    if (playersChoice - computersChoice == -2 || playersChoice - computersChoice == 1) {          
        return 1;  //increases winCounter for player, player wins
    } else if (playersChoice - computersChoice == -1 || playersChoice -computersChoice == 2){
        return -1; //decreases winCounter for player, player loses
    } else {
        return 0; //doesn't change the winCounter, it's a draw
    }
}

//adds battle flavour text
function battleFlavour(computersChoice) {
    let flavourText;
    if (computersChoice == "rock") {
        flavourText = "Computer chooses rock.";
    } else if (computersChoice == "paper") {
        flavourText = "Computer chooses paper.";
    } else if (computersChoice == "scissors") {
        flavourText = "Computer chooses scissors.";
    }
    return flavourText;
}

// determine player win condition
function winCondition(winLossCounter) {
    if (winLossCounter < 0) {
        return "Computer wins this round.";
    } else if (winLossCounter == 0 ) {
        return "It's a draw!";
    } else {
        return "Player wins this round.";
    }
}

// determines overall winner

function chooseVictor(winCounter) {
}

// tracks the number of times user wins the battle
let winCounter = 0;

for (let i = 0; i < 3; i++) {
    // player chooses his "weapon"
    let playerChosenWeapon = prompt("Enter rock, paper or scissors: ");
    playerWeapon = getChoice(playerChosenWeapon);
    //calls for computers choice
    computerWeapon = getChoice(getComputerChoice());
    console.log(computerWeapon); // added for debugging
    //adds flavour text
    console.log(battleFlavour(computerWeapon));
    winCounter = winCounter + decideWinner(playerWeapon, computerWeapon);
    console.log(winCounter);
    console.log(winCondition(winCounter));
}
