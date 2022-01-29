const jugadas = ["Rock", "Paper", "Scissors"] 
let puntosHuman = 0;
let puntosMachine = 0; 

function computerPlay() 
{
    const num = Math.round(Math.random()* (jugadas.length - 1));
    return jugadas[num];
}

function singleRound(playerSelection, computerSelection) 
{
    
    //Si selecciona roca
    if (playerSelection == "Rock" && computerSelection == "Paper") 
    {
        puntosMachine++;
        return `You Lose! ${computerSelection} beats ${playerSelection}` 
    }

    if (playerSelection == "Rock" && computerSelection == "Scissors") 
    {
        puntosHuman++;
        return `You Win! ${playerSelection} beats ${computerSelection}` 
    }

    if (playerSelection == "Rock" && computerSelection == "Rock") 
    {
        return `Its a tie. You played ${playerSelection} and computer played ${computerSelection}` 
    }
    
    //Si selecciono papel

    if (playerSelection == "Paper" && computerSelection == "Scissors") 
    {
        puntosMachine++;
        return `You Lose! ${computerSelection} beats ${playerSelection}` 
    }

    if (playerSelection == "Paper" && computerSelection == "Rock") 
    {
        puntosHuman++;
        return `You Win! ${playerSelection} beats ${computerSelection}` 
    }

    if (playerSelection == "Paper" && computerSelection == "Paper") 
    {
        return `Its a tie. You played ${playerSelection} and computer played ${computerSelection}` 
    }
    //Si elijo scissors

    if (playerSelection == "Scissors" && computerSelection == "Rock") 
    {
        puntosMachine++;
        return `You Lose! ${computerSelection} beats ${playerSelection}` 
    }

    if (playerSelection == "Scissors" && computerSelection == "Paper") 
    {
        puntosHuman++;
        return `You Win! ${playerSelection} beats ${computerSelection}` 
    }

    if (playerSelection == "Scissors" && computerSelection == "Scissors") 
    {
        return `Its a tie. You played ${playerSelection} and computer played ${computerSelection}` 
    }

}


function game() 
{
    for (let i = 1; i <= 5; i++) 
    {
        let human = window.prompt("What do you want to play?");
        console.log(singleRound(human, computerPlay()));
    }
    if (puntosMachine > puntosHuman) 
        {
            console.log("Computer wins!")    
        }
        else if (puntosHuman > puntosMachine) 
        {
            console.log("Human wins")
        }
        else 
        {
            console.log("Its a tie lmao")
        }
}