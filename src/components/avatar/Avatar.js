import React, { useRef, useEffect, useState } from 'react';
import { Image } from 'react-konva';
import { useSelector, useDispatch } from 'react-redux';
import { reorderAvatars } from 'actions/avatar';

const Avatar = ({ zIndex, chosenAvatar, selectedAvatar }) => {
  const avatarRef = useRef();
  const avatars = useSelector(state => state.avatar.chosenAvatars);
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);

  useEffect(() => {
    let image = new window.Image();

    image.onload = function () {
      setImage(image);
    };

    image.crossOrigin = '';
    image.src = chosenAvatar.url;
  }, [chosenAvatar.url]);

  // useEffect(() => {
  //   const avatar = avatarRef.current;

  //   return () => {
  //     avatar.destroy();
  //   };
  // }, []);

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
        };
        dispatch(reorderAvatars(items));
      }}
      onDragStart={e => { }}
      x={chosenAvatar.x}
      y={chosenAvatar.y}
      scale={{ x: chosenAvatar.scaleX, y: chosenAvatar.scaleY }}
      rotation={chosenAvatar.rotation}
      skew={{ x: chosenAvatar.skewX, y: chosenAvatar.skewY }}
      onTap={e => {
        const node = avatarRef.current;
        console.log(node)
        node.zIndex(zIndex);
        selectedAvatar(avatarRef.current.attrs.name);
      }}
      onTransformEnd={() => {
        const node = avatarRef.current;
        const x = node.x();
        const y = node.y();
        const scaleX = node.scaleX();
        const scaleY = node.scaleY();
        const offsetX = node.offsetX();
        const offsetY = node.offsetY();
        const rotation = node.rotation();
        const skewX = node.skewX();
        const skewY = node.skewY();
        const items = avatars.slice();
        const item = items.find(i => i._id === chosenAvatar._id);
        const index = items.indexOf(item);
        items[index] = {
          ...item,
          x,
          y,
          scaleX: scaleX,
          scaleY: scaleY,
          offsetX: offsetX,
          offsetY: offsetY,
          rotation: rotation,
          skewX: skewX,
          skewY: skewY
        };
        dispatch(reorderAvatars(items));
      }}
      ref={avatarRef}
    />
  );
};
export default Avatar;
