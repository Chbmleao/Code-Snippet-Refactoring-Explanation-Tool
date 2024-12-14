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
    const prompt = `Analyze and refactor the following code:\n\n${code}\n\n1. Explain what it does.\n2. Provide a refactored version.\n3. Detail step-by-step reasoning.`;

    const completion = await openai.chat.completions.create({
      model: model,
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    return completion;
  } catch (error) {
    console.error("Error with OpenAI API:", error);
    throw new Error("Failed to connect to OpenAI API.");
  }
};