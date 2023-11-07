//LOGIC BEHIND THE ROCK PAPER SCISSOR

//array container for battle outcome
let battleArray={
    winresult:    "", 
    playerscore:    0, 
    computerscore:  0,
    pflav:         "",
    compflav:      "",
    playedgames:    0,
    };

//calls a random number between -1 and 1 to be assigned as computers weapon
function getComputerChoice () {
    let randomWeapon = Math.floor(Math.random() * 3) - 1;
    return randomWeapon;
};

//translates button event to a usable flavour string
function getPlayerChoiceFlavour(chosenWeapon) {
    if (chosenWeapon == -1) {
        return "rock.";
    } else if (chosenWeapon == 0) {
        return "paper.";
    } else if (chosenWeapon == 1) { 
        return "scissors.";
    };
};

//determines who wins this round by comparing stored choice values
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
function computerFlavour(computersChoice) {
    if (computersChoice == -1) {
        return "Computer chooses rock.";
    } else if (computersChoice == 0) {
        return "Computer chooses paper.";
    } else if (computersChoice == 1) {
        return "Computer chooses scissors.";
    };
};

//determines players win or loss
function winCondition(winLossCounter) {
    if (winLossCounter < 0) {
        return "Computer wins this round.";
    } else if (winLossCounter == 0 ) {
        return "It's a draw!";
    } else {
        return "You win this round.";
    }
};

//function for playing rock-paper-scissors, takes in players pressed button and battleArray, returns the result in an array
function rockPaperScissors(chosenWeapon, battleArray) {
   
    //displays players choice as flavour text
    battleArray["pflav"] = "You chose " + getPlayerChoiceFlavour(chosenWeapon);

    //calls for computers choice
    let computerWeapon = getComputerChoice();
    
    //adds computers flavour text to the array
    battleArray["compflav"] = computerFlavour(computerWeapon);

    //determines winner of that round, updates battleArray
    let decidedWinner = decideWinner(chosenWeapon, computerWeapon);
    battleArray["winresult"] = winCondition(decidedWinner);

    //updates scoreboard, if decidedWinner is negative then computer gets a point, 
    //if decidedWinner is positive player gets a point, 0 doesn't change scoreboard
    if (decidedWinner > 0) {
        battleArray["playerscore"] += 1;
    } else if (decidedWinner < 0) {
        battleArray["computerscore"] += 1;
    };

    battleArray["playedgames"] += 1;

    return battleArray;

};

//WEBSITE PART

//CONTAINER VARIABLES FOR DOM

const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const scoreBoard = document.getElementById("scoreBoard");
const playersWins = document.getElementById("playersWins");
const computersWins = document.getElementById("computersWins");
const whoWonTheRound = document.getElementById("whoWonTheRound");
const winner = document.getElementById("winner");

//PAGE REACTION TO USER INPUT

//disables game input buttons after one of the players wins
    function disableBattle() {
        document.getElementById("rockButton").disabled = true;
        document.getElementById("paperButton").disabled = true;
        document.getElementById("scissorsButton").disabled = true;
    };

//handles displayed text in scoreboard
function updateScorebard(battleArray) {
    playersWins.textContent = battleArray["playerscore"];
    computersWins.textContent = battleArray["computerscore"];
    whoWonTheRound.textContent = battleArray["winresult"];

    if (battleArray["playerscore"] >= 5) {
        winner.textContent = "You win!";
        disableBattle();

    } else if (battleArray["computerscore"] >= 5) {
        winner.textContent = "Computer wins!";
        document.querySelectorAll("#button").disabled = true;
        disableBattle();
    };
};

rockButton.addEventListener("click", () => updateScorebard((rockPaperScissors(-1, battleArray)), battleArray));

paperButton.addEventListener("click", () => updateScorebard((rockPaperScissors(0, battleArray)), battleArray));

scissorsButton.addEventListener("click", () => updateScorebard((rockPaperScissors(1, battleArray)), battleArray));


