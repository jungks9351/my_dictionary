import { db } from '../../firebase';
import { addDoc, collection, getDoc, getDocs } from 'firebase/firestore';

// 초기값 설정

const initailState = {
  list: [],
};

// Action 타입 정의
const LOAD = 'words/LOAD';
const CREATE = 'words/CREATE';
const UPDATE = 'words/UPDATE';

// Action 생성자 함수 생성
// payload = word
export const loadWord = (wordList) => {
  return { type: LOAD, wordList };
};

export const createWord = (word) => {
  return { type: CREATE, word };
};

export const updateWord = (word) => {
  return { type: UPDATE, word };
};

//middlewares

// load
export const loadWordFB = () => {
  return async (dispatch) => {
    const wordData = await getDocs(collection(db, 'words'));

    let wordList = [];

    wordData.forEach((doc) => {
      wordList.push({ id: doc.id, ...doc.data() });
    });
    dispatch(loadWord(wordList));
  };
};

// create

export const createWordFB = (newWord) => {
  return async (dispatch) => {
    const docRef = await addDoc(collection(db, 'words'), newWord);
    const word = { id: docRef.id, ...newWord };

    dispatch(createWord(word));
  };
};

// update

export const updateWrodFB = (wordId) => {
  return (dispatch) => {};
};

// Reducer
const reducer = (state = initailState, action = {}) => {
  switch (action.type) {
    case LOAD: {
      return { list: action.wordList };
    }
    case CREATE: {
      const newWordList = [...state.list, action.word];

      return { list: newWordList };
    }
    default:
      return state;
  }
};

export default reducer;
