const D_COEF = 3;
const MAX_ATTEMPTS = 2;
const I_COEF = 3;
const RANDOM_COEF = 5;
const MAX_VALUE = 100;
const MAX_RANDOM = 7;

let activeStatus = confirm('Do you want to play a game?');
if (activeStatus === false) {
    alert('You did not become a billionaire, but can');
} else {
    let i = 1;
    let maxiRandom = MAX_RANDOM
    let totalPrize = 0;
    let prize = 100;
    let number = Math.floor(Math.random() * Math.floor(maxiRandom + 1));
    while (i <= MAX_ATTEMPTS) {
        let choice = `
        Choose a roulette pocket number from 0 to ${maxiRandom}
        Attempts left: ${MAX_ATTEMPTS - i + 1}
        Total prize: ${totalPrize}$
        Possible prize on current attempt: ${prize}$
        `
        let usersChoice = prompt(choice, '');
        if (+usersChoice === number && usersChoice !== '' && usersChoice !== null) {
            totalPrize += prize;
            activeStatus = confirm(`Congratulation, you won! Your prize is: ${totalPrize}$. Do you want to continue?`);
            if (activeStatus === false) {
                alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
                activeStatus = confirm('Do you want to play again?');
                if (activeStatus === false) {
                    break;
                }
            }
        } else if (i === MAX_ATTEMPTS) {
            alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
            activeStatus = confirm('Do you want to play again?');
            if (activeStatus === false) {
                break;
            } else {
                i = 1;
                maxiRandom = MAX_RANDOM;
                number = Math.random() * Math.floor(maxiRandom);
            }
        }
    }
}
