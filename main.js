document.getElementById('startButton').addEventListener('click', function() {
    startGame();
});

document.getElementById('submitButton').addEventListener('click', function() {
    checkAnswer();
});

document.getElementById('playAgainButton').addEventListener('click', function() {
    resetGame();
});

let num1, num2, correctAnswer, questionCount, correctCount;

function startGame() {
    questionCount = 0;
    correctCount = 0;
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('submitButton').style.display = 'inline';
    generateQuestion();
}

function generateQuestion() {
    if (questionCount >= 4) {
        endGame();
        return;
    }
    
    num1 = Math.floor(Math.random() * 100) + 1;
    num2 = Math.floor(Math.random() * 100) + 1;
    let operation = Math.floor(Math.random() * 4);
    let questionText;

    switch(operation) {
        case 0:
            questionText = `${num1} + ${num2}`;
            correctAnswer = num1 + num2;
            break;
        case 1:
            questionText = `${num1} - ${num2}`;
            correctAnswer = num1 - num2;
            break;
        case 2:
            questionText = `${num1} * ${num2}`;
            correctAnswer = num1 * num2;
            break;
        case 3:
            questionText = `${num1} / ${num2}`;
            correctAnswer = (num2 !== 0) ? (num1 / num2).toFixed(2) : 'Infinity';
            break;
    }

    document.getElementById('question').innerText = questionText + " = ?";
    document.getElementById('answerInput').value = '';
    document.getElementById('feedback').innerText = '';
    questionCount++;
}

function checkAnswer() {
    let userAnswer = document.getElementById('answerInput').value;
    if (userAnswer == correctAnswer) {
        correctCount++;
    }
    generateQuestion();
}

function endGame() {
    document.getElementById('submitButton').style.display = 'none';
    document.getElementById('feedback').innerText = `Siz 4 savoldan ${correctCount} ta to'g'ri javob berdingiz.`;
    document.getElementById('playAgainButton').style.display = 'inline';
}

function resetGame() {
    document.getElementById('startButton').style.display = 'inline';
    document.getElementById('question').innerText = '';
    document.getElementById('feedback').innerText = '';
    document.getElementById('playAgainButton').style.display = 'none';
}
