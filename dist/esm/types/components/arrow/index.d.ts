/// <reference types="react" />
import { Direction, Size } from '../../utils/typings';
type Props = {
    direction: Direction;
    displaySize: Size;
    onClick?: () => void;
};
export default function index(props: Props): JSX.Element;
export {};
