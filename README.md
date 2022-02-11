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

function App() {
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
```
