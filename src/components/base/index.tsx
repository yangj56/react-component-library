import React, { HtmlHTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { BaseShape, Size } from '../../utils/typings';
import Label from '../label';

type Props = HtmlHTMLAttributes<HTMLDivElement> & {
  shadow: boolean;
  shape: BaseShape;
};

export default function index(props: PropsWithChildren<Props>) {
  const { shadow, shape, children } = props;
  return (
    <StyledBased {...props} shadow={shadow} shape={shape}>
      {children ? (
        children
      ) : (
        <StyledLabelContainer>
          <Label label="No Content" displaySize={Size.NORMAL} />
        </StyledLabelContainer>
      )}
    </StyledBased>
  );
}

const StyledBased = styled.div<Props>`
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 5rem;
  box-shadow: ${({ shadow, theme }) => {
    if (shadow) {
      return `0 0.3rem 0.6rem ${theme.color.NEUTRAL}`;
    }
    return '';
  }};
  border: ${({ theme }) => {
    return `0.1rem solid ${theme.color.NEUTRAL}`;
  }};
  border-radius: ${({ shape }) => {
    if (shape === BaseShape.ROUND) {
      return `1.6rem`;
    }
    return `0.8rem`;
  }};
  margin-bottom: 2rem;
`;

const StyledLabelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem;
`;
