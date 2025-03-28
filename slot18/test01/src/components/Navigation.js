import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navigation = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const { cartItems } = useCart();
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };


  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-glass">
      <Container>
        <Navbar.Brand href="/products">Product Management App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user && <Nav.Link href="/products">Products</Nav.Link>}
          </Nav>
          <Nav>
            {user && (
              <Nav.Link href="/cart" className="me-3">
                <i className="bi bi-cart"></i> Cart
                {cartItemCount > 0 && (
                  <span className="ms-1 badge bg-primary rounded-pill">{cartItemCount}</span>
                )}
              </Nav.Link>
            )}
            {user ? (
              <>
                <Navbar.Text className="me-3">
                  Signed in as: {user.username}
                </Navbar.Text>
                <Button variant="outline-light" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
