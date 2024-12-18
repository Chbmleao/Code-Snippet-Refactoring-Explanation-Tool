import { refactorEntryGate } from "../refactorEntryGate";
import { refactorDomain } from "../../../domains/refactor/refactorDomain";

jest.mock("../../../domains/refactor/refactorDomain", () => ({
  refactorDomain: jest.fn(),
}));

describe("refactorEntryGate", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should trim the provided code before passing it to refactorDomain", async () => {
    const sampleCode = "   const sum = (a, b) => a + b;   ";
    const trimmedCode = "const sum = (a, b) => a + b;";

    const mockResponse = {
      explanation: "Sample explanation",
      code: "Refactored code snippet",
      reasoning: ["Reason 1", "Reason 2"],
    };

    // Mock the response of refactorDomain
    (refactorDomain as jest.Mock).mockResolvedValue(mockResponse);

    const result = await refactorEntryGate(sampleCode);

    // Ensure refactorDomain was called with trimmed code
    expect(refactorDomain).toHaveBeenCalledWith(trimmedCode);
    expect(result).toEqual(mockResponse);
  });

  it("should correctly return the response from refactorDomain", async () => {
    const sampleCode = "const multiply = (a, b) => a * b;";
    const mockResponse = {
      explanation: "Multiplication code refactored",
      code: "Refactored multiplication snippet",
      reasoning: ["Optimized loop", "Improved readability"],
    };

    (refactorDomain as jest.Mock).mockResolvedValue(mockResponse);

    const result = await refactorEntryGate(sampleCode);

    expect(result).toEqual(mockResponse);
  });

  it("should propagate errors if refactorDomain fails", async () => {
    const sampleCode = "const divide = (a, b) => a / b;";
    const errorMessage = "Domain processing error.";

    // Mock refactorDomain to reject with an error
    (refactorDomain as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await expect(refactorEntryGate(sampleCode)).rejects.toThrow(errorMessage);
  });
});
