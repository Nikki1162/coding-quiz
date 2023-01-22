// Declare variables

var startScreen = document.querySelector("#start-screen")
var startGame = document.querySelector("#start")
var questionDiv = document.querySelector("#questions")
var questionText = document.querySelector("#question-title")
var // add buttons to declare variables for
var feedbackDiv = document.querySelector("#feedback")
var feedbackComments = document.querySelector("#feedback-comments")
var timerElement = document.querySelector("#time")
var endScreen = document.querySelector("#end-screen")

// Event listener to begin game

startGame.addEventListener("click", function() {
    console.log("The quiz has begun");
    startScreen.setAttribute("class", "hide");
    questionDiv.setAttribute("class", "show");
    feedbackDiv.setAttribute("class", "show");
    playGame();
}


// Function to generate and show questions at random

function randomQuestion() {
    let index = Math.floor(Math.random() * questions.length);
    // Timer to begin - 60 seconds
    timerCount = 60;
    startTimer();
}

    // Timer to begin countdown to zero

    // Query select buttons, add event listener to check for correct answer upon user clicking a button

    //  Variable to compare answer chosen to correct answer?

    // If correct, score increases, ELSE if incorrect deduct time

    //Generate next question at random

// Function to end the game

    // Show last screen of the game and display user's score

// Function to submit score

// Add score to high score list within an object, use local storage to call score list and allow user to store initials with their score

    // Save the list into local storage with the addition of the user's initials and new score

// Add a timer function

    // Set timer to deduct ten seconds for an incorrect answer