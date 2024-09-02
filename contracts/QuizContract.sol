pragma solidity ^0.8.0;

contract QuizContract {
    address private owner;
    uint256 private quizId;
    mapping (address => uint256) public userScores;

    constructor() {
        owner = msg.sender;
        quizId = 0;
    }

    function startQuiz() public {
        // Start the quiz
        quizId++;
    }

    function submitAnswer(uint256 _quizId, uint256 _answer) public {
        // Validate user answer
        require(_quizId == quizId, "Invalid quiz ID");
        // Update user score
        userScores[msg.sender] = _answer;
    }

    function getScore(address _user) public view returns (uint256) {
        // Return user score
        return userScores[_user];
    }
}