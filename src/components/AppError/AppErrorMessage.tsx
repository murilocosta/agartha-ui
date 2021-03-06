import { Stack } from '@chakra-ui/react';
import React from 'react';

import { ErrorMessage, ErrorDetail } from '../../models/error';

import AppErrorDetail from './AppErrorDetail';

export interface AppErrorMessageProps {
  errorMessage?: ErrorMessage;
}

function AppErrorMessage({ errorMessage }: AppErrorMessageProps): React.ReactElement<AppErrorMessageProps> {
  if (errorMessage !== undefined) {
    return errorMessage.errors && errorMessage.errors.length > 1
      ? (
        <Stack spacing={3}>
          {errorMessage.errors.map(({ name, reason, hidden }: ErrorDetail, index: number) => (
            hidden === true ? (<></>) : (
              <AppErrorDetail key={index} title={name} description={reason} />
            )
          ))}
        </Stack>
      ) : (
        errorMessage.hidden === true ? (<></>) : (
          <AppErrorDetail title={errorMessage.errorType} description={errorMessage.detail} />
        )
      );
  }

  return <></>;
}

export default AppErrorMessage;
