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
const response = await fetch(`https://rpsls2526dr-e6gggpduhsdmg3d8.westus3-01.azurewebsites.net/api/rpsls/TypeRockPaperScissorsLizardOrSpock/${cpuUserInput.value}`);
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

async function pvpFetchAPI(){
const response = await fetch(`https://rpsls2526dr-e6gggpduhsdmg3d8.westus3-01.azurewebsites.net/api/rpsls/pvp/${pvpUser1Input.value}/${pvpUser2Input.value}`);
data = await response.text();
console.log(data); 
pvpResultParent.innerHTML = "";
resultP = document.createElement("p");
resultP.textContent = data;
pvpResultParent.appendChild(resultP);
if ((pvpUser1Input.value.toUpperCase() === "ROCK" || pvpUser1Input.value.toUpperCase() === "PAPER" || pvpUser1Input.value.toUpperCase() === "SCISSORS" || pvpUser1Input.value.toUpperCase() === "LIZARD" || pvpUser1Input.value.toUpperCase() === "SPOCK") && (pvpUser2Input.value.toUpperCase() === "ROCK" || pvpUser2Input.value.toUpperCase() === "PAPER" || pvpUser2Input.value.toUpperCase() === "SCISSORS" || pvpUser2Input.value.toUpperCase() === "LIZARD" || pvpUser2Input.value.toUpperCase() === "SPOCK") ) {
counter++;
console.log(counter)}
if(counter >= gameOver)
{pvpUser1Input.disabled = true;
pvpEnter1Btn.disabled = true;
pvpUser2Input.disabled = true;
pvpEnter2Btn.disabled = true;
const gameOverMessage = document.createElement("p");
gameOverMessage.textContent = "GAME OVER";
resultP.appendChild(gameOverMessage);
const playAgainBtn = document.createElement("button");
playAgainBtn.textContent = "Play Again?";
playAgainBtn.addEventListener("click", () => {
resetGame();
})
gameOverMessage.appendChild(playAgainBtn);
pvpUser1Input.value = "";
pvpUser2Input.value = "";
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

pvpEnter1Btn.addEventListener("click", async () => {
    await pvpFetchAPI();
})

pvpEnter1Btn.addEventListener("keypress", async (event) => {
    if (event.key === "Enter")
    {
    await pvpFetchAPI();
    }
})
pvpEnter2Btn.addEventListener("click", async () => {
    await pvpFetchAPI();
})

pvpEnter2Btn.addEventListener("keypress", async (event) => {
    if (event.key === "Enter")
    {
    await pvpFetchAPI();
    }
})