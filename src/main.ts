import 'dotenv/config';

import { OpenAI } from "langchain/llms/openai";

const main = async () => {
  try {
    const model = new OpenAI({ openAIApiKey: process.env.OPEN_AI_API_KEY, temperature: 0 });

    const res = await model.call(
      "Generate a text about a topic of your choice.",
    )

    console.log(res);
  } catch (e) {
    console.log(e);
  }

}

main();
