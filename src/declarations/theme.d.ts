import 'styled-components';
import { ThemeInterface } from '../types/theme';

export declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {
    name: string;
  }
}
