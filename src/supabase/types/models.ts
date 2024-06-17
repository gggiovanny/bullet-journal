import type { User } from '@supabase/supabase-js';

export { User };

export interface UserPage {
  id: string;
  page_id: Page['id'];
  name: Page['name'];
}

export interface Page {
  id: string;
  app_id: string;
  name: string;
  category: string;
}
