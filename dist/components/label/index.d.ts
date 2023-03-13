import { LabelHTMLAttributes } from 'react';
import { Color } from '../../styles/color';
import { Size } from '../../utils/typings';
type Props = LabelHTMLAttributes<HTMLLabelElement> & {
    label?: string;
} & StypedTextProps;
type StypedTextProps = {
    bold?: boolean;
    displaySize?: Size;
    overideColor?: Color;
};
export default function index(props: Props): JSX.Element;
export {};
