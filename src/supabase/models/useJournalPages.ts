import { PostgrestError } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

import { useCurrentLocale } from '@/wip/useCurrentLocale';

import { localizeResponse, WithLocaleColumn } from '../locale';
import { supabase } from '../supabaseClient';

type Page = {
  app_id: string;
  name: string;
  category: string;
};

export default function useJournalPages() {
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
      .select(`app_id,category,${localeColumn}`)
      .returns<WithLocaleColumn<Page>[]>()
      .then(({ data, error }) => {
        if (data) setPages(localizeResponse(data, localeColumn));
        setError(error);
        setIsLoading(false);
      });
  }, [localeColumn]);

  return { pages, error, isLoading };
}
