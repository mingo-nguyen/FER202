import React, { useState } from 'react';
import { Card, Button, Form, Alert, Container, Row, Col } from 'react-bootstrap';
import './styles/Quiz.css';

function Quiz() {
  const questions = [
    {
      id: 1,
      question: "What is React Router used for?",
      options: [
        "State management in React",
        "Handling navigation in single-page applications",
        "Creating animations in React",
        "Server-side rendering"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Which component is used to define routes in React Router?",
      options: [
        "<Routes>",
        "<Router>",
        "<Switch>",
        "<Navigation>"
      ],
      correctAnswer: 0
    },
    {
      id: 3,
      question: "What hook is used to navigate programmatically in React Router?",
      options: [
        "useHistory",
        "useNavigate",
        "useLocation",
        "useParams"
      ],
      correctAnswer: 1
    }
  ];

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionChange = (questionId, optionIndex) => {
    setAnswers({
      ...answers,
      [questionId]: optionIndex
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newScore = 0;
    
    questions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        newScore++;
      }
    });
    
    setScore(newScore);
    setSubmitted(true);
  };

  const resetQuiz = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  return (
    <Container className="quiz-container">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="glass-card">
            <Card.Body>
              <h2 className="text-center mb-4">Quiz Challenge</h2>
              <div className="glass-divider"></div>
              
              {submitted ? (
                <div className="result-section">
                  <div className="score-display">
                    <div className="score-circle">
                      <span className="score-value">{score}</span>
                      <span className="score-label">out of {questions.length}</span>
                    </div>
                  </div>
                  
                  <div className="result-message">
                    {score === questions.length ? (
                      <Alert variant="success" className="glass-alert">
                        <i className="fas fa-trophy me-2"></i>Perfect score! Excellent job!
                      </Alert>
                    ) : score >= questions.length / 2 ? (
                      <Alert variant="info" className="glass-alert">
                        <i className="fas fa-thumbs-up me-2"></i>Good job! You passed the quiz.
                      </Alert>
                    ) : (
                      <Alert variant="warning" className="glass-alert">
                        <i className="fas fa-book me-2"></i>You might need to review the material.
                      </Alert>
                    )}
                  </div>
                  
                  <Button variant="primary" onClick={resetQuiz} className="glass-button mt-4">
                    <i className="fas fa-redo me-2"></i>Take Quiz Again
                  </Button>
                </div>
              ) : (
                <Form onSubmit={handleSubmit}>
                  {questions.map((question, index) => (
                    <div className="question-card" key={question.id}>
                      <div className="question-counter">Question {index + 1}/{questions.length}</div>
                      <div className="question-text">{question.question}</div>
                      
                      <div className="options-container">
                        {question.options.map((option, optIndex) => (
                          <div 
                            key={optIndex}
                            className={`option-item ${answers[question.id] === optIndex ? 'selected' : ''}`}
                            onClick={() => handleOptionChange(question.id, optIndex)}
                          >
                            <div className="option-prefix">{String.fromCharCode(65 + optIndex)}</div>
                            <div className="option-text">{option}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <div className="quiz-footer">
                    <Button variant="primary" type="submit" className="glass-button">
                      <i className="fas fa-paper-plane me-2"></i>Submit Quiz
                    </Button>
                  </div>
                </Form>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Quiz;