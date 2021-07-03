let score = 0
// AS: This for loop will never run since score will always be 0 and i is 0
for (i = 0; i < score; i++) {
  score += 1
}

// AS: Remove dead code in production
const button = $('#btnSubmit')
button.on('click', questionAns)

const reset = $('#btnReset')
reset.on('click', function () {
  document.location.reload()
})

function answerQuestion (id, correctAnswer, newScore) {
  let answer = $(id).val()
  if (correctAnswer === correctAnswer) {
    score += newScore
  } else if (answer === '') {
    alert('Please enter an answer.')
  }
}

function questionAns () {
  // AS: You could make your code more DRY by doing something like this:
  answerQuestion('Q1', 'Back', 2)
  answerQuestion('Q2', 'Chow Chow', 3)
  answerQuestion('Q3', 'Scarlet Kingsnake', 5)
  answerQuestion('Q4', 'Clear', 5)
  answerQuestion('Q5', 'Dolphins', 5)

  // AS: I would use const here since they won't change!
  const victor = new Audio('Eye_Of_The_Tiger_Instrumental.mp3')
  const gOver = new Audio('GameOver.mp3')

  // AS: this is really cool!
  if (score >= 20) {
    victor.play()
    alert('You have ' + score + ' pts!')
  } else if (score <= 5) {
    gOver.play()
    alert('You have ' + score + 'pts..Good Luck next time...')
  }
  // AS: Since this happens no matter what, it should be out of the if statement
  alert('Answers: 1)Back- Depending on the species, a fish may have one or two dorsal fins., 2)Chow Chow- The Chow is one of the few ancient dog breeds still in existence., 3)Scarlet Kingsnake- The scarlet kingsnake is a red snake with black and yellow rings. It looks almost exactly like the coral snake, which is very poisonous., 4)Clear- The fur appears white because the clear follicles scatter light., 5)Dolphins- They allow only one side to sleep so that they can still breathe and swim.')
  
  let tally = $('#score')
  tally.replaceWith(score)
}

// Prevents enter key from submitting the form.
const input = $('input')
input.keypress(function (event) {
  if (event.which == 13) {
    event.preventDefault()
  }
})
