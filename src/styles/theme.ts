import { DefaultTheme } from 'styled-components';
import { Color } from './color';
import { ThemeType } from '../utils/typings';

export const Themes: DefaultTheme[] = [
  {
    name: ThemeType.THEME_1,
    color: {
      PRIMARY: Color.PURPLE,
      SECONDARY: Color.LIGHT_PURPLE,
      BORDER: Color.GREY,
      BLACK: Color.BLACK,
      WHITE: Color.WHITE,
      UNDERLINED: Color.LIGHT_GREY,
      NEUTRAL: Color.DARK_WHITE,
    },
    fontFamily: 'Avenir',
  },
  {
    name: ThemeType.THEME_2,
    color: {
      PRIMARY: Color.RED,
      SECONDARY: Color.LIGHT_RED,
      BORDER: Color.GREY,
      BLACK: Color.BLACK,
      WHITE: Color.WHITE,
      UNDERLINED: Color.LIGHT_GREY,
      NEUTRAL: Color.DARK_WHITE,
    },
    fontFamily: 'Open Sans',
  },
];
