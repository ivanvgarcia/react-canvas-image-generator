import React, { useState, useEffect } from 'react';
import { usePersistentCanvas } from 'components/hooks';
import {
  Main,
  CanvasContainer,
  Base64Text,
  Base64TextContainer,
  Image,
  SampleImage,
  Buttons,
  Button,
  Title,
  ToolsContainer
} from 'components/canvas/styles';
import EditTools from 'components/editTools/EditTools';

const Canvas = () => {
  const [jpeg, setJpeg] = useState('');
  const [
    locations,
    setLocations,
    data,
    setData,
    canvasRef
  ] = usePersistentCanvas();
  console.log(canvasRef);
  const copyRef = React.useRef(null);

  function handleCanvasClick(e) {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const newLocation = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    setLocations([...locations, newLocation]);
  }

  function handleClear() {
    setLocations([]);
    setJpeg('');
    setData({ ...data, pokemonImg: '' });
  }

  function saveBase64() {
    const canvas = canvasRef.current;
    const jpegUrl = canvas.toDataURL('image/jpeg');
    setJpeg(jpegUrl);
  }

  useEffect(() => {
    if (jpeg) {
      copyRef.current.select();
      document.execCommand('copy');
    }
  }, [jpeg]);

  return (
    <Main>
      <CanvasContainer>
        <canvas
          ref={canvasRef}
          width={640}
          height={1136}
          onClick={handleCanvasClick}
        />
        <ToolsContainer>
          <EditTools canvas={canvasRef} />
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
