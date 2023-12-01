//pseudocode
//enter initials form
//saves name to localstorage
//display name and score
//getdata from local storage

var scoresList = JSON.parse(localStorage.getItem("allScores"));
var scoresTable = document.querySelector('#highscores');
console.log(scoresList)

for (i = 0; i < scoresList.length; i++) {
list = document.createElement("li");
list.textContent = scoresList[i].Initials + ': ' + scoresList[i].Score;
scoresTable.appendChild(list);}
