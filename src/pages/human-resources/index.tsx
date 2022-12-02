import type { NextPage } from 'next';

import Page from '@components/Page';
import TrainingCharts from '@components/kpis/human-resources/TrainingCharts';
import MainLayout from '@components/layout/MainLayout';

const HumanResources: NextPage = () => {
  return (
    <Page needAuth>
      <MainLayout title="Human Resources">
        <TrainingCharts />
      </MainLayout>
    </Page>
  );
};

export default HumanResources;
