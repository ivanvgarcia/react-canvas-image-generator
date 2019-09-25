import React, { useState } from 'react';
import Scene from 'utils/canvas/Scene';
import usePersistentData from 'components/hooks/usePersistentData';

export const usePersistentCanvas = () => {
  const [data, setData] = usePersistentData();
  const canvasRef = React.useRef(null);
  const [scene, setScene] = useState(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;

    const ctx = canvas.getContext('2d');

    if (window.innerWidth < 330) {
      ctx.canvas.width = window.innerWidth;
    }

    ctx.canvas.width = 638;

    ctx.canvas.height = window.innerHeight + 100;

    let mouse = {
      x: 0,
      y: 0
    };

    canvas.addEventListener('wheel', trackWheel);
    canvas.addEventListener('mousemove', move);
    canvas.addEventListener('mousedown', move);
    canvas.addEventListener('mouseup', move);
    canvas.addEventListener('mouseout', move);

    function move(event) {
      // mouse move event
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      console.log(mouse);
      ctx.scale(1, 1);
    }

    function trackWheel(event) {
      // mouse move event
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      console.log(mouse);
      ctx.scale(1, 1);
    }

    setScene(new Scene(canvas, ctx));
  }, [data]);

  scene && scene.start(data);

  return [data, setData, canvasRef, scene];
};
