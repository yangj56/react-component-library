import React from 'react';
import { BsArrowDownUp, BsArrowUp, BsArrowDown } from 'react-icons/bs';
import { Direction, Size } from '../../utils/typings';

type Props = {
  direction: Direction;
  size: Size;
};

export default function index({ direction, size }: Props) {
  function convertSize() {
    let result = '';
    switch (size) {
      case Size.NORMAL:
        result = '20';
        break;
      case Size.LARGE:
        result = '30';
        break;
      case Size.SMALL:
        result = '15';
        break;
      default:
        result = '20';
    }
    return result;
  }
  return (
    <div>
      {direction === Direction.UP && <BsArrowUp size={convertSize()} />}
      {direction === Direction.DOWN && <BsArrowDown size={convertSize()} />}
      {direction === Direction.UNI && <BsArrowDownUp size={convertSize()} />}
    </div>
  );
}