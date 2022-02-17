## My Dictionary

나만의 사전 만들기

### Project setting

npm 사용

### Routing

react-router-dom 설치

```js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import WritePage from './pages/WritePage';
import { useDispatch } from 'react-redux';
import { loadWordFB } from './redux/modules/words';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadWordFB());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/write/:type/:id" element={<WritePage />} />
        <Route path="/write/:type" element={<WritePage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### Redux

전역 상태 관리

DB : firebase 사용

middleware : redux-thunk

#### /redux/module/words.js

```js
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
      wordList = [...wordList, { id: doc.id, ...doc.data() }];
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
```

#### redux/configStore.js

```js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import words from './modules/words';

const middlewares = [thunk];
const rootReducer = combineReducers({ words });

const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;
```

### 아쉬운점

배포를 했을 때 redux-dev-tools-extension을 아래와 같이 store에 적용했을 때 배포시 에러가 일어났다. 왜 그런지 모르겠다.

```js
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import words from './modules/words';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [thunk];
const rootReducer = combineReducers({ words });

const enhancer = applyMiddleware(...middlewares);

const store = createStore(
  rootReducer,
  compose(enhancer, composeWithDevTools()),
);

export default store;
```
