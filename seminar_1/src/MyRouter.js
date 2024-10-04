import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import FeedPage from './Pages/FeedPage/FeedPage';
import DetailPage from './Pages/DetailPage/DetailPage';

function MyRouter() {
  return (
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
  );
}

export default MyRouter;
