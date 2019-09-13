import Avatar from 'utils/canvas/Avatar';

const createImage = function(path) {
  var image = new Image();
  image.src = path;
  return image;
};

class Scene {
  constructor(canvas, ctx, data) {
    this.avatar = new Avatar(canvas, ctx);
    this.canvas = canvas;
    this.ctx = ctx;
    this.data = data;
  }

  renderBackground(data) {
    let bg = createImage('images/ui/bg.png');

    bg.onload = () => {
      this.ctx.drawImage(bg, 0, 0);
      this.avatar.render(data);
    };
  }

  render(data) {
    this.renderBackground(data);
  }
}

export default Scene;
