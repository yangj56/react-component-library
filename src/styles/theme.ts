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
    spacing: {
      S2: '0.125rem',
      S4: '0.25rem',
      S6: '0.375rem',
      S8: '0.5rem',
      S12: '0.75rem',
      S16: '1rem',
      S20: '1.25rem',
      S24: '1.5rem',
      S32: '2rem',
      S40: '2.5rem',
      S48: '3rem',
      S64: '4rem',
      S80: '5rem',
      S96: '6rem',
      S112: '7rem',
    },
  },
];
