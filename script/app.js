const cup00 = document.getElementById(`cup-00`);
const cup01 = document.getElementById(`cup-01`);
const cup02 = document.getElementById(`cup-02`);
const ball00 = document.getElementById(`ball-00`);
const ball01 = document.getElementById(`ball-01`);
const ball02 = document.getElementById(`ball-02`);
const winCoutner = document.getElementById(`win-counter`);
const lossCounter = document.getElementById(`loss-counter`);
const totalCounter = document.getElementById(`total-counter`);

let wins = 0;
let total = 0;

cup00.addEventListener('click', () =>{
    let userGuess = 0;
    let position = getRandomNumber();
    resetPos();
    cup00.classList.add(`move-cup`);
    chooseCorrectBall(position);
    ball00.classList.add(`move-ball`);
    winLoss(userGuess, position);
    setTimeout(resetPos, 500);
});

cup01.addEventListener('click', () =>{
    let userGuess = 1;
    let position = getRandomNumber();
    resetPos();
    cup01.classList.add(`move-cup`);
    chooseCorrectBall(position);
    ball01.classList.add(`move-ball`);
    winLoss(userGuess, position);
    setTimeout(resetPos, 500);
});

cup02.addEventListener('click', () =>{
    let userGuess = 2;
    let position = getRandomNumber();
    resetPos();
    cup02.classList.add(`move-cup`);
    chooseCorrectBall(position);
    ball02.classList.add(`move-ball`);
    winLoss(userGuess, position);
    setTimeout(resetPos, 500);
});

function getRandomNumber(){
    return Math.floor(Math.random() * 3);
}

function resetPos(){
    cup00.classList.remove(`move-cup`);
    ball00.classList.remove(`move-ball`);
    cup01.classList.remove(`move-cup`);
    ball01.classList.remove(`move-ball`);
    cup02.classList.remove(`move-cup`);
    ball02.classList.remove(`move-ball`);
}

function chooseCorrectBall(position){
    resetVisiblity();

    switch (position){
        case 0:
            ball00.classList.remove(`visibility`);
            break;
        case 1:
            ball01.classList.remove(`visibility`);
            break;
        case 2:
            ball02.classList.remove(`visibility`);
            break;   
    }
}

function resetVisiblity(){
    ball00.classList.add(`visibility`);
    ball01.classList.add(`visibility`);
    ball02.classList.add(`visibility`);
}

function winLoss(userGuess, position){
    if (userGuess === position){
        wins++;
    }
    total++;
    winCoutner.textContent = wins;
    totalCounter.textContent = total;
    lossCounter.textContent = total - wins;
}