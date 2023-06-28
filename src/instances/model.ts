import { OpenAI } from 'langchain/llms/openai';

export const Model = new OpenAI({
  openAIApiKey: process.env.OPEN_AI_API_KEY,
  temperature: 0
});
