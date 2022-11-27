import type { NextPage } from 'next';

import Page from '@components/Page';
import MainLayout from '@components/layout/MainLayout';

const Config: NextPage = () => {
  return (
    <Page needAuth>
      <MainLayout title="Configuración">
        <>CONFIG</>
      </MainLayout>
    </Page>
  );
};

export default Config;
