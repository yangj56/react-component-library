import { Size } from './typings';

type SizeValueT = { [key in keyof typeof Size]: string };

export function sizeConvertor(
  size: Size = Size.NORMAL,
  converts: SizeValueT
): string {
  let result = '';
  switch (size) {
    case Size.NORMAL:
      result = converts.NORMAL;
      break;
    case Size.LARGE:
      result = converts.LARGE;
      break;
    case Size.SMALL:
      result = converts.SMALL;
      break;
    default:
      result = converts.NORMAL;
  }
  return result;
}
