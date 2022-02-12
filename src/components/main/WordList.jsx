import React from 'react';
import styled from 'styled-components';
import WordItem from './WordItem';

const WordList = ({ wordList }) => {
  return (
    <WordListWrapper>
      {wordList &&
        wordList.map((wordItem, i) => {
          // prop으로 wordItem 데이터 전달
          return <WordItem key={i} wordData={wordItem} />;
        })}
    </WordListWrapper>
  );
};

const WordListWrapper = styled.ul`
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

export default WordList;
