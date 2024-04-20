import { PostgrestError } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

import { supabase } from '../supabaseClient';

type Page = {
  app_id: string;
};

export default function usePagesByCategory(category: string) {
  const [pages, setPages] = useState<Page[]>([]);
  const [error, setError] = useState<PostgrestError | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!category) {
      setIsLoading(false);
      return;
    }

    supabase
      .from('pages')
      .select('app_id')
      .eq('category', category)
      .then(({ data, error }) => {
        setPages(data || []);
        setError(error);
        setIsLoading(false);
      });
  }, [category]);

  return { pages, error, isLoading };
}
