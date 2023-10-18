// calls a random number between -1 and 1 to be assigned as a weapon
function getComputerChoice (randNum) {
    let randomWeapon = Math.floor(Math.random() * 3) - 1;
    return randomWeapon;
};


// translates string variable of players chosen weapon to its corresponding number
function getChoice(chosenWeapon) {
    if (chosenWeapon == "rock") {
        return -1;
    } else if (chosenWeapon == "paper") {
        return 0;
    } else if (chosenWeapon == "scissors" || chosenWeapon == "scissor") { 
        return 1;
    }
};

// determines who wins this round by comparing stored choice values
function decideWinner (playersChoice, computersChoice) {
    if (playersChoice - computersChoice == -2 || playersChoice - computersChoice == 1) {          
        return 1;  //increases winCounter for player, player wins
    } else if (playersChoice - computersChoice == -1 || playersChoice -computersChoice == 2){
        return -1; //decreases winCounter for player, player loses
    } else {
        return 0; //doesn't change the winCounter, it's a draw
    }
}

//adds battle flavour text for computers "choice"
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

// determines players win or loss
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
    } else if (winCounter > 0){ 
        return flavaFlav = "Congratulations, you won!";
    } else {
        return flavaFlav = "It's a draw overall!";
    };
}

// tracks the number of times user wins the battle
let winCounter = 0;

for (let i = 0; i < 3; i++) {

    // player chooses his "weapon"
    let playerChosenWeapon = prompt("Enter rock, paper or scissors: ");

    //cleans the input to be lowercase
    playerChosenWeapon = playerChosenWeapon.toLowerCase(playerChosenWeapon);

    //translates players choice to a number
    playerWeapon = getChoice(playerChosenWeapon);
    console.log("You chose: ", playerChosenWeapon); // adds flavor text for player choice

    //calls for computers choice
    computerWeapon = getComputerChoice();
    
    //adds computers flavour text
    console.log(battleFlavour(computerWeapon));

    //determines winner of that round
    let decidedWinner = decideWinner(playerWeapon, computerWeapon);
    console.log(winCondition(decidedWinner));
    
    //container for win/loss counter, negative represents computers win, positive players
    winCounter = winCounter + decidedWinner;
    
    //adds flavour text for wincounter
    console.log("wincounter is: ", winCounter);

    
};

//determines overall winner
let winFlavour = chooseVictor(winCounter);
console.log(winFlavour);

