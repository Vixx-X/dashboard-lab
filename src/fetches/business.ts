import { API_URLS } from '@config';

import assertApiError from '@utils/assertApiError';
import fetcher from '@utils/fetcher';
import makeFetchOptions from '@utils/makeFetchOptions';
import { makeUrl } from '@utils/makeUrl';

export const postBusiness = async (data: any) => {
  const resp = await fetcher.post(
    API_URLS.URL_BUSINESSES,
    data,
    makeFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};

export const putBusiness = async (data: any, id: any) => {
  const resp = await fetcher.put(
    makeUrl(API_URLS.URL_BUSINESS, { id }),
    data,
    makeFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};

export const getBusinesses = async (url: string) => {
  const resp = await fetcher.get(url, makeFetchOptions());
  await assertApiError(resp);
  return resp.data;
};

export const getAllBusinesses = async () => {
  const resp = await fetcher.get(API_URLS.URL_BUSINESSES, makeFetchOptions());
  await assertApiError(resp);
  return resp.data.results;
};

export const getBusiness = async (id: any) => {
  const resp = await fetcher.get(
    makeUrl(API_URLS.URL_BUSINESS, { id }),
    makeFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};

export const deleteBusiness = async (id: any) => {
  const resp = await fetcher.delete(
    makeUrl(API_URLS.URL_BUSINESS, { id }),
    makeFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};
