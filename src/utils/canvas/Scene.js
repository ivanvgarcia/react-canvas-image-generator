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

  renderBackground() {
    let bg = createImage('images/ui/bg.png');

    bg.onload = () => {
      this.ctx.drawImage(bg, 0, 0);
      this.avatar.render(this.data);
    };
  }

  render() {
    this.renderBackground();
  }
}

export default Scene;
