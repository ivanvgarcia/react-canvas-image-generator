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
      canvas.height = window.innerHeight;
      ctx.scale(0.75, 0.75);
    });
    const ctx = canvas.getContext('2d');
    ctx.scale(0.75, 0.75);
    setScene(new Scene(canvas, ctx));
  }, [data]);

  scene && scene.start(data);

  return [data, setData, canvasRef, scene];
};
