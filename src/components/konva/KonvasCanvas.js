import React, { useState, useEffect, useRef } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import Avatar from 'components/avatar/Avatar';
import TransformerComponent from 'components/avatar/TransformerComponent';
import { ReactReduxContext, Provider, useSelector } from 'react-redux';

const KonvasCanvas = ({ avatar, setKonva, selectedAvatar }) => {
  const konvaRef = useRef(null);
  const divRef = useRef(null);
  const layer = useRef(null);
  const avatars = useSelector(state => state.avatar.chosenAvatars);
  const [bg, setBg] = useState(null);

  useEffect(() => {
    const konva = konvaRef.current;
    setKonva(konva);
  }, [setKonva]);

  useEffect(() => {
    divRef.current && (divRef.current.scrollLeft = window.innerWidth / 2);

    let image = new window.Image();

    image.onload = function() {
      setBg(image);
    };

    image.src = '../../../images/bg.png';
  }, []);

  const handleTouchMove = e => {
    if (e.evt.touches.length === 0) return;
    e.evt.preventDefault();
    e.evt.stopPropagation();
    const touch = e.evt.touches[0];
    divRef.current.scrollLeft = touch.clientX;
  };

  // if (!bg) {
  //   return <FullLoader message={'Loading Assets'} />;
  // }

  return (
    <ReactReduxContext.Consumer>
      {({ store }) => (
        <div
          style={{
            overflowX: 'scroll',
            overflowScrollingX: 'touch',
            zIndex: 99999
          }}
          ref={divRef}
        >
          <Stage
            width={window.innerHeight}
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
              <Layer ref={layer}>
                {bg && (
                  <>
                    <Image
                      name={'background'}
                      image={bg}
                      width={window.innerHeight}
                      height={window.innerHeight}
                      onTap={e => {
                        selectedAvatar(null);
                      }}
                      onClick={e => {
                        selectedAvatar(null);
                      }}
                      onTouchStart={handleTouchMove}
                      onTouchMove={handleTouchMove}
                    />

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
                  </>
                )}
              </Layer>
            </Provider>
          </Stage>
        </div>
      )}
    </ReactReduxContext.Consumer>
  );
};

export default KonvasCanvas;
