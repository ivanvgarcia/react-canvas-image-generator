import Avatar from 'utils/canvas/Avatar';

class Scene {
  constructor(canvas, ctx) {
    this.avatar = new Avatar(canvas, ctx);
    this.canvas = canvas;
    this.ctx = ctx;
  }

  render() {
    this.avatar.render(this.ctx);
  }

  start() {
    setInterval(() => {
      this.render();
    }, 100);
  }

  onClothesSelected(clothesId) {
    this.avatar.attachClothes(clothesId);
  }
}

export default Scene;
