import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { deleteWordFB } from '../../redux/modules/words';

const WordItem = ({ wordData, index }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // prop 전달 받음
  // 디스트럭팅
  const { id, word, desc, exam } = wordData;

  const handleUpdateBtn = () => {
    navigate(`/write/update/${index}`);
  };

  const handleDeleteBtn = () => {
    dispatch(deleteWordFB(id));
  };

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
      <div className="btn-box">
        <button onClick={handleUpdateBtn}>수정하기</button>
        <button onClick={handleDeleteBtn}>삭제하기</button>
      </div>
    </WordItemWrapper>
  );
};

const WordItemWrapper = styled.li`
  width: 300px;
  height: 300px;
  margin: 0 auto;
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
  .btn-box {
    display: flex;
    justify-content: space-around;
    button {
      background-color: #ace;
      padding: 1rem;
      border-radius: 1rem;
    }
  }
`;

export default WordItem;
