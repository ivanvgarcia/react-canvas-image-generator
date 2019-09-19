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
      ctx.scale(0.55, 0.55);
    } else if (window.innerWidth < 500) {
      ctx.canvas.width = window.innerWidth;
      ctx.scale(0.57, 0.6);
    } else {
      ctx.canvas.width = 638;
      ctx.canvas.height = 1136;
    }

    setScene(new Scene(canvas, ctx));
  }, [data]);

  scene && scene.start(data);

  return [data, setData, canvasRef, scene];
};
