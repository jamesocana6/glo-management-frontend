import { createSlice } from "@reduxjs/toolkit";
import { login, fetchUser, logout } from "../../actions/authApi";


const initialState = {
  user: null,
  token: null,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      console.log("setUser reducer called with payload:", action.payload);
    },
    clearUser: (state) => {
      console.log("Clearing user data...");
      state.user = null;
      state.token = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setUser, clearUser, setError, clearError, setLoading } =
  authSlice.actions;

  export const loginAsync = (email, password) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const { token } = await login(email, password);
      localStorage.setItem('token', token); // store token in localStorage
      dispatch(setUser({ token }));
      console.log('setUser action dispatched with payload:', { token });
      console.log('login successful with payload:', { token });
    } catch (error) {
      console.log('login failed with error:', error);
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };
  
  
  
export const fetchUserAsync = () => async (dispatch, getState) => {
  // Check if token is present in local storage
  const token = localStorage.getItem('token');

  if (token) {
    dispatch(setLoading(true));
    try {
      const user = await fetchUser(token);
      dispatch(setUser({ user, token }));
      
      // Persist token in local storage
      localStorage.setItem('token', token);
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  } else {
    dispatch(clearUser());
    
    // Clear token from local storage
    localStorage.removeItem('token');
  }
};



export const logoutAsync = (token) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    // Remove the token from localStorage
    localStorage.removeItem('token');
    console.log("Logging out with token:", token);
    await logout(token);
    console.log("Logout successful");
    dispatch(clearUser());
    console.log("User data cleared from state");
  } catch (error) {
    console.log("Logout failed:", error);
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

  

export const authReducer = authSlice.reducer;
export const selectIsLoggedIn = (state) => state.auth.token !== null;
export const selectIsLoading = (state) => state.auth.loading;

