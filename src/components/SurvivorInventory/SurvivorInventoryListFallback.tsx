import React from "react";

import { Center, Skeleton, Stack } from "@chakra-ui/react";

function SurvivorInventoryListFallback(): React.ReactElement {
  return (
    <Center>
    <Stack gap={4} width={'60%'}>
      <Skeleton height='90px' />
      <Skeleton height='90px' />
      <Skeleton height='90px' />
      <Skeleton height='90px' />
    </Stack>
    </Center>
  );
}

export default SurvivorInventoryListFallback;