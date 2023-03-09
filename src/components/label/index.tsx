import React from 'react';
import styled from 'styled-components';
import { Color } from '../../styles/color';
import { sizeConvertor } from '../../utils/helper';
import { Size } from '../../utils/typings';

type StypedTextProps = {
  bold?: boolean;
  size: Size;
  overideColor?: Color;
};
export type Props = {
  label: string;
} & StypedTextProps;

export default function index({ label, bold, overideColor, size }: Props) {
  return (
    <StyledText overideColor={overideColor} size={size} bold={bold}>
      {label}
    </StyledText>
  );
}

const StyledText = styled.span<StypedTextProps>`
  color: ${({ overideColor }) => {
    return overideColor ? overideColor : Color.BLACK;
  }};
  font-size: ${({ size }) => {
    return sizeConvertor(size, {
      NORMAL: '1.4rem',
      LARGE: '2.4rem',
      SMALL: '1.2rem',
    });
  }};
  font-weight: ${({ bold }) => (bold ? '700' : '350')};
`;
