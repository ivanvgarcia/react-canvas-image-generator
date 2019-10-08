import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg) translate(0px);
  }

  25% {
    transform: rotate(-10deg) translate(20px);
  }

  75% {
    transform: rotate(-20deg) translate(50px);
  }

  100% {
    transform: rotate(-15deg) translate(-15px);
  }
`;

export const Main = styled.div``;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  height: 100vh;
  overflow-y: auto;
  img {
    width: 100%;
    cursor: pointer;
  }
`;

export const AvatarCard = styled.div`
  position: relative;
  width: 40%;
  cursor: pointer;
  margin: 25px 10px;
`;

export const Tag = styled.p`
  color: white;
  position: absolute;
  top: -15px;
  left: 0;
  margin: 0;
  background: #FF69B4;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 5px 15px 5px 10px;
  z-index: 5;
  font-size: .8rem
  box-shadow: 0 6px 15px rgba(0, 0, 0.1);
  animation: ${rotate} .5s linear forwards;

`;
export const CardBackground = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg stroke='%23CCC' stroke-width='0' %3E%3Crect fill='%23F5F5F5' x='-60' y='-60' width='110' height='240'/%3E%3C/g%3E%3C/svg%3E");
  box-shadow: 0 2px 8px rgba(0, 0, 0.1);
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
  position: fixed;
  top: 20px;
  left: 10px;
  z-index: 9999;
`;

export const Button = styled.button``;

export const Title = styled.h1`
  flex: ${props => props.flex || '0'};
  text-align: center;
  color: white;
  font-size: ${props => props.size || '3rem'};
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
