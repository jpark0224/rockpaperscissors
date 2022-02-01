// * Remember to run "go live" below to see your changes on save.

// * write all your code INSIDE the function below
function init() {

    const player = {
        currentChoice: null
      }
      const computer = {
        currentChoice: null
      }

      const choices = ["rock", "paper", "scissors"]
      
      const rock = document.querySelector(".rock");
      const paper = document.querySelector(".paper");
      const scissors = document.querySelector(".scissors");

        const playerChoiceSpan = document.querySelector(".playerChoice-span");
        const computerChoiceSpan = document.querySelector(".computerChoice-span");



      function computerChooses() {
          computer.currentChoice = choices[Math.floor(Math.random() * choices.length)];
      }
     
      function compareChoices(){
        computerChooses();
        if(computer.currentChoice === player.currentChoice){
          displayResult("It's a tie! The computer and player both chose " + computer.currentChoice);
        }else if(computer.currentChoice === choices[0]){
          if(player.currentChoice === choices[1]){
            displayResult("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
          }else{
            displayResult("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
          }
        }else if(computer.currentChoice === choices[1]){
          if(player.currentChoice === choices[2]){
            displayResult("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
          }else{
            displayResult("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
          }
        }else if(computer.currentChoice === choices[2]){
          if(player.currentChoice === choices[0]){
            displayResult("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
          }else{
            displayResult("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
          }         
        }
        computerChoiceSpan.textContent = `${computer.currentChoice}`
      }

      function playerChooses(){
        rock.addEventListener("click", function(){
         player.currentChoice = choices[0];
         playerChoiceSpan.textContent = "rock";
         compareChoices();
       });
        paper.addEventListener("click", function(){
            player.currentChoice = choices[1];
            playerChoiceSpan.textContent = "paper";
            compareChoices();
        });
        scissors.addEventListener("click", function(){
            player.currentChoice = choices[2];
            playerChoiceSpan.textContent = "scissors";
            compareChoices();
        });
      }

      playerChooses();

      function displayResult(result){ 
        const resultText = document.querySelector(".result");
        resultText.innerText = result;
      }

    //effects
    const playerChoices = document.querySelectorAll("img");

    function addEffect (element) {
        const onMouseOver = () => {
            element.classList.add("hover");
        }
        const onMouseOut = () => {
            element.classList.remove("hover");
        }
        const onMouseDown = () => {
            element.classList.add("mousedown");
        }
        const onMouseup = () => {
            element.classList.remove("mousedown");
        }

        element.addEventListener("mouseover", onMouseOver);
        element.addEventListener("mouseout", onMouseOut);
        element.addEventListener("mousedown", onMouseDown);
        element.addEventListener("mouseup", onMouseup);
    }

    playerChoices.forEach(element => addEffect(element));

const reset = document.querySelector(".reset");

reset.addEventListener("click", resetFunction);

function resetFunction() {
    const resultText = document.querySelector(".result");
    const playerChoiceSpan = document.querySelector(".playerChoice-span");
    const computerChoiceSpan = document.querySelector(".computerChoice-span");
    resultText.innerText = "";
    playerChoiceSpan.innerText = "";
    computerChoiceSpan.innerText = "";
    player.currentChoice = null;
    computer.currentChoice = null;
};

}

// ! do not touch below here
window.addEventListener('DOMContentLoaded', init)
