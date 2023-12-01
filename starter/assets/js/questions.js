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
var i = 0;

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
        } else {
            return
        }
        render();
    });
}
