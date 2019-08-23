import React from 'react';
import Scene from 'utils/canvas/Scene';
// import Avatar from 'utils/canvas/Avatar';
import usePersistentData from 'components/hooks/usePersistentData';

export const usePersistentCanvas = () => {
  const [data, setData] = usePersistentData();
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    console.log(1170.2 / window.innerHeight);
    ctx.scale(0.75, 0.67);
    const scene = new Scene(canvas, ctx, data);

    scene.render();
  }, [data]);

  return [data, setData, canvasRef];
};
