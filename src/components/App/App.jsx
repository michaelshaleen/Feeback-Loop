import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Home from '../Home/Home';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
        
      <Router>
          <Route path='/' exact>
            <Home />
          </Route>

          <Route path='/Feeling' exact>
            <Feeling />
          </Route>  

          <Route path='/Understanding' exact>
            <Understanding />
          </Route>

          <Route path='/Support' exact>
            <Support />
          </Route>

          <Route path='/Comments' exact>
            <Comments />
          </Route>


          <Route path='/Review' exact>
            <Review />
          </Route>

          <Route path='/Success' exact>
            <Success />
          </Route>
      </Router>
    </div>
  );
}

export default App;
