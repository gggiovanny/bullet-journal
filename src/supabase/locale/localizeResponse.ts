export function localizeResponseArray<T>(data: T[], localeColumn: string) {
  return data.map(row => localizeResponse(row, localeColumn));
}

export function localizeResponse<T>(data: T, localeColumn: string) {
  // @ts-ignore
  const { [localeColumn]: locale, ...rest } = data;

  return {
    ...rest,
    ...locale,
  };
}
