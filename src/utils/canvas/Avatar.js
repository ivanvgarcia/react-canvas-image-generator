import {
  HAIR,
  FACES,
  TOPS,
  BOTTOMS,
  FOOTWEAR,
  ACCESSORIES
} from 'utils/constantData';

const createImage = function(path) {
  var image = new Image();
  image.src = path;
  return image;
};

function drawImages(ctx, clothes, images) {
  var loadCount = 0;
  console.log('wtf');
  console.log(++loadCount, images.length);
  for (let i = 0; i < clothes.length; i++) {
    var img = new Image();
    img.src = clothes[i];
    images.push(img);

    img.onload = function() {
      if (++loadCount === images.length) {
        for (var i = 0; i < clothes.length; i++) {
          ctx.drawImage(images[i], 0, 0);
        }
      }
    };
  }
}

class Avatar {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.imagesToRender = [];
  }

  renderRandomAvatar() {
    const clothes = [
      `images/clothes/${HAIR[0]}_b.png`,
      'images/body/body_4_1.png',
      `images/clothes/${FACES[0]}_f.png`,
      `images/clothes/${ACCESSORIES[0]}_f.png`,
      `images/clothes/${HAIR[0]}_f.png`,
      `images/clothes/${BOTTOMS[0]}_b.png`,
      `images/clothes/${BOTTOMS[0]}_f.png`,
      `images/clothes/${TOPS[0]}_b.png`,
      `images/clothes/${TOPS[0]}_f.png`,
      `images/clothes/${TOPS[0]}_i.png`,
      `images/clothes/${FOOTWEAR[2]}_b.png`,
      `images/clothes/${FOOTWEAR[2]}_f.png`
    ];
    const images = [];
    // let hair = {};
    // let top = {};
    // let foot = {};
    // let bottom = {};
    // hair.back = createImage(`images/clothes/${HAIR[0]}_b.png`);
    // let body = createImage('images/body/body_4_1.png');
    // let face = createImage(`images/clothes/${FACES[0]}_f.png`);
    // let accessory = createImage(`images/clothes/${ACCESSORIES[0]}_f.png`);
    // hair.front = createImage(`images/clothes/${HAIR[0]}_f.png`);
    // top.back = createImage(`images/clothes/${TOPS[0]}_b.png`);
    // top.front = createImage(`images/clothes/${TOPS[0]}_f.png`);
    // top.inner = createImage(`images/clothes/${TOPS[0]}_i.png`);
    // bottom.back = createImage(`images/clothes/${BOTTOMS[0]}_b.png`);
    // bottom.front = createImage(`images/clothes/${BOTTOMS[0]}_f.png`);
    // foot.back = createImage(`images/clothes/${FOOTWEAR[2]}_b.png`);
    // foot.front = createImage(`images/clothes/${FOOTWEAR[2]}_f.png`);

    // // this.imagesToRender.push(
    // //   hair.back,
    // //   body,
    // //   face,
    // //   accessory,
    // //   hair.front,
    // //   top.back,
    // //   top.front,
    // //   top.inner,
    // //   bottom.back,
    // //   bottom.front,
    // //   foot.back,
    // //   foot.front
    // // );

    drawImages(this.ctx, clothes, images);

    // body.onload = () => {
    //   drawImages(this.ctx, this.imagesToRender);
    // };
  }

  render() {}
}

export default Avatar;
