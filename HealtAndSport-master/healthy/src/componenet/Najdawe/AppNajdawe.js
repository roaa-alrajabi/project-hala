import React from 'react';
import Tips from './Tips';
import OverWeight from './Overweight';
import Weight from './Weight';
import Normal from './Normal';
import Obese from './Obese';
import NavBar from '../Roaa/NavBar';
import Footer from '../Roaa/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function Hala() {
  return (
    <div className="App">
      <NavBar/>
      <Weight/>
      <Router >
        <Route path="/tips" component={Tips} />
        <Route path="/overweight" component={OverWeight}/>
        <Route path="/normal" component={Normal}/>
        <Route path="/obese" component={Obese}/>
        </Router>
        <Footer/>
    </div>

  );
}

export default Hala;
