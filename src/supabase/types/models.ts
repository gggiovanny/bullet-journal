import type { User } from '@supabase/supabase-js';

export { User };

export interface UserPage {
  id: string;
  user_id: User['id'];
  page_id: Page['id'];
}

export interface Page {
  id: string;
  app_id: string;
  name: string;
  category: string;
}
