import React from "react";

import { Skeleton, Stack } from "@chakra-ui/react";

function SurvivorInventoryListFallback(): React.ReactElement {
  return (
    <Stack>
      <Skeleton height='50px' />
      <Skeleton height='50px' />
      <Skeleton height='50px' />
      <Skeleton height='50px' />
    </Stack>
  );
}

export default SurvivorInventoryListFallback;