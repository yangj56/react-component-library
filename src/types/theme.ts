export interface ThemeInterface {
  color: ColorsInterface;
  spacing: SpacingInterface;
}

export interface FontSpecsInterface {
  LINE_HEIGHT: string;
  FONT_FAMILY: string;
  SIZE: string;
}

export interface ColorsInterface {
  PRIMARY: string;
  SECONDARY: string;
  SYSTEM: string;
  SUCCESS: string;
  WARNING: string;
  DANGER: string;
  INFO: string;
  NEUTRAL: string;
  WHITE: string;
  BLACK: string;
}

export interface FontInterface {
  header: FontSpecsInterface;
  title: FontSpecsInterface;
  subtitle: FontSpecsInterface;
  description: FontSpecsInterface;
  body: FontSpecsInterface;
}

export interface SpacingInterface {
  S2: string;
  S4: string;
  S6: string;
  S8: string;
  S12: string;
  S16: string;
  S20: string;
  S24: string;
  S32: string;
  S40: string;
  S48: string;
  S64: string;
  S80: string;
  S96: string;
  S112: string;
}
