// Declare variables

var startScreen = document.querySelector("#start-screen");
var startGame = document.querySelector("#start");
var questionDiv = document.querySelector("#questions");
var questionText = document.querySelector("#question-title");
var buttonA = document.querySelector("button-a");
var buttonB = document.querySelector("button-b");
var buttonC = document.querySelector("button-c");
var buttonD = document.querySelector("button-d");
var feedbackDiv = document.querySelector("#feedback");
var feedbackComments = document.querySelector("#feedback-comments");
var timerElement = document.querySelector("#time");
var endScreen = document.querySelector("#end-screen");

var score = 0;
var timerCount;
var currentQuestion = {};
var wrongAnswer = false;
var updatedQuestionList = questions;

// Event listener to begin game

startGame.addEventListener("click", begin);
function begin(event){
    startScreen.setAttribute("class", "hide");
    questionDiv.setAttribute("class", "show");
    feedbackDiv.setAttribute("class", "show");
    playGame();
}


// Function to generate and show questions at random

    // Timer to begin countdown to zero

    // Query select buttons, add event listener to check for correct answer upon user clicking a button

    //  Variable to compare answer chosen to correct answer?

    // If correct, score increases, ELSE if incorrect deduct time

    //Generate next question at random

function playgame() {
    getNewQuestion();
    timerCount = 90;
    startTimer();
    var buttons = document.querySelector("button");
    buttons.forEach(function(i) {
        i.addEventListener('click', function() {
            var checkAnswer = currentQuestion.CorrectAnswer;
            if (i.innerHTML === checkAnswer){
                score++;
                feedbackComments.innerHTML = "Woohoo! Corrext!";
                getNewQuestion();
                checkAnswer = currentQuestion.CorrectAnswer;
            }
            else { // the user has given an incorrect answer
            wrongAnswer = true;
        feedbackComments.innerHTML = "Sorry! That's not quite right";
        getNewQuestion();
        checkAnswer = currentQuestion.CorrectAnswer;
            }
        }
    }
}

// Function to end the game

    // Show last screen of the game and display user's score

function endGame(){
    questionDiv.setAttribute("class", "hide");
    feedbackDiv.setAttribute("class", "hide");
    endScreen.setAttribute("class", "show");
    var userScore = document.querySelector("#user-score");
    userScore.innerHTML=score;
    submitScore();
}

// Add score to high score list within an object, use local storage to call score list and allow user to store initials with their score

    // Function to submit score

function submitScore(){
    var userSubmit = document.querySelector("#submit");
    userSubmit.addEventListener("click", function(event){
        event.preventDefault();
        addScore();
        userSubmit.disabled = "true";
    }
}

// Save the list into local storage with the addition of the user's initials and new score

// Add a timer function

    // Set timer to deduct ten seconds for an incorrect answer