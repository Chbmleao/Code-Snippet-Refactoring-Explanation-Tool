import { refactorExitGate } from "../../gates/refactor/refactorExitGate";

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
