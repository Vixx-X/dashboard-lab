import { useMemo } from 'react';

import Image from 'next/image';

import { getCountry } from '@fetches/country';

import useTranslate from '@hooks/useTranslate';

import useSWR from 'swr';

import Select from './Select';

interface FlagSelectorInterface {
  name: string;
}

export const FlagSelector = ({ name, ...props }: FlagSelectorInterface) => {
  const { data } = useSWR('country', getCountry);
  const t = useTranslate();

  const choices = useMemo<{ text: any; value: string }[]>(() => {
    return (
      data?.results.map((country: any) => {
        return {
          value: country.iso_3166_1_a2,
          text: (
            <div className="flex">
              <div className="mr-2 w-8 h-full">
                <Image
                  width="25"
                  height="13"
                  objectFit="contain"
                  src={country.img}
                  alt={country.iso_3166_1_a2}
                />
              </div>
              {country.printable_name}
            </div>
          ),
        };
      }) ?? []
    );
  }, [data]);

  return (
    <Select
      placeholder={t('Select a country')}
      choices={choices}
      name={name}
      {...props}
    />
  );
};

export default FlagSelector;
