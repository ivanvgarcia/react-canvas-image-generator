import React, { useRef, useEffect, useState } from 'react';
import { Image } from 'react-konva';
import { useSelector, useDispatch } from 'react-redux';
import { reorderAvatars } from 'actions/avatar';

const Avatar = ({ zIndex, chosenAvatar, selectedAvatar }) => {
  const avatarRef = useRef();
  const avatars = useSelector(state => state.avatar.chosenAvatars);
  const dispatch = useDispatch();
  const [check, setCheck] = useState(null);

  const [image, setImage] = useState(null);
  // const [position, setPosition] = useState({
  //   x: 0,
  //   y: 0,
  //   scaleX: 0.4,
  //   scaleY: 0.4
  // });

  // const [history, setHistory] = useState({
  //   position: [],
  //   step: 0
  // });

  function getDistance(p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  }
  var lastDist = 0;

  useEffect(() => {
    let image = new window.Image();

    image.onload = function() {
      setImage(image);
    };
    image.crossOrigin = '';
    image.src = chosenAvatar.url;
  }, [chosenAvatar.url]);

  return (
    <>
      {check && <p>{check}</p>}
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
          const node = avatarRef.current;
          node.zIndex(zIndex);
          selectedAvatar(avatarRef.current.attrs.name);
        }}
        onTouchStart={e => {
          console.log('holla');
        }}
        onTouchMove={e => {
          var touch1 = e.evt.touches[0];
          var touch2 = e.evt.touches[1];
          console.log(e.evt.touches);

          console.log(touch1, '1');
          console.log(touch2, '2');

          if (touch1 && touch2) {
            var dist = getDistance(
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
              lastDist = dist;
            }

            var scale = (avatarRef.current.scaleX() * dist) / lastDist;

            avatarRef.current.scaleX(scale);
            avatarRef.current.scaleY(scale);
            avatarRef.current.draw();
            lastDist = dist;
            setCheck(lastDist);
          }
        }}
        onTouchEnd={e => {
          console.log('peace');
        }}
        onTransformEnd={() => {
          const node = avatarRef.current;
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
        ref={avatarRef}
      />
    </>
  );
};
export default Avatar;
