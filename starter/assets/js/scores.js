var scoresList = JSON.parse(localStorage.getItem("allScores"));
var scoresTable = document.querySelector('#highscores');
var clearBtn = document.querySelector('#clear');

for (i = 0; i < scoresList.length; i++) {
list = document.createElement("li");
list.textContent = scoresList[i].Initials + ': ' + scoresList[i].Score;
scoresTable.appendChild(list);}

clearBtn.addEventListener('click', function(event){
    localStorage.clear();
    location.reload();
})