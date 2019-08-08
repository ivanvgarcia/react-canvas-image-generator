import React, { useState, useEffect } from 'react';
import { usePersistentCanvas } from 'components/hooks/customHooks';
import {
  Main,
  CanvasContainer,
  Base64Text,
  Base64TextContainer,
  Image,
  SampleImage,
  Buttons,
  Button
} from 'components/canvas/styles';

const Canvas = () => {
  const [jpeg, setJpeg] = useState('');

  const [
    locations,
    setLocations,
    data,
    setData,
    canvasRef
  ] = usePersistentCanvas();
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
      <h1>Avatar Creator</h1>

      <CanvasContainer>
        <canvas
          ref={canvasRef}
          width={500}
          height={500}
          onClick={handleCanvasClick}
        />
      </CanvasContainer>
      <Image
        src="pikachu.jpeg"
        alt="pokemon"
        onClick={e => setData({ ...data, pokemonImg: e.target.src })}
      />

      <div>
        <Buttons>
          {/* <button onClick={handleCanvasClick}>Add Rectangle</button> */}
          <Button onClick={saveBase64}>Save</Button>
          <Button onClick={handleClear}>Clear</Button>
        </Buttons>

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
