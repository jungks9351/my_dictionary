import React, { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import CommonHeader from '../components/common/CommonHeader';
import { useDispatch, useSelector } from 'react-redux';
import { createWordFB, updateWordFB } from '../redux/modules/words';

const WritePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const wordList = useSelector((state) => state.words.list);

  let { type, id: word_index } = params;

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
    // 추가할때
    if (type === 'add') {
      pageType = '추가하기';
      dispatch(createWordFB(newWord));
      // 업데이트 할때
    } else if (type === 'update') {
      pageType = '수정하기';
      dispatch(updateWordFB(wordList[word_index].id, newWord));
    }

    // 뒤로가기 구현
    navigate(-1);
  };

  return (
    <>
      <CommonHeader />
      <WritePageWrapper>
        <div className="input-box">
          <h2>단어</h2>
          <input
            type="text"
            id="word"
            ref={inputWord}
            autoComplete="off"
            defaultValue={wordList[word_index] ? wordList[word_index].word : ''}
          />
        </div>
        <div className="input-box">
          <h2>설명</h2>
          <input
            type="text"
            id="desc"
            ref={inputDesc}
            autoComplete="off"
            defaultValue={wordList[word_index] ? wordList[word_index].desc : ''}
          />
        </div>
        <div className="input-box">
          <h2>예시</h2>
          <input
            type="text"
            id="exam"
            ref={inputExam}
            autoComplete="off"
            defaultValue={wordList[word_index] ? wordList[word_index].exam : ''}
          />
        </div>
        <button onClick={handleBtn}>{pageType}</button>
      </WritePageWrapper>
    </>
  );
};

const WritePageWrapper = styled.main`
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 5px solid #ace;
  padding: 1rem;
  .input-box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    margin: 0 auto;

    h2 {
      font-size: 3rem;
      font-weight: bolder;
    }
    input {
      width: 100%;
      height: 3rem;
      font-size: 3rem;
      background-color: #eee;
    }
  }

  button {
    margin: 0 auto;
    width: 100%;
    padding: 1rem;
    background-color: #ace;
    font-size: 2rem;
    font-weight: bolder;
    border-radius: 5rem;
  }
`;

export default WritePage;
