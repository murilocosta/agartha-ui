import React from 'react';

import { selectError, setError } from '../../features/errorHandler/errorHandlerSlice';
import { useAppDispatch, useAppSelector } from '../../features/hooks';

import AppErrorMessage from './AppErrorMessage';

function AppErrorBox(): React.ReactElement {
  const errorMessage = useAppSelector(selectError);
  const dispatch = useAppDispatch();

  if (errorMessage) {
    setTimeout(() => dispatch(setError(undefined)), 6000);
  }

  return (
    <AppErrorMessage errorMessage={errorMessage} />
  );
}

export default AppErrorBox;
