import styled, { keyframes } from 'styled-components';

const loader = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
export const LoaderIcon = styled.div`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    margin: 6px;
    border: 3px solid #fff;
    border-radius: 50%;
    animation: ${loader} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

const FullLoaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #ffffff;
  width: 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg stroke='%23CCC' stroke-width='0' %3E%3Crect fill='%23F5F5F5' x='-60' y='-60' width='110' height='240'/%3E%3C/g%3E%3C/svg%3E");
  box-shadow: 0 2px 8px rgba(0, 0, 0.1);
  img {
    width: 100%;
  }
`

const FullLoaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position : absolute;
  top: 10px;
  left: 10px;
  box-shadow: 0 5px 8px #737373;
  border-radius: 20px;
  background: #39c;
  padding: 10px;
  width: 120px;
  z-index: 1;
  span {
    position: absolute;
    bottom: 2px;
    right: -20px;
    width: 30px;
    height: 30px;
    background: #39c;    
    clip-path: polygon(0% 0%, 0 0, 100% 50%, 0 100%, 0% 100%);
    transform: rotate(20deg);
  }
`

const FullLoaderMessage = styled.p`
  font-size: .8rem;
  color: white;
  margin: 10px 0 0 0;
`

export const Styles = {
  FullLoaderContainer,
  FullLoaderContent,
  FullLoaderMessage
}
