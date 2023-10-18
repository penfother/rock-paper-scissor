// calls a random number between -1 and 1 to be assigned as a weapon
function getComputerChoice (randNum) {
    let randomWeapon = Math.floor(Math.random() * 3) - 1;
    return randomWeapon;
};


//determines weapon
function getChoice(chosenWeapon) {
    if (chosenWeapon == "rock") {
        return -1;
    } else if (chosenWeapon == "paper") {
        return 0;
    } else if (chosenWeapon == "scissors" || chosenWeapon == "scissor") { 
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
    if (computersChoice == -1) {
        flavourText = "Computer chooses rock.";
    } else if (computersChoice == 0) {
        flavourText = "Computer chooses paper.";
    } else if (computersChoice == 1) {
        flavourText = "Computer chooses scissors.";
    }
    return flavourText;
}

// determine player win or loss
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
    let flavaFlav;
    if (winCounter < 0 ) {
        return flavaFlav = "Computer wins, better luck next time.";
    } else { 
        return flavaFlav = "Congratulations, you won!";
    }
}

// tracks the number of times user wins the battle
let winCounter = 0;

for (let i = 0; i < 3; i++) {

    // player chooses his "weapon"
    let playerChosenWeapon = prompt("Enter rock, paper or scissors: ");
    playerWeapon = getChoice(playerChosenWeapon);
    console.log("player chose: ", playerWeapon); // added for debugging, should change to add flavor

    //calls for computers choice
    computerWeapon = getComputerChoice();
    console.log(computerWeapon); // added for debugging
    
    //adds flavour text
    console.log(battleFlavour(computerWeapon));

    //decided winner
    let decidedWinner = decideWinner(playerWeapon, computerWeapon);
    console.log(winCondition(decidedWinner));
    
    //container variable for win/loss counter
    winCounter = winCounter + decidedWinner;
    
    //adds flavour text for wincounter
    console.log("wincounter is: ", winCounter);

    
};

//says who won
let winFlavour = chooseVictor(winCounter);
console.log(winFlavour);

