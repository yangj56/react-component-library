import { InputHTMLAttributes } from 'react';
import { Color } from '../../styles/color';
import { Size } from '../../utils/typings';
type Props = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    bold?: boolean;
    overideColor?: Color;
} & RadioProps;
type RadioProps = {
    displaySize?: Size;
};
export default function index(props: Props): JSX.Element;
export {};
