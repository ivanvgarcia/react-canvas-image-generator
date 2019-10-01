import React, { useState, useRef } from 'react';
import Scene from 'utils/canvas/Scene';
import usePersistentData from 'components/hooks/usePersistentData';

export const usePersistentCanvas = () => {
  const canvasRef = useRef(null);
  const [data, setData] = usePersistentData();
  const [scene, setScene] = useState(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    setScene(new Scene(canvas, ctx));
  }, [data]);

  scene && scene.start(data);

  return [data, setData, canvasRef, scene, setScene];
};
