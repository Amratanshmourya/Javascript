document.addEventListener('DOMContentLoaded', () => {
    const categoryDropdown = document.getElementById('categoryDropdown');
    const submitButton = document.getElementById('submit');
    const selectionContainer = document.getElementById('selection-container');
    const quizContainer = document.getElementById('quiz-container');
    const questionContainer = document.getElementById('question-container');
    const quizForm = document.getElementById('quizForm');
    const restart = document.getElementById('restart');
    let correctAnswers = [];
    let numQuestions = 0;

    fetch('https://opentdb.com/api_category.php')
        .then(response => response.json())
        .then(data => {
            const categories = data.trivia_categories;
            categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category.id;
                option.textContent = category.name;
                categoryDropdown.appendChild(option);
            });
        });

    submitButton.addEventListener('click', () => {
        const selectedDifficulty = document.getElementById('Level').value;
        const selectedCategory = categoryDropdown.value;

        fetch(`https://opentdb.com/api.php?amount=5&category=${selectedCategory}&difficulty=${selectedDifficulty}&type=multiple`)
            .then(response => response.json())
            .then(data => {
                selectionContainer.style.display = 'none';
                quizContainer.style.display = 'block';

                correctAnswers = data.results.map(question => question.correct_answer);
                numQuestions = data.results.length; // Store the number of questions
                populateQuiz(data.results);
            });
    });

    function populateQuiz(questions) {
        questionContainer.innerHTML = '';
        questions.forEach((question, index) => {
            const questionElement = document.createElement('h3');
            questionElement.textContent = `Question ${index + 1}: ${question.question}`;
            questionContainer.appendChild(questionElement);

            const answerContainer = document.createElement('div');
            answerContainer.className = 'answer-container';

            const answers = shuffleArray([question.correct_answer, ...question.incorrect_answers]);

            answers.forEach(answer => {
                const answerDiv = document.createElement('div');

                const radioInput = document.createElement('input');
                radioInput.type = 'radio';
                radioInput.id = `question${index}-${answer}`;
                radioInput.name = `question${index}`;
                radioInput.value = answer;

                const answerLabel = document.createElement('label');
                answerLabel.htmlFor = radioInput.id;
                answerLabel.textContent = answer;

                answerDiv.appendChild(radioInput);
                answerDiv.appendChild(answerLabel);

                answerContainer.appendChild(answerDiv);
            });

            questionContainer.appendChild(answerContainer);
        });
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    quizForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!validateAnswers()) {
            alert('Please answer all questions before submitting.');
            return;
        }

        // Disable all radio buttons to prevent changes after submission
        const allRadioButtons = document.querySelectorAll('input[type="radio"]');
        allRadioButtons.forEach(radio => {
            radio.disabled = true;
        });

        let score = 0;

        correctAnswers.forEach((correctAnswer, index) => {
            const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
            const correctLabel = document.querySelector(`label[for="question${index}-${correctAnswer}"]`);

            if (selectedAnswer && selectedAnswer.value === correctAnswer) {
                correctLabel.classList.add('correct');
                score++;
            } else {
                correctLabel.classList.add('correct');
                if (selectedAnswer) {
                    const incorrectLabel = document.querySelector(`label[for="question${index}-${selectedAnswer.value}"]`);
                    incorrectLabel.classList.add('incorrect');
                }
            }
        });

        // Display the score
        const scoreElement = document.getElementById('score');
        scoreElement.textContent = `Your score: ${score} out of ${numQuestions}`;

        // Show the results container
        document.getElementById('results').style.display = 'block';

        // Scroll to the results section
        document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
    });

    function validateAnswers() {
        let allAnswered = true;
        for (let i = 0; i < numQuestions; i++) {
            const selectedAnswer = document.querySelector(`input[name="question${i}"]:checked`);
            if (!selectedAnswer) {
                allAnswered = false;
                break;
            }
        }
        return allAnswered;
    }
});
   
restart.addEventListener("click",()=>{
    location.reload();
})