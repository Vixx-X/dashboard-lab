import type { NextPage } from 'next';

import Page from '@components/Page';
import MainLayout from '@components/layout/MainLayout';

const HumanResources: NextPage = () => {
  return (
    <Page needAuth>
      <MainLayout title="Human Resources">
        <>Human Resources</>
      </MainLayout>
    </Page>
  );
};

export default HumanResources;
