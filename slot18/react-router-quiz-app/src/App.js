import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from './components/Home';
import News from './components/News';
import About from './components/About';
import Contact from './components/Contact';
import Quiz from './components/Quiz';
import './global.css';

// Custom NavLink component to handle active class
function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Nav.Link as={Link} to={to} className={isActive ? 'active' : ''}>
      {children}
    </Nav.Link>
  );
}

function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="glass-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">Quiz App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/quiz">Quiz</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="*" element={
            <>
              <AppNavbar />
              <Container className="mt-4">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/quiz" element={<Quiz />} />
                </Routes>
              </Container>
            </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;