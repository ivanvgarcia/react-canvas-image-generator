import Avatar from 'utils/canvas/Avatar';

const createImage = function(path) {
  var image = new Image();
  image.src = path;
  return image;
};

class Scene {
  constructor(canvas, ctx) {
    this.avatar = new Avatar(canvas, ctx);
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

  renderBackground() {
    let bg = createImage('images/ui/bg.png');
    bg.onload = () => {
      this.ctx.drawImage(bg, 0, 0);
    };
  }

  render() {
    this.renderBackground();
    this.avatar.render();
  }
}

export default Scene;
