import React from 'react';
import styled from 'styled-components';
import { BaseShape, Size } from '../../utils/typings';
import Label from '../label';

type Props = {
  shadow: boolean;
  shape: BaseShape;
  children: React.ReactNode;
};

export default function index({ shadow, shape, children }: Props) {
  return (
    <StyledBased shadow={shadow} shape={shape}>
      {children ? (
        children
      ) : (
        <StyledLabelContainer>
          <Label label="No Content" size={Size.NORMAL} />
        </StyledLabelContainer>
      )}
    </StyledBased>
  );
}

const StyledBased = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 5rem;
  box-shadow: ${({ shadow }) => {
    if (shadow) {
      return `0 3px 10px rgb(0 0 0 / 0.2)`;
    }
  }};
  border-radius: ${({ shape }) => {
    if (shape === BaseShape.ROUND) {
      return `1.6rem`;
    }
    return `0.8rem`;
  }};
`;

const StyledLabelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem;
`;
