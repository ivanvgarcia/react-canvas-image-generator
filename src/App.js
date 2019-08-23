import React from 'react';
import Canvas from 'components/canvas/Canvas';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%
  }
  body {
    margin: 0;
    padding: 0;
    border-sizing: border-box;
    font-family: "Helvetica"
  }
  .slick-slider .slick-prev {
    z-index: 999 ;
    left: 5px ;
  }
  .slick-slider .slick-next {
    z-index: 999 ;
    right: 5px ;
  }
  h1 {
    color: white;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Canvas />
    </div>
  );
}

export default App;
