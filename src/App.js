import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <h1>PIZZA SITE COMING SOON!</h1>
    </Router>
  )
}

export default App;


