import React, { useState } from 'react';
import { Form, Button, Alert, Container, Row, Col, Card } from 'react-bootstrap';
import './styles/Contact.css';

function Contact() {
  const [validated, setValidated] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setShowSuccess(false), 3000);
    }

    setValidated(true);
  };

  return (
    <Container className="contact-container">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="glass-card">
            <Card.Body>
              <h2 className="text-center mb-4">Contact Us</h2>
              <div className="glass-divider"></div>
              
              <p className="contact-intro">
                Have questions or feedback about our Quiz App? We'd love to hear from you! 
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              {showSuccess && (
                <Alert variant="success" className="glass-alert">
                  <i className="fas fa-check-circle me-2"></i>
                  Your message has been sent successfully!
                </Alert>
              )}
              
              <Form noValidate validated={validated} onSubmit={handleSubmit} className="contact-form">
                <Form.Group className="mb-4" controlId="formName">
                  <Form.Label>
                    <i className="fas fa-user me-2"></i>Name
                  </Form.Label>
                  <Form.Control 
                    required 
                    type="text" 
                    placeholder="Enter your name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="glass-input"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your name.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formEmail">
                  <Form.Label>
                    <i className="fas fa-envelope me-2"></i>Email address
                  </Form.Label>
                  <Form.Control 
                    required 
                    type="email" 
                    placeholder="Enter your email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="glass-input"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label>
                    <i className="fas fa-comment me-2"></i>Message
                  </Form.Label>
                  <Form.Control 
                    required 
                    as="textarea" 
                    rows={5} 
                    placeholder="Enter your message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="glass-input"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a message.
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="text-center mt-4">
                  <Button className="glass-btn" type="submit">
                    <i className="fas fa-paper-plane me-2"></i>
                    Send Message
                  </Button>
                </div>
              </Form>
              
              <div className="contact-info mt-5">
                <div className="glass-divider"></div>
                <h4 className="text-center mb-4">Other Ways to Reach Us</h4>
                
                <Row className="justify-content-center">
                  <Col md={4} className="contact-method">
                    <div className="contact-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="contact-detail">
                      <h5>Email</h5>
                      <p>info@quizapp.com</p>
                    </div>
                  </Col>
                  
                  <Col md={4} className="contact-method">
                    <div className="contact-icon">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="contact-detail">
                      <h5>Phone</h5>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </Col>
                  
                  <Col md={4} className="contact-method">
                    <div className="contact-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="contact-detail">
                      <h5>Address</h5>
                      <p>123 Quiz St, Knowledge City</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;