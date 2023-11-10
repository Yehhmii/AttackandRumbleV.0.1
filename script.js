//to hide the main page
const hide = document.getElementById('home');
const showFight = document.getElementById('fight');

function displayFight(){
    hide.style.display = 'none';
    showFight.style.display = 'block';
}

const loadDisplay = document.getElementById('load');

function displayload(){
    loadDisplay.style.display = 'block';
}

//to select second player randomly
document.getElementById("select").addEventListener("click", () => {
    const playerRadios = document.querySelectorAll('input[type="radio"]');

    //manually selected player
    let selectedPlayer;
    for (const radio of playerRadios) {
        if (radio.checked) {
            selectedPlayer = radio.value;
            break;
        }
    }

    //creating an array of available players for the random selection
    const availablePlayers = Array.from(playerRadios).filter((radio) => radio.value !== selectedPlayer);

    if (availablePlayers.length > 0) {
        const randomPlayer = availablePlayers[Math.floor(Math.random() * availablePlayers.length)].value;

        const selectedPlayers = [selectedPlayer, randomPlayer];

        // to show images of the selected players
        const images = document.getElementById("sPlayersimg");
         images.innerHTML =`
            <img src="${selectedPlayer}.png">
            <img src="${randomPlayer}.png">
         `;

        const fighters = `${selectedPlayer} vs.  ${randomPlayer}`;
        document.getElementById("winnerText").textContent = fighters;


           //to select a winner
       const play = document.getElementById("select")
       const fightWinnerBtn = document.getElementById("fightWinner");

       fightWinnerBtn.addEventListener("click", () => {
           const winner = selectedPlayers[Math.floor(Math.random() * selectedPlayers.length)];

        setTimeout(() => {
            const result = `${selectedPlayer} <br> vs. <br>  ${randomPlayer} <br> <h2>Winner:</h2> ${winner}`;
            document.getElementById("results").innerHTML = result;
        }, 9000);   
           
       })

    }

    
 

 });
