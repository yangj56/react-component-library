/// <reference types="react" />
import { InputHTMLAttributes, LabelHTMLAttributes, PropsWithChildren, HtmlHTMLAttributes } from 'react';
import * as styled_components from 'styled-components';
import { DefaultTheme } from 'styled-components';

declare enum Color {
    PURPLE = "#5C50BB",
    LIGHT_PURPLE = "#EFEDFD",
    RED = "#FF0000",
    LIGHT_RED = "#FFD8D8",
    GREY = "#A8A8A8",
    LIGHT_GREY = "#E1E1E1",
    BLACK = "#000000",
    WHITE = "#FFFFFF",
    DARK_WHITE = "#F7F7F7"
}

declare enum Size {
    NORMAL = "normal",
    SMALL = "small",
    LARGE = "large"
}
declare enum Direction {
    UP = "up",
    DOWN = "down",
    UNI = "uni"
}
declare enum BaseShape {
    ROUND = "round",
    SQUARE = "square"
}

type Props$4 = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    bold?: boolean;
    overideColor?: Color;
} & RadioProps;
type RadioProps = {
    displaySize?: Size;
};
declare function index$4(props: Props$4): JSX.Element;

type Props$3 = LabelHTMLAttributes<HTMLLabelElement> & {
    label?: string;
} & StypedTextProps;
type StypedTextProps = {
    bold?: boolean;
    displaySize?: Size;
    overideColor?: Color;
};
declare function index$3(props: Props$3): JSX.Element;

type Props$2 = HtmlHTMLAttributes<HTMLDivElement> & {
    shadow: boolean;
    shape: BaseShape;
};
declare function index$2(props: PropsWithChildren<Props$2>): JSX.Element;

type Props$1 = {
    direction: Direction;
    displaySize: Size;
    onClick?: () => void;
};
declare function index$1(props: Props$1): JSX.Element;

type Props = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    bold?: boolean;
    overideColor?: Color;
} & CheckboxProps;
type CheckboxProps = {
    displaySize?: Size;
};
declare function index(props: Props): JSX.Element;

declare function WithStyles(WrappedComponent: any): JSX.Element;

type SizeValueT = {
    [key in keyof typeof Size]: string;
};
declare function sizeConvertor(size: Size | undefined, converts: SizeValueT): string;

declare const GlobalStyles: styled_components.GlobalStyleComponent<{}, styled_components.DefaultTheme>;

interface ThemeInterface {
    color: ColorsInterface;
    fontFamily: string;
}
interface ColorsInterface {
    PRIMARY: string;
    SECONDARY: string;
    UNDERLINED: string;
    BORDER: string;
    WHITE: string;
    BLACK: string;
    NEUTRAL: string;
}

declare const Themes: DefaultTheme[];

export { index$1 as Arrow, index$2 as Base, BaseShape, index as Checkbox, Color, Direction, GlobalStyles, index$3 as Label, index$4 as Radio, Size, ThemeInterface, Themes, WithStyles, sizeConvertor };
