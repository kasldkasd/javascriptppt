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
const playRound = (playerSelection,computerSelection) => {
    if(playerSelection=="Piedra"){
        if(computerSelection=="Piedra"){
            document.write("Empate");
        }else if(computerSelection=="Papel"){
            document.write("Perdiste");
        }else{
            document.write("Ganaste");
        }
        }
    if(playerSelection=="Papel"){
        if(computerSelection=="Piedra"){
            document.write("Ganaste");
        }else if(computerSelection=="Tijera"){
            document.write("Perdiste");
        }else{
            document.write("Empate");
        }
        }
    if(playerSelection=="Tijera"){
        if(computerSelection=="Piedra"){
            document.write("Perdiste");
        }else if(computerSelection=="Tijera"){
            document.write("Empate");
        }else{
            document.write("Ganaste");
        }
        }
    }                                                                                                                                                                                                                                                                                                                                                                                                                        
    
const game= () =>{
    for(let i=0;i<5;i++){
        let computerAnswer = computerPlay();
        let playerAnswer = playerPlay();
        playRound(playerAnswer,computerAnswer);
}
}

game();
