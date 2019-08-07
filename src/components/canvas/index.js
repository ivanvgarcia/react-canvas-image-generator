import React, { useState, useEffect } from 'react';
import { usePersistentCanvas } from 'components/hooks/customHooks';
import {
  CanvasContainer,
  Base64Text,
  Base64TextContainer,
  SampleImage
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
    const newLocation = { x: e.clientX, y: e.clientY };
    setLocations([...locations, newLocation]);
  }

  function handleClear() {
    setLocations([]);
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
    <CanvasContainer>
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        onClick={handleCanvasClick}
      />
      <div>
        {/* <button onClick={handleCanvasClick}>Add Rectangle</button> */}
        <button onClick={saveBase64}>Save</button>

        {jpeg && (
          <Base64TextContainer>
            <Base64Text ref={copyRef} value={jpeg.substring(0, 100)} readOnly />
          </Base64TextContainer>
        )}

        {jpeg && (
          <>
            <h5>Your data has been saved to your clipboard</h5>
            <SampleImage src={jpeg} alt="base" />
          </>
        )}

        <img
          src="https://assets.pokemon.com/static2/_ui/img/chrome/external_link_bumper.png"
          alt="pokemon"
          onClick={e => setData({ ...data, pokemonImg: e.target.src })}
        />
      </div>
    </CanvasContainer>
  );
};

export default Canvas;
