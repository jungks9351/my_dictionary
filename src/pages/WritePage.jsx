import React from 'react';
import styled from 'styled-components';
import CommonHeader from '../components/common/CommonHeader';

const WritePage = () => {
  return (
    <>
      <CommonHeader />
      <WritePageWrapper>
        <div>
          <h2>단어</h2>
          <input type="text" id="word" />
        </div>
        <div>
          <h2>설명</h2>
          <input type="text" id="word" />
        </div>
        <div>
          <h2>예시</h2>
          <input type="text" id="word" />
        </div>
        <button>추가하기</button>
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
