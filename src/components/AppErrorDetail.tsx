import React from 'react';

import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/alert';

export interface ErrorDetailProps {
  title: string;
  description: string;
}

function AppErrorDetail({ title, description }: ErrorDetailProps): React.ReactElement<ErrorDetailProps> {
  return (
    <Alert status='error' padding={5}>
      <AlertIcon />
      <AlertTitle mr={2}>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}

export default AppErrorDetail;
