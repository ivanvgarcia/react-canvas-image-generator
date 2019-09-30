import React, { useRef, useEffect, useState } from 'react';
import { Image } from 'react-konva';

const Avatar = ({ zIndex, chosenAvatar, selectedAvatar }) => {
  const avatarOne = useRef();

  const [image, setImage] = useState(null);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    scaleX: 0.4,
    scaleY: 0.4
  });

  // const [history, setHistory] = useState({
  //   position: [],
  //   step: 0
  // });

  useEffect(() => {
    let image = new window.Image();

    image.onload = function() {
      setImage(image);
    };
    image.crossOrigin = '';
    image.src = chosenAvatar.url;
  }, [chosenAvatar.url]);

  return (
    <Image
      name={`avatar${chosenAvatar._id}`}
      image={image}
      draggable
      onDragEnd={e => {
        setPosition({
          ...position,
          x: e.target.x(),
          y: e.target.y(),
          scaleX: position.scaleX,
          scaleY: position.scaleY
        });

        // setHistory({
        //   ...history,
        //   position: [...history.position, position],
        //   step: (history.step += 1)
        // });
      }}
      x={chosenAvatar.x}
      y={chosenAvatar.y}
      scale={{ x: position.scaleX, y: position.scaleY }}
      onTap={e => {
        const node = avatarOne.current;
        node.zIndex(zIndex);
        selectedAvatar(avatarOne.current.attrs.name);
      }}
      onTransformEnd={() => {
        const node = avatarOne.current;
        const scaleX = node.scaleX();
        const scaleY = node.scaleY();
        setPosition({
          scaleX: scaleX,
          scaleY: scaleY
        });
      }}
      ref={avatarOne}
    />
  );
};
export default Avatar;
