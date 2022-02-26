import React from 'react';

import { useFetchTotalResourcesLostQuery } from '../../services';
import DashboardResourceTable from './DashboardResourceTable';
import DashboardResourceTableRow from './DashboardResourceTableRow';

function DashboardTotalResourcesLost(): React.ReactElement {
  const { data, isLoading } = useFetchTotalResourcesLostQuery();

  if (isLoading) {
    return <></>;
  }

  return (
    <DashboardResourceTable header={'Resources lost from infections'} reportColumnName={'Lost'}>
      {data !== undefined ? data.report.map((resource, index) => (
        <DashboardResourceTableRow
          key={index}
          item={resource.item}
          formatReportRowValue={() => resource.item_quantity_lost}
        />
      )) : (
        <></>
      )}
    </DashboardResourceTable>
  );
}

export default DashboardTotalResourcesLost;
