import { API_URLS } from '@config';

import assertApiError from '@utils/assertApiError';
import fetcher from '@utils/fetcher';
import makeFetchOptions from '@utils/makeFetchOptions';
import { makeUrl } from '@utils/makeUrl';

export const postClient = async (data: any) => {
  const resp = await fetcher.post(
    API_URLS.URL_CLIENTS,
    data,
    makeFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};

export const putClient = async (data: any, id: any) => {
  const resp = await fetcher.put(
    makeUrl(API_URLS.URL_CLIENT, { id }),
    data,
    makeFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};

export const getClients = async (url: string) => {
  const resp = await fetcher.get(url, makeFetchOptions());
  await assertApiError(resp);
  return resp.data;
};

export const getClient = async (id: any) => {
  const resp = await fetcher.get(
    makeUrl(API_URLS.URL_CLIENT, { id }),
    makeFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};

export const deleteClient = async (id: any) => {
  const resp = await fetcher.delete(
    makeUrl(API_URLS.URL_CLIENT, { id }),
    makeFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};
