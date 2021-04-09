function computerPlay() {
    let num = Math.ceil(Math.random()*3);
    let game = ['','rock', 'paper', 'scissors'];
    return game[num];
}

function disableButtons() {
    let rocket = document.querySelector('#rock');
    let papet = document.querySelector('#paper');
    let scisset = document.querySelector('#scissors');
    rocket.disabled = true;
    papet.disabled = true;
    scisset.disabled = true;
}

function playRound(playerSelection, computerSelection) {

        let divCenter = document.querySelector('#right');
        let pInCenterP = document.createElement('p');
        let pInCenter;

            if (playerSelection == computerSelection) {
                pInCenter = document.createTextNode(`That\'s Draw, No Points`);
                pInCenterP.appendChild(pInCenter);
                divCenter.appendChild(pInCenterP);
            } else if (playerSelection == 'rock' && computerSelection == 'paper') {
                compScore++;
                pInCenter = document.createTextNode(`You Lost! Paper beats Rock. Score: ${playerScore} - ${compScore}`);
                pInCenterP.appendChild(pInCenter);
                divCenter.appendChild(pInCenterP);
            } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
                playerScore++;
                pInCenter = document.createTextNode(`You Won! Rock beats Scissors. Score: ${playerScore} - ${compScore}`);
                pInCenterP.appendChild(pInCenter);
                divCenter.appendChild(pInCenterP);
            } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
                compScore++;
                pInCenter = document.createTextNode(`You Lost! Scissors beats Paper. Score: ${playerScore} - ${compScore}`);
                pInCenterP.appendChild(pInCenter);
                divCenter.appendChild(pInCenterP);
            } else if (playerSelection == 'paper' && computerSelection == 'rock') {
                playerScore++;
                pInCenter = document.createTextNode(`You Won! Paper beats Rock. Score: ${playerScore} - ${compScore}`);
                pInCenterP.appendChild(pInCenter);
                divCenter.appendChild(pInCenterP);
            } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
                compScore++;
                pInCenter = document.createTextNode(`You Lost! Rock beats Scissors. Score: ${playerScore} - ${compScore}`);
                pInCenterP.appendChild(pInCenter);
                divCenter.appendChild(pInCenterP);
            } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
                playerScore++;
                pInCenter = document.createTextNode(`You Won! Scissors beats Paper. Score: ${playerScore} - ${compScore}`);
                pInCenterP.appendChild(pInCenter);
                divCenter.appendChild(pInCenterP);
            }

    checkScore(playerScore, compScore);
}

function checkScore(pS, cS) {

    let divCenter = document.querySelector('#right');
    if (pS == 5) {
        let pS = document.createTextNode(`You Won, Congratulations! (Restart The Game To Start Playing Again)`);
        divCenter.appendChild(pS);
        disableButtons()
    }
    if (cS == 5) {
        let cS = document.createTextNode(`Unfortunately, You Lost (Restart The Game To Start Playing Again)`);
        divCenter.appendChild(cS);
        disableButtons()
    }
}

function game(playerSelection, computerSelection) {
        let rock = document.querySelector('#rock');
        let paper = document.querySelector('#paper');
        let scissors = document.querySelector('#scissors');
        
        let divComp = document.querySelector('#center');
        let img = document.createElement("img");
        img.style.cssText = "display: block; margin-left: auto; margin-right: auto; width: 55%;";
        img.src = "main_rock.png";
        divComp.appendChild(img);

        rock.addEventListener('click', () => {
            playerSelection = 'rock';
            computerSelection = computerPlay();
            if (computerSelection == 'rock' ) {
                img.src = "main_rock.png";
                divComp.appendChild(img);
            } else if (computerSelection == 'paper') {
                img.src = "main_paper.png";
                divComp.appendChild(img);
            } else {
                img.src = "main_scissors.png";
                divComp.appendChild(img);
            }
            playRound(playerSelection, computerSelection);
        })
        paper.addEventListener('click', () => {
            playerSelection = 'paper';
            computerSelection = computerPlay();
            if (computerSelection == 'rock' ) {
                img.src = "main_rock.png";
                divComp.appendChild(img);
            } else if (computerSelection == 'paper') {
                img.src = "main_paper.png";
                divComp.appendChild(img);
            } else {
                img.src = "main_scissors.png";
                divComp.appendChild(img);
            }
            playRound(playerSelection, computerSelection);
        })
        scissors.addEventListener('click', () => {
            playerSelection = 'scissors';
            computerSelection = computerPlay();
            if (computerSelection == 'rock' ) {
                img.src = "main_rock.png";
                divComp.appendChild(img);
            } else if (computerSelection == 'paper') {
                img.src = "main_paper.png";
                divComp.appendChild(img);
            } else {
                img.src = "main_scissors.png";
                divComp.appendChild(img);
            }
            playRound(playerSelection, computerSelection);
        })
}

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click',() => location.reload());

let playerScore = 0;
let compScore = 0;
let playerSelection;
let computerSelection;
console.log(playerScore);
game(playerSelection, computerSelection);

