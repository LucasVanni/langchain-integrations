"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.model = void 0;
const openai_1 = require("langchain/llms/openai");
exports.model = new openai_1.OpenAI({
    openAIApiKey: process.env.OPEN_AI_API_KEY,
    temperature: 0
});
