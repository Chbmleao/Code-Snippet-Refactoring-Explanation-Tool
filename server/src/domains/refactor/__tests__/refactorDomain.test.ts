import { refactorDomain } from "../../../domains/refactor/refactorDomain";
import { refactorExitGate } from "../../../gates/refactor/refactorExitGate";

// Mock the refactorExitGate module
jest.mock("../../../gates/refactor/refactorExitGate", () => ({
  refactorExitGate: jest.fn(),
}));

describe("refactorDomain", () => {
  const mockCode = "const a = 1;";
  const validResponse = {
    explanation: "This refactors the code for better readability.",
    code: "const a = 1; // Refactored",
    reasoning: "Improves maintainability by adding comments.",
  };

  const refactorExitGateMock = refactorExitGate as jest.Mock;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return a valid response when refactorExitGate returns correct data", async () => {
    refactorExitGateMock.mockResolvedValue(validResponse);

    const result = await refactorDomain(mockCode);

    expect(refactorExitGate).toHaveBeenCalledTimes(1);
    expect(refactorExitGate).toHaveBeenCalledWith(mockCode);
    expect(result).toEqual(validResponse);
  });

  it("should throw an error if the response format is invalid", async () => {
    const invalidResponse = { explanation: "Missing fields" };
    refactorExitGateMock.mockResolvedValue(invalidResponse);

    await expect(refactorDomain(mockCode)).rejects.toEqual(
      "Failed to get a valid response from the AI service."
    );

    expect(refactorExitGate).toHaveBeenCalledTimes(3);
    expect(refactorExitGate).toHaveBeenCalledWith(mockCode);
  });

  it("should throw an error after multiple failed attempts", async () => {
    refactorExitGateMock.mockRejectedValue("AI service error");

    await expect(refactorDomain(mockCode)).rejects.toEqual(
      "Failed to get a valid response from the AI service."
    );

    expect(refactorExitGate).toHaveBeenCalledTimes(3);
    expect(refactorExitGate).toHaveBeenCalledWith(mockCode);
  });

  it("should handle a mix of invalid and valid responses across attempts", async () => {
    const invalidResponse = { explanation: "Missing fields" };
    refactorExitGateMock
      .mockResolvedValueOnce(invalidResponse)
      .mockResolvedValueOnce(validResponse);

    const result = await refactorDomain(mockCode);

    expect(refactorExitGate).toHaveBeenCalledTimes(2);
    expect(refactorExitGate).toHaveBeenCalledWith(mockCode);
    expect(result).toEqual(validResponse);
  });
});
