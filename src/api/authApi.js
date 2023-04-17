import { getCSRFToken } from '../utils/csrf';
import { API_BASE_URL } from "../utils/constants"
import axios from 'axios';


export const login = async (email, password) => {
    const csrfToken = await getCSRFToken(); // get the CSRF token from the backend
    const response = await fetch(`${API_BASE_URL}/api/accounts/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrfToken, // include the CSRF token in the headers
      },
      body: JSON.stringify({ email, password }),
    });
  
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail);
    }
  
    const data = await response.json();
    const { token } = data;
    return { token };
  };

  
  export const fetchUser = async (token) => {
    const response = await fetch(`${API_BASE_URL}/user/me/`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      },
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail);
    }
    
    const data = await response.json();
    return data;
  }; 
  
  
  export const logout = async (token) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/accounts/logout`, {
        headers: { Authorization: `Token ${token}` },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  
  