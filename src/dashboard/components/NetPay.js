import React from 'react';
import { Line } from 'react-chartjs-2';
import TimelineIcon from 'react-icons/lib/md/timeline';
import OverviewControl from './OverviewControl';

const NetPay = () => {
  const chartData = {
    labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [{
      data: [1012, 895, 1213, 945, 1123, 0, 1345, 765, 1078, 1172, 564, 1119],
    }],
  };

  return (
    <OverviewControl Icon={TimelineIcon} title="Net Pay">
      <Line data={chartData} />
    </OverviewControl>
  );
};

export default NetPay;
