import { getCSRFToken } from '../utils/csrf';


export const FETCH_CSRF_TOKEN_SUCCESS = 'FETCH_CSRF_TOKEN_SUCCESS';

export const fetchCSRFTokenSuccess = (csrfToken) => ({
  type: FETCH_CSRF_TOKEN_SUCCESS,
  payload: csrfToken,
});

export const fetchCSRFToken = () => {
  return (dispatch) => {
    getCSRFToken().then((csrfToken) => {
      if (csrfToken) {
        dispatch(fetchCSRFTokenSuccess(csrfToken));
      } else {
        dispatch({ type: 'CSRF_TOKEN_ERROR', payload: 'CSRF token not available' });
      }
    });
  };
};
