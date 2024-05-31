import { supabase } from '../supabaseClient';
import { User } from '../types/models';

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
   */
  async requestUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      userSingleton = user;
      return userSingleton;
    }

    await this.signIn();

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
