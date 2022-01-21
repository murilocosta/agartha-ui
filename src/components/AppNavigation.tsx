import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SurvivorLoginPage from './SurvivorLogin/SurvivorLoginPage';
import SurvivorPositionUpdatePage from './SurvivorPositionUpdate/SurvivorPositionUpdatePage';
import SurvivorRegistrationPage from './SurvivorRegistration/SurvivorRegistrationPage';

function AppNavigation(): React.ReactElement {
  return (
    <Routes>
      <Route path='/' element={<></>} />
      <Route path='/register' element={<SurvivorRegistrationPage />} />
      <Route path='/login' element={<SurvivorLoginPage />} />
      <Route path='/survivors/change-location' element={<SurvivorPositionUpdatePage />} />
    </Routes>
  );
}

export default AppNavigation;
