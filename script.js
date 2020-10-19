var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var questionsContainerEl = document.getElementById('question-container');

var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')

var score = 0;

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click',startGame);


// Timer 
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        if(seconds === 0) {
            alert('Game Over!')
        }
    }, 1000);
}

startButton.addEventListener('click',startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
startButton.addEventListener("click", function() {
    var twoMinutes = 60 * 2,
        display = document.querySelector('#time');
    startTimer(twoMinutes, display);
});

// Start The Questions 
function startGame() {
    
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    questionsContainerEl.classList.remove('hide');
    currentQuestionsIndex = 0;
    nextQuestion();
    nextButton.classList.remove('hide')

}

function setNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex])
}


function showQuestion(questions) {
    questionElement.innerText = questions.question
    console.log(questions)
    question.answers.forEach(answer => {
      var button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
}


// function selectAnswer(e){
//     let selectedButton = e.target
//     let correct = selectedButton.dataset.correct
//     setStatusClass(document.body, correct)
//     Array.from(answerButtonsElement.children).forEach(button => {
// setStatusClass(button, button.dataset.correct)

//     })
//     if (shuffledQuestions.length > currentQuestionIndex + 1) {
//     nextButton.classList.remove('hide')
// } else { 
//     startButton.innerText = 'Restart'
//     startButton.classList.remove('hide')

// }

// function setStatusClass(element, correct) {
//     clearStatusClass(element)
//     if (correct) {
//         element.classList.add('correct')
//     } else {
//         element.classList.add('wrong')
//     }
// }

// Reset 
// function resetState() {
//     clearStatusClass(document.body)
//     nextButton.classList.add('hide')
//     while (answerButtonsElement.firstChild) {
//         answerButtonsElement.removeChild(answerButtonsElement.firstChild)
//     }
// }

var questions = [
    {
        question: 'Inside which HTML element do we put the Javascript ?',
        answers: [
        { text: '<script>', correct: true },
        { text: '<js>', correct: false },
        { text: '<scripting>', correct: false },
        { text: '<javascript>', correct: false }
        ]
    },
    {
        question: 'Where is the correct place to insert a Javascript?',
        answers: [
        { text: '<head> section', correct: false },
        { text: '<body> section', correct: false },
        { text: '<title> section', correct: false },
        { text: 'both the <head> and <body> section are correct', correct: true }
        ]
    },
    {
        question: 'The external Javascript file must contain the <script> tag.',
        answers: [
        { text: 'true', correct: true },
        { text: 'false', correct: false },
        { text: 'possibly', correct: false },
        { text: 'maybe so', correct: false }
        ]
    },
    {
        question: 'How to write an IF statement in Javascript?',
        answers: [
        { text: 'if i == 5 then', correct: false },
        { text: 'if i = 5 then', correct: false },
        { text: 'if i = 5', correct: false },
        { text: 'if (i === 5)', correct: true }
        ]
    }
]







// Test Loop
function questionsloop(questions) {

    for (var i = 0; i < questions.length; i ++);
    questions.innerText('question');
    if (answer.correct) {
        button.dataset.correct = answer.correct
        score ++;
    }
    score.innerText('Correct')

}
