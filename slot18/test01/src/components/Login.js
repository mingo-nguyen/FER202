import React, { useState } from 'react';
import { Form, Button, Container, Alert, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const user = await login(username, password);
      
      if (user) {
        setSuccess(`Welcome, ${username}! Login successful!`);
        localStorage.setItem('user', JSON.stringify(user));
        
        // Redirect after showing success message
        setTimeout(() => {
          navigate('/products');
        }, 1500);
      } else {
        setError('Invalid username or password!');
      }
    } catch (error) {
      setError('An error occurred during login. Please try again.');
    }
  };

  return (
    <Container fluid className="d-flex align-items-center justify-content-center" 
      style={{minHeight: "100vh", padding: "20px"}}>
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6} xl={5} xxl={4}>
          <div className="glass-container" style={{
            padding: "35px",
            borderRadius: "20px",
            boxShadow: "0 10px 40px rgba(31, 38, 135, 0.4)",
            border: "1px solid rgba(255, 255, 255, 0.2)"
          }}>
            <div className="text-center mb-4">
              <h2 className="page-title mb-1">Welcome Back</h2>
              <p className="text-white-50">Sign in to continue</p>
            </div>
            
            {error && (
              <Alert className="alert-glass alert-glass-danger mb-4" style={{padding: "12px 15px"}}>
                {error}
              </Alert>
            )}
            
            {success && (
              <Alert className="alert-glass alert-glass-success mb-4" style={{padding: "12px 15px"}}>
                {success}
              </Alert>
            )}
            
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-4">
                <Form.Label className="text-white">Username</Form.Label>
                <Form.Control
                  className="form-control-glass"
                  style={{padding: "12px 15px"}}
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="text-white">Password</Form.Label>
                <Form.Control
                  className="form-control-glass"
                  style={{padding: "12px 15px"}}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button 
                className="btn-glass btn-glass-primary w-100 mt-2" 
                style={{
                  padding: "12px",
                  fontSize: "16px",
                  fontWeight: "500",
                  letterSpacing: "0.5px"
                }}
                type="submit"
              >
                Sign In
              </Button>
              
              <div className="text-center mt-4">
                <small className="text-white-50">
                </small>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;