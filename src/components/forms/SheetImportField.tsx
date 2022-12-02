import { ChangeEvent, useCallback } from 'react';

import { Button } from '@mui/material';
import { read } from 'xlsx';

interface SheetImportFieldProps extends Props {
  mapper: Function;
  setData: Function;
}

export const SheetImportField = ({
  mapper,
  setData,
  ...props
}: SheetImportFieldProps) => {
  const importFile = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target?.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function (e) {
        const f = e.target?.result;
        const wb = read(f);
        const data = mapper(wb);
        setData(data);
      };
      reader.readAsArrayBuffer(file);
    },
    [mapper, setData]
  );

  return (
    <>
      <input
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        id="button-import-file"
        multiple
        type="file"
        hidden
        onChange={importFile}
      />
      <label htmlFor="button-import-file">
        <Button component="span" {...props}>
          Import
        </Button>
      </label>
    </>
  );
};

export default SheetImportField;
