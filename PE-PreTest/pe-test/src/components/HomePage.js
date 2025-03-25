import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <Container className="py-5 text-center">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1>Welcome to Product Management System</h1>
          <p className="lead mt-4">
            This application allows you to manage and view product information.
          </p>
          
          {user.username ? (
            <Link to="/products">
              <Button variant="primary" size="lg" className="mt-3">
                View Products
              </Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button variant="primary" size="lg" className="mt-3">
                Login to Continue
              </Button>
            </Link>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;