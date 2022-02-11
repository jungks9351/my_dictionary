import React from 'react';
import styled from 'styled-components';

const CommonHeader = () => {
  return (
    <HeaderWrapper>
      <h1>나만의 사전</h1>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  h1 {
    font-size: 3rem;
  }
`;

export default CommonHeader;
