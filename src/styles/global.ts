import { createGlobalStyle } from 'styled-components';
import LatoFont from '../assets/lato/lato-v20-latin-regular.woff';
import LatoFont2 from '../assets/lato/lato-v20-latin-regular.woff2';
import RobotoFont from '../assets/roboto/roboto-v27-latin-regular.woff';
import RobotoFont2 from '../assets/roboto/roboto-v27-latin-regular.woff2';

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  @font-face {
      font-family: 'Roboto';
      src: local('Roboto'), local('Roboto'),
        url(${RobotoFont}) format('woff2'),
        url(${RobotoFont2}) format('woff');
      font-weight: 900;
      font-style: normal;
  }

  @font-face {
      font-family: 'Lato';
      src: local('Lato'), local('Lato'),
        url(${LatoFont}) format('woff2'),
        url(${LatoFont2}) format('woff');
      font-weight: 200;
      font-style: normal;
  }
`;
