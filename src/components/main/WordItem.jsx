import React from 'react';
import styled from 'styled-components';

const WordItem = ({ wordData }) => {
  // prop 전달 받음
  // 디스트럭팅
  const { word, desc, exam } = wordData;

  return (
    <WordItemWrapper>
      <div className="word-box">
        <h2>단어</h2>
        <p>{word}</p>
      </div>
      <div className="description-box">
        <h2>설명</h2>
        <p>{desc}</p>
      </div>
      <div className="example-box">
        <h2>예시</h2>
        <p>{exam}</p>
      </div>
    </WordItemWrapper>
  );
};

const WordItemWrapper = styled.li`
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

export default WordItem;
