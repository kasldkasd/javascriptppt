const btn4 = document.querySelector("#piedra");
btn4.addEventListener('click', () =>{
    let computerAnswer = computerPlay();
    playRound("Piedra",computerAnswer);
});

const btn3 = document.querySelector("#papel");
btn3.addEventListener('click', () =>{
    let computerAnswer = computerPlay();
    playRound("Papel",computerAnswer);
});

const btn2 = document.querySelector("#tijera");
btn2.addEventListener('click', () =>{
    let computerAnswer = computerPlay();
    playRound("Tijera",computerAnswer);
});


const computerPlay=()=>{
    let randomSelection  = Math.round(Math.random() * (3 - 1) + 1);
    switch(randomSelection){
        case 1:
            return "Piedra";
        case 2:
        
            return "Papel";
        case 3:
           
            return "Tijera";
    }
}
computerPlay();

const playerPlay=()=>{
    let seleccion = prompt("Elige piedra papel o tijera");
    seleccion = seleccion.toLowerCase();
    let restOfWord = seleccion.slice(1);
    seleccion = seleccion.charAt(0).toUpperCase()+restOfWord;
    return seleccion;
}

const container = document.querySelector('.container');
const results = document.createElement('div');

const playerscore = document.createElement('p');
const computerscore = document.createElement('p');
playerscore.textContent = 0;
playerscore.classList.add("playerscore");
computerscore.classList.add("computerscore");
computerscore.textContent = 0;
results.append(playerscore);
results.append(computerscore);
container.append(results);

let computerscoreselector= document.querySelector(".computerscore");
let playerscoreselector = document.querySelector(".playerscore");

let cs = computerscore.innerHTML;
let ps = playerscore.innerHTML;

const playRound = (playerSelection,computerSelection) => {

    if(playerSelection=="Piedra"){
        if(computerSelection=="Piedra"){
            alert("Empate");
        }else if(computerSelection=="Papel"){
            alert("Perdiste");
            computerscoreselector.innerHTML = cs++;
        }else{
            alert("Ganaste");
            playerscoreselector.innerHTML = ps++;
        }
        }
    if(playerSelection=="Papel"){
        if(computerSelection=="Piedra"){
            alert("Ganaste");
        }else if(computerSelection=="Tijera"){
            alert("Perdiste");
        }else{
            alert("Empate");
        }
        }
    if(playerSelection=="Tijera"){
        if(computerSelection=="Piedra"){
            alert("Perdiste");
        }else if(computerSelection=="Tijera"){
            alert("Empate");
        }else{
            alert("Ganaste");
        }
        }
    }                                                                                                                                                                                                                                                                                                                                                                                                                        
    