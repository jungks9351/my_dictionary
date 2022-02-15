import React from 'react';
import styled from 'styled-components';
import WordItem from './WordItem';

const WordList = ({ wordList }) => {
  return (
    <WordListWrapper>
      {wordList &&
        wordList.map((wordItem, i) => {
          // prop으로 wordItem 데이터 전달
          return <WordItem key={i} index={i} wordData={wordItem} />;
        })}
    </WordListWrapper>
  );
};

const WordListWrapper = styled.ul`
  width: 100%;
  height: 500px;
  padding: 4rem;
  display: flex;
  gap: 3rem;
  flex-direction: column;
  overflow: scroll;
`;

export default WordList;
