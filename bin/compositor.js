"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chains_1 = require("langchain/chains");
const prompts_1 = require("langchain/prompts");
const chat_1 = __importDefault(require("./instances/chat"));
const template = `you are an aristocratic thinker, write a thought in Portuguese regarding this topic.
 
  Theme: {theme}
  This is my thoughts on the topic above:`;
const promptTemplate = new prompts_1.PromptTemplate({
    template,
    inputVariables: ['theme']
});
const aristocraticChain = new chains_1.LLMChain({ llm: chat_1.default, prompt: promptTemplate });
const poemTemplate = `Make a poem with the thought below:

thought: {thought}
`;
const promptPoemTemplate = new prompts_1.PromptTemplate({
    template: poemTemplate,
    inputVariables: ['thought']
});
const poemChain = new chains_1.LLMChain({ llm: chat_1.default, prompt: promptPoemTemplate });
const overallChain = new chains_1.SimpleSequentialChain({
    chains: [aristocraticChain, poemChain],
    verbose: true
});
const review = await overallChain.run('Tragedy at sunset on the beach');
console.log('🚀 review:', review);
