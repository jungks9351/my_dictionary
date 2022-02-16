import { db } from '../../firebase';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';

// 초기값 설정

const initailState = {
  list: [],
};

// Action 타입 정의
const LOAD = 'words/LOAD';
const CREATE = 'words/CREATE';
const UPDATE = 'words/UPDATE';
const DELETE = 'words/DELETE';

// Action 생성자 함수 생성
// payload = word
export const loadWord = (wordList) => {
  return { type: LOAD, wordList };
};

export const createWord = (word) => {
  return { type: CREATE, word };
};

export const updateWord = (id, newWord) => {
  return { type: UPDATE, id, newWord };
};

export const deleteWord = (id) => {
  return { type: DELETE, id };
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

export const updateWordFB = (wordId, changeData) => {
  return async (dispatch, getState) => {
    const docRef = doc(db, 'words', wordId);
    await updateDoc(docRef, changeData);

    const _word_list = getState().words.list;

    const word_index = _word_list.findIndex((word) => {
      return word.id === wordId;
    });

    dispatch(updateWord(word_index, changeData));
  };
};

// delete

export const deleteWordFB = (wordId) => {
  return async (dispatch, getState) => {
    const docRef = doc(db, 'words', wordId);
    await deleteDoc(docRef);

    const _word_list = getState().words.list;
    const word_index = _word_list.findIndex((word) => {
      return word.id === wordId;
    });
    dispatch(deleteWord(word_index));
  };
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
    case UPDATE: {
      const newWordList = state.list.map((list, idx) => {
        if (parseInt(action.id) === idx) {
          return {
            ...list,
            word: action.newWord.word,
            desc: action.newWord.desc,
            exam: action.newWord.exam,
          };
        } else {
          return list;
        }
      });

      return { ...state, list: newWordList };
    }
    case DELETE: {
      const newWordList = state.list.filter((list, idx) => {
        return parseInt(action.id) !== idx;
      });
      return { ...state, list: newWordList };
    }

    default:
      return state;
  }
};

export default reducer;
