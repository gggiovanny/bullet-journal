import { PostgrestError } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

import { useCurrentLocale } from '@/wip/useCurrentLocale';

import { localizeResponseArray, WithLocaleColumn } from '../locale';
import { supabase } from '../supabaseClient';
import { Page } from '../types/models';

// TODO: move this to a model
export function useJournalPages() {
  const [pages, setPages] = useState<Page[]>([]);
  const [error, setError] = useState<PostgrestError | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const locale = useCurrentLocale();
  const localeColumn = `locale_${locale}`;

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    setPages([]);

    supabase
      .from('pages')
      .select(`id,app_id,category,${localeColumn}`)
      .returns<WithLocaleColumn<Page>[]>()
      .then(({ data, error }) => {
        if (data) setPages(localizeResponseArray(data, localeColumn));
        setError(error);
        setIsLoading(false);
      });
  }, [localeColumn]);

  return { pages, error, isLoading };
}
