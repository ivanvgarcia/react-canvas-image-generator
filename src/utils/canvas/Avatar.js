function drawImages(ctx, clothes) {
  const images = [];
  let countLoaded = 0;
  const clothesArray = Object.values(clothes).filter($0 =>
    $0.startsWith('images')
  );
  const clothCount = clothesArray.length;
  // Object.values(clothes).forEach((piece, idx) => {
  clothesArray.forEach((piece, idx) => {
    var img = new Image();
    img.src = piece;
    images.push(img);

    img.onload = function() {
      countLoaded++;
      if (countLoaded !== clothCount) {
        return;
      }
      for (var i = 0; i < clothesArray.length; i++) {
        ctx.drawImage(images[i], 0, 0);
      }
      countLoaded = 0;
    };
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
  }

  render(data) {
    let clothes = Object.assign({}, data);
    clothes.body = `images/body/body_${data.upperPose}_${data.lowerPose}.png`;
    delete clothes.base64;
    delete clothes.pokemonImg;
    delete clothes.upperPose;
    delete clothes.lowerPose;

    drawImages(this.ctx, clothes);
  }

  // changeClothes(type, data) {
  //   if (type === 'hair') {
  //     drawImages(this.ctx, data);
  //   }
  // }
}

export default Avatar;
