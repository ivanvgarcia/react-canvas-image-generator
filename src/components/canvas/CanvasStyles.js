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

export const SampleImage = styled.img`
  width: 100%;
`;

export const Buttons = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 9999;
`;

export const Button = styled.button`
  padding: 5px 10px;
  background: dodgerblue;
  border: none;
  box-shadow: ${props => props.boxShadow || '0 10px 2px blue'};
  color: white;
  margin: 10px;
  font-size: ${props => props.fontSize || '1rem'}
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
  min-width: 300px;
  flex: 1;
  @media (max-width: 650px) {
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    background: none;
  }
`;

export const TwitterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 120px auto 0px;
  width: 90%;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0.1);
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
