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
