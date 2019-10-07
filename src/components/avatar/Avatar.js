import React, { useRef, useEffect, useState } from 'react';
import { Image } from 'react-konva';
import { useSelector, useDispatch } from 'react-redux';
import {
  reorderAvatars,
  setHistory,
  resetHistory,
  clearHistory
} from 'actions/avatar';

const Avatar = ({ zIndex, chosenAvatar, selectedAvatar }) => {
  const avatarRef = useRef();
  const avatars = useSelector(state => state.avatar.chosenAvatars);
  const history = useSelector(state => state.avatar.history);
  const step = useSelector(state => state.avatar.step);
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [init, setInit] = useState(false);

  useEffect(() => {
    let image = new window.Image();

    image.onload = function() {
      setImage(image);
    };
    image.setAttribute('crossOrigin', 'anonymous');
    image.src = chosenAvatar.webp || chosenAvatar.url;
  }, [chosenAvatar.url, chosenAvatar.webp]);

  useEffect(() => {
    if (!init) {
      dispatch(clearHistory());

      dispatch(setHistory(avatars));
      setInit(true);
    }
  }, [avatars, dispatch, init]);

  return (
    image && (
      <Image
        name={`avatar${chosenAvatar._id}`}
        image={image}
        draggable
        onDragEnd={e => {
          let reset = history.slice(0, step + 1);
          dispatch(resetHistory(reset));

          const items = avatars.slice();
          const item = items.find(i => i._id === chosenAvatar._id);
          const index = items.indexOf(item);
          items[index] = {
            ...item,
            x: e.target.x(),
            y: e.target.y()
          };

          // history = history.concat([pos]);
          // historyStep += 1;

          dispatch(reorderAvatars(items));
          dispatch(setHistory(items));
        }}
        onDragStart={e => {}}
        x={chosenAvatar.x}
        y={chosenAvatar.y}
        scale={{ x: chosenAvatar.scaleX, y: chosenAvatar.scaleY }}
        rotation={chosenAvatar.rotation}
        skew={{ x: chosenAvatar.skewX, y: chosenAvatar.skewY }}
        onTap={e => {
          const node = avatarRef.current;
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
          dispatch(setHistory(items));
        }}
        ref={avatarRef}
      />
    )
  );
};
export default Avatar;
