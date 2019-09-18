import React, { useState, useEffect } from 'react';
import { usePersistentCanvas } from 'components/hooks';
import EditTools from 'components/editTools/EditTools';
import avatarApi from 'config/baseUrl';
import { TwitterShareButton } from 'react-twitter-embed';
import Loader from 'components/loader/Loader';
import { Helmet } from 'react-helmet';

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
  PlaceHolder
} from 'components/canvas/CanvasStyles';

const Canvas = () => {
  const [jpeg, setJpeg] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [data, setData, canvasRef, scene] = usePersistentCanvas();

  const [loading, setLoading] = useState(false);

  // const copyRef = React.useRef(null);

  const saveBase64 = () => {
    setJpeg('');
    setImageUrl('');
    const canvas = canvasRef.current;
    const jpegUrl = canvas.toDataURL('image/png');
    setJpeg(jpegUrl);
  };

  const savePhotoToAWS = async jpeg => {
    const body = { base64: jpeg };
    try {
      const result = await avatarApi.post('/upload/', body);
      setImageUrl(result.data.url);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // copyRef.current.select();
    // document.execCommand('copy');
    setLoading(true);
    savePhotoToAWS(jpeg);
    // const image = new Image();
    // image.src = jpeg;
    // var w = window.open('');
    // w.document.write(image.outerHTML);
  }, [jpeg]);

  useEffect(() => {
    setLoading(false);
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
        <canvas ref={canvasRef} width={480} height={window.innerHeight} />
        <ToolsContainer>
          <EditTools canvasRef={canvasRef} scene={scene} />
        </ToolsContainer>
        <Buttons>
          <Button onClick={saveBase64}>Save</Button>
          {/* <Button onClick={handleClear}>Clear</Button> */}
        </Buttons>
      </CanvasContainer>

      <TweetContainer>
        <h1>Avatar Generator</h1>
        {/* {jpeg && (
          <Base64TextContainer>
            <Base64Text ref={copyRef} value={jpeg} readOnly />
          </Base64TextContainer>

        )} */}

        <TwitterContent>
          {jpeg ? (
            <SampleImage src={jpeg} alt="base" />
          ) : (
            <PlaceHolder>Your image will appear here.</PlaceHolder>
          )}

          {imageUrl.length > 0 && (
            <TwitterShareButton
              url={imageUrl}
              options={{
                text: `${'Avatar'}`,
                via: 'United',
                size: 'large'
              }}
            />
          )}
          {!imageUrl.length && loading && <Loader />}
        </TwitterContent>
      </TweetContainer>
    </Main>
  );
};

export default Canvas;
