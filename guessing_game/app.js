let maximum = parseInt(prompt("Enter the maximum number"));

//!maximum은 0도 처리해준다.
while (!maximum){
    maximum = parseInt(prompt("Enter a valid number!"));
}

//Math.random()은 0과 1 사이에서 랜덤한 수를 반환한다. 
const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = (prompt("Enter your first guess! (Type 'q' to quit)"));
let attempts = 1; 

while (parseInt(guess) !== targetNum){
    if (guess === 'q') break;
    guess = parseInt(guess);
    if(guess > targetNum) {
        guess = prompt ("Too high! Enter a new guess:");
        attempts ++; 
    } else if (guess < targetNum) {
        guess = prompt ("Too low! Enter a new guess:");
        attempts ++; 
    } else {
        guess = prompt ("Invalid guess. Please enter a number or 'q' to quit");
    }
}

if (guess === 'q'){
    console.log("Quitting...");
} else {
    alert ("You got the number right!");
    console.log("You got the number right!");
    alert (`It took ${attempts} guesses.`);
    console.log(`It took ${attempts} guesses`);
}