import type { NextPage } from 'next';

import Page from '@components/Page';
import MainLayout from '@components/layout/MainLayout';

const Home: NextPage = () => {
  return (
    <Page needAuth>
      <MainLayout title="Overview">
        <>CONTENT</>
      </MainLayout>
    </Page>
  );
};

export default Home;
