import { refactorDomain } from "../../domains/refactor/refactorDomain";

export const refactorEntryGate = async (code: string) => {
  const trimmedCode = code.trim();

  const domainResponse = await refactorDomain(trimmedCode);

  return domainResponse;
};