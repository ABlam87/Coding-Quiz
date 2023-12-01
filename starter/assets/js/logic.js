
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

//Saving Scores
submitBtn.addEventListener('click', function(event){
    if (initials.value === "") {
        submitMsg.setAttribute('style', 'color:red')
        submitMsg.textContent = 'Please input your initials!';
    } else if (initials.value.length > 3) {
        submitMsg.setAttribute('style', 'color:red')
        submitMsg.textContent = 'Too many initials. Max length is 3!';
    } else {
        submitMsg.setAttribute('style', 'color:green');
        submitMsg.textContent = "Thank you! Highscore submitted!";
        var InitialScore = {
        "Initials": initials.value,
        "Score": finalScore.textContent
    };
    
    var highscores = JSON.parse(localStorage.getItem("allScores")) || [];
    highscores.push(InitialScore);
    localStorage.setItem("allScores", JSON.stringify(highscores));
    }
})