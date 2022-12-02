import { useMemo } from 'react';

import SheetImportField from '@components/forms/SheetImportField';

import mapper from '@mappers/marketing/followers';

import followersStore from '@stores/kpis/marketing/FollowersStore';

import {
  CategoryScale,
  Chart as ChartJS,
  Colors,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  TimeScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  Colors
);

const MapData = (data: any[] | null, label: string, options: any = {}) => ({
  label: label,
  data: data?.map((item) => ({ x: item.Fecha, y: item[label] })),
  ...options,
});

export const FollowersChart = () => {
  const setData = followersStore((state) => state.update);
  const data = followersStore((state) => state.data);

  const datasets = useMemo(
    () => [
      MapData(data, 'Facebook'),
      MapData(data, 'Instagram'),
      MapData(data, 'Twitter'),
    ],
    [data]
  ) as any;

  return (
    <>
      <SheetImportField mapper={mapper} setData={setData} />
      <div>
        {data ? (
          <Chart
            type="line"
            data={{
              datasets,
            }}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Seguidores',
                },
              },
            }}
          />
        ) : null}
      </div>
    </>
  );
};

export default FollowersChart;
