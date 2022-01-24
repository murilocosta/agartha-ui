import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { Progress } from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '../features/hooks';
import { setProfile } from '../features/survivor/survivorSlice';
import { useFetchSurvivorProfileQuery } from '../services';
import { isAuthenticated } from '../features/auth/authSlice';

function AppNavigationGuard(): React.ReactElement {
  const { data, isSuccess, isLoading, isError } = useFetchSurvivorProfileQuery();
  const isLoggedIn = useAppSelector(isAuthenticated);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (isLoggedIn && isSuccess) {
      dispatch(setProfile(data));
    }

    if (!isLoggedIn || isError) {
      navigate('/login', { replace: false, state: { from: location } });
    }
  }, [
    isLoggedIn,
    isSuccess,
    isError,
    dispatch,
    navigate,
    data,
    location
  ]);

  if (isLoading) {
    return <Progress size='sm' isIndeterminate />;
  }

  return (
    <React.Suspense fallback={<Progress size='sm' isIndeterminate />}>
      <Outlet />
    </React.Suspense>
  );
}

export default AppNavigationGuard;
