import { createGlobalStyle } from 'styled-components';
import AvenirFont from '../assets/FontsFree-Net-AvenirLTStd-Book.ttf';
import OpenSansFont from '../assets/open-sans-v27-latin-regular.woff';

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  @font-face {
    font-family: 'Avenir';
    src: local('Avenir'), local('Avenir'),
      url(${AvenirFont}) format('ttf');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Open Sans';
    src: local('Open Sans'), local('Open Sans'),
      url(${OpenSansFont}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
`;
