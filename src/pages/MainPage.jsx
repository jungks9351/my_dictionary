import React from 'react';
import styled from 'styled-components';
import CommonHeader from '../components/common/CommonHeader';
import DictionaryList from '../components/main/DictionaryList';

const MainPage = () => {
  return (
    <>
      <CommonHeader />
      <MainPageWrapper>
        <DictionaryList />
      </MainPageWrapper>
    </>
  );
};

const MainPageWrapper = styled.main`
  width: 100vw;
  height: 60vh;
  margin: 0 auto;
`;
export default MainPage;
