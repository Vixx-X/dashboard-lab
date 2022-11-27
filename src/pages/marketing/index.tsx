import type { NextPage } from 'next';

import Page from '@components/Page';
import MainLayout from '@components/layout/MainLayout';

const Marketing: NextPage = () => {
  return (
    <Page needAuth>
      <MainLayout title="Marketing">
        <>Marketing</>
      </MainLayout>
    </Page>
  );
};

export default Marketing;
