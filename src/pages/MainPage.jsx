import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CommonHeader from '../components/common/CommonHeader';
import WordList from '../components/main/WordList';
import { useDispatch, useSelector } from 'react-redux';
import { loadWordFB } from '../redux/modules/words';

const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // redux 데이터 받아오기
  const wordList = useSelector((state) => state.words.list);

  console.log(wordList);
  console.log('---');

  // 페이지 이동 처리
  const handleAddBtn = () => {
    navigate('/write');
  };

  React.useEffect(() => {
    dispatch(loadWordFB());
  }, []);

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
