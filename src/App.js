import React from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/ContactUs';
import Products from './components/pages/Product';
import Gallery from './components/pages/Gallery';
import Navbar from './components/inc/Navbar';
import Footer from './components/inc/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
   <Router>
    <Navbar />
    
    <Switch>
      <Route exact path="/">
            <Home/>
      </Route>
      <Route exact path="/about">
            <About/>
      </Route>
      <Route exact path="/contact">
            <Contact/>
      </Route>
      <Route exact path="/products">
            <Products/>
      </Route>
      <Route exact path="/gallery">
            <Gallery/>
      </Route>
      </Switch>

      <Footer />
    </Router>
   
  );
}

export default App;
