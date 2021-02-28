import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//REDUCERS///////////////////REDUCERS
const feelingReducer = (state = '', action) => {
  console.log(action, "action")
  if(action.type === 'ADD_FEELING'){
    return [...state, action.payload];
    // console.log(action.payload, "payload")
    // return [...state, action.payload];
  }
  return state;
}

const understandingReducer = (state = [], action) => {
  if(action.type === 'ADD_UNDERSTANDING'){
    console.log(action.payload, "payload")
    return [...state, action.payload];
  }
  return state;
}

const supportReducer = (state = [], action) => {
  if(action.type === 'ADD_SUPPORT'){
    console.log(action.payload, "payload")
    return [...state, action.payload];
    }
  return state;
}

const commentsReducer = (state = '', action) => {
  if(action.type === 'ADD_COMMENTS'){
    console.log(action.payload, "payload")
    return [...state, action.payload];  }
  return state;
}


//////////////////////////////
//store has access to these reducers
const store = createStore(
  combineReducers({
    feelingReducer,
    understandingReducer,
    supportReducer,
    commentsReducer,
  }),
  // Redux logger!
  applyMiddleware(logger)
); 



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
