import React, { useState, useEffect } from 'react';
import { usePersistentCanvas } from 'components/hooks';
import EditTools from 'components/editTools/EditTools';
import avatarApi from 'config/baseUrl';
import { TwitterShareButton } from 'react-twitter-embed';

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
  TextArea,
  PlaceHolder
} from 'components/canvas/CanvasStyles';
import { Form, CenterContent } from 'components/commonStyles';

const Canvas = () => {
  const [jpeg, setJpeg] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [data, setData, canvasRef] = usePersistentCanvas();
  const [tweetData, setTweetData] = useState({});

  // const copyRef = React.useRef(null);

  const handleChange = e => {
    setTweetData({ ...tweetData, tweet: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setTweetData({ ...tweetData, isSubmitted: true });
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
          {tweetData.isSubmitted && imageUrl.length ? (
            <TwitterShareButton
              url={imageUrl}
              options={{
                text: `${tweetData.tweet || 'hey'}`,
                via: 'From Software',
                size: 'large'
              }}
            />
          ) : (
            <Form onSubmit={handleSubmit}>
              <TextArea
                placeholder={'Write a tweet....'}
                onChange={handleChange}
              />
              <CenterContent>
                <Button
                  fontSize=".8rem"
                  boxShadow="0 8px 2px blue"
                  hoverBoxShadow="0 10px 2px blue"
                  translateY="translateY(-2px)"
                >
                  Submit
                </Button>
              </CenterContent>
            </Form>
          )}
        </TwitterContent>
      </TweetContainer>
    </Main>
  );
};

export default Canvas;
