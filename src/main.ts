import 'dotenv/config';
import { ModelTeste } from './model';
// import { Templates } from './compositor';

const main = async () => {
  try {
    // await Templates();
    await ModelTeste();
  } catch (e) {
    console.log(e);
    // if (e instanceof Error) {
    //   throw new Error(e?.message);
    // }
  }
};

main();
