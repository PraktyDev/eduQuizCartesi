import QuizPlatform from './quiz-platform';
import { loadQuizQuestions } from './utils';

const quizPlatform = new QuizPlatform();

async function main() {
    // Load quiz questions
    const quizQuestions = await loadQuizQuestions();

    // Start the quiz
    quizPlatform.startQuiz(quizQuestions);
}

main();