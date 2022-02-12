import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CommonHeader from '../components/common/CommonHeader';
import WordList from '../components/main/WordList';
import { useSelector } from 'react-redux';

const MainPage = () => {
  const navigate = useNavigate();

  // redux 데이터 받아오기
  const wordList = useSelector((state) => state.words.list);

  console.log(wordList);

  // 페이지 이동 처리
  const handleAddBtn = () => {
    navigate('/write');
  };

  return (
    <>
      <CommonHeader />
      <MainPageWrapper>
        <button onClick={handleAddBtn}>추가하기</button>
        {/* prop으로 wordList 전달 */}
        <WordList wordList={wordList} />
      </MainPageWrapper>
    </>
  );
};

const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  button {
    margin: 0 auto;
    width: 100px;
    border: 1px solid #000;
    padding: 1rem;
  }
`;

export default MainPage;
