import React from 'react';
import styled from 'styled-components';
import { Color } from '../../styles/color';
import { sizeConvertor } from '../../utils/helper';
import { Size } from '../../utils/typings';
import Label from '../label';

export type RadioProps = {
  size: Size;
};

export type Props = {
  value: string;
  isChecked: boolean;
  label?: string;
  bold?: boolean;
  overideColor?: Color;
} & RadioProps;

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
      <StyledInput type="radio" value={value} checked={isChecked} />
      <StyledRadioCircle size={size} />
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

const StyledLabelContainer = styled.div<RadioProps>`
  margin-left: ${({ size }) => {
    const marginSize = sizeConvertor(size, {
      LARGE: '2.4rem',
      NORMAL: '1.6rem',
      SMALL: '1.4rem',
    });
    return `${marginSize}`;
  }};
`;

const StyledRadioCircle = styled.div<RadioProps>`
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
  border-radius: 50%;
  cursor: pointer;
  margin-right: 0.4rem;
  padding: ${({ size }) => {
    const paddingSize = sizeConvertor(size, {
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
