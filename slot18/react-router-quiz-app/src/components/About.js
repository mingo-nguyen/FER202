import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/About.css';

function About() {
  return (
    <Container className="about-container">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="glass-card">
            <Card.Body>
              <h2 className="text-center mb-4">About Us</h2>
              <div className="glass-divider"></div>
              
              <p className="about-text">
                Welcome to our Quiz Application! We are dedicated to providing an engaging and educational 
                quiz experience for users of all ages. Our platform offers a variety of quizzes on different topics
                to test your knowledge and help you learn new things.
              </p>
              
              <div className="glass-icon-container">
                <div className="glass-icon">
                  <i className="fas fa-brain"></i>
                  <span>Knowledge</span>
                </div>
                <div className="glass-icon">
                  <i className="fas fa-puzzle-piece"></i>
                  <span>Challenge</span>
                </div>
                <div className="glass-icon">
                  <i className="fas fa-graduation-cap"></i>
                  <span>Learn</span>
                </div>
              </div>
              
              <p className="about-text mt-4">
                This application was built using React and React Router to create a seamless single-page application
                experience. We hope you enjoy using our platform!
              </p>
              
              <div className="about-features">
                <h4 className="feature-heading">Our Features</h4>
                <ul className="feature-list">
                  <li><i className="fas fa-check-circle"></i> Interactive quiz questions</li>
                  <li><i className="fas fa-check-circle"></i> Instant feedback on answers</li>
                  <li><i className="fas fa-check-circle"></i> Multiple knowledge categories</li>
                  <li><i className="fas fa-check-circle"></i> Track your progress over time</li>
                  <li><i className="fas fa-check-circle"></i> Beautifully designed interface</li>
                </ul>
              </div>
              
              <div className="text-center mt-4">
                <Link to="/quiz">
                  <Button className="glass-btn">
                    <i className="fas fa-play-circle me-2"></i>
                    Try a Quiz Now
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;