export type StyleProps = {
  style?: React.CSSProperties;
  className?: string;
};

export type TestProps = {
  ['data-testid']?: string;
};

export enum ThemeType {
  THEME_1 = 'basic',
  THEME_2 = 'light',
  THEME_3 = 'dark',
}

export enum Size {
  NORMAL = 'normal',
  SMALL = 'small',
  LARGE = 'large',
}
