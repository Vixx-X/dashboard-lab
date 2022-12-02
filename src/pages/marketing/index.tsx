import type { NextPage } from 'next';

import Page from '@components/Page';
import FollowersChart from '@components/kpis/marketing/FollowersChart';
import MainLayout from '@components/layout/MainLayout';

const Marketing: NextPage = () => {
  return (
    <Page needAuth>
      <MainLayout title="Marketing">
        <FollowersChart />
      </MainLayout>
    </Page>
  );
};

export default Marketing;
