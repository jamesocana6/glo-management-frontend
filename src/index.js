import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import { authReducer, fetchUserAsync } from './reduxStore/reducers/authSlice';
import { modelChoicesReducer } from './reduxStore/reducers/modelChoicesSlice';
import { chaptersReducer } from './reduxStore/reducers/chapterSlice';
import { csrfReducer } from './reduxStore/reducers/csrfSlice';
import { fetchCSRFToken } from './actions/csrfApi';
import csrfMiddleware from './middleware/csrfMiddleware';

const rootReducer = combineReducers({
  auth: authReducer, 
  modelChoices: modelChoicesReducer,
  chapters: chaptersReducer,
  csrf: csrfReducer,
});

// Retrieve the persisted state from local storage
const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

// Create the store with persisted state and middleware
const store = createStore(rootReducer, persistedState, applyMiddleware(thunk, csrfMiddleware));

// Save the state to local storage whenever it changes
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

// Dispatch the fetchCSRFToken action to set the CSRF token in the Redux store
store.dispatch(fetchCSRFToken());

// Fetch the user when the app loads
store.dispatch(fetchUserAsync());

console.log(store.getState());

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
