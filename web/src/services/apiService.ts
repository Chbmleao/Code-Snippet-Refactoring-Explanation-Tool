import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_PORT = import.meta.env.VITE_API_PORT;

export const callCodeRefactorAPI = async (code: string) => {
  try {
    const response = await axios.post(`${API_URL}:${API_PORT}/api/refactor`, {
      code,
    });
    return response.data;
  } catch (error) {
    console.error('Failed to call API', error);
    return { error: 'API call failed' };
  }
};
