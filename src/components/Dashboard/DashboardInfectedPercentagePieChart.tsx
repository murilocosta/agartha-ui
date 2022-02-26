import React from 'react';
import { Pie, PieChart } from 'recharts';

import { InfectedRatioReport } from '../../models/report';
import DashboardInfectedPercentagePieChartSector from './DashboardInfectedPercentagePieChartSector';

interface InfectedPercentagePieChartProps {
  data: InfectedRatioReport[];
}

function DashboardInfectedPercentagePieChart({ data }: InfectedPercentagePieChartProps): React.ReactElement<InfectedPercentagePieChartProps> {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onPieEnter = (_: any, index: number): void => setActiveIndex(index);

  return (
    <>
      <PieChart width={450} height={400}>
        <Pie
          activeIndex={activeIndex}
          activeShape={DashboardInfectedPercentagePieChartSector}
          data={data}
          dataKey="value"
          innerRadius={80}
          outerRadius={100}
          cx="60%"
          cy="50%"
          fill={'#e8880b'}
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    </>
  );
}

export default DashboardInfectedPercentagePieChart;
