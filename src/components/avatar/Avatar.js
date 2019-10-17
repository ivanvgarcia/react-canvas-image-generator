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
  const [lastDist, setLastDist] = useState(0);

  useEffect(() => {
    let image = new window.Image();

    image.onload = function() {
      setImage(image);
    };

    image.setAttribute('crossOrigin', 'anonymous');

    image.onerror = function() {
      image.src = chosenAvatar.url;
    };

    image.src = chosenAvatar.webp;
  }, [chosenAvatar.url, chosenAvatar.webp]);

  useEffect(() => {
    if (!init) {
      dispatch(clearHistory());
      dispatch(setHistory(avatars));
      setInit(true);
    }
  }, [avatars, dispatch, init]);

  const handleUserTap = () => {
    const node = avatarRef.current;
    node.zIndex(zIndex);
    selectedAvatar(avatarRef.current.attrs.name);
  };

  const getDistance = (p1, p2) => {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  };

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
        onTap={handleUserTap}
        onClick={handleUserTap}
        onTransformEnd={() => {
          const node = avatarRef.current;
          const newTransformation = {
            x: node.x(),
            y: node.y(),
            scaleX: node.scaleX(),
            scaleY: node.scaleY(),
            offsetX: node.offsetX(),
            offsetY: node.offsetY(),
            rotation: node.rotation(),
            skewX: node.skewX(),
            skewY: node.skewY()
          };

          const items = avatars.slice();
          const item = items.find(i => i._id === chosenAvatar._id);
          const index = items.indexOf(item);
          const avatar = (items[index] = {
            ...item,
            ...newTransformation
          });

          if (avatar.scaleX !== avatar.scaleY) {
            avatar.scaleY = Math.abs(avatar.scaleX);
          }

          dispatch(reorderAvatars(items));
          dispatch(setHistory(items));
        }}
        onTouchMove={e => {
          if (e.evt.touches.length === 2) {
            const node = avatarRef.current;
            const touch1 = e.evt.touches[0];
            const touch2 = e.evt.touches[1];
            const originalDraggable = node.draggable();
            const item = avatars.find(i => i._id === chosenAvatar._id);
            const index = avatars.indexOf(item);

            if (originalDraggable) {
              node.draggable(false);
            }

            const dist = getDistance(
              {
                x: touch1.clientX,
                y: touch1.clientY
              },
              {
                x: touch2.clientX,
                y: touch2.clientY
              }
            );

            if (!lastDist) {
              setLastDist(dist);
            }

            let scale;

            if (lastDist) {
              scale = (item.scaleX * dist) / lastDist;
              const roundedScale = Number(Math.round(scale + 'e2') + 'e-2');

              avatars[index] = {
                ...chosenAvatar,
                scaleX: roundedScale,
                scaleY: roundedScale
              };

              setLastDist(dist);
              dispatch(reorderAvatars(avatars));
              dispatch(setHistory(avatars));

              if (node.draggable() !== originalDraggable) {
                node.draggable(originalDraggable);
              } else {
                node.draggable(true);
              }
            }
          }
        }}
        onTouchEnd={e => {
          const node = avatarRef.current;
          node.draggable(true);
        }}
        ref={avatarRef}
      />
    )
  );
};
export default Avatar;
