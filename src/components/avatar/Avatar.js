import React, { useRef, useEffect, useState } from 'react';
import { Image } from 'react-konva';
import { useSelector, useDispatch } from 'react-redux';
import { reorderAvatars } from 'actions/avatar';

const Avatar = ({ zIndex, chosenAvatar, selectedAvatar }) => {
  const avatarOne = useRef();
  const avatars = useSelector(state => state.avatar.chosenAvatars);
  const dispatch = useDispatch();

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
        const items = avatars.slice();
        const item = items.find(i => i._id === chosenAvatar._id);
        const index = items.indexOf(item);
        items[index] = {
          ...item,
          x: e.target.x(),
          y: e.target.y(),
          scaleX: e.target.scaleX(),
          scaleY: e.target.scaleY()
        };
        dispatch(reorderAvatars(items));
      }}
      onDragStart={e => {}}
      x={chosenAvatar.x}
      y={chosenAvatar.y}
      scale={{ x: chosenAvatar.scaleX, y: chosenAvatar.scaleY }}
      onTap={e => {
        const node = avatarOne.current;
        node.zIndex(zIndex);
        selectedAvatar(avatarOne.current.attrs.name);
      }}
      onTransformEnd={() => {
        const node = avatarOne.current;
        const scaleX = node.scaleX();
        const scaleY = node.scaleY();
        const items = avatars.slice();
        const item = items.find(i => i._id === chosenAvatar._id);
        const index = items.indexOf(item);
        items[index] = {
          ...item,
          scaleX: scaleX,
          scaleY: scaleY
        };
        dispatch(reorderAvatars(items));
      }}
      ref={avatarOne}
    />
  );
};
export default Avatar;
