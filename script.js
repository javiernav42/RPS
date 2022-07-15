function computerplay() {
    let num = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    
    if (num === 1) {
        return "rock";
    }
    else if (num === 2){
        return "paper";
    }
    else {
        return "scissors";
    }
}


function playRound(plSel, compSel){
   
    if (plSel.toLowerCase() === compSel.toLowerCase()) {
        return "tie";
    }
    else if (plSel.toLowerCase() === "rock" && compSel.toLowerCase() === "paper"){
        return "computer";
    }
    else if (plSel.toLowerCase() === "paper" && compSel.toLowerCase() === "scissors"){
        return "computer";
    }
    else if (plSel.toLowerCase() === "scissors" && compSel.toLowerCase() === "rock"){
        return "computer";
    }
    else{
        return "player";
    }

}






function game() {
    let plScore = 0;
    let compScore = 0;
    for (let i = 0; i < 3; i++){
        let compSel = computerplay();
        let plSel = prompt("Type ROCK, PAPER, or SCISSORS.");
        let play = playRound(plSel, compSel)
        console.log(play);
       
        if (play.toLowerCase() === "player"){
           plScore++;
        }
        else if (play.toLowerCase() === "computer"){
            compScore++;
        }
        else if (play.toLowerCase() === "tie"){
             plScore++;
             compScore++;
        }
    }

    if (plScore > compScore){
        console.log("Your Score: " + plScore)
        console.log("Computers Score: " + compScore)
        console.log("You WIN!")
    }
    else if(plScore < compScore){
        console.log("Your Score: " + plScore)
        console.log("Computers Score: " + compScore)
        console.log("You LOSE.")
    }
    else {
        console.log("Your Score: " + plScore)
        console.log("Computers Score: " + compScore)
        console.log("It's a TIE.")
    }
}

console.log(game()) 

