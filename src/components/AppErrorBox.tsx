import React from 'react';

import { selectError, setError } from '../features/errorHandler/errorHandlerSlice';
import { useAppDispatch, useAppSelector } from '../features/hooks';
import AppMessages from './AppErrorMessage';

function AppErrorBox(): React.ReactElement {
  const errorMessage = useAppSelector(selectError);
  const dispatch = useAppDispatch();

  if (errorMessage) {
    setTimeout(() => dispatch(setError(undefined)), 5000);
  }

  return (
    <AppMessages errorMessage={errorMessage} />
  );
}

export default AppErrorBox;
