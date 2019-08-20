import React, { useState, useEffect } from 'react';
import { usePersistentCanvas } from 'components/hooks';
import {
  Main,
  CanvasContainer,
  Base64Text,
  Base64TextContainer,
  SampleImage,
  Buttons,
  Button,
  ToolsContainer
} from 'components/canvas/styles';
import EditTools from 'components/editTools/EditTools';

const Canvas = () => {
  const [jpeg, setJpeg] = useState('');
  const [data, setData, canvasRef] = usePersistentCanvas();

  const copyRef = React.useRef(null);

  const handleClear = () => {
    setJpeg('');
    setData({ ...data, pokemonImg: '' });
  };

  const saveBase64 = () => {
    const canvas = canvasRef.current;
    const jpegUrl = canvas.toDataURL('image/png');
    setJpeg(jpegUrl);
  };

  useEffect(() => {
    if (jpeg) {
      copyRef.current.select();
      document.execCommand('copy');
      const image = new Image();
      image.src = jpeg;
      var w = window.open('');
      w.document.write(image.outerHTML);
    }
  }, [jpeg]);

  return (
    <Main>
      <CanvasContainer>
        <canvas ref={canvasRef} width={640} height={1136} />
        <ToolsContainer>
          <EditTools canvasRef={canvasRef} />
        </ToolsContainer>
        <Buttons>
          <Button onClick={saveBase64}>Save</Button>
          <Button onClick={handleClear}>Clear</Button>
        </Buttons>
      </CanvasContainer>

      <div>
        {jpeg && (
          <Base64TextContainer>
            <Base64Text ref={copyRef} value={jpeg} readOnly />
          </Base64TextContainer>
        )}

        {jpeg && (
          <>
            <h5>Your data has been saved to your clipboard</h5>
            <SampleImage src={jpeg} alt="base" />
          </>
        )}
      </div>
    </Main>
  );
};

export default Canvas;
