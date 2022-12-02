import { useMemo } from 'react';

import SheetImportField from '@components/forms/SheetImportField';

import mapper from '@mappers/human-resources/training';

import trainingStore from '@stores/kpis/human-resources/TrainingStore';

import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(...registerables);

const DATASET_LABELS = [
  'Learning Time',
  'Transfer Rate',
  'Skill Retention',
  'Performance Impact',
  'Score',
];

const precomputeData = (data: any[] | null) => {
  if (!data) return [];

  const learningDataset = {} as any;
  const transferDataset = {} as any;
  const skillDataset = {} as any;
  const performanceDataset = {} as any;
  const scoreDataset = {} as any;

  for (const el of data) {
    {
      const property = 'Tiempo de Aprendizaje';
      const item = el[property] as string;
      learningDataset[item] = learningDataset[item]
        ? learningDataset[item] + 1
        : 1;
    }
    {
      const property = 'Transferencia de la formacion';
      const item = el[property] as string;
      transferDataset[item] = transferDataset[item]
        ? transferDataset[item] + 1
        : 1;
    }
    {
      const property = 'Retencion de conocimiento y habilidades';
      const item = el[property] as string;
      skillDataset[item] = skillDataset[item] ? skillDataset[item] + 1 : 1;
    }
    {
      const property = 'Impacto del rendimiento en la organizacion';
      const item = el[property] as string;
      performanceDataset[item] = performanceDataset[item]
        ? performanceDataset[item] + 1
        : 1;
    }
    {
      const property = 'Nota de evaluacion';
      const item = Math.floor(el[property] / 10) * 10;
      scoreDataset[item] = scoreDataset[item] ? scoreDataset[item] + 1 : 1;
    }
  }

  const MapData = (dataset: any, label: string) => ({
    labels: Object.keys(dataset),
    datasets: [{ label: label, data: Object.values(dataset) }],
  });

  const DATASETS = {
    'Learning Time': learningDataset,
    'Transfer Rate': transferDataset,
    'Skill Retention': skillDataset,
    'Performance Impact': performanceDataset,
    Score: scoreDataset,
  } as { [key: string]: any };

  const datasets = DATASET_LABELS.map((label) => [
    label,
    MapData(DATASETS[label], label),
  ]);

  return Object.fromEntries(datasets);
};

export const TrainingCharts = () => {
  const setData = trainingStore((state) => state.update);
  const data = trainingStore((state) => state.data);

  const datasets = useMemo(() => precomputeData(data), [data]) as any;

  return (
    <>
      <SheetImportField mapper={mapper} setData={setData} />
      <div>
        {data ? (
          <>
            {DATASET_LABELS.map((label, idx) => (
              <Chart
                key={idx}
                type="bar"
                data={datasets[label]}
                options={{
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                    title: {
                      display: true,
                      text: label,
                    },
                  },
                }}
              />
            ))}
          </>
        ) : null}
      </div>
    </>
  );
};

export default TrainingCharts;
