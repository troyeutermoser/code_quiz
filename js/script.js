var renderedQuestion = document.getElementById("render-question");

var renderedChoices = document.getElementById("choices");

var startButton = document.querySelector(".start-button");

var questionsElement = document.querySelector(".questions");

var timerElement = document.querySelector(".timer-count");

var questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choice: ["<scripting>", "<js>", "<javascript>", "<script>"],
    answer: "<script>",
  },
  {
    question: 'How do you write "Hello World" in an alert box?',
    choice: [
      "alertBox(Hello World);",
      "alert(Hello World);",
      "msgBox(Hello World);",
      "msg(Hello World);",
    ],
    answer: "alert(Hello World);",
  },
];

var questionsIndex = 0;
var correctAnswers = 0;
var wrongAnswers = 0;
var timer;
var timerCount;
var isWin = false;

function renderQuestions() {
  timerCount = 10;
  renderedQuestion.innerHTML = questions[questionsIndex].question;
  var choices = questions[questionsIndex].choice;

  for (var i = 0; i < choices.length; i++) {
    var selected = document.createElement("button");
    selected.textContent = choices[i];
    renderedChoices.appendChild(selected);
    console.log("hello answer");
  }
}
// function nextQuestion
// increase questionsIndex++
// check that questionsIndex === questions.length then the timer = 0
// call renderQuestions

function startTimer() {
  // Sets timer
  timer = setInterval(function () {
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
function startQuiz() {
  renderQuestions();
  startTimer();
}
startButton.addEventListener("click", startQuiz);
