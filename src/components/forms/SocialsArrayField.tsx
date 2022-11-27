import useTranslate from '@hooks/useTranslate';

import recursiveGetter from '@utils/recursiveGetter';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider/Divider';
import { FieldArray, useFormikContext } from 'formik';

import Field from './Field';

const FieldArr: any = FieldArray;

export const SocialsArrayField = ({ name }: Props) => {
  const { values } = useFormikContext();
  const vals: any = values;

  const t = useTranslate();
  return (
    <FieldArr
      name={name}
      render={(arrayHelpers: any) => (
        <>
          <label className="capitalize mb-4">{t('social media')}</label>
          <Box className="mt-4">
            {recursiveGetter(vals, name)?.map((_: any, index: number) => (
              <Box key={index} display="flex" className="my-4 gap-x-4">
                <Field
                  label={t('name of social media')}
                  placeholder={t('Ex: instagram, facebook')}
                  name={`${name}[${index}].name`}
                />
                <Field
                  label={t('value of social media')}
                  placeholder={t('Ex: @abc123')}
                  name={`${name}[${index}].value`}
                />
                <Button
                  onClick={() => {
                    arrayHelpers.remove(index);
                  }}
                  variant="outlined"
                  className="px-4"
                  sx={{ height: 'fit-content', width: '10rem' }}
                >
                  {t('Remove')}
                </Button>
              </Box>
            ))}

            <Button
              onClick={() => arrayHelpers.push({ name: '', value: '' })}
              variant="outlined"
              sx={{ height: 'fit-content' }}
            >
              {t('Add')}
            </Button>
          </Box>
        </>
      )}
    />
  );
};

export default SocialsArrayField;
