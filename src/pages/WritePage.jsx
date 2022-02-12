import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CommonHeader from '../components/common/CommonHeader';

const WritePage = () => {
  // 페이지 이동 처리 useNavigate 사용
  const navigate = useNavigate();

  // words 상태관리
  const [words, setWords] = useState([
    {
      word: 'ㅎ1ㅎ1',
      desc: '히히를 변형한 단어.',
      exam: '저 친구가 초콜릿을 줬어. ㅎ1ㅎ1',
    },
    {
      word: 'ㅎ1ㅎ1',
      desc: '히히를 변형한 단어.',
      exam: '저 친구가 초콜릿을 줬어. ㅎ1ㅎ1',
    },
    {
      word: 'ㅎ1ㅎ1',
      desc: '히히를 변형한 단어.',
      exam: '저 친구가 초콜릿을 줬어. ㅎ1ㅎ1',
    },
  ]);
  // useRef를 이용한 DOM요소 선택
  const inputWord = useRef(null);
  const inputDesc = useRef(null);
  const inputExam = useRef(null);

  // 페이지 이동 처리 및 words(state) 전달, 추가 구현
  const handleAddBtn = () => {
    const newWord = {
      word: inputWord.current.value,
      desc: inputDesc.current.value,
      exam: inputExam.current.value,
    };
    setWords([...words, newWord]);
    navigate('/', { state: words });
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
        <button onClick={handleAddBtn}>추가하기</button>
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
