import { useMemo } from 'react';

import { getAllBusinesses } from '@fetches/business';

import useSWR from 'swr';

import Select from './Select';

interface BusinessSelectProps extends Props {
  name: string;
}

export const BusinessSelect = ({ name, ...props }: BusinessSelectProps) => {
  const { data } = useSWR('businesses', getAllBusinesses);

  const businesses = useMemo(() => {
    return (
      data?.map((el: any) => {
        return {
          value: el.id,
          text: el.name,
        };
      }) ?? []
    );
  }, [data]);

  return <Select choices={businesses} name={name} {...props} />;
};
