export function localizeResponse<T>(data: T[], localeColumn: string) {
  return data.map(row => {
    // @ts-ignore
    const { [localeColumn]: locale, ...rest } = row;

    return {
      ...rest,
      ...locale,
    };
  });
}
