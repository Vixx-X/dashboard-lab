import { useCallback } from 'react';

import Form from '@components/forms/Form';
import Select from '@components/forms/Select';

import userStore from '@stores/UserStore';

import { FormikValues } from 'formik';

export default function LanguageSelect() {
  const language = userStore((state: any) => state.lang);
  const setLanguage = userStore((state: any) => state.setLang);

  const handleChange = useCallback(
    (values: FormikValues) => {
      setLanguage(values.lang);
    },
    [setLanguage]
  );

  const initVal = {
    lang: language,
  };

  const langs = [
    {
      value: 'es',
      text: 'Español',
    },
    {
      value: 'en',
      text: 'English',
    },
  ];

  return (
    <Form initialValues={initVal} onSubmit={handleChange} autoSubmit>
      <Select choices={langs} name="lang" noPlaceholder />
    </Form>
  );
}
