import { refactorAiServiceAdapter } from "../../adapters/refactor/refactorAIServiceAdapter";

export const refactorExitGate = async (code: string) => {
  const response = await refactorAiServiceAdapter(code);

  if (!response) {
    throw new Error("Failed to refactor code.");
  }

  try {
    const responseObj = JSON.parse(response);

    if (
      !responseObj.explanation ||
      !responseObj.code ||
      !responseObj.reasoning
    ) {
      throw new Error("Invalid response format.");
    }

    return responseObj;
  } catch (error) {
    console.error("Error parsing response:", error);
    throw new Error("Failed to parse response.");
  }
};
