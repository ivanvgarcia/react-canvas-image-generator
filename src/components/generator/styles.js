import styled from 'styled-components';

const Main = styled.div``;

const CanvasContainer = styled.div`
  margin: 0 auto;
`;

const CanvasCSS = styled.canvas`
  width: 100%;
`;

const ToolsContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const Buttons = styled.div`
  position: fixed;
  top: 20px;
  left: 10px;
  z-index: 9999;
`;

export const Styles = {
  Main,
  Buttons,
  CanvasContainer,
  ToolsContainer,
  CanvasCSS
};
