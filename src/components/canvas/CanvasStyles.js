import styled from 'styled-components';

export const Main = styled.div`
  height: 100%;
  display: flex;
`;

export const CanvasContainer = styled.div`
  position: relative;
`;

export const ToolsContainer = styled.div`
  position: absolute;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  bottom: 0;
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
  box-shadow: 0 10px 2px blue;
  color: white;
  margin: 10px;
  font-size: 1.2rem;
  transition: all 0.2s linear;

  :hover {
    box-shadow: 0 15px 2px blue;
    transform: translateY(-5px);
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
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const TwitterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px #ccc;
  max-width: 240px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: none;
  resize: none;
  font-size: 1rem;
`;
