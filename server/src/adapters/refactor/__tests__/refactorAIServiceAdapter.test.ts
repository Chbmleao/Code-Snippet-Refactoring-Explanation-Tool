import { refactorAiServiceAdapter } from "../refactorAIServiceAdapter";
import openai from "openai";

jest.mock("openai", () => {
  return jest.fn().mockImplementation(() => ({
    chat: {
      completions: {
        create: jest.fn().mockResolvedValue({
          explanation: "Sample explanation",
          code: "Refactored code snippet",
          reasoning: ["Reason 1", "Reason 2"],
        }),
      },
    },
  }));
});

describe("refactorAiServiceAdapter", () => {
  // Reset mocks before each test to avoid conflicts
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should refactor a given code snippet", async () => {
    const sampleCode = "const sum = (a, b) => a + b;";
    const result = await refactorAiServiceAdapter(sampleCode);

    expect(result).toHaveProperty("explanation");
    expect(result).toHaveProperty("code");
    expect(result).toHaveProperty("reasoning");
  });
});
