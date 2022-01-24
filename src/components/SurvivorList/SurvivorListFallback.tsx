import React from 'react';

import { Skeleton, Stack } from '@chakra-ui/react';

function SurvivorListFallback(): React.ReactElement {
  return (
    <Stack spacing={3}>
      <Skeleton height='90px' />
      <Skeleton height='90px' />
      <Skeleton height='90px' />
      <Skeleton height='90px' />
      <Skeleton height='90px' />
    </Stack>
  );
}

export default SurvivorListFallback;
