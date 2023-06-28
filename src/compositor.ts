import { SimpleSequentialChain, LLMChain } from 'langchain/chains';
import { PromptTemplate } from 'langchain/prompts';
import { Chat } from './instances/chat';

export const Templates = async () => {
  const template = `you are an aristocratic thinker, write a thought in Portuguese regarding this topic.
 
  Theme: {theme}
  This is my thoughts on the topic above:`;

  const promptTemplate = new PromptTemplate({
    template,
    inputVariables: ['theme']
  });

  const aristocraticChain = new LLMChain({ llm: Chat, prompt: promptTemplate });

  const poemTemplate = `Make a poem with the thought below:

thought: {thought}
`;

  const promptPoemTemplate = new PromptTemplate({
    template: poemTemplate,
    inputVariables: ['thought']
  });

  const poemChain = new LLMChain({ llm: Chat, prompt: promptPoemTemplate });

  const overallChain = new SimpleSequentialChain({
    chains: [aristocraticChain, poemChain],
    verbose: true
  });

  const review = await overallChain.run('Tragedy at sunset on the beach');

  return review;
};
