import { Random } from 'random-js';

const rolarD6 = () => {
  const random = new Random();

  return random.integer(0, 5);
};

const rolarDadoD6 = () => {
  const random = new Random();

  return random.integer(1, 6);
};

export {
  rolarD6,
  rolarDadoD6,
};
