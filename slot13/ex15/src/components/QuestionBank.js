import React, { useReducer, useEffect } from 'react';
import { Container, Card, Button, ProgressBar, Badge } from 'react-bootstrap';
import { FaRegClock } from 'react-icons/fa';

// Initial state for the quiz
const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      answer: "Paris"
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars"
    },
    {
      id: 3,
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4"
    },
    // Add more questions as needed
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
  showFeedback: false,
  isCorrect: null,
  timeLeft: 10
};

// Reducer function to handle all state changes
function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      const isCorrect = action.payload === state.questions[state.currentQuestion].answer;
      return { 
        ...state, 
        selectedOption: action.payload,
        showFeedback: true,
        isCorrect: isCorrect
      };
      case "TICK":
        return {
          ...state,
          timeLeft: state.timeLeft - 1
        };
      case "RESET_TIMER":
        return {
          ...state,
          timeLeft: 10
        };
    case "NEXT_QUESTION":
      const currentIsCorrect =
        state.selectedOption === state.questions[state.currentQuestion].answer;
      return {
        ...state,
        score: currentIsCorrect ? state.score + 1 : state.score,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        showFeedback: false,
        isCorrect: null,
        showScore: state.currentQuestion + 1 === state.questions.length,
      };

    case "RESTART_QUIZ":
      return {
        ...initialState,
      };

    default:
      return state;
  }
}

const QuestionBank = () => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  
  const { 
    questions, 
    currentQuestion, 
    selectedOption, 
    score, 
    showScore,
    showFeedback,
    isCorrect,
    timeLeft
  } = state;

  useEffect(() => {
    if (!showScore && !showFeedback) {
      const timer = setInterval(() => {
        if (timeLeft > 0) {
          dispatch({ type: "TICK" });
        } else {
          // Time's up - move to next question
          clearInterval(timer);
          if (!selectedOption) {
            // Auto-select nothing and move on
            dispatch({ type: "NEXT_QUESTION" });
          }
        }
      }, 1000);
      
      return () => clearInterval(timer);
    }
  }, [timeLeft, showScore, showFeedback, selectedOption]);

  // Reset timer when changing questions or restarting
  useEffect(() => {
    dispatch({ type: "RESET_TIMER" });
  }, [currentQuestion]);

  const handleOptionSelect = (option) => {
    dispatch({ type: "SELECT_OPTION", payload: option });
  };

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
  };

  return (
    <Container className="mt-4">
      <Card className="p-4">
        {showScore ? (
          <div className="text-center">
            <h2>
              Your Score: {score} / {questions.length}
            </h2>
            <Button variant="primary" onClick={handleRestartQuiz}>
              Restart Quiz
            </Button>
          </div>
        ) : (
          <div>
            <h4>
              Question {questions[currentQuestion].id}:<br />
              {questions[currentQuestion].question}
            </h4>


            {/* Timer UI */}
            <div className="d-flex justify-content-center align-items-center my-3">
            <div className={`d-flex align-items-center ${timeLeft <= 5 ? 'text-danger fw-bold' : ''}`}>
                <FaRegClock className="me-2" />
                <span style={{ fontSize: '1.2rem', transition: 'color 0.3s ease' }}>
                {timeLeft} {timeLeft === 1 ? 'second' : 'seconds'} remaining
                </span>
            </div>
            </div>

            {/* Progress indicator */}
            <div className="quiz-progress my-3">
            <div className="d-flex justify-content-between align-items-center mb-1">
                <span className="text-muted">
                Question {currentQuestion + 1} of {questions.length}
                </span>
                <Badge bg="info">
                {Math.round((currentQuestion / questions.length) * 100)}% Complete
                </Badge>
            </div>
            
            <ProgressBar 
                now={(currentQuestion / questions.length) * 100} 
                variant="info"
                className="mb-3"
                style={{ height: "10px" }}
            />
            
            <div className="question-dots d-flex justify-content-center mb-2">
                {questions.map((_, index) => (
                <div 
                    key={index} 
                    className="mx-1" 
                    style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: index < currentQuestion 
                        ? "#28a745" // completed (green)
                        : index === currentQuestion 
                        ? "#007bff" // current (blue)
                        : "#e2e2e2", // upcoming (light gray)
                    transition: "all 0.3s ease"
                    }}
                />
                ))}
            </div>
            </div>




            <div className="mt-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={
                    selectedOption === option ? "success" : "outline-secondary"
                  }
                  className="m-2"
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </Button>
              ))}
            </div>

            {showFeedback && (
              <div className={`mt-3 p-3 ${isCorrect ? 'bg-success' : 'bg-danger'} text-white rounded`}>
                {isCorrect ? (
                  <h5>Correct! 🎉</h5>
                ) : (
                  <h5>Incorrect! The correct answer is {questions[currentQuestion].answer}</h5>
                )}
              </div>
            )}

            <Button
              variant="primary"
              className="mt-3"
              disabled={!selectedOption}
              onClick={handleNextQuestion}
            >
              {currentQuestion === questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
            </Button>
          </div>
        )}
      </Card>
    </Container>
  );
};

export default QuestionBank;