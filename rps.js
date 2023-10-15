

function getComputerChoice(){
    let computerChoice = ""
    let num = Math.floor(Math.random()* 10)
    if (num < 3){
         computerChoice = "Skull"
    }
    else if (num < 7){
        computerChoice = "Blade"
    }
    else {
        computerChoice = "Skin"
    }

    return (computerChoice)

    
}

function getPlayerChoice(){
    let playerChoice = prompt("Skull, Blade or Skin?")
    

    if (playerChoice.toLowerCase() === "skull"){
        playerChoice = "Skull"
        
    }

    else if (playerChoice.toLowerCase() === "blade"){
        playerChoice = "Blade"
    }

    else if (playerChoice.toLowerCase() === "skin") {
        playerChoice = "Skin"
    }
    else { 
        alert("Wrong choice!")
        getPlayerChoice();
        
    }

    return playerChoice
}

const computerChoice = getComputerChoice();

const playerChoice = getPlayerChoice();



function playRound(playerChoice, computerChoice) {
let result = ""

    if (playerChoice === "Skull" && computerChoice === "Blade"){
        result = "You win! The skull smashes the blade!"
    }

    else if (playerChoice === "Blade" && computerChoice === "Skin"){
        result = "You win! The blade pierces the skin!"
    }

    else if (playerChoice === "Skin" && computerChoice === "Skull") {
        result = "You win! The skin covers the skull!"
    }
    else if (playerChoice === "Skull" && computerChoice === "Skin"){
        result = "You lose! The skin covers the skull"
    }
    else if (playerChoice === "Skin" && computerChoice === "Blade"){
        result = "You lose! The blade pierces your skin!"
    }
    else if (playerChoice === "Blade" && computerChoice === "Skull"){
        result = "You lose! The skull smashes your blade!"
    }

    else {
        result = "It's a tie, you both die!"
    }

    console.log(result)
    
    
   

   
}

playRound(playerChoice, computerChoice);