
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

var computerChoice = getComputerChoice();

var playerChoice = getPlayerChoice();


function playGame (){
    let playerScore = 0;
    let computerScore = 0;
    

function playRound(playerChoice, computerChoice) {
let result = ""


    if (playerChoice === "Skull" && computerChoice === "Blade"){
        result = "You win! The skull smashes the blade!"
        playerScore++;
    }

    else if (playerChoice === "Blade" && computerChoice === "Skin"){
        result = "You win! The blade pierces the skin!"
        playerScore++;
    }

    else if (playerChoice === "Skin" && computerChoice === "Skull") {
        result = "You win! The skin covers the skull!"
        playerScore++;
    }
    else if (playerChoice === "Skull" && computerChoice === "Skin"){
        result = "You lose! The skin covers the skull"
        computerScore++;
    }
    else if (playerChoice === "Skin" && computerChoice === "Blade"){
        result = "You lose! The blade pierces your skin!"
        computerScore++;
    }
    else if (playerChoice === "Blade" && computerChoice === "Skull"){
        result = "You lose! The skull smashes your blade!"
        computerScore++;
    }

    else {
        result = "It's a tie, you both die!"
    }

    console.log(result)
    console.log("player score is " + playerScore)
    console.log("Computer score is " + computerScore)
    
    
   

   
}
    playRound(playerChoice, computerChoice)


    while (playerScore < 5 && computerScore < 5){
        computerChoice = getComputerChoice(),
        playerChoice = getPlayerChoice(),
        playRound(playerChoice, computerChoice)
    }

    if (playerScore == 5){
        console.log("You win!")
    }
    else if (computerScore == 5){
        console.log("You lose!")
    }

}

    





playGame()
