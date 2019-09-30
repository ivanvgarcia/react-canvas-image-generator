/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { usePersistentCanvas } from 'components/hooks';
import EditTools from 'components/editTools/EditTools';
import avatarApi from 'config/baseUrl';
import { TwitterShareButton } from 'react-twitter-embed';
import Loader from 'components/loader/Loader';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import useImage from 'use-image';
import Avatar from 'components/avatar/Avatar';
import TransformerComponent from 'components/avatar/TransformerComponent';
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
  Tag
} from 'components/canvas/CanvasStyles';

const AvatarCanvas = props => {
  const user = useSelector(state => state.auth.user);

  const [data, setData, canvasRef, scene] = usePersistentCanvas();

  const [jpeg, setJpeg] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [avatar, selectedAvatar] = useState(null);
  const [position, setPosition] = useState({ isDragging: false, x: 0, y: 0 });

  const [editCanvas, setEditCanvas] = useState(false);
  const [screen, setScreen] = useState({
    previous: 0,
    current: 1,
    next: 2
  });
  const [avatars, setAvatars] = useState({
    fetched: [],
    chosen: [],
    completedCanvas: ''
  });
  const [coords, setCoords] = useState({
    isDragging: false,
    x: 50,
    y: 50
  });

  const saveBase64 = isCompleted => {
    const canvas = canvasRef.current;
    const jpegUrl = canvas.toDataURL('image/png');

    setJpeg(jpegUrl);

    if (isCompleted) {
      setAvatars({
        ...avatars,
        completedCanvas: jpegUrl
      });
    } else {
      const createdAvatar = { _id: `user-${Date.now()}`, url: jpegUrl };
      setAvatars({
        chosen: [createdAvatar, ...avatars.chosen],
        fetched: [createdAvatar, ...avatars.fetched]
      });
    }
  };

  useEffect(() => {
    (async () => {
      const res = await avatarApi.get('/avatar');
      setAvatars({ chosen: [], fetched: [...res.data.data] });
    })();
  }, []);

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

  useEffect(() => {
    if (avatars.completedCanvas) {
      console.log('holla');
    }
  }, [avatars.completedCanvas]);

  useEffect(() => {
    // imageUrl && setLoading(false);
  }, [imageUrl]);

  // useEffect(() => {
  //   if (editCanvas) {
  //     avatars.chosen.forEach(avatar => {
  //       const image = new Image();
  //       image.src = avatar.url;

  //       ctx.drawImage(image, 0, 0);
  //     });
  //   }
  // }, [avatars.chosen, editCanvas]);

  const goBack = step => {
    switch (step) {
      case 1:
        window.location.href = '/avatar-generator';
        break;
      case 2:
        setScreen({ ...screen, previous: 1, current: 2, next: 3 });
        setEditCanvas(false);
        break;
      case 3:
        setScreen({ ...screen, previous: 2, current: 3, next: 4 });
        setEditCanvas(false);
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
        setEditCanvas(true);
        break;
      case 4:
        setScreen({ ...screen, previous: 3, current: 4, next: 5 });
        saveBase64(true);
        break;
      default:
        return;
    }
  };

  const chooseAvatars = clickedAvatar => {
    if (avatars.chosen && avatars.chosen.length === 4)
      return console.error('You have chosen the limit');
    setAvatars({
      ...avatars,
      chosen: [...avatars.chosen, { ...clickedAvatar }]
    });
  };

  const checkChosen = avatar => {
    return avatars.chosen.some(chosen => chosen._id === avatar._id);
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
        {screen.current < 4 ? (
          <Button onClick={() => goNext(screen.next)}>Next</Button>
        ) : (
          <Button onClick={() => goNext(screen.next)}>Save</Button>
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
          {avatars.fetched.map(avatar => (
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
          avatars={avatars}
          avatar={avatar}
          selectedAvatar={selectedAvatar}
        />
      )}

      {/* {screen.current === 2 && (
        <TwitterContent>
          {jpeg && <SampleImage src={jpeg} alt="base" />}
        </TwitterContent>
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
