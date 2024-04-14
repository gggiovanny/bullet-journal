import { supabase } from '../supabaseClient';

export const signOut = async () => {
  await supabase.auth.signOut();
  window.location.href = '/';
};
