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
var choices = document.querySelector('#choices');
var startBtn = document.querySelector('#start');
var startScreen = document.querySelector('#start-screen')
var endScreen = document.querySelector('#end-screen');
var finalScore = document.querySelector('#final-score')
var feedback = document.querySelector('#feedback');
var initials = document.querySelector('#initials');
var submitBtn = document.querySelector('#submit');
var submitMsg = document.querySelector('#submit-msg');

questions = Array.from(document.querySelectorAll('#questions'));

var timeLeft = 60;
time.textContent=timeLeft;
var score = 0;
var i = 0;

//Countdown
function countdown() {
setInterval(function() {
    if (timeLeft < 0) {
        clearInterval();
        questions[i].setAttribute('class', 'hide');
        endScreen.removeAttribute('class');
        timeLeft = 0;
        finalScore.textContent= timeLeft;
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

//Shows user the current question
function render() {
    if (i===10) {
        questions[i-1].setAttribute('class', 'hide');
        endScreen.removeAttribute('class');
        finalScore.textContent= timeLeft;
        time.setAttribute('class', 'hide');   
    } else if (i>0) {
    questions[i-1].setAttribute('class', 'hide');
    questions[i].removeAttribute('class', 'hide');
    guess();
    } else {
    questions[i].removeAttribute('class', 'hide');
    guess();
    }
};

// When User clicks on quiz answer
function guess () {
questions[i].addEventListener('click', function (event) {
    var answer = event.target.getAttribute('id');
        if (answer === 'right') {
            score++;
            feedback.textContent = 'Correct!';
            feedback.removeAttribute('class', 'hide');
            i++;
            setTimeout(function() {
                feedback.setAttribute('class', 'hide');
            }, 1000);
    
        } else if (answer === 'wrong') {
            feedback.textContent = 'Wrong!';
            timeLeft = (timeLeft-10);
            feedback.removeAttribute('class', 'hide');
            i++;
            setTimeout(function() {
                feedback.setAttribute('class', 'hide');
            }, 1000);
        }
        render();
    });
}

//Submit Validation
submitBtn.addEventListener('click', function(event){
    if (initials.value === "") {
        submitMsg.setAttribute('style', 'color:red')
        submitMsg.textContent = 'Please input your initials!';
    } else if (initials.value.length > 3) {
        submitMsg.setAttribute('style', 'color:red')
        submitMsg.textContent = 'Too many initials. Max length is 3!';
    } else {
        submitMsg.setAttribute('style', 'color:green')
        submitMsg.textContent = ' Thank you! Highscore submitted!';
    }
})