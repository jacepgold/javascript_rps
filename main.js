// This is the main.js file for Jace Gold's JavaScript Rock Paper Scissors game

var theRock = document.getElementById("rock")
var paper = document.getElementById("paper")
var scissors = document.getElementById("scissors")
var tally = {userWins: 0, computerWins: 0, ties: 0}
var newGameBtn = document.getElementById('newGameBtn')


theRock.addEventListener("click", function() {
  rps(1)
})

paper.addEventListener("click", function() {
  rps(2)
})

scissors.addEventListener("click", function() {
  rps(3)
})


function rps(userChoice) {
  var computerChoice = Math.floor(Math.random() * 3) + 1

  if (computerChoice > userChoice) {
    tally.computerWins++
  } else if (computerChoice < userChoice) {
    tally.userWins++
  } else if (computerChoice === userChoice) {
    tally.ties++
  } else {
    alert("Hmmm... There seems to be a mathmetical issue. Please try again.")
  }

  // Convert user choice to text
  if (userChoice == 1)
    userChoice = 'The Rock!!!'
  else if (userChoice == 2)
    userChoice = 'Paper'
  else if (userChoice == 3)
    userChoice = 'Scissors'
  else
    alert("There was an issue getting the User's choice.")

  // Convert computer choice to text
  if (computerChoice == 1)
    computerChoice = 'The Rock!!!'
  else if (computerChoice == 2)
    computerChoice = 'Paper'
  else if (computerChoice == 3)
    computerChoice = 'Scissors' 
  else
    alert("There was a mistake getting the Computer's choice.")

  if (tally.userWins > tally.computerWins) {
    document.getElementById('wins').className = 'winning' // Green
    document.getElementById('losses').className = 'losing' // Red
  } else if (tally.computerWins > tally.userWins) {
    document.getElementById('wins').className = 'losing' 
    document.getElementById('losses').className = 'winning'
  } else if (tally.computerWins === tally.userWins) {
    document.getElementById('wins').className = 'winning'
    document.getElementById('losses').className = 'winning'
  } else {
    document.getElementById('wins').className = ''
    document.getElementById('losses').className = ''
  }

  document.getElementById('userChoice').innerHTML = userChoice
  document.getElementById('computer').innerHTML = ('The computer choose ' + computerChoice + '.')
  document.getElementById('wins').innerHTML = (tally.userWins + ' wins.')
  document.getElementById('losses').innerHTML = (tally.computerWins + ' losses.')
  document.getElementById('ties').innerHTML = (tally.ties + ' ties.')
}


newGameBtn.addEventListener("click", function() {
  tally.userWins = 0
  tally.computerWins = 0
  tally.ties = 0
  document.getElementById('userChoice').innerHTML = ''
  document.getElementById('computer').innerHTML = "Computer's Choice"
  document.getElementById('wins').innerHTML = 'Wins'
  document.getElementById('losses').innerHTML = 'Losses'
  document.getElementById('ties').innerHTML = 'Ties'
  document.getElementById('wins').className = ''
  document.getElementById('ties').className = ''
  document.getElementById('losses').className = ''
})