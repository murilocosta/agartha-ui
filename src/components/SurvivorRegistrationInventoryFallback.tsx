import React from 'react';

import { Skeleton, Stack } from '@chakra-ui/react';

function SurvivorRegistrationInventoryFallback(): React.ReactElement {
  return (
    <Stack>
      <Skeleton height='50px' />
      <Skeleton height='50px' />
      <Skeleton height='50px' />
      <Skeleton height='50px' />
    </Stack>
  );
}

export default SurvivorRegistrationInventoryFallback;
