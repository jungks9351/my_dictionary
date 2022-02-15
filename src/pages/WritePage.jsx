import React, { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import CommonHeader from '../components/common/CommonHeader';
import { useDispatch } from 'react-redux';
import { createWordFB } from '../redux/modules/words';

const WritePage = () => {
  // 페이지 이동 처리 useNavigate 사용
  const navigate = useNavigate();

  // 액션 실행을 위해 useDispatch 사용
  const dispatch = useDispatch();

  // param 값 가져오기 위해 useParams 사용
  // params 값에 의해 버튼 text 변경
  const params = useParams();
  let { type } = params;

  let pageType;

  if (type === 'add') {
    pageType = '추가하기';
  } else if (type === 'update') {
    pageType = '수정하기';
  }

  // useRef를 이용한 DOM요소 선택
  const inputWord = useRef(null);
  const inputDesc = useRef(null);
  const inputExam = useRef(null);

  // 페이지 이동 처리 및 words(state) 전달, 추가 구현
  const handleBtn = () => {
    const word = inputWord.current.value;
    const desc = inputDesc.current.value;
    const exam = inputExam.current.value;

    if (!word || !desc || !exam) {
      alert('입력하세요');
      return;
    }
    const newWord = {
      word,
      desc,
      exam,
    };

    // dispatch -> middleware --> action -> reducer 데이터 변경
    dispatch(createWordFB(newWord));
    // 뒤로가기 구현
    navigate(-1);
  };

  return (
    <>
      <CommonHeader />
      <WritePageWrapper>
        <div>
          <h2>단어</h2>
          <input type="text" id="word" ref={inputWord} />
        </div>
        <div>
          <h2>설명</h2>
          <input type="text" id="desc" ref={inputDesc} />
        </div>
        <div>
          <h2>예시</h2>
          <input type="text" id="exam" ref={inputExam} />
        </div>
        <button onClick={handleBtn}>{pageType}</button>
      </WritePageWrapper>
    </>
  );
};

const WritePageWrapper = styled.main`
  width: 50vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  input {
    width: 100%;
    background-color: #eee;
  }

  button {
    margin: 0 auto;
    width: 100px;
    border: 1px solid #000;
    padding: 1rem;
  }
`;

export default WritePage;
