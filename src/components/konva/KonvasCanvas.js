import React, { useState, useEffect, useRef } from 'react';
import { Stage, Layer } from 'react-konva';
import Avatar from 'components/avatar/Avatar';
import TransformerComponent from 'components/avatar/TransformerComponent';

const KonvasCanvas = ({ avatars, avatar, selectedAvatar }) => {
  const konvaRef = useRef(null);
  const [canvas, setCanvas] = useState('');
  const [img, setImg] = useState('');

  useEffect(() => {
    const konva = konvaRef.current;
    setCanvas(konva);
  }, []);

  return (
    <>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        ref={konvaRef}
      >
        <Layer>
          {avatars.chosen.map(avatar => (
            <Avatar
              chosenAvatar={avatar}
              zIndex={avatars.chosen.length}
              selectedAvatar={selectedAvatar}
            />
          ))}
          <TransformerComponent selectedAvatar={avatar} />
        </Layer>
      </Stage>
      <button
        onClick={() => {
          const url = canvas.toDataURL({
            mimetype: 'image/png'
          });
          console.log(canvas);
          setImg(url);
        }}
      >
        Click
      </button>
      {img && <img src={img} alt="" />}
    </>
  );
};

export default KonvasCanvas;
