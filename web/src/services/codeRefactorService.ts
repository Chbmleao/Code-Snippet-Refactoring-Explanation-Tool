import { callCodeRefactorAPI } from './apiService';

/**
 * Refactors the provided code by calling an external API.
 *
 * @param code - The code to be refactored.
 * @returns A promise that resolves with the refactored code.
 * @throws Will throw an error if no code is provided or if the code length exceeds 1,000,000 characters.
 */
export const refactorCode = async (code: string) => {
  if (!code) {
    throw 'No code provided.';
  }

  if (code.length > 1000000) {
    throw 'Code is too long.';
  }

  const response = await callCodeRefactorAPI(code);

  return response;
};
