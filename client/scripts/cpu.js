const cpuUserInput = document.getElementById("cpuUserInput");
const cpuEnterBtn = document.getElementById("cpuEnterBtn");
const cpuResultParent = document.getElementById("cpuResultParent");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const pvpUser1Input = document.getElementById("pvpUser1Input");
const pvpEnter1Btn = document.getElementById("pvpEnter1Btn");
const pvpUser2Input = document.getElementById("pvpUser2Input");
const pvpEnter2Btn = document.getElementById("pvpEnter2Btn");


let data;
let counter = 1;
let gameOver = 1;
let resultP;

btn1.addEventListener("click", () => {
    counter = 0;
    gameOver = 1;
})

btn2.addEventListener("click", () => {
    counter = 0;
    gameOver = 3;
})

btn3.addEventListener("click", () => {
    counter = 0;
    gameOver = 7;
})

async function cpuFetchAPI(){
const response = await fetch(`https://rpsls2526dr-e6gggpduhsdmg3d8.westus3-01.azurewebsites.net/api/rpsls/cpu/${cpuUserInput.value}`);
data = await response.text();
console.log(data); 
cpuResultParent.innerHTML = "";
resultP = document.createElement("p");
resultP.textContent = data;
cpuResultParent.appendChild(resultP);
if (cpuUserInput.value.toUpperCase() === "ROCK" || cpuUserInput.value.toUpperCase() === "PAPER" || cpuUserInput.value.toUpperCase() === "SCISSORS" || cpuUserInput.value.toUpperCase() === "LIZARD" || cpuUserInput.value.toUpperCase() === "SPOCK") {
counter++;
console.log(counter)}
cpuUserInput.value = "";
if(counter >= gameOver)
{cpuUserInput.disabled = true;
cpuEnterBtn.disabled = true;
const gameOverMessage = document.createElement("p");
gameOverMessage.textContent = "GAME OVER";
resultP.appendChild(gameOverMessage);
const playAgainBtn = document.createElement("button");
playAgainBtn.textContent = "Play Again?";
playAgainBtn.addEventListener("click", () => {
resetGame();
})
gameOverMessage.appendChild(playAgainBtn);
cpuUserInput.value = "";
    counter = 0;}
}

function resetGame(){
    cpuResultParent.innerHTML = "";
    counter = 0;
    cpuUserInput.disabled = false;
cpuEnterBtn.disabled = false;
}

cpuEnterBtn.addEventListener("click", async () => {
    await cpuFetchAPI();
})

cpuUserInput.addEventListener("keypress", async (event) => {
    if (event.key === "Enter")
    {
    await cpuFetchAPI();
    }
})
