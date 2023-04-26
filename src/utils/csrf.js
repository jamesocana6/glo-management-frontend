import { API_BASE_URL } from "../utils/constants"

export const getCSRFToken = async () => {
    const response = await fetch(`${API_BASE_URL}/api-auth/csrf/`, {
      method: 'GET',
      credentials: 'include',
    });
    const csrfToken = response.headers.get('X-CSRFToken');
    return csrfToken;
  };
  