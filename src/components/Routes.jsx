
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Results from './Results';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/web" />} />
      <Route path="/web" element={<Results />} />
      <Route path="/images" element={<Results />} />
      <Route path="/videos" element={<Results />} />
      <Route path="/news" element={<Results />} />
    </Routes>
  );
}

export default AppRoutes;


