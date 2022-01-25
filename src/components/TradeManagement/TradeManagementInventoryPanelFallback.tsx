import React from 'react';

import { Skeleton, Stack } from '@chakra-ui/react';

function TradeManagementInventoryPanelFallback(): React.ReactElement {
  return (
    <Stack>
      <Skeleton height='400px' />
    </Stack>
  );
}

export default TradeManagementInventoryPanelFallback;
