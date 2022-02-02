var startButton = document.querySelector(".start-button");

var questionsElement = document.querySelector(".questions");

var timerElement = document.querySelector(".timer-count");

var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choice: ["<scripting>", "<js>", "<javascript>", "<script>"],
        answer: "<script>"
    },
    {
        question: "How do you write \"Hello World\" in an alert box?",
        choice: ["alertBox(Hello World);", "alert(Hello World);", "msgBox(Hello World);", "msg(Hello World);"],
        answer: "alert(Hello World);"
    },
   
]
var correctAnswers = 0;
var wrongAnswers = 0;
var timer;
var timerCount;
var isWin = false;
function renderQuestions() {
    timerCount = 10
    for (var i = 0; i < questions.length; i++) {
        var questionDiv = document.createElement("div");
        questionDiv.innerHTML = questions[i].question;
        questionsElement.appendChild(questionDiv)
        console.log("hello");
      }
}

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
        //   winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        // loseGame();
      }
    }, 1000);
  }


renderQuestions()
startTimer()
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");