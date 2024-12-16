import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_PORT = import.meta.env.VITE_API_PORT;

export const callCodeRefactorAPI = async (code: string) => {
  try {
    const response = await axios.post(`${API_URL}:${API_PORT}/api/refactor`, {
      code,
    });
    return response.data;
  } catch (error: any) {
    console.error('Failed to call API', error);

    if (axios.isAxiosError(error)) {
      throw {
        message: error.response?.data?.message || 'API call failed',
        status: error.response?.status || 500,
        details: error.response?.data || null,
      };
    } else {
      throw { message: 'Unknown error occurred', details: error };
    }
  }
};
