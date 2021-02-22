import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, appData, sweetData } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose Your Favorite' data={productData} />
      <Feature />
      <Products heading='Choose An Appetizer' data={appData} />
      <Products heading='Choose A Dessert' data={sweetData} />
      <Footer />
    </Router>
  )
}

export default App;


