const cpuUserInput = document.getElementById("cpuUserInput");
const cpuEnterBtn = document.getElementById("cpuEnterBtn");
const cpuResultParent = document.getElementById("cpuResultParent");

let data;
let counter = 0;
let gameOver = 1;

async function fetchAPI(){
const response = await fetch(`https://rpsls2526dr-e6gggpduhsdmg3d8.westus3-01.azurewebsites.net/api/rpsls/TypeRockPaperScissorsLizardOrSpock/${cpuUserInput.value}`);
data = await response.text();
console.log(data); 
}

async function addResult(){
await fetchAPI();
cpuResultParent.innerHTML = "";
const resultP = document.createElement("p");
resultP.textContent = data;
cpuResultParent.appendChild(resultP);
cpuUserInput.value = "";
}

cpuEnterBtn.addEventListener("click", () => {
addResult();
})

cpuUserInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter")
    {
        addResult();
    }
})