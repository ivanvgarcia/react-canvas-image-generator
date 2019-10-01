import styled from 'styled-components';

export const Main = styled.div``;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  height: 100vh;
  overflow-y: auto;
  img {
    width: 100%;
    cursor: pointer;
  }
`;

export const AvatarCard = styled.div`
  position: relative;
  width: 45%;
  cursor: pointer;
`;

export const Tag = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  background: green;
  padding: 5px;
`;

export const CanvasContainer = styled.div`
  margin: 0 auto;
`;

export const CanvasCSS = styled.canvas`
  width: 100%;
`;

export const ToolsContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
  transition: transform 0.2s linear;
  :hover {
    transform: scale(1.01);
    cursor: pointer;
  }
`;



export const Buttons = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 9999;
`;

export const Button = styled.button``;

export const Title = styled.h1`
  color: white;
  font-family: Helvetica;
  font-size: 3rem;
  text-shadow: 1px 2px 2px dodgerblue, 2px 3px 3px #000, 3px 4px 6px blue;
`;


export const TextArea = styled.textarea`
  width: 100%;
  border: none;
  padding: 0;
  resize: none;
  font-size: 0.8rem;
`;

export const PlaceHolder = styled.div`
  color: tomato;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 410.5px;
`;

export const LoaderText = styled.p`
  margin: 10px 0;
  font-size: 0.8rem;
`;
