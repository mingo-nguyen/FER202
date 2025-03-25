import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { placeOrder } from '../services/api';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  // Calculate total
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      // Extract numeric value from price string (removing '$')
      const price = parseFloat(item.price.replace('$', ''));
      return total + (price * item.quantity);
    }, 0).toFixed(2);
  };
  
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    
    if (cartItems.length === 0) {
      setError('Your cart is empty!');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    setSuccess('');
    
    try {
      // Create order object with cart items and address
      const orderData = {
        items: cartItems,
        address,
        total: calculateTotal(),
        date: new Date().toISOString(),
        status: 'Pending',
        userId: JSON.parse(localStorage.getItem('user')).id
      };
      
      await placeOrder(orderData);
      setSuccess('Order placed successfully!');
      clearCart();
      
      // Redirect after showing success message
      setTimeout(() => {
        navigate('/products');
      }, 2000);
    } catch (error) {
      setError('Failed to place order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleContinueShopping = () => {
    navigate('/products');
  };
  
  return (
    <Container className="mt-5">
      <div className="glass-container">
        <h2 className="page-title mb-4">Shopping Cart</h2>
        
        {success && (
          <Alert variant="success" className="mb-4">
            {success}
          </Alert>
        )}
        
        {error && (
          <Alert variant="danger" className="mb-4">
            {error}
          </Alert>
        )}
        
        <Row>
          <Col md={8}>
            {cartItems.length > 0 ? (
              <div className="glass-card mb-4">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item d-flex align-items-center p-3 border-bottom">
                    <div style={{ width: '80px', height: '80px' }} className="me-3">
                      {item.image && (
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        />
                      )}
                    </div>
                    <div className="flex-grow-1">
                      <h5>{item.name}</h5>
                      <p className="mb-0">
                        Price: {item.price} | Quantity: {item.quantity}
                      </p>
                    </div>
                    <div className="ms-auto">
                      <Button 
                        variant="danger" 
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <i className="bi bi-trash"></i>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="glass-card p-4 text-center">
                <p>Your cart is empty.</p>
                <Button className="btn-glass" onClick={handleContinueShopping}>
                  Continue Shopping
                </Button>
              </div>
            )}
          </Col>
          
          <Col md={4}>
    <div className="glass-card p-4">
      <h4 className="mb-3">Order Summary</h4>
      <div className="d-flex justify-content-between mb-2">
        <span>Subtotal</span>
        <span>${calculateTotal()}</span>
      </div>
      <div className="d-flex justify-content-between mb-3">
        <span>Total</span>
        <span className="fw-bold">${calculateTotal()}</span>
      </div>
      
      {cartItems.length > 0 && (
        <Form onSubmit={handlePlaceOrder}>
          <h5 className="mt-4 mb-3">Shipping Address</h5>
          
          <Form.Group className="mb-3">
            <Form.Control
              className="form-control-glass"
              type="text"
              name="street"
              value={address.street}
              onChange={handleAddressChange}
              placeholder="Street Address"
              required
            />
          </Form.Group>
          
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Control
                  className="form-control-glass"
                  type="text"
                  name="city"
                  value={address.city}
                  onChange={handleAddressChange}
                  placeholder="City"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Control
                  className="form-control-glass"
                  type="text"
                  name="state"
                  value={address.state}
                  onChange={handleAddressChange}
                  placeholder="State"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Control
                  className="form-control-glass"
                  type="text"
                  name="zipCode"
                  value={address.zipCode}
                  onChange={handleAddressChange}
                  placeholder="Zip Code"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Control
                  className="form-control-glass"
                  type="text"
                  name="country"
                  value={address.country}
                  onChange={handleAddressChange}
                  placeholder="Country"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          
          <Button 
            type="submit" 
            className="btn-glass btn-glass-primary w-100" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : 'Place Order'}
          </Button>
        </Form>
      )}
    </div>
  </Col>
</Row>
      </div>
    </Container>
  );
};

export default Cart;