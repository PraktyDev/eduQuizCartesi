import { QuizContract } from '../contracts/QuizContract.sol';
import Web3 from 'web3';

class QuizPlatform {
    constructor() {
        this.quizContract = new Web3.eth.Contract(QuizContract.abi, QuizContract.address);
    }

    async startQuiz(quizQuestions) {
        // Start the quiz
        await this.quizContract.methods.startQuiz().send({ from: '0x...' });
        // Display quiz questions
        for (let i = 0; i < quizQuestions.length; i++) {
            console.log(`Question ${i + 1}: ${quizQuestions[i].question}`);
            console.log(`A) ${quizQuestions[i].answers[0]}`);
            console.log(`B) ${quizQuestions[i].answers[1]}`);
            console.log(`C) ${quizQuestions[i].answers[2]}`);
            console.log(`D) ${quizQuestions[i].answers[3]}`);
            // Get user answer
            const answer = prompt('Enter your answer (A, B, C, or D): ');
            // Submit user answer
            await this.quizContract.methods.submitAnswer(0, this.getAnswerIndex(answer)).send({ from: '0x...' });
        }
    }

    getAnswerIndex(answer) {
        switch (answer.toUpperCase()) {
            case 'A':
                return 0;
            case 'B':
                return 1;
            case 'C':
                return 2;
            case 'D':
                return 3;
            default:
                return -1;
        }
    }
}

export default QuizPlatform;