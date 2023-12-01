//Pseudocode

//setinterval function with a timer counting from 60 to 0
// if timer === 0
// timer saved to localstorage
// highscores.html

// render function 
// for loop
// if i < 10
// append variable to html
// if i > 10
// timer saved to local storage

// each question it's own div element with a number id
// div -> h2 + ol -> li x 4

// list elements have value of 'right' or 'wrong'

// event listener on ol

//if event target == right:
// - correct sfx
// - 'Correct!' appears onscreen for 1 second
// render function

//else 
// - incorrect sfx
// - 'Wrong!' appears onscreen for 1 second
// timer decreased by 10
// render function

//

var time = document.querySelector('#time');
var startBtn = document.querySelector('#start');
var startScreen = document.querySelector('#start-screen')
var endScreen = document.querySelector('#end-screen');
var finalScore = document.querySelector('#final-score')

questions = Array.from(document.querySelectorAll('#questions'));

var timeLeft = 60;
time.textContent=timeLeft;
var score = 0;

function countdown() {

// countdown function
setInterval(function() {
    if (timeLeft <= 0) {
        clearInterval();
        endScreen.removeAttribute('class');
        finalScore.textContent=timeLeft;
    } else {
        time.textContent = timeLeft;
        timeLeft--;
    }
}, 1000);
}

//StartButton
startBtn.addEventListener('click', function (event) {
    event.preventDefault();
    startScreen.setAttribute('class', 'hide');
    countdown();
    render();
})

//RenderFunction
function render() {
    for (let i = 0; i < questions.length; i++) {
    questions[0].removeAttribute('class');    
    }
}

//AnswerEvent

