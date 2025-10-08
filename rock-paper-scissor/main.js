// Function to generate a random integer between 0 (inclusive) and max (exclusive)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Function to get the computer's choice (rock, paper, or scissor)
function getComputerChoice() {
    let integer = getRandomInt(3); // Generate a random integer from 0 to 2
    if (integer === 0) {
        return "rock"; // Return "rock" if the integer is 0
    } else if (integer === 1) {
        return "paper"; // Return "paper" if the integer is 1
    } else {
        return "scissor"; // Return "scissor" if the integer is 2
    }
}

// Function to play a round of the game and determine the result
function playRound(user_choice, computer_choice) {
    const win_conditions = {
        "rock": "scissor", // Rock beats Scissor
        "paper": "rock",    // Paper beats Rock
        "scissor": "paper"  // Scissor beats Paper
    };

    if (user_choice === computer_choice) {
        return "It's a tie!"; // Return tie if both choices are the same
    } else if (win_conditions[user_choice] === computer_choice) {
        return "You win!"; // Return win if the user's choice beats the computer's choice
    } else {
        return "You lose!"; // Return lose if the computer's choice beats the user's choice
    }
}

// Function to handle the click event for the game
function onClickPlay(choice) {
    let user_choice = choice; // Get the user choice from the parameter
    let computer_choice = getComputerChoice(); // Get the computer choice
    let result = playRound(user_choice, computer_choice); // Play the round
    console.log(`You chose ${user_choice}, Computer chose ${computer_choice}. ${result}`); // Log the result
    document.getElementById("result").innerText = `You chose ${user_choice}, Computer chose ${computer_choice}. ${result}`;
}

// Assign click events to the elements for user interaction
document.getElementById("rock").onclick = function() { onClickPlay("rock"); };
document.getElementById("paper").onclick = function() { onClickPlay("paper"); };
document.getElementById("scissor").onclick = function() { onClickPlay("scissor"); };