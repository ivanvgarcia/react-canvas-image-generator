import React, { useState, useEffect, useRef } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import Avatar from 'components/avatar/Avatar';
import TransformerComponent from 'components/avatar/TransformerComponent';
import { ReactReduxContext, Provider, useSelector } from 'react-redux';

const KonvasCanvas = ({ avatar, setKonva, selectedAvatar }) => {
  const konvaRef = useRef(null);
  const avatars = useSelector(state => state.avatar.chosenAvatars);
  const [bg, setBg] = useState(null);

  useEffect(() => {
    const konva = konvaRef.current;

    setKonva(konva);
  }, [setKonva]);

  useEffect(() => {
    let image = new window.Image();

    image.onload = function() {
      console.log('loadded');
      setBg(image);
    };

    image.src = '../../../images/bg.png';
  }, []);

  return (
    <ReactReduxContext.Consumer>
      {({ store }) => (
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
          <Provider store={store}>
            <Layer>
              {bg && (
                <Image
                  name={'background'}
                  image={bg}
                  width={window.innerHeight}
                  height={window.innerHeight}
                />
              )}
              {avatars.map(avatar => (
                <Avatar
                  key={avatar._id}
                  chosenAvatar={avatar}
                  zIndex={avatars.length}
                  selectedAvatar={selectedAvatar}
                />
              ))}
              <TransformerComponent
                selectedAvatar={avatar}
                zIndex={avatars.length}
              />
            </Layer>
          </Provider>
        </Stage>
      )}
    </ReactReduxContext.Consumer>
  );
};

export default KonvasCanvas;
