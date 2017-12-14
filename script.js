let score = 0
for (i = 0; i < score; i++) {
  score += 1
}
// function showScores() {
//   $('#score').append(score);
// }

const button = $('#btnSubmit')
button.on('click', questionAns)

const reset = $('#btnReset')
reset.on('click', function () {
  document.location.reload()
})

//Resets the form
// function resetForm () {
//   ('#triviaForm').reset()
//   return true
// }

// function firstQ () {
  function questionAns () {
    let answer = $('#Q1').val()
    if (answer === 'Back') {
      score += 2
      // event.preventDefault()
      console.log(score)
    } else if (answer === '') {
      alert('Please enter an answer.')
      return false
    }
// }
// function secondQ () {
    let answer2 = $('#Q2').val()
    if (answer2 === 'Chow Chow') {
      score += 3
      // event.preventDefault()
      console.log(score)
    } else if (answer === '') {
      alert('Please enter an answer.')
      return false
    }
    let answer3 = $('#Q3').val()
    if (answer3 === 'Scarlet Kingsnake') {
      score += 5
      // event.preventDefault()
      console.log(score)
    } else if (answer === '') {
      alert('Please enter an answer.')
      return false
    }
    let answer4 = $('#Q4').val()
    if (answer4 === 'Clear') {
      score += 5
      // event.preventDefault()
      console.log(score)
    } else if (answer === '') {
      alert('Please enter an answer.')
      return false
    }
    let answer5 = $('#Q5').val()
    if (answer5 === 'Dolphins') {
      score += 5
      // event.preventDefault()
      console.log(score)
    } else if (answer === '') {
      alert('Please enter an answer.')
      return false
    }
    let victor = new Audio('Eye_Of_The_Tiger_Instrumental.mp3')
    let gOver = new Audio('GameOver.mp3')
    if (score >= 20) {
      victor.play()
      alert('You have ' + score + ' pts!')
      alert('Answers: 1)Back, 2)Chow Chow, 3)Scarlet Kingsnake, 4)Clear, 5)Dolphins')
    } else if (score <= 5) {
      gOver.play()
      alert('You have ' + score + 'pts..Good Luck next time...')
      alert('Answers: 1)Back, 2)Chow Chow, 3)Scarlet Kingsnake, 4)Clear, 5)Dolphins')
    }
    let tally = $('#score')
    tally.replaceWith(score)
    // let tally = $('#score')
    // tally.append(score)
  }
//Tallies up the score and delivers the correct condition.


//Prevents enter key from submitting the form.
const input = $('input')
input.keypress(function (event) {
  if (event.which == 13) {
    event.preventDefault()
  }
})

