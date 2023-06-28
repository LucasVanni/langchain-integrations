import { Model } from './instances/model';

export const ModelTeste = async () => {
  const res = await Model.call('Generate a text about a topic of your choice.');

  console.log(res);
};
