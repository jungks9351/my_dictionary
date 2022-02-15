import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CommonHeader from '../components/common/CommonHeader';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  };

  return (
    <>
      <CommonHeader />
      <NotFoundPageWrapper>
        <h1>4 0 4</h1>
        <h2>잘못된 주소입니다.</h2>
        <button onClick={onClick}>홈으로</button>
      </NotFoundPageWrapper>
    </>
  );
};

const NotFoundPageWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  h1 {
    font-size: 4rem;
    font-weight: bolder;
  }
  h2 {
    font-size: 3rem;
    font-weight: bolder;
  }
  button {
    margin: 0 auto;
    width: 100px;
    font-size: 2rem;
    font-weight: bolder;
    background-color: #efefef;
    padding: 1rem;
    border-radius: 1rem;
  }
`;

export default NotFoundPage;
