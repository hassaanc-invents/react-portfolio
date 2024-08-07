import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Navigation from './views/_/navigation/Index';
import NavigationConfig from './config/NavigationConfig';

const AppRouter = () => {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        {Array.isArray(NavigationConfig) && NavigationConfig.map((item) => (
          <Route key={item.path} path={item.path} element={item.component} />
        ))}
      </Routes>
    </HashRouter>
  );
}

export default AppRouter;