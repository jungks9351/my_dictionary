import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CommonHeader = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  };
  return (
    <HeaderWrapper>
      <h1 onClick={onClick}>My Dictionary</h1>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: 400px;
  height: 10vh;
  background-color: #ace;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem auto;
  h1 {
    font-size: 5rem;
    font-weight: bolder;
    cursor: pointer;
  }
`;

export default CommonHeader;
