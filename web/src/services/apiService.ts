import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_PORT = import.meta.env.VITE_API_PORT;

/**
 * Calls the Code Refactor API with the provided code.
 *
 * @param code - The code to be refactored.
 * @returns A promise that resolves to an object containing the refactored code, explanation, and reasoning.
 * @throws An error object containing the message, status, and details if the API call fails.
 */
export const callCodeRefactorAPI = async (code: string) => {
  try {
    const { data } = await axios.post(`${API_URL}:${API_PORT}/api/refactor`, {
      code,
    });

    // Redundant type checking for maintainability
    return {
      code: data.code,
      explanation: data.explanation,
      reasoning: data.reasoning,
    };
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
