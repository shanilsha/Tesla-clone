import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
}from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Home />
      <Footer />
   </Router>
    </div>
  );
}

export default App;
