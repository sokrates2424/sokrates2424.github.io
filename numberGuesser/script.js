let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random() * 10)

const compareGuesses = (humanGuess,computerGuess,targetNum) => {
    if(Math.abs(targetNum - humanGuess) <= Math.abs(targetNum - computerGuess)) {
            return true
    } else if(Math.abs(targetNum - humanGuess) > Math.abs(targetNum - computerGuess)) {
            return false
    } else {
        return log.console('Sorry something went wrong, please try again.')
    }
}    

function updateScore(roundWinner) {
    if (roundWinner === 'human') {
            humanScore ++ 
    } else if (roundWinner === 'computer') {
            computerScore ++
    } else {
            console.log('Something went wrong! The winner argument could not be read.');
    }
}

function advanceRound() {
    currentRoundNumber ++
}



