function drawImages(ctx, clothes) {
  const images = [];

  Object.values(clothes).forEach(piece => {
    var img = new Image();
    img.src = piece;
    images.push(img);

    img.onload = function() {
      for (var i = 0; i < Object.values(clothes).length; i++) {
        ctx.drawImage(images[i], 0, 0);
      }
    };
  });
}

class Avatar {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.imagesToRender = [];
  }

  render(data) {
    let clothes = Object.assign({}, data);
    delete clothes.base64;
    delete clothes.pokemonImg;

    drawImages(this.ctx, clothes);
  }
}

export default Avatar;
