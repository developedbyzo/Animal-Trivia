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
    if (answer === 'Back'|| 'back') {
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
    if (answer2 === 'Chow Chow' || 'chow chow' || 'Chow chow' || 'chow') {
      score += 3
      // event.preventDefault()
      console.log(score)
    } else if (answer === '') {
      alert('Please enter an answer.')
      return false
    }
    let answer3 = $('#Q3').val()
    if (answer3 === 'Scarlet Kingsnake' || 'scarlet kingsnake' || 'scarlet' || 'kingsnake') {
      score += 5
      // event.preventDefault()
      console.log(score)
    } else if (answer === '') {
      alert('Please enter an answer.')
      return false
    }
    let answer4 = $('#Q4').val()
    if (answer4 === 'Clear' || 'clear') {
      score += 5
      // event.preventDefault()
      console.log(score)
    } else if (answer === '') {
      alert('Please enter an answer.')
      return false
    }
    let answer5 = $('#Q5').val()
    if (answer5 === 'Dolphins' || 'Dolphin' || 'dolphins' || 'dolphin') {
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
      alert('Answers: 1)Back- Depending on the species, a fish may have one or two dorsal fins., 2)Chow Chow- The Chow is one of the few ancient dog breeds still in existence., 3)Scarlet Kingsnake- The scarlet kingsnake is a red snake with black and yellow rings. It looks almost exactly like the coral snake, which is very poisonous., 4)Clear- The fur appears white because the clear follicles scatter light., 5)Dolphins- They allow only one side to sleep so that they can still breathe and swim.')
    } else if (score <= 5) {
      gOver.play()
      alert('You have ' + score + 'pts..Good Luck next time...')
      alert('Answers: 1)Back- Depending on the species, a fish may have one or two dorsal fins., 2)Chow Chow- The Chow is one of the few ancient dog breeds still in existence., 3)Scarlet Kingsnake- The scarlet kingsnake is a red snake with black and yellow rings. It looks almost exactly like the coral snake, which is very poisonous., 4)Clear- The fur appears white because the clear follicles scatter light., 5)Dolphins- They allow only one side to sleep so that they can still breathe and swim.')
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

