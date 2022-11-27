import { API_URLS } from '@config';

import assertApiError from '@utils/assertApiError';
import fetcher from '@utils/fetcher';
import makeFetchOptions from '@utils/makeFetchOptions';
import { makeUrl } from '@utils/makeUrl';

export const postEmployee = async (data: any) => {
  const resp = await fetcher.post(
    API_URLS.URL_EMPLOYEES,
    data,
    makeFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};

export const putEmployee = async (data: any, id: any) => {
  const resp = await fetcher.put(
    makeUrl(API_URLS.URL_EMPLOYEE, { id }),
    data,
    makeFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};

export const getEmployees = async (url: string) => {
  const resp = await fetcher.get(url, makeFetchOptions());
  await assertApiError(resp);
  return resp.data;
};

export const getEmployee = async (id: any) => {
  const resp = await fetcher.get(
    makeUrl(API_URLS.URL_EMPLOYEE, { id }),
    makeFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};

export const deleteEmployee = async (id: any) => {
  const resp = await fetcher.delete(
    makeUrl(API_URLS.URL_EMPLOYEE, { id }),
    makeFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};
