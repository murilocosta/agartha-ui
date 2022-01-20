import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SurvivorLoginPage from './SurvivorLoginPage';
import SurvivorRegistrationPage from './SurvivorRegistrationPage';

function AppNavigation(): React.ReactElement {
  return (
    <Routes>
      <Route path='/' element={<></>} />
      <Route path='/register' element={<SurvivorRegistrationPage />} />
      <Route path='/login' element={<SurvivorLoginPage />} />
    </Routes>
  );
}

export default AppNavigation;
