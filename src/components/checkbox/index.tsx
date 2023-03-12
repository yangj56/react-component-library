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
} & CheckboxProps;

type CheckboxProps = {
  displaySize?: Size;
};

export default function index(props: Props): JSX.Element {
  const { label, bold, overideColor, displaySize } = props;
  const randomId = `${Math.floor(1000 + Math.random() * 9000)}`;

  return (
    <StyledContainer>
      <StyledInput {...props} type="checkbox" id={randomId} />
      <StyledCheckboxSquare displaySize={displaySize} />
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

const StyledLabelContainer = styled(Label)<CheckboxProps>`
  margin-left: ${({ displaySize }) => {
    const marginSize = sizeConvertor(displaySize, {
      LARGE: '2.4rem',
      NORMAL: '1.6rem',
      SMALL: '1.4rem',
    });
    return `${marginSize}`;
  }};
`;

const StyledCheckboxSquare = styled.div<CheckboxProps>`
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
  border-radius: 0.4rem;
  cursor: pointer;
  margin-right: 0.4rem;

  &::after {
    display: block;
    content: '';
    position: relative;
    left: 35%;
    top: 20%;
    width: 20%;
    height: 40%;
    border: ${({ theme }) => `solid ${theme.color.WHITE}`};
    border-width: 0 0.2rem 0.2rem 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const StyledInput = styled.input`
  display: none;
  &:checked + ${StyledCheckboxSquare} {
    background-color: ${({ theme }) => {
      return `${theme.color.PRIMARY}`;
    }};
  }
`;
