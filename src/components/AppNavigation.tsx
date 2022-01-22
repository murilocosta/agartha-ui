import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppNavigationGuard from './AppNavigationGuard';

import FlagInfectedSurvivorPage from './FlagInfectedSurvivor/FlagInfectedSurvivorPage';
import SurvivorLoginPage from './SurvivorLogin/SurvivorLoginPage';
import SurvivorPositionUpdatePage from './SurvivorPositionUpdate/SurvivorPositionUpdatePage';
import SurvivorRegistrationPage from './SurvivorRegistration/SurvivorRegistrationPage';

function AppNavigation(): React.ReactElement {
  return (
    <Routes>
      <Route path='/' element={<></>} />
      <Route path='/register' element={<SurvivorRegistrationPage />} />
      <Route path='/login' element={<SurvivorLoginPage />} />
      <Route path='/survivors' element={<AppNavigationGuard />}>
        <Route path='change-location' element={<SurvivorPositionUpdatePage />} />
        <Route path='report-infected' element={<FlagInfectedSurvivorPage />} />
      </Route>
    </Routes>
  );
}

export default AppNavigation;
