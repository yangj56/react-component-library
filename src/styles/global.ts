import { createGlobalStyle } from 'styled-components';
import AvenirFont from '../assets/FontsFree-Net-AvenirLTStd-Book.ttf';

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  @font-face {
      font-family: 'Avenir';
      src: local('Avenir'), local('Avenir'),
        url(${AvenirFont}) format('ttf');
      font-weight: 900;
      font-style: normal;
  }
`;
