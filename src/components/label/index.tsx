import React, { LabelHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Color } from '../../styles/color';
import { sizeConvertor } from '../../utils/helper';
import { Size } from '../../utils/typings';

type Props = LabelHTMLAttributes<HTMLLabelElement> & {
  label?: string;
} & StypedTextProps;

type StypedTextProps = {
  bold?: boolean;
  displaySize?: Size;
  overideColor?: Color;
};

export default function index(props: Props) {
  const { label, bold, overideColor, displaySize } = props;
  return (
    <StyledText
      {...props}
      overideColor={overideColor}
      displaySize={displaySize}
      bold={bold}
    >
      {label}
    </StyledText>
  );
}

const StyledText = styled.label<StypedTextProps>`
  color: ${({ overideColor }) => {
    return overideColor ? overideColor : Color.BLACK;
  }};
  font-size: ${({ displaySize }) => {
    return sizeConvertor(displaySize, {
      NORMAL: '1.4rem',
      LARGE: '2.0rem',
      SMALL: '1.2rem',
    });
  }};
  font-weight: ${({ bold }) => (bold ? '700' : '350')};
  font-family: ${({ theme }) => theme.fontFamily};
  line-height: 1.75;
  letter-spacing: 0;
`;
