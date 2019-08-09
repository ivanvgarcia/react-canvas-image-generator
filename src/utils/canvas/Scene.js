class Scene {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
  }
  addBody(ctx) {
    let body = new Image();
    body.src = 'images/body/body_1_1.png';
    body.onload = () => {
      ctx.drawImage(body, 50, 0, body.width * 0.8, body.height * 0.8);
    };
  }

  createBackground(ctx) {
    let bg = new Image();
    bg.src = 'images/ui/bg.png';
    bg.onload = () => {
      ctx.drawImage(bg, 0, 0);
      this.addBody(ctx);
    };
  }

  render(ctx) {
    this.createBackground(ctx);
  }
}

export default Scene;
