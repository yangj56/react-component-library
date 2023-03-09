import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from '../styles/global';

export function WithStyles(WrappedComponent: any): JSX.Element {
  return (
    <StyledDiv>
      <GlobalStyles />
      <WrappedComponent />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
