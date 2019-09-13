// const images = [];
// let countLoaded = 0;
// const clothesArray = Object.values(clothes).filter($0 =>
//   $0.startsWith('images')
// );
// const clothCount = clothesArray.length;
// // Object.values(clothes).forEach((piece, idx) => {
// clothesArray.forEach((piece, idx) => {
//   var img = new Image();
//   img.src = piece;
//   images.push(img);

//   img.onload = function() {
//     countLoaded++;
//     if (countLoaded !== clothCount) {
//       return;
//     }
//     for (var i = 0; i < clothesArray.length; i++) {
//       ctx.drawImage(images[i], 0, 0);
//     }
//     countLoaded = 0;
//   };
// });

function preloadImage(source) {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.addEventListener('load', resolve.bind(null, image));
    image.src = source;
  });
}

// Object.values(clothes)
//   .map(piece => {
//     var img = new Image();
//     img.src = piece;
//     return img;
//   })
//   .forEach(item => {
//     item.onload = () => {
//       ctx.drawImage(item, 0, 0);
//     };
//   });

class Avatar {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.imagesToRender = [];
    this.previousClothes = null;
  }

  render(data) {
    let clothes = Object.assign({}, data);
    clothes.body = `images/body/body_${data.upperPose}_${data.lowerPose}.png`;
    delete clothes.base64;
    delete clothes.pokemonImg;
    delete clothes.upperPose;
    delete clothes.lowerPose;

    this.drawImages(clothes);
  }

  drawImages(clothes) {
    console.log(this.previousClothes);
    console.log(clothes);
    const clothesArray = Object.values(clothes).filter($0 =>
      $0.startsWith('images')
    );

    Promise.all(clothesArray.map(preloadImage)).then(imgs => {
      for (var i = 0; i < clothesArray.length; i++) {
        this.ctx.drawImage(imgs[i], 0, 0);
      }
      this.previousClothes = clothes;
    });
  }
  // changeClothes(type, data) {
  //   if (type === 'hair') {
  //     drawImages(this.ctx, data);
  //   }
  // }
}

export default Avatar;
