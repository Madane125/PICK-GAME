let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const userScorePara = document.querySelector("#user_score");

const compScorePara = document.querySelector("#comp_score");

const genCompChoice = () =>{
  const Option=["rock","paper","scissor"]
  const randIdx = Math.floor(Math.random()*3);
  return Option[randIdx];
}

const winGame = () =>{
    userScore++;
    userScorePara.innerText = userScore
    console.log("You win the game !");
    msg.innerText ="You Win the game"
    msg.style.backgroundColor ="green";

   
}

const lossGame = () =>{
    compScore++;
    compScorePara.innerText = compScore;
    console.log("You Loss the game !");
    msg.innerText ="You Loss the game !"
    msg.style.backgroundColor ="red";

}





const playGame = (userChoice) =>{
console.log("User choice =",userChoice)
const compChoice = genCompChoice();
console.log("Comp choice =",compChoice)

if(userChoice === compChoice){
winGame();
}
else{
    lossGame();
}
}



choices.forEach((choice) => {
   
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id")
   
        playGame(userChoice)

    })
});