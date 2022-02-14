import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import WritePage from './pages/WritePage';
import { useDispatch } from 'react-redux';
import { loadWordFB } from './redux/modules/words';

function App() {
  // 최초 랜더링 시 DB 받기
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadWordFB());
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/write" element={<WritePage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
