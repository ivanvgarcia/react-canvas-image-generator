import React, { useEffect, useRef } from 'react';
import { Stage, Layer } from 'react-konva';
import Avatar from 'components/avatar/Avatar';
import TransformerComponent from 'components/avatar/TransformerComponent';
import { ReactReduxContext, Provider, useSelector } from 'react-redux';

const KonvasCanvas = ({ avatar, setKonva, selectedAvatar }) => {
  const konvaRef = useRef(null);
  const avatars = useSelector(state => state.avatar.chosenAvatars);

  useEffect(() => {
    const konva = konvaRef.current;

    setKonva(konva);
  }, [setKonva]);

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
