const cup00 = document.getElementById(`cup-00`);
const cup01 = document.getElementById(`cup-01`);
const cup02 = document.getElementById(`cup-02`);
const ball00 = document.getElementById(`ball-00`);
const ball01 = document.getElementById(`ball-01`);
const ball02 = document.getElementById(`ball-02`);
const winCoutner = document.getElementById(`win-counter`);
const lossCounter = document.getElementById(`loss-counter`);
const totalCounter = document.getElementById(`total-counter`);
const resetGame = document.getElementById(`reset-game`);

let wins = 0;
let total = 0;

const arr = [
    `cup00`,
    `cup01`,
    `cup02`
];

cup00.addEventListener('click', () =>{
    let userGuess = `cup00`;
    let position = getRandomItem(arr);
    resetPos();
    cup00.classList.add(`move-cup`);
    chooseCorrectBall(position);
    ball00.classList.add(`move-ball`);
    winLoss(userGuess, position);
    animate(userGuess, position);
});

cup01.addEventListener('click', () =>{
    let userGuess = `cup01`;
    let position = getRandomItem(arr);
    resetPos();
    cup01.classList.add(`move-cup`);
    chooseCorrectBall(position);
    ball01.classList.add(`move-ball`);
    winLoss(userGuess, position);
    animate(userGuess, position);
});

cup02.addEventListener('click', () =>{
    let userGuess = `cup02`;
    let position = getRandomItem(arr);
    resetPos();
    cup02.classList.add(`move-cup`);
    chooseCorrectBall(position);
    ball02.classList.add(`move-ball`);
    winLoss(userGuess, position);
    animate(userGuess, position);
});

function animate(userGuess, position){
    setTimeout(resetPos, 500);
    if (userGuess !== position){
        setTimeout(showHidingSpot, 750);
        setTimeout(resetPos, 1500);
    }
}

function getRandomItem(arr){
    let index = Math.floor(Math.random() * 3);
    return arr[index];
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
        case 'cup00':
            ball00.classList.remove(`visibility`);
            break;
        case 'cup01':
            ball01.classList.remove(`visibility`);
            break;
        case 'cup02':
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

resetGame.addEventListener(`click`, () => {
    wins = 0;
    total = 0;
    winCoutner.textContent = wins;
    totalCounter.textContent = total;
    lossCounter.textContent = total - wins;
});

function showHidingSpot(){
    cup00.classList.add(`move-cup`);
    cup01.classList.add(`move-cup`);
    cup02.classList.add(`move-cup`);
    ball00.classList.add(`move-ball`);
    ball01.classList.add(`move-ball`);
    ball02.classList.add(`move-ball`);
}