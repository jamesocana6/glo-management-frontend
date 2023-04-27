import axios from 'axios';
import { API_BASE_URL } from "../utils/constants"

export function getChapters() {
  return axios.get(`${API_BASE_URL}/api/chapters/`)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}
