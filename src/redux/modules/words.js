// 초기값 설정

const initailState = {
  list: [
    {
      word: 'ㅎ1ㅎ1',
      desc: '히히를 변형한 단어.',
      exam: '저 친구가 초콜릿을 줬어. ㅎ1ㅎ1',
    },
  ],
};

// Action 타입 정의

const CREATE = 'words/CREATE';

// Action 생성자 함수 생성
// payload = word
export const createWord = (word) => {
  return { type: CREATE, word };
};

// Reducer
const reducer = (state = initailState, action = {}) => {
  switch (action.type) {
    case CREATE: {
      const newWordList = [...state.list, action.word];

      return { list: newWordList };
    }
    default:
      return state;
  }
};

export default reducer;
