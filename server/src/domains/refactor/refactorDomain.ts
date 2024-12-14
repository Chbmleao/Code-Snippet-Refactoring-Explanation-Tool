import { refactorExitGate } from "../../gates/refactor/refactorExitGate";

export const refactorDomain = async (code: string) => {
  // Business logic (e.g., additional processing or transformations)
  const refactorResult = await refactorExitGate(code);

  return refactorResult;
};