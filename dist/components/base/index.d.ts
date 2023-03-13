import { HtmlHTMLAttributes, PropsWithChildren } from 'react';
import { BaseShape } from '../../utils/typings';
type Props = HtmlHTMLAttributes<HTMLDivElement> & {
    shadow: boolean;
    shape: BaseShape;
};
export default function index(props: PropsWithChildren<Props>): JSX.Element;
export {};
