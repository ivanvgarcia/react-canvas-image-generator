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
    const scene = new Scene(canvas, ctx, data);

    scene.render();
  }, [data]);

  return [data, setData, canvasRef];
};
