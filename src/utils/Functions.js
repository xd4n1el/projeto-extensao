import { images } from './Constants';

export const getImage = (name = '') => {
  const target = images.find(image => image.name === name);

  return target;
};
