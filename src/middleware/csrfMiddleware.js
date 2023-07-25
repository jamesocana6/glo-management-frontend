import { API_BASE_URL } from '../utils/constants';

const csrfMiddleware = (store) => (next) => async (action) => {

  if (action.meta && action.meta.requiresAuth) {
    const state = store.getState();
    const csrfToken = state.csrf.csrfToken;

    // Add CSRF token to headers
    action.headers = {
      ...action.headers,
      'X-CSRFToken': csrfToken,
    };

    // Make sure the Content-Type header is set
    if (!action.headers['Content-Type']) {
      action.headers['Content-Type'] = 'application/json';
    }

    // Add the base API URL to the URL if it is not already present
    if (!action.url.startsWith(API_BASE_URL)) {
      action.url = API_BASE_URL + action.url;
    }
  }

  return next(action);
};

export default csrfMiddleware;
