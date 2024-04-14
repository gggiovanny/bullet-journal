import { User } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

import { supabase, SupabaseClient } from '../supabaseClient';
import { signIn } from '../utils';

type ReturnValues = {
  supabase: SupabaseClient;
  user: User | undefined;
};

export function useAuthenticatedClient(): ReturnValues {
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setUser(user);
      } else {
        signIn();
      }
    });
  }, []);

  return { supabase, user };
}
