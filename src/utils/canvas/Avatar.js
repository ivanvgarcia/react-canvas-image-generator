import { HAIR, EYES, TOPS, BOTTOMS, FOOTWEAR } from 'utils/constantData';

const createImage = function(path) {
  var image = new Image();
  image.src = path;
  return image;
};

class Avatar {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.position = [];
    this.clothesInfoMap = {
      '10101': null, // Hair
      '10201': null, // Hat
      '10301': null, // Face
      '10401': null, // Top
      '10501': null, // Bottom
      '10901': null // Shoe
    };
  }

  renderHair() {
    let hair = {};

    hair.front = createImage(`images/clothes/${HAIR[0]}_f.png`);
    hair.back = createImage(`images/clothes/${HAIR[0]}_b.png`);

    this.ctx.drawImage(hair.front, 0, 0);
  }

  renderBody() {
    let body = createImage('images/body/body_1_1.png');
    body.onload = () => {
      this.ctx.drawImage(body, 0, 0);
    };

    body.onload = () => {
      this.ctx.drawImage(body, 0, 0);
      this.renderHair();
    };
  }

  render() {
    this.renderBody();
    this.renderHair();
  }
}

export default Avatar;
