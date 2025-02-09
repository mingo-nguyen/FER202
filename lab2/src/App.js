import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import BookingForm from './components/BookingForm';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Hero />
      <Menu />
      <BookingForm />
    </div>
  );
};

export default App;