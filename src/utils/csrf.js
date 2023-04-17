export const getCSRFToken = async () => {
    const response = await fetch('http://localhost:8000/api-auth/csrf/', {
      method: 'GET',
      credentials: 'include',
    });
    const csrfToken = response.headers.get('X-CSRFToken');
    return csrfToken;
  };
  