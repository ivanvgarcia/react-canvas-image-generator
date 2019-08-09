import React from 'react';
import Scene from 'utils/canvas/Scene';
import usePersistentData from 'components/hooks/usePersistentData';
import usePersistentState from 'components/hooks/userPersistentState';

export const usePersistentCanvas = () => {
  const [locations, setLocations] = usePersistentState([]);
  const [data, setData] = usePersistentData();

  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const scene = new Scene(canvas, ctx);

    scene.render(ctx);

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

// const getMousePos = (canvas, location) => {
//   var rect = canvas.getBoundingClientRect();
//   return {
//     x: location.x - rect.left,
//     y: location.y - rect.top
//   };
// };

// locations.forEach(location => {
//   let boundCoords = getMousePos(canvas, location);
//   console.log(boundCoords);
//   draw(ctx, location);
// });
