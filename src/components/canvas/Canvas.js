import React, { useState, useEffect, useCallback } from 'react';
import { usePersistentCanvas } from 'components/hooks';
import EditTools from 'components/editTools/EditTools';
import avatarApi from 'config/baseUrl';
import { TwitterShareButton } from 'react-twitter-embed';
import Loader from 'components/loader/Loader';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

import {
  Main,
  // Base64Text,
  // Base64TextContainer,
  SampleImage,
  Buttons,
  Button,
  CanvasContainer,
  ToolsContainer,
  TweetContainer,
  TwitterContent,
  CanvasCSS,
  LoaderText
} from 'components/canvas/CanvasStyles';

const Canvas = () => {
  const [jpeg, setJpeg] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [data, setData, canvasRef, scene] = usePersistentCanvas();
  const [loading, setLoading] = useState(false);
  const user = useSelector(state => state.auth.user);

  // const copyRef = React.useRef(null);

  const saveBase64 = () => {
    setJpeg('');
    setImageUrl(null);
    const canvas = canvasRef.current;
    const jpegUrl = canvas.toDataURL('image/png');
    setJpeg(jpegUrl);
  };

  const savePhotoToAWS = useCallback(
    async jpeg => {
      const body = { base64: jpeg };
      console.log(user);
      if (user) {
        body.id = user._id;
      }
      try {
        const result = await avatarApi.post('/upload/', body);
        setImageUrl(result.data.url);
      } catch (error) {
        console.log(error);
      }
    },
    [user]
  );

  useEffect(() => {
    if (jpeg) {
      setLoading(true);
      savePhotoToAWS(jpeg, user);
    }
    // copyRef.current.select();
    // document.execCommand('copy');

    // const image = new Image();
    // image.src = jpeg;
    // var w = window.open('');
    // w.document.write(image.outerHTML);
  }, [jpeg, savePhotoToAWS, user]);

  useEffect(() => {
    imageUrl && setLoading(false);
  }, [imageUrl]);

  return (
    <Main>
      <CanvasContainer>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Avatar Generator</title>
          <meta
            name="description"
            content="Create your own avatar using HTML Canvas and tweet it!"
          />
        </Helmet>
        <CanvasCSS ref={canvasRef} height={window.innerHeight} />

        <Buttons>
          <Button onClick={saveBase64}>Save</Button>
          {/* <Button onClick={handleClear}>Clear</Button> */}
        </Buttons>
      </CanvasContainer>

      <TweetContainer>
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
        <ToolsContainer>
          <EditTools canvasRef={canvasRef} scene={scene} />
        </ToolsContainer>
      </TweetContainer>
    </Main>
  );
};

export default Canvas;
