import React from 'react';

import { Box, CloseButton } from '@chakra-ui/react';
import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/alert';

export interface ErrorDetailProps {
  title: string;
  description: string;
}

function AppErrorDetail({ title, description }: ErrorDetailProps): React.ReactElement<ErrorDetailProps> {
  return (
    <Alert status='error' padding={5}>
      <AlertIcon />
      <Box flex={1} mr={2}>
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </Box>
      <CloseButton position='absolute' right='8px' top='8px' />
    </Alert>
  );
}

export default AppErrorDetail;
