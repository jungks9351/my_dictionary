import React from 'react';
import styled from 'styled-components';

const DictionaryItem = () => {
  return (
    <DictionaryItemWrapper>
      <div className="word-box">
        <h2>단어</h2>
        <p>ㅎ1ㅎ1</p>
      </div>
      <div className="description-box">
        <h2>설명</h2>
        <p>
          히히를 변형한 단어.
          <br />
          숫자 1을 "ㅣ"로 쓴다.
        </p>
      </div>
      <div className="example-box">
        <h2>예시</h2>
        <p>저 친구가 초콜릿을 줬어. ㅎ1ㅎ1</p>
      </div>
    </DictionaryItemWrapper>
  );
};

const DictionaryItemWrapper = styled.li`
  width: 400px;
  height: 400px;
  box-shadow: 1px 5px 15px 1px rgba(0, 0, 0, 0.2);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.8rem;
  }
  .example-box > p {
    color: #0000ff;
  }
`;
export default DictionaryItem;
