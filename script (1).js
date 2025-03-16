const quizContainer = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;

// Load a question
function loadQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("answer-btn");
        button.addEventListener("click", () => selectAnswer(answer, currentQuestion.correct));
        answersContainer.appendChild(button);
    });
}

// Reset the state
function resetState() {
    answersContainer.innerHTML = "";
    resultContainer.innerText = "";
}

// Handle answer selection
function selectAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        score++;
        resultContainer.innerText = "✅ Correct!";
    } else {
        resultContainer.innerText = "❌ Incorrect!";
    }

    nextButton.style.display = "block";
}

// Load next question
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        nextButton.style.display = "none";
    } else {
        quizContainer.innerHTML = `<h2>Quiz Completed!</h2><p>Your Score: ${score}/${questions.length}</p>`;
    }
});

// Initialize the quiz
loadQuestion();
