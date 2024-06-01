import { PostgrestError } from '@supabase/supabase-js';

import { supabase } from '../supabaseClient';
import { UserPage } from '../types/models';
import { CurrentUserModel } from './UserModel';

export class UserPagesModel {
  private user: CurrentUserModel;

  constructor() {
    this.user = new CurrentUserModel();
  }

  async create(selectedPageIds: string[]) {
    const user_id = await this.user.id();
    const insertPayload = selectedPageIds.map(id => ({
      page_id: id,
      user_id,
    }));

    const { data, error } = await supabase
      .from('user_pages')
      .insert(insertPayload);

    this.handleError(error);

    return data;
  }

  async get(pageNumber: number | string = 1) {
    const pageNumberZeroBased = Number(pageNumber) - 1;

    const { data, error } = await supabase
      .from('user_pages')
      .select('id,page_id')
      .eq('user_id', await this.user.id())
      .order('id', { ascending: true })
      .range(pageNumberZeroBased, pageNumberZeroBased)
      .limit(1)
      .returns<UserPage>()
      .single();

    this.handleError(error);

    return data;
  }

  private handleError(error: PostgrestError | null) {
    // eslint-disable-next-line no-console
    if (error) throw Error(JSON.stringify(error));
  }
}
