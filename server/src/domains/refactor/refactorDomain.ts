import { refactorExitGate } from "../../gates/refactor/refactorExitGate";

/**
 * Refactors the given code by making multiple attempts to get a valid response from the AI service.
 *
 * @param code - The source code to be refactored.
 * @returns A promise that resolves to an object containing the refactored code, explanation, and reasoning.
 * @throws Will throw an error if it fails to get a valid response after the specified number of attempts.
 */
export const refactorDomain = async (code: string) => {
  const attempts = 3;

  for (let i = 0; i < attempts; i++) {
    try {
      const responseObj = await refactorExitGate(code);

      if (
        !responseObj.explanation ||
        !responseObj.code ||
        !responseObj.reasoning
      ) {
        throw "Invalid response format.";
      }

      return responseObj;
    } catch (error) {
      console.error("Error in refactorDomain:", error);

      if (i === attempts - 1) {
        throw "Failed to get a valid response from the AI service.";
      }
    }
  }
};
