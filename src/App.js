import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import LandingPage from 'pages/LandingPage'
import DetailsPage from 'pages/DetailsPage'
import Checkout from 'pages/Checkout'
import Example from 'pages/Example'

import 'assets/scss/style.scss'

function App() {
  return <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={DetailsPage}></Route>
        <Route exact path="/checkout" component={Checkout}></Route>
        <Route path="/example" component={Example}></Route>
      </Router>

      <ToastContainer></ToastContainer>
  </div>
}

export default App
