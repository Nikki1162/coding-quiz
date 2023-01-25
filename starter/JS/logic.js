// Declare variables

var startGame = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questionDiv = document.querySelector("#questions");
var questionText = document.querySelector("#question-title");
var buttonA = document.querySelector("#button-a");
var buttonB = document.querySelector("#button-b");
var buttonC = document.querySelector("#button-c");
var buttonD = document.querySelector("#button-d");
var feedbackDiv = document.querySelector("#feedback");
var feedbackText = document.querySelector("#feedback-text");
var timerElement = document.querySelector("#time");
var endScreen = document.querySelector("#end-screen");


var updatedQuestionList = questions;
var currentQuestion = {};
var score = 0;
var timerCount;
var wrongAnswer = false;

// Event listener to begin game

startGame.addEventListener("click", begin);
function begin(event){
    startScreen.setAttribute("class", "hide");
    questionDiv.setAttribute("class", "show");
    feedbackDiv.setAttribute("class", "show");
    playgame();
}

// Function to begin game

    // Timer to begin countdown to zero from 90 seconds

    // Query select buttons, add event listener to check for correct answer upon user clicking a button

    //  Variable to compare answer chosen to correct answer?

    // If correct, increment score, ELSE if incorrect deduct time (10 seconds)

    //Generate next question at random

function playgame() {
    getNewQuestion();
    timerCount = 90;
    startTimer();
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(i) {
        i.addEventListener('click', function() {
            var checkAnswer = currentQuestion.CorrectAnswer;
            if(i.innerHTML === checkAnswer){
            score++;
            feedbackText.innerHTML = "Woohoo! Correct!";
            getNewQuestion();
            }
            else{
                wrongAnswer = true;
                feedbackText.innerHTML = "Whoops! That's not quite right";
                getNewQuestion();
            }
        })
    });
}

// Function to end the game

    // Show last screen of the game and display user's score

function endGame(){
    questionDiv.setAttribute("class", "hide");
    feedbackDiv.setAttribute("class", "hide");
    endScreen.setAttribute("class", "show");
    var finalScore = document.querySelector("#final-score");
    finalScore.innerHTML=score;
    submitScore();
}

// Add score to high score list within an object, use local storage to call score list and allow user to store initials with their score

    // Function to submit score

function submitScore(){
    var submitButton = document.querySelector("#submit");
    submitButton.addEventListener("click", function(event){
    event.preventDefault();
    addScore();
    submitButton.disabled = "true";
});
}

// Save the list into local storage with the addition of the user's initials and new score

function addScore(){
    var highScores = JSON.parse(localStorage.getItem("scoresList")) || [];
    var inputInitials = document.querySelector("#initials").value;
    var endScore = {
        score: score,
        initials: inputInitials
    }
    highScores.push(endScore);
    localStorage.setItem("scoresList", JSON.stringify(highScores)); 
}

// Function to generate and show questions at random

function getNewQuestion(){
    if(updatedQuestionList.length>0){ 
        var randomQuestionIndex = Math.floor(Math.random()*updatedQuestionList.length);
        currentQuestion = updatedQuestionList[randomQuestionIndex];
        updatedQuestionList.splice(randomQuestionIndex, 1);
        questionText.innerHTML = currentQuestion.Question;
        buttonA.innerHTML = currentQuestion.ChoiceA;
        buttonB.innerHTML = currentQuestion.ChoiceB;
        buttonC.innerHTML = currentQuestion.ChoiceC;
        buttonD.innerHTML = currentQuestion.ChoiceD;
        return currentQuestion;
    }
    else{
        endGame();
    }
    
}

// Add a timer function

    // Set timer to deduct ten seconds for an incorrect answer
    
function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        if (wrongAnswer) {
          wrongAnswer = false;
          timerCount -= 10;
        }
            if (timerCount <= 0) {
            clearInterval(timer);
            endGame();
            }
        }   
    }, 1000);
}

// TO DO: add corresponding sound effects to correct/incorrect answers