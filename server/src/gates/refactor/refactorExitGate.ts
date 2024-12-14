import { refactorAiServiceAdapter } from "../../adapters/refactor/refactorAIServiceAdapter";

export const refactorExitGate = async (code: string) => {
  // Interact with the adapter to get data from OpenAI
  const response = await refactorAiServiceAdapter(code);

  // Optionally process or format the adapter's response
  return response;
};