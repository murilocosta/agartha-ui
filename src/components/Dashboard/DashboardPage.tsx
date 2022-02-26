import React from 'react';

import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';

import AppSection from '../AppSection';
import DashboardInfectedPercentage from './DashboardInfectedPercentage';
import DashboardAverageResourcesPerSurvivor from './DashboardAverageResourcesPerSurvivor';
import DashboardTotalResourcesLost from './DashboardTotalResourcesLost';

function DashboardPage(): React.ReactElement {
  const dashboardFlexBoxWidth = useBreakpointValue({ base: '100%', lg: '90%' });

  return (
    <AppSection pageHeader={'Dashboard'}>
      <Flex direction={{ base: 'column', lg: 'row' }} alignItems={'center'} gridGap={5}>
        <Box w={{ base: '100%' }}>
          <DashboardInfectedPercentage />
        </Box>

        <Box w={dashboardFlexBoxWidth}>
          <DashboardAverageResourcesPerSurvivor />
        </Box>

        <Box w={dashboardFlexBoxWidth}>
          <DashboardTotalResourcesLost />
        </Box>
      </Flex>
    </AppSection>
  );
}

export default DashboardPage;
