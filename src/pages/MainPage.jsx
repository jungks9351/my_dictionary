import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CommonHeader from '../components/common/CommonHeader';

const MainPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // useLocation hook을 이용하여 다른페이지에서 state를 전달 받음
  const wordList = location.state;

  return (
    <>
      <CommonHeader />
      <MainPageWrapper>
        <button>추가하기</button>
        <ul>
          {wordList &&
            wordList.map((wordItem) => {
              const { word, desc, exam } = wordItem;

              return (
                <li>
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
                </li>
              );
            })}
        </ul>
      </MainPageWrapper>
    </>
  );
};

const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  button {
    margin: 0 auto;
    width: 100px;
    border: 1px solid #000;
    padding: 1rem;
  }

  ul {
    margin: 0 auto;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }

  li {
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
  }
`;

export default MainPage;
