type LocaleType = Record<string, string>;

type LocaleEsColumn = { locale_es: LocaleType };
type LocaleEnColumn = { locale_en: LocaleType };
type AnyLocaleColumn = LocaleEsColumn | LocaleEnColumn;

export type WithLocaleColumn<T> = T & AnyLocaleColumn;
