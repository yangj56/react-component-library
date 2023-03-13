import { Size } from './typings';
type SizeValueT = {
    [key in keyof typeof Size]: string;
};
export declare function sizeConvertor(size: Size | undefined, converts: SizeValueT): string;
export {};
