import React from 'react';

import { useFetchAverageResourcesPerSurvivorQuery } from '../../services';
import DashboardResourceTable from './DashboardResourceTable';
import DashboardResourceTableRow from './DashboardResourceTableRow';

function DashboardAverageResourcesPerSurvivor(): React.ReactElement {
  const { data, isLoading } = useFetchAverageResourcesPerSurvivorQuery();

  if (isLoading) {
    return <></>;
  }

  return (
    <DashboardResourceTable header={'Average resources per survivor'} reportColumnName={'Average'}>
      {data !== undefined ? data.report.map((resource, index) => (
        <DashboardResourceTableRow
          key={index}
          item={resource.item}
          formatReportRowValue={() => resource.item_average.toFixed(3)}
        />
      )) : (
        <></>
      )}
    </DashboardResourceTable>
  );
}

export default DashboardAverageResourcesPerSurvivor;
