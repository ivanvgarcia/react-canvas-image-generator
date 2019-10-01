/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { usePersistentCanvas } from 'components/hooks';
import EditTools from 'components/editTools/EditTools';
import avatarApi from 'config/baseUrl';
import { TwitterShareButton } from 'react-twitter-embed';
import Loader from 'components/loader/Loader';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import KonvaCanvas from 'components/konva/KonvasCanvas';
import {
  Main,
  SampleImage,
  Buttons,
  Button,
  CanvasContainer,
  ToolsContainer,
  TweetContainer,
  TwitterContent,
  CanvasCSS,
  LoaderText,
  FlexContainer,
  AvatarCard,
  Tag,
} from 'components/canvas/CanvasStyles';
import { getAvatars, chooseAvatar, addChosenAvatar } from 'actions/avatar';
import ConfirmationScreen from '../confirmationScreen/ConfirmationScreen';

const AvatarCanvas = props => {
  const user = useSelector(state => state.auth.user);
  const avatars = useSelector(state => state.avatar.avatars);
  const chosen = useSelector(state => state.avatar.chosenAvatars);

  const dispatch = useDispatch();
  const [data, setData, canvasRef, scene] = usePersistentCanvas();
  const [jpeg, setJpeg] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [avatar, selectedAvatar] = useState(null);
  const [konva, setKonva] = useState(null);
  const [editCanvas, setEditCanvas] = useState(false);
  const [screen, setScreen] = useState({
    previous: 0,
    current: 1,
    next: 2
  });

  const saveBase64 = async () => {
    let jpegUrl;
    if (konva) {
      jpegUrl = konva.toDataURL({
        mimetype: 'image/png',
        quality: 1,
        pixelRatio: 2 // or other value you need
      });
    } else {
      const canvas = canvasRef.current;
      jpegUrl = canvas.toDataURL('image/png');
      const id = `user-${Date.now()}`;
      const createdAvatar = {
        _id: id,
        url: jpegUrl,
        name: id,
        x: 0,
        y: 0,
        scaleX: 0.4,
        scaleY: 0.4
      };

      dispatch(chooseAvatar(createdAvatar));
      dispatch(addChosenAvatar(createdAvatar));
    }

    setJpeg(jpegUrl);
  };

  useEffect(() => {
    (async () => {
      await dispatch(getAvatars());
    })();
  }, [dispatch]);

  const savePhotoToAWS = useCallback(
    async jpeg => {
      const body = { base64: jpeg };
      if (user) {
        body.id = user._id;
      }
      try {
        const result = await avatarApi.post('/upload/', body);
        setImageUrl(result.data.url);
      } catch (error) {
        console.error(error);
      }
    },
    [user]
  );

  // useEffect(() => {
  //   if (jpeg) {
  //     savePhotoToAWS(jpeg);
  //   }
  // }, [jpeg, savePhotoToAWS]);

  const goBack = step => {
    switch (step) {
      case 1:
        window.location.href = '/avatar-generator';
        break;
      case 2:
        setScreen({ ...screen, previous: 1, current: 2, next: 3 });
        break;
      case 3:
        setScreen({ ...screen, previous: 2, current: 3, next: 4 });
        break;
      case 4:
        setScreen({ ...screen, previous: 3, current: 4, next: 5 });
        break;
      default:
        return;
    }
  };

  const goNext = step => {
    switch (step) {
      case 2:
        saveBase64();
        setScreen({ ...screen, previous: 1, current: 2, next: 3 });
        break;
      case 3:
        setScreen({ ...screen, previous: 2, current: 3, next: 4 });
        break;
      case 4:
        saveBase64();
        setScreen({ ...screen, previous: 3, current: 4, next: 5 });
        break;
      case 5:
        setScreen({ ...screen, previous: 4, current: 6, next: 6 });
        break;
      default:
        return;
    }
  };

  const chooseAvatars = clickedAvatar => {
    if (chosen && chosen.length === 4)
      return console.error('You have chosen the limit');

    dispatch(
      chooseAvatar({
        ...clickedAvatar,
        x: 0,
        y: 0,
        scaleX: 0.4,
        scaleY: 0.4,
        name: `avatar${clickedAvatar._id}`
      })
    );
  };

  const checkChosen = avatar => {
    return chosen.some(chosen => chosen._id === avatar._id);
  };

  return (
    <Main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Avatar Generator</title>
        <meta
          name="description"
          content="Create your own avatar using HTML Canvas and tweet it!"
        />
      </Helmet>
      <Buttons>
        <Button onClick={() => goBack(screen.previous)}>Back</Button>
        {screen.current < 4 && (
          <Button onClick={() => goNext(screen.next)}>Next</Button>
        )}
      </Buttons>

      {screen.current === 1 && (
        <CanvasContainer>
          <CanvasCSS ref={canvasRef} width={640} height={1136} />

          <ToolsContainer>
            <EditTools canvasRef={canvasRef} scene={scene} />
          </ToolsContainer>
        </CanvasContainer>
      )}

      {screen.current === 2 && (
        <FlexContainer>
          {avatars.map(avatar => (
            <AvatarCard key={avatar._id}>
              {checkChosen(avatar) && <Tag>chosen</Tag>}
              <img
                src={avatar.url}
                alt="avatar"
                onClick={() => chooseAvatars(avatar)}
              />
            </AvatarCard>
          ))}
        </FlexContainer>
      )}

      {screen.current === 3 && (
        <KonvaCanvas
          avatar={avatar}
          setKonva={setKonva}
          selectedAvatar={selectedAvatar}
        />
      )}

      {screen.current === 4 && (
        <ConfirmationScreen avatarImg={jpeg} goNext={goNext} goBack={goBack} screen={screen} />
      )}

      {/* {screen.current === 2 && (
      
      )} */}
      {/* <TweetContainer>
        <TwitterContent>
          {jpeg && <SampleImage src={jpeg} alt="base" />}

          {jpeg && imageUrl && !loading ? (
            <TwitterShareButton
              url={imageUrl}
              options={{
                text: `${'Avatar'}`,
                via: 'United',
                size: 'large'
              }}
            />
          ) : (
            loading && (
              <>
                <LoaderText>Saving image...</LoaderText>
                <Loader />
              </>
            )
          )}
        </TwitterContent>
       
      </TweetContainer> */}
    </Main>
  );
};

export default AvatarCanvas;
