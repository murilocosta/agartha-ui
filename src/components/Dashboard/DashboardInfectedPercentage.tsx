import React from 'react';

import { Center, SkeletonCircle } from '@chakra-ui/react';

import { useFetchInfectedSurvivorsPercentageQuery } from '../../services';
import DashboardInfectedPercentagePieChart from './DashboardInfectedPercentagePieChart';

function DashboardInfectedPercentage(): React.ReactElement {
  const { data, isLoading } = useFetchInfectedSurvivorsPercentageQuery();

  if (isLoading) {
    return (
      <Center w={300} h={300}>
        <SkeletonCircle size='200' />
      </Center>
    );
  }

  return (
    <Center w={300} h={300}>
      <DashboardInfectedPercentagePieChart data={data || []} />
    </Center>
  );
}

export default DashboardInfectedPercentage;
