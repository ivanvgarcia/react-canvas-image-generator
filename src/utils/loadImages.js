import { CLOTHES_LINEUP } from './constantData';

const loadImages = () => {
  let dict = [];
  Object.values(CLOTHES_LINEUP).forEach(clothes => {
    clothes.map((piece, idx) => {
      dict.push({ [idx]: `images/clothes/${piece}` });
    });
  });
};

export default loadImages;
