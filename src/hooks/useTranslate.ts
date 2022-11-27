import { useCallback } from 'react';

import es from '@public/translations/es.json';

import userStore from '@stores/UserStore';

interface TransDict {
  [name: string]: any;
}

const translationDict: TransDict = {
  es: es,
};

export default function useTranslate() {
  const lang = userStore((state: any) => state.lang);

  const t = useCallback(
    (text: string) => translationDict?.[lang]?.[text] ?? text,
    [lang]
  );

  return t;
}
