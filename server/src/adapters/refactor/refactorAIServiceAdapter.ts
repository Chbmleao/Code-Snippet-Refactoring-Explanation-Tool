import dotenv from "dotenv";
import OpenAI from "openai";

const envFile = `./config/.env`;
dotenv.config({ path: envFile });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});
const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

export const refactorAiServiceAdapter = async (code: string) => {
  try {
    const prompt = `Analyze and refactor the following code snippet. Your response should follow this JSON format:
                      {
                        "explanation": "A clear natural-language explanation of what the code does.",
                        "code": "A refactored version of the code.",
                        "reasoning": [
                          "Step-by-step reasoning to justify the changes and refactor."
                        ]
                      }

                    Here's the code snippet:

                      \`\`\`
                      ${code}
                      \`\`\`
    `;

    const completion = await openai.chat.completions.create({
      model: model,
      messages: [
        {
          role: "system",
          content: prompt,
        },
      ],
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Error with OpenAI API:", error);
    throw new Error("Failed to connect to OpenAI API.");
  }
};
