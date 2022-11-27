export const flattenJSON = (obj: any = {}, res: any = {}) => {
  for (const key in obj) {
    if (typeof obj[key] !== 'object') {
      res[key] = obj[key];
    } else if (key == 'socials') {
      let a = obj[key]
        .map(function ({ name, value }: any) {
          return `${name}: ${value}`;
        })
        .join('\n');
      res[key] = a;
    } else {
      flattenJSON(obj[key], res);
    }
  }
  return res;
};

export const flattenJSONProvider = (
  obj: any = {},
  res: any = {},
  extraKey = ''
) => {
  for (const key in obj) {
    if (typeof obj[key] !== 'object') {
      res[extraKey + key] = obj[key];
    } else if (key == 'representant' || key == 'client') {
      flattenJSONProvider(obj[key], res, `${extraKey}${key}.`);
    } else if (key == 'socials') {
      let a = obj[key]
        .map(function ({ name, value }: any) {
          return `${name}: ${value}`;
        })
        .join('\n');
      res[extraKey + key] = a;
    } else {
      flattenJSONProvider(obj[key], res, extraKey);
    }
  }
  return res;
};
