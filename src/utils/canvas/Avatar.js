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

class Avatar {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  renderRandomAvatar() {
    let hair = {};
    let top = {};
    let foot = {};
    let bottom = {};
    hair.back = createImage(`images/clothes/${HAIR[0]}_b.png`);
    let body = createImage('images/body/body_4_1.png');
    let face = createImage(`images/clothes/${FACES[0]}_f.png`);
    let accessory = createImage(`images/clothes/${ACCESSORIES[0]}_f.png`);
    hair.front = createImage(`images/clothes/${HAIR[0]}_f.png`);
    top.back = createImage(`images/clothes/${TOPS[0]}_b.png`);
    top.front = createImage(`images/clothes/${TOPS[0]}_f.png`);
    top.inner = createImage(`images/clothes/${TOPS[0]}_i.png`);
    bottom.back = createImage(`images/clothes/${BOTTOMS[0]}_b.png`);
    bottom.front = createImage(`images/clothes/${BOTTOMS[0]}_f.png`);
    foot.back = createImage(`images/clothes/${FOOTWEAR[2]}_b.png`);
    foot.front = createImage(`images/clothes/${FOOTWEAR[2]}_f.png`);

    body.onload = () => {
      this.ctx.drawImage(hair.back, 0, 0);
      this.ctx.drawImage(body, 0, 0);
      this.ctx.drawImage(hair.front, 0, 0);
      this.ctx.drawImage(accessory, 0, 0);
      this.ctx.drawImage(face, 0, 0);
      this.ctx.drawImage(bottom.back, 0, 0);
      this.ctx.drawImage(bottom.front, 0, 0);
      this.ctx.drawImage(top.back, 0, 0);
      this.ctx.drawImage(top.front, 0, 0);
      this.ctx.drawImage(top.inner, 0, 0);
      this.ctx.drawImage(foot.back, 0, 0);
      this.ctx.drawImage(foot.front, 0, 0);
    };
  }

  render() {}
}

export default Avatar;
