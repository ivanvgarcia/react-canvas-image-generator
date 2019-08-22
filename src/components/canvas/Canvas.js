import React, { useState, useEffect } from 'react';
import { usePersistentCanvas } from 'components/hooks';
import {
  Main,
  CanvasContainer,
  // Base64Text,
  // Base64TextContainer,
  SampleImage,
  Buttons,
  Button,
  ToolsContainer,
  TweetContainer,
  TwitterContent,
  TextArea
} from 'components/canvas/CanvasStyles';
import EditTools from 'components/editTools/EditTools';
import avatarApi from 'config/baseUrl';
import { TwitterShareButton } from 'react-twitter-embed';

const Canvas = () => {
  const [jpeg, setJpeg] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [data, setData, canvasRef] = usePersistentCanvas();
  const [tweet, setTweet] = useState('');

  // const copyRef = React.useRef(null);

  const handleChange = e => {
    setTweet(e.target.value);
  };

  const saveBase64 = () => {
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
    if (jpeg) {
      // copyRef.current.select();
      // document.execCommand('copy');
      savePhotoToAWS(jpeg);
      // const image = new Image();
      // image.src = jpeg;
      // var w = window.open('');
      // w.document.write(image.outerHTML);
    }
  }, [jpeg]);

  return (
    <Main>
      <CanvasContainer>
        <canvas ref={canvasRef} width={480} height={window.innerHeight} />
        <ToolsContainer>
          <EditTools canvasRef={canvasRef} />
        </ToolsContainer>
        <Buttons>
          <Button onClick={saveBase64}>Save</Button>
          {/* <Button onClick={handleClear}>Clear</Button> */}
        </Buttons>
      </CanvasContainer>

      <TweetContainer>
        {/* {jpeg && (
          <Base64TextContainer>
            <Base64Text ref={copyRef} value={jpeg} readOnly />
          </Base64TextContainer>

        )} */}

        {jpeg && (
          <TwitterContent>
            <SampleImage src={jpeg} alt="base" />
            <TextArea
              placeholder={'Your tweet here....'}
              onChange={handleChange}
            />
            <TwitterShareButton
              url={imageUrl}
              options={{
                text: `${tweet || 'hey'}`,
                via: 'From Software'
              }}
            />
          </TwitterContent>
        )}
      </TweetContainer>
    </Main>
  );
};

export default Canvas;
