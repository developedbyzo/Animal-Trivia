let score = 0
for (i = 0; i < score; i++) {
  score += 1
}
// function showScores() {
//   $('#score').append(score);
// }

const button = $('#btnSubmit')
button.on('click', questionAns)

// function firstQ () {
  function questionAns () {
    let answer = $('#Q1').val()
    if (answer === 'Back') {
      score = score + 1
      event.preventDefault()
      console.log(score)
    } else if (answer === '') {
      alert('Please enter an answer.')
      return false
    }
// }
// function secondQ () {
    let answer2 = $('#Q2').val()
    if (answer2 === 'Chow Chow') {
      score = score + 1
      event.preventDefault()
      console.log(score)
    } else if (answer === '') {
      alert('Please enter an answer.')
      return false
    }
    $('#score').append(score)

    function resetForm () {
      $('#triviaForm').submit();
      $('#triviaForm').reset();
      return false;
    }
    if (score >= 2) {
    alert('You got ' + score + '/10 correct!')
  } else if (score <= 4) {
    alert('You got ' + score + '/10 correct..Good Luck next time...')
  }
  }
const input = $('input')
input.keypress(function (event) {
  if (event.which == 13) {
    event.preventDefault()
  }
})

