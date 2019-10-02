import Avatar from 'utils/canvas/Avatar';

class Scene {
  constructor(canvas, ctx) {
    this.avatar = new Avatar();
    this.canvas = canvas;
    this.ctx = ctx;
    this.interval = 0;
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.avatar.render(this.ctx, this.canvas);
  }

  start() {
    this.render();
  }

  onClothesSelected(clothesId) {
    this.avatar.attachClothes(clothesId);
  }
}

export default Scene;
