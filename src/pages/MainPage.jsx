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

  // 페이지 이동 처리
  const handleAddBtn = () => {
    navigate('/write/add');
  };

  return (
    <>
      <CommonHeader />
      <MainPageWrapper>
        <button className="add-btn" onClick={handleAddBtn}>
          추가
        </button>
        {/* prop으로 wordList 전달 */}
        <WordList wordList={wordList} />
      </MainPageWrapper>
    </>
  );
};

const MainPageWrapper = styled.main`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border: 5px solid #ace;
  .add-btn {
    width: 100%;
    background-color: #ace;
    padding: 1rem;
  }
`;

export default MainPage;
