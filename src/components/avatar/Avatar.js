import React, { useRef, useEffect, useState } from 'react';
import { Image } from 'react-konva';
import { useSelector, useDispatch } from 'react-redux';
import { reorderAvatars } from 'actions/avatar';
import Hammer from 'hammerjs';

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

  useEffect(() => {
    let image = new window.Image();

    image.onload = function() {
      setImage(image);
    };
    image.crossOrigin = '';
    image.src = chosenAvatar.url;

    var hammertime = new Hammer(avatarRef.current, { domEvents: true });
    hammertime.get('rotate').set({ enable: true });

    console.log(hammertime);
    var oldRotation = 0;
    var startScale = 0;
    avatarRef.current.on('rotatestart', function(ev) {
      setCheck('listening...');
      oldRotation = ev.evt.gesture.rotation;
      startScale = avatarRef.current.attrs.scaleX();
      avatarRef.current.stopDrag();
      avatarRef.current.draggable(false);
    });

    avatarRef.current.on('rotate', function(ev) {
      var delta = oldRotation - ev.evt.gesture.rotation;
      avatarRef.current.rotate(-delta);
      oldRotation = ev.evt.gesture.rotation;
      avatarRef.current.scaleX(startScale * ev.evt.gesture.scale);
      avatarRef.current.scaleY(startScale * ev.evt.gesture.scale);
    });
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
