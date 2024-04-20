import { PostgrestError } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

import { useCurrentLocale } from '@/wip/useCurrentLocale';

import { localizeResponse, WithLocaleColumn } from '../locale';
import { supabase } from '../supabaseClient';

type Page = {
  app_id: string;
  name: string;
};

export default function usePagesByCategory(category: string) {
  const [pages, setPages] = useState<Page[]>([]);
  const [error, setError] = useState<PostgrestError | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const locale = useCurrentLocale();
  const localeColumn = `locale_${locale}`;

  useEffect(() => {
    if (!category) {
      setIsLoading(false);
      return;
    }

    supabase
      .from('pages')
      .select(`app_id,${localeColumn}`)
      .eq('category', category)
      .returns<WithLocaleColumn<Page>[]>()
      .then(({ data, error }) => {
        if (data) setPages(localizeResponse(data, localeColumn));
        setError(error);
        setIsLoading(false);
      });
  }, [category, localeColumn]);

  return { pages, error, isLoading };
}
