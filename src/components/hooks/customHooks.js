import React, { useState } from 'react';

const draw = (ctx, location) => {
  ctx.fillStyle = 'deepskyblue';
  ctx.shadowColor = 'dodgerblue';
  ctx.shadowBlur = 20;
  ctx.fillRect(location.x, location.y, 60, 100);
  ctx.restore();
};

const getMousePos = (canvas, location) => {
  var rect = canvas.getBoundingClientRect();
  return {
    x: location.x - rect.left,
    y: location.y - rect.top
  };
};

const usePersistentState = init => {
  const [value, setValue] = React.useState(
    JSON.parse(localStorage.getItem('draw-app')) || init
  );
  React.useEffect(() => {
    localStorage.setItem('draw-app', JSON.stringify(value));
  });
  return [value, setValue];
};

const usePersistentData = canvas => {
  const [data, setData] = useState({
    base64: '',
    pokemonImg: ''
  });

  return [data, setData];
};

export const usePersistentCanvas = () => {
  const [locations, setLocations] = usePersistentState([]);
  const [data, setData] = usePersistentData();

  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const w = 500;
    const h = 500;
    const canvas = canvasRef.current;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, w, h);

    ctx.fillStyle = '#233';
    ctx.fillRect(0, 0, w, h);
    locations.forEach(location => {
      let boundCoords = getMousePos(canvas, location);
      console.log(boundCoords);
      draw(ctx, location);
    });

    let pokemon = new Image();
    pokemon.src = data.pokemonImg;
    pokemon.onload = function() {
      //Draw the image onto the canvas.
      ctx.drawImage(
        pokemon,
        canvas.width / 2 - pokemon.width / 2,
        canvas.height / 2 - pokemon.height / 2
      );
    };

    let mouse = {
      x: null,
      y: null
    };

    const mouseMove = evt => {
      mouse.x = evt.clientX;
      mouse.y = evt.clientY;
    };

    canvas.addEventListener('mousemove', mouseMove);
  });

  return [locations, setLocations, data, setData, canvasRef];
};
