import { User } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

import { UserModel } from '../models/UserModel';

export function useAuthenticatedUser() {
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    const userModel = new UserModel();
    userModel.requestUser().then(user => {
      setUser(user);
    });
  }, []);

  return { user };
}
