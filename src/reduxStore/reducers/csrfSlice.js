import { FETCH_CSRF_TOKEN_SUCCESS } from '../../actions/csrfApi';

const initialState = {
  csrfToken: null,
};

export const csrfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CSRF_TOKEN_SUCCESS:
      return { ...state, csrfToken: action.payload };
    default:
      return state;
  }
};

