import React from 'react';
import styled from 'styled-components';
import DictionaryItem from './DictionaryItem';

const DictionaryList = () => {
  return (
    <DictionaryListWrapper>
      <DictionaryItem />
      <DictionaryItem />
      <DictionaryItem />
      <DictionaryItem />
    </DictionaryListWrapper>
  );
};

const DictionaryListWrapper = styled.ul`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

export default DictionaryList;
