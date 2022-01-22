import React from 'react';

import { Skeleton, Stack } from '@chakra-ui/react';

function FlagInfectedSurvivorListFallback(): React.ReactElement {
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

export default FlagInfectedSurvivorListFallback;
