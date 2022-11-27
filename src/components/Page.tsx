import { useEffect } from 'react';

import authStore from '@stores/AuthStore';

interface PageProps extends Props {
  needAuth?: boolean | undefined;
}

export default function Page({ needAuth, children }: PageProps) {
  const isAuth = authStore((state) => state.isAuth);
  const logout = authStore((state) => state.logout);

  useEffect(() => {
    if (needAuth && !isAuth) {
      logout();
    }
  }, [needAuth, isAuth, logout]);

  return <>{children}</>;
}
