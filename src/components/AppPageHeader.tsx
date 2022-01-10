import React from 'react';

import { Divider, Text } from '@chakra-ui/react';

function AppPageHeader({ title }: any): React.ReactElement {
  return (
    <>
      <Text fontSize='xl'>{title}</Text>
      <Divider orientation='horizontal' />
      <br />
    </>
  );
}

export default AppPageHeader;