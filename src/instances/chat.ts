import { ChatOpenAI } from 'langchain/chat_models/openai';

export const Chat = new ChatOpenAI({
  openAIApiKey: process.env.OPEN_AI_API_KEY,
  temperature: 0
});
