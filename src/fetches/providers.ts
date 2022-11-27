import { API_URLS } from '@config';

import assertApiError from '@utils/assertApiError';
import fetcher from '@utils/fetcher';
import makeFetchOptions from '@utils/makeFetchOptions';
import { makeUrl } from '@utils/makeUrl';

export const postProvider = async (data: any) => {
  const resp = await fetcher.post(
    API_URLS.URL_PROVIDERS,
    data,
    makeFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};

export const putProvider = async (data: any, id: any) => {
  const resp = await fetcher.put(
    makeUrl(API_URLS.URL_PROVIDER, { id }),
    data,
    makeFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};

export const getProviders = async (url: string) => {
  const resp = await fetcher.get(url, makeFetchOptions());
  await assertApiError(resp);
  return resp.data;
};

export const getProvider = async (id: any) => {
  const resp = await fetcher.get(
    makeUrl(API_URLS.URL_PROVIDER, { id }),
    makeFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};

export const deleteProvider = async (id: any) => {
  const resp = await fetcher.delete(
    makeUrl(API_URLS.URL_PROVIDER, { id }),
    makeFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};
