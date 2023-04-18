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

const rootReducer = combineReducers({
  auth: authReducer, 
  modelChoices: modelChoicesReducer,
  chapters: chaptersReducer,
});

// Retrieve the persisted state from local storage
const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

// Create the store with persisted state and middleware
const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

// Save the state to local storage whenever it changes
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

// Fetch the user when the app loads
store.dispatch(fetchUserAsync());

fetch('/api-auth/csrf/', {
  method: 'GET',
  credentials: 'include'
}).then(response => {
  const csrfToken = response.headers.get('X-CSRFToken');
  // Store the CSRF token in a cookie
  document.cookie = `csrftoken=${csrfToken}; Path=/`;
});

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
