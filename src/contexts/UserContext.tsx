import { useEffect } from 'react';

import { getUser } from '@fetches/user';

import authStore from '@stores/AuthStore';
import userStore from '@stores/UserStore';

import useSWR from 'swr';

export const UserContextProvider = ({ children, lang: _lang }: Props) => {
  const isAuth = authStore((state: any) => state.isAuth);

  const updateUser = userStore((state: any) => state.update);
  const setLang = userStore((state: any) => state.setLang);

  const { data: user, mutate: refeatchUser } = useSWR(
    isAuth ? 'user' : null,
    getUser
  );

  useEffect(() => {
    if (!user) return;
    updateUser(user, refeatchUser);
  }, [user, refeatchUser, updateUser]);

  useEffect(() => {
    setLang(_lang ?? 'es');
  }, [setLang, _lang]);

  return <>{children}</>;
};
