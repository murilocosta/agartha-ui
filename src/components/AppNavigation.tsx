import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AppLogout from './AppLogout';
import AppNavigationGuard from './AppNavigationGuard';
import DashboardPage from './Dashboard/DashboardPage';
import FlagInfectedSurvivorPage from './FlagInfectedSurvivor/FlagInfectedSurvivorPage';
import SurvivorInventoryPage from './SurvivorInventory/SurvivorInventoryPage';
import SurvivorLoginPage from './SurvivorLogin/SurvivorLoginPage';
import SurvivorPositionUpdatePage from './SurvivorPositionUpdate/SurvivorPositionUpdatePage';
import SurvivorRegistrationPage from './SurvivorRegistration/SurvivorRegistrationPage';
import TradeManagementPage from './TradeManagement/TradeManagementPage';
import TradeRegistrationSelectItemsPage from './TradeRegistration/TradeRegistrationSelectItemsPage';
import TradeRegistrationSelectSurvivorPage from './TradeRegistration/TradeRegistrationSelectSurvivorPage';

function AppNavigation(): React.ReactElement {
  return (
    <Routes>
      <Route path='/' element={<DashboardPage />} />
      <Route path='/register' element={<SurvivorRegistrationPage />} />
      <Route path='/login' element={<SurvivorLoginPage />} />
      <Route path='/survivors' element={<AppNavigationGuard />}>
        <Route path='change-location' element={<SurvivorPositionUpdatePage />} />
        <Route path='report-infected' element={<FlagInfectedSurvivorPage />} />
      </Route>
      <Route path='/trades' element={<AppNavigationGuard />}>
        <Route path='' element={<TradeManagementPage />} />
        <Route path='select-survivor' element={<TradeRegistrationSelectSurvivorPage />} />
        <Route path='select-items' element={<TradeRegistrationSelectItemsPage />} />
      </Route>
      <Route path='/inventory' element={<AppNavigationGuard />}>
        <Route path='' element={<SurvivorInventoryPage />} />
      </Route>
      <Route path='/logout' element={<AppLogout />} />
    </Routes>
  );
}

export default AppNavigation;
