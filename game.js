console.log('Game has begun')

function userPlay() {
    return window.prompt('type one: rock, scissors or paper')
}

function computerPlay() {
    const options = { 'Paper': 0, 'Scissor': 1, 'Rock': 2 }
    const play = Math.floor(Math.random() * 10 / 3.3)
    return Object.keys(options)[play]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    playerSelection = playerSelection[0].toUpperCase() + [...playerSelection].slice(1,).join('')
    computerSelection = computerSelection.toLowerCase()
    computerSelection = computerSelection[0].toUpperCase() + [...computerSelection].slice(1,).join('')
    if (computerSelection == playerSelection) {
        return `Both players chose ${computerSelection}. Nobody wins.`
    }
    const options = { 'Paper': 0, 'Scissor': 1, 'Rock': 2 }
    const player = options[playerSelection]
    const computer = options[computerSelection]
    let winner, loser, string;
    if (Math.abs(player - computer) == 1) {
        loser = Math.min(player, computer)
        winner = Math.max(player, computer)
    } else {
        loser = Math.max(player, computer)
        winner = Math.min(player, computer)
    }
    string = winner == player ? 'You win!' : 'You lose'
    return `${string} ${Object.keys(options)[winner]} beats ${Object.keys(options)[loser]}.`
}


function game() {
    let userSelection = userPlay()
    let user = 0, computer = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound(userSelection, computerPlay())
        console.log(result)
        if (result.includes('win!')) user++
        if (result.includes('lose')) computer++
    }

    console.log(`You: ${user}, Computer: ${computer}`)
    if (user == computer) {
        return console.log('Even')
    }
    user > computer ? console.log('You won!') : console.log('You lost')
}

game()

