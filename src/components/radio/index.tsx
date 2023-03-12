import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Color } from '../../styles/color';
import { sizeConvertor } from '../../utils/helper';
import { Size } from '../../utils/typings';
import Label from '../label';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  bold?: boolean;
  overideColor?: Color;
} & RadioProps;

type RadioProps = {
  displaySize?: Size;
};

export default function index(props: Props): JSX.Element {
  const { label, bold, overideColor, displaySize } = props;
  const randomId = `${Math.floor(1000 + Math.random() * 9000)}`;

  return (
    <StyledContainer>
      <StyledInput {...props} type="radio" id={randomId} />
      <StyledRadioCircle displaySize={displaySize} />
      {label && (
        <StyledLabelContainer
          displaySize={displaySize}
          bold={bold}
          overideColor={overideColor}
          label={label}
          htmlFor={randomId}
        />
      )}
    </StyledContainer>
  );
}
const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLabelContainer = styled(Label)<RadioProps>`
  margin-left: ${({ displaySize }) => {
    const marginSize = sizeConvertor(displaySize, {
      LARGE: '2.4rem',
      NORMAL: '1.6rem',
      SMALL: '1.4rem',
    });
    return `${marginSize}`;
  }};
`;

const StyledRadioCircle = styled.span<RadioProps>`
  height: ${({ displaySize }) => {
    const heightSize = sizeConvertor(displaySize, {
      LARGE: '3.2rem',
      NORMAL: '2.4rem',
      SMALL: '1.6rem',
    });
    return `${heightSize}`;
  }};
  width: ${({ displaySize }) => {
    const widthSize = sizeConvertor(displaySize, {
      LARGE: '3.2rem',
      NORMAL: '2.4rem',
      SMALL: '1.6rem',
    });
    return `${widthSize}`;
  }};
  box-sizing: border-box;
  border: ${({ theme }) => {
    return `0.1rem solid ${theme.color.NEUTRAL}`;
  }};
  border-radius: 50%;
  cursor: pointer;
  margin-right: 0.4rem;
  padding: ${({ displaySize }) => {
    const paddingSize = sizeConvertor(displaySize, {
      LARGE: '0.8rem',
      NORMAL: '0.6rem',
      SMALL: '0.4rem',
    });
    return `${paddingSize}`;
  }};

  &::after {
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: ${({ theme }) => {
      return `${theme.color.WHITE}`;
    }};
    cursor: pointer;
  }
`;

const StyledInput = styled.input`
  display: none;
  &:checked + ${StyledRadioCircle} {
    background-color: ${({ theme }) => {
      return `${theme.color.PRIMARY}`;
    }};
  }
`;
