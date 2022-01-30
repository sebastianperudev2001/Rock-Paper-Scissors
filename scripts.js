const jugadas = ["Rock", "Paper", "Scissors"] 
const humanScore = document.getElementById("human-score");
const machineScore = document.getElementById("machine-score"); 
let ronda = 0; 
let enEjecucion = true; 
function computerPlay() 
{
    const num = Math.round(Math.random()* (jugadas.length - 1));
    return jugadas[num];
}

const singleRound = (playerSelection, computerSelection) =>  
{
    
    
    //Situaciones en las que voy a perder
    if ( 
        (playerSelection == "Rock" && computerSelection == "Paper") || 
        (playerSelection == "Paper" && computerSelection == "Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Rock"))
    {
        machineScore.value++; 
        let string = `You Lose! Computer's ${computerSelection} beats your ${playerSelection}`;
        mostrarResultado(string, "loss");  

    }
    //Situaciones en las que voy a ganar
    else if (
        (playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Paper" && computerSelection == "Rock") || 
        (playerSelection == "Scissors" && computerSelection == "Paper")) 
    {
        humanScore.value++;
        let string = `You Win! Your ${playerSelection} beats Computer's ${computerSelection}`;
        mostrarResultado(string, "win"); 
    }
    else if (playerSelection == computerSelection) 
    {
        let string = `Its a tie. You played ${playerSelection} and computer played ${computerSelection}`; 
        mostrarResultado(string, "tie"); 
    }

    ronda++; 
    if (humanScore.value == 5) 
    {
       mostrarGanador("humano"); 
    }
    else if (machineScore.value == 5) 
    {
        mostrarGanador("maquina");
    }
}


const mostrarGanador = (ganador) =>  
{
   const container = document.getElementById("contenedor");
   const div = document.createElement("div");
   div.setAttribute("class", "alert alert-info text-center");
    div.setAttribute("id", "ganador")
   let string = `The winner is: ${ganador}!`
   div.innerText = string; 
   container.appendChild(div);
   enEjecucion = false; 
}



const accionPlayer = (event) => 
{
    if(enEjecucion) {
    const boton = event.target; 
    const texto = boton.innerText; 
    singleRound(texto, computerPlay());
    ronda++;  
    }
} 

const mostrarResultado = (string, status) => 
{
    const cuadro = document.getElementById("results");
    const div = document.createElement("div");
    div.setAttribute("id","resultado");
    div.innerText = string; 
    if (status == "win") 
    {
        div.setAttribute("class", "alert alert-success text-center");
        
    } 
    else if (status =="loss") 
    {
        div.setAttribute("class", "alert alert-danger text-center");

    }
    else if (status =="tie") 
    {
        div.setAttribute("class", "alert alert-warning text-center");
    }
    
    if (ronda == 0) 
    {
        cuadro.appendChild(div);
    }
    else 
    {
        const temp = document.getElementById("resultado");
        cuadro.replaceChild(div,temp);
    }
}

const reiniciar = () => 
{ 
    ronda = 0; 
    humanScore.value = 0;
    machineScore.value = 0;

    const resultado = document.getElementById("resultado");
    resultado.remove();
    const ganador = document.getElementById("ganador");
    ganador.remove();



    enEjecucion = true; 
   
}
const main = () => 
{

    document.getElementById("rock").addEventListener("click", accionPlayer);
    document.getElementById("scissors").addEventListener("click", accionPlayer);
    document.getElementById("paper").addEventListener("click", accionPlayer);
    document.getElementById("restart").addEventListener("click", reiniciar);
}

window.onload = main; 