import { refactorAiServiceAdapter } from "../../adapters/refactor/refactorAIServiceAdapter";

export const refactorExitGate = async (code: string) => {
  try {
    const response = await refactorAiServiceAdapter(code);

    let content = response.choices[0]?.message?.content;

    if (!content) {
      throw new Error("No content received from AI service.");
    }

    content = content.replace(/(^\`\`\`json\s*)|(\s*\`\`\`$)/g, "").trim();

    const json = JSON.parse(content);

    return json;
  } catch (error) {
    console.error("Failed to parse AI response:", error);
    throw "Failed to get a valid response from the AI service.";
  }
};
