import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SurvivorRegistrationPage from './SurvivorRegistrationPage';

function AppNavigation(): React.ReactElement {
  return (
    <Routes>
      <Route path='/' element={<></>} />
      <Route path='/register' element={<SurvivorRegistrationPage />} />
    </Routes>
  );
}

export default AppNavigation;
