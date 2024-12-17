import { refactorDomain } from "../../domains/refactor/refactorDomain";

/**
 * Refactors the provided code by trimming it and then passing it to the refactorDomain function.
 *
 * @param code - The code to be refactored.
 * @returns A promise that resolves to the response from the refactorDomain function.
 */
export const refactorEntryGate = async (code: string) => {
  const trimmedCode = code.trim();

  const domainResponse = await refactorDomain(trimmedCode);

  return domainResponse;
};
