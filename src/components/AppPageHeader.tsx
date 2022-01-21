import React from 'react';

import { Divider, Text } from '@chakra-ui/react';

interface PageHeaderProps {
  title: string;
}

function AppPageHeader({ title }: PageHeaderProps): React.ReactElement<PageHeaderProps> {
  return (
    <>
      <Text fontSize='xl'>{title}</Text>
      <Divider orientation='horizontal' />
      <br />
    </>
  );
}

export default AppPageHeader;