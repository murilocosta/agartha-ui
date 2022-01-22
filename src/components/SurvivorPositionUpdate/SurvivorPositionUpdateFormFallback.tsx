import React from 'react';

import {
  Box,
  Flex,
  Skeleton,
  Text,
  useBreakpointValue
} from '@chakra-ui/react';

function SurvivorPositionUpdateFormFallback(): React.ReactElement {
  const survivorPositionBoxWidth = useBreakpointValue({
    base: '100%',
    md: '70%',
    lg: '60%'
  });

  return (
    <Flex direction={{ base: 'column' }} alignItems={'center'} gridGap={5}>
      <Box w={survivorPositionBoxWidth}>
        <Text fontSize='md' fontWeight={500}>Location</Text>
        <Skeleton marginTop={3} height='40px' />
      </Box>

      <Box w={survivorPositionBoxWidth}>
        <Skeleton height='350px' />
      </Box>

      <Box w={survivorPositionBoxWidth}>
        <Skeleton height='40px' />
      </Box>
    </Flex>
  );
}

export default SurvivorPositionUpdateFormFallback;
