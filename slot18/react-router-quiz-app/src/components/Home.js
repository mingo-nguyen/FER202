import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/Home.css';

function Home() {
  return (
    <Container className="home-container">
      {/* Hero Section */}
      <Row className="justify-content-center mb-5">
        <Col md={10} className="text-center">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to the Quiz Challenge</h1>
            <div className="glass-divider"></div>
            <p className="hero-subtitle">
              Test your knowledge, learn new things, and challenge yourself with our interactive quizzes
            </p>
            <Link to="/quiz">
              <Button className="glass-btn start-btn">
                <i className="fas fa-play-circle me-2"></i>
                Start Quiz Now
              </Button>
            </Link>
          </div>
        </Col>
      </Row>

      {/* Features Section */}
      <Row className="justify-content-center features-section">
        <Col md={4} className="mb-4">
          <Card className="glass-card feature-card h-100">
            <Card.Body className="text-center">
              <div className="feature-icon-wrapper">
                <i className="fas fa-brain feature-icon"></i>
              </div>
              <Card.Title className="feature-title">Knowledge Challenge</Card.Title>
              <Card.Text>
                Test your knowledge with our carefully crafted questions across various topics and difficulty levels.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} className="mb-4">
          <Card className="glass-card feature-card h-100">
            <Card.Body className="text-center">
              <div className="feature-icon-wrapper">
                <i className="fas fa-chart-line feature-icon"></i>
              </div>
              <Card.Title className="feature-title">Track Progress</Card.Title>
              <Card.Text>
                See your results instantly and track your improvement over time with our intuitive scoring system.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} className="mb-4">
          <Card className="glass-card feature-card h-100">
            <Card.Body className="text-center">
              <div className="feature-icon-wrapper">
                <i className="fas fa-graduation-cap feature-icon"></i>
              </div>
              <Card.Title className="feature-title">Learn & Grow</Card.Title>
              <Card.Text>
                Expand your knowledge and skills by learning from your quiz results and exploring new topics.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Call to Action */}
      <Row className="justify-content-center mt-5">
        <Col md={8}>
          <Card className="glass-card cta-card">
            <Card.Body className="text-center">
              <h3>Ready to Test Your Knowledge?</h3>
              <p className="mb-4">Join thousands of users who are improving their knowledge through our quizzes.</p>
              <Link to="/quiz">
                <Button className="glass-btn cta-btn">
                  <i className="fas fa-arrow-right me-2"></i>
                  Take the Quiz Challenge
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;