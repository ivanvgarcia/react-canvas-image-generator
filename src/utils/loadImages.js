import { CLOTHES_LINEUP } from './constantData';
import createImageCache from 'canvas-image-cache';

let imageCache = createImageCache();

const loadImages = () => {
  let dict = [];
  Object.values(CLOTHES_LINEUP).forEach(clothes => {
    const one = clothes.map((piece, idx) => {
      dict.push({ [idx]: `images/clothes/${piece}` });
    });
  });

  console.log(dict);
  console.log(imageCache);
  imageCache.loadImages(dict);

  // provide a callback after loading
  imageCache.imagesOnload();
};

export default loadImages;
