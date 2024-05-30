import { User } from '@supabase/supabase-js';

import { supabase } from '../supabaseClient';

let userSingleton: User | undefined = undefined;

export class UserModel {
  /**
   * Gets the memoized current user.
   * Use it on flows where iss known the user already exists
   */
  get user() {
    return userSingleton;
  }

  /**
   * Request the current user from supabase.
   * Use it on flows where is unknown if the user exists.
   */
  async requestUser() {
    if (userSingleton) return userSingleton;

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      userSingleton = user;
      return userSingleton;
    }

    this.signIn();

    return undefined;
  }

  private signIn() {
    return supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    });
  }
}
