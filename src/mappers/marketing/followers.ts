import { WorkBook, utils } from 'xlsx';

export default function mapper(wb: WorkBook) {
  const data = utils.sheet_to_json<FollowersKPIData>(
    wb.Sheets[wb.SheetNames[0]],
    {
      raw: false,
      dateNF: 'dd/mm/yyyy',
    }
  );
  return data;
}
