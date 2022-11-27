import { API_URLS } from '@config';

import assertApiError from '@utils/assertApiError';
import fetcher from '@utils/fetcher';
import makeFetchOptions, {
  makeAuthFetchOptions,
} from '@utils/makeFetchOptions';
import { makeUrl } from '@utils/makeUrl';

export const getCountry = async () => {
  const resp = await fetcher.get(API_URLS.URL_COUNTRY, makeFetchOptions());
  await assertApiError(resp);
  return resp.data;
};
