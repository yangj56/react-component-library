import { DefaultTheme } from 'styled-components';
import { Color } from './color';
import { ThemeType } from '../utils/typings';

export const Themes: DefaultTheme[] = [
  {
    name: ThemeType.THEME_1,
    color: {
      PRIMARY: Color.PURPLE,
      SECONDARY: Color.RED,
      SYSTEM: Color.BLACK,
      SUCCESS: Color.CYAN,
      DANGER: Color.RED,
      WARNING: Color.RED,
      INFO: Color.BLACK,
      NEUTRAL: Color.GREY,
      BLACK: Color.BLACK,
      WHITE: Color.WHITE,
    },
  },
  {
    name: ThemeType.THEME_2,
    color: {
      PRIMARY: Color.CYAN,
      SECONDARY: Color.RED,
      SYSTEM: Color.BLACK,
      SUCCESS: Color.PURPLE,
      DANGER: Color.RED,
      WARNING: Color.RED,
      INFO: Color.BLACK,
      NEUTRAL: Color.GREY,
      BLACK: Color.BLACK,
      WHITE: Color.WHITE,
    },
  },
];
