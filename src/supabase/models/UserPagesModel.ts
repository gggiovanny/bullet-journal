import { supabase } from '../supabaseClient';
import { UserModel } from './UserModel';

export class UserPagesModel {
  private userModel: UserModel;

  constructor() {
    this.userModel = new UserModel();
  }

  async createUserPages(selectedPageIds: string[]) {
    const user_id = this.userModel.user?.id;

    if (!user_id) throw new Error('User not found');

    const insertPayload = selectedPageIds.map(id => ({ page_id: id, user_id }));

    const { data, error } = await supabase
      .from('user_pages')
      .insert(insertPayload)
      .select();

    if (error) throw Error(JSON.stringify(error));

    return data;
  }
}
