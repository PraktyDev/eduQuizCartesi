export function loadQuizQuestions() {
    // Load quiz questions from data/quiz-questions.json
    const quizQuestions = require('../data/quiz-questions.json');
    return quizQuestions;
}

export function validateAnswer(answer, correctAnswer) {
    // Validate user answer
    return answer === correctAnswer;
}