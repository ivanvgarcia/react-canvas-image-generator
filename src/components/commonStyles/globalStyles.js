import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Satisfy&display=swap');
  @font-face {
    font-family: Helvetica;
    font-display: auto;
  }
  html, body {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    border-sizing: border-box;
    font-family: 'Open Sans', sans-serif;    
    height: 100%;
    background-color: #330000;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23D18'/%3E%3Cstop offset='1' stop-color='%23330000'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23FA3' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FA3' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
  }
  #root{
    height: 100%;
  }
  .App {
    height: 100%;
  }
  .slick-slider .slick-prev {
    z-index: 999 ;
    left: -20px ;
    @media (max-width: 750px) {
      display: none;
    }
  }
  .slick-slider .slick-next {
    z-index: 999 ;
    right: -20px ;
    @media (max-width: 750px) {
      display: none;
    }
  }
  h1 {
    color: white;
    font-family: 'Satisfy', cursive;
  }
  #root.konvajs-content {
    width:100%;
  }

  button {
    padding: 5px 10px;
    background: #FF69B4;
    border: none;
    // box-shadow: ${props => props.boxShadow || '0 1px 3px #e2e2e2'};
    color: white;
    font-size: ${props => props.fontSize || '1rem'}
    transition: all 0.2s linear;
    margin: 0 5px;
  
    :hover {
      cursor: pointer;
    }
  }
`;
