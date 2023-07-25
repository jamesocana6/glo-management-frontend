import axios from 'axios';
import { API_BASE_URL } from "../utils/constants"

export function getModelChoices() {
  return axios.get(`${API_BASE_URL}/api/model_choices/`)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}
