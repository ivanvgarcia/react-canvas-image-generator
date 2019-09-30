import React, { useEffect, useRef } from 'react';
import { Stage, Layer } from 'react-konva';
import Avatar from 'components/avatar/Avatar';
import TransformerComponent from 'components/avatar/TransformerComponent';

const KonvasCanvas = ({ avatars, avatar, setKonva, selectedAvatar }) => {
  const konvaRef = useRef(null);

  useEffect(() => {
    const konva = konvaRef.current;
    setKonva(konva);
  }, [setKonva]);

  return (
    <>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        ref={konvaRef}
        onMouseDown={e => {
          // deselect when clicked on empty area
          const clickedOnEmpty = e.target === e.target.getStage();
          if (clickedOnEmpty) {
            selectedAvatar(null);
          }
        }}
      >
        <Layer>
          {avatars.chosen.map(avatar => (
            <Avatar
              chosenAvatar={avatar}
              zIndex={avatars.chosen.length}
              selectedAvatar={selectedAvatar}
            />
          ))}
          <TransformerComponent
            selectedAvatar={avatar}
            zIndex={avatars.chosen.length}
          />
        </Layer>
      </Stage>
    </>
  );
};

export default KonvasCanvas;
