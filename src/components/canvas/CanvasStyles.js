import styled from 'styled-components';

export const Main = styled.div`
  min-height: 100%;
  display: flex;
`;

export const CanvasContainer = styled.div`
  position: relative;
`;

export const ToolsContainer = styled.div`
  position: absolute;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  bottom: 0px;
  left: 0;
  width: 480px;
`;

export const Base64TextContainer = styled.div``;

export const Base64Text = styled.textarea`
  font-size: 0.8rem;
  width: 500px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-shadow: 1px 2px 8px #ccc;
  white-space: pre-wrap; /* Webkit */
  white-space: -moz-pre-wrap; /* Firefox */
  white-space: -pre-wrap; /* Opera <7 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word;
  margin: 5px 0;
  resize: none;
`;

export const Image = styled.img`
  width: 100%;
  transition: transform 0.2s linear;
  :hover {
    transform: scale(1.01);
    cursor: pointer;
  }
`;

export const SampleImage = styled.img`
  width: 100%;
`;

export const Buttons = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background: dodgerblue;
  border: none;
  border-radius: 20px;
  box-shadow: ${props => props.boxShadow || '0 10px 2px blue'};
  color: white;
  margin: 10px;
  font-size: ${props => props.fontSize || '1.2rem'}
  transition: all 0.2s linear;

  :hover {
    box-shadow: ${props => props.hoverBoxShadow || '0 15px 2px blue'};
    transform: ${props => props.translateY || 'translateY(-5px)'};
    cursor: pointer;
  }

  :active {
    box-shadow: 0 5px 2px blue;
    transform: translateY(5px);
  }

  :focus {
    outline: none;
  }
`;

export const Title = styled.h1`
  color: white;
  font-family: Helvetica;
  font-size: 3rem;
  text-shadow: 1px 2px 2px dodgerblue, 2px 3px 3px #000, 3px 4px 6px blue;
`;

export const TweetContainer = styled.div`
  justify-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #330000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23D18'/%3E%3Cstop offset='1' stop-color='%23330000'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23FA3' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FA3' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  @media (max-width: 850px) {
    display: none;
  }
`;

export const TwitterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0.1);
  max-width: 240px;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg stroke='%23CCC' stroke-width='0' %3E%3Crect fill='%23F5F5F5' x='-60' y='-60' width='110' height='240'/%3E%3C/g%3E%3C/svg%3E");
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: none;
  padding: 0;
  resize: none;
  font-size: 0.8rem;
`;

export const PlaceHolder = styled.div`
  color: white;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 410.5px;
`;
