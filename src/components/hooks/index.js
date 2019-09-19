import React, { useState } from 'react';
import Scene from 'utils/canvas/Scene';
import usePersistentData from 'components/hooks/usePersistentData';

export const usePersistentCanvas = () => {
  const [data, setData] = usePersistentData();
  const canvasRef = React.useRef(null);
  const [scene, setScene] = useState(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    window.addEventListener('resize', () => {
      if (window.innerWidth < 500) {
        ctx.canvas.width = window.innerWidth;
      }
      canvas.height = window.innerHeight;
      ctx.scale(0.75, 0.75);
    });
    const ctx = canvas.getContext('2d');
    if (window.innerWidth < 500) {
      ctx.canvas.width = window.innerWidth;
    }
    ctx.canvas.width = 475;
    ctx.canvas.height = window.innerHeight;
    ctx.scale(0.75, 0.75);

    setScene(new Scene(canvas, ctx));
  }, [data]);

  scene && scene.start(data);

  return [data, setData, canvasRef, scene];
};
