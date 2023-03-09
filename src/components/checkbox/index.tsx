import React from 'react';
import styled from 'styled-components';
import { Color } from '../../styles/color';
import { sizeConvertor } from '../../utils/helper';
import { Size } from '../../utils/typings';
import Label from '../label';

export type CheckboxProps = {
  size: Size;
};

export type Props = {
  value: string;
  isChecked: boolean;
  label?: string;
  bold?: boolean;
  overideColor?: Color;
} & CheckboxProps;

export default function index({
  isChecked,
  value,
  label,
  bold,
  overideColor,
  size,
}: Props): JSX.Element {
  return (
    <StyledContainer>
      <StyledInput type="checkbox" value={value} checked={isChecked} />
      <StyledCheckboxSquare size={size} />
      {label && (
        <StyledLabelContainer size={size}>
          <Label
            size={size}
            bold={bold}
            overideColor={overideColor}
            label={label}
          />
        </StyledLabelContainer>
      )}
    </StyledContainer>
  );
}
const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLabelContainer = styled.div<CheckboxProps>`
  margin-left: ${({ size }) => {
    const marginSize = sizeConvertor(size, {
      LARGE: '2.4rem',
      NORMAL: '1.6rem',
      SMALL: '1.4rem',
    });
    return `${marginSize}`;
  }};
`;

const StyledCheckboxSquare = styled.div<CheckboxProps>`
  height: ${({ size }) => {
    const heightSize = sizeConvertor(size, {
      LARGE: '3.2rem',
      NORMAL: '2.4rem',
      SMALL: '1.6rem',
    });
    return `${heightSize}`;
  }};
  width: ${({ size }) => {
    const widthSize = sizeConvertor(size, {
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
    border: solid #ffffff;
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
