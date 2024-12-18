import { refactorExitGate } from "../refactorExitGate";
import { refactorAiServiceAdapter } from "../../../adapters/refactor/refactorAIServiceAdapter";

jest.mock("../../../adapters/refactor/refactorAIServiceAdapter", () => ({
  refactorAiServiceAdapter: jest.fn(),
}));

describe("refactorExitGate", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should parse and return a valid AI response as JSON", async () => {
    const sampleCode = "const subtract = (a, b) => a - b;";
    const mockResponse = {
      choices: [
        {
          message: {
            content:
              '```json\n{"explanation": "Subtraction code refactored", "code": "Refactored snippet"}\n```',
          },
        },
      ],
    };

    (refactorAiServiceAdapter as jest.Mock).mockResolvedValue(mockResponse);

    const result = await refactorExitGate(sampleCode);

    expect(refactorAiServiceAdapter).toHaveBeenCalledWith(sampleCode);
    expect(result).toEqual({
      explanation: "Subtraction code refactored",
      code: "Refactored snippet",
    });
  });

  it("should throw an error if no content is received from the AI service", async () => {
    const sampleCode = "const add = (a, b) => a + b;";

    const mockResponse = {
      choices: [
        {
          message: {
            content: undefined,
          },
        },
      ],
    };

    (refactorAiServiceAdapter as jest.Mock).mockResolvedValue(mockResponse);

    try {
      await refactorExitGate(sampleCode);
    } catch (error) {
      expect(error).toBe("Failed to get a valid response from the AI service.");
    }
  });

  it("should throw an error if the AI response contains invalid JSON", async () => {
    const sampleCode = "const multiply = (a, b) => a * b;";
    const mockResponse = {
      choices: [
        {
          message: {
            content: "```json\nNot a valid JSON string\n```",
          },
        },
      ],
    };

    (refactorAiServiceAdapter as jest.Mock).mockResolvedValue(mockResponse);

    try {
      await refactorExitGate(sampleCode);
    } catch (error) {
      expect(error).toBe("Failed to get a valid response from the AI service.");
    }
  });
});
