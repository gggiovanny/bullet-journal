import { PostgrestError } from '@supabase/supabase-js';

import { currentLocale } from '@/wip/useCurrentLocale';

import { localizeResponse, WithLocaleColumn } from '../locale';
import { supabase } from '../supabaseClient';
import { UserPage } from '../types/models';
import { CurrentUserModel } from './UserModel';

type UserPageFromSupabase = {
  id: string;
  page_id: string;
  pages: WithLocaleColumn<{}>;
};

export class UserPagesModel {
  private user: CurrentUserModel;

  constructor(currentUser = new CurrentUserModel()) {
    this.user = currentUser;
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

  async get(pageNumber: number | string = 1): Promise<UserPage | null> {
    const pageNumberZeroBased = Number(pageNumber) - 1;

    const { data, error } = await supabase
      .from('user_pages')
      .select(`id, page_id, pages(${this.getLocaleColumn()})`)
      .eq('user_id', await this.user.id())
      .order('id', { ascending: true })
      .range(pageNumberZeroBased, pageNumberZeroBased)
      .limit(1)
      .returns<UserPageFromSupabase>()
      .maybeSingle();

    this.handleError(error);

    return data ? this.processPageLocalization(data) : null;
  }

  async all(): Promise<UserPage[]> {
    const { data, error } = await supabase
      .from('user_pages')
      .select(`id, page_id, pages(${this.getLocaleColumn()})`)
      .order('id', { ascending: true })
      .eq('user_id', await this.user.id())
      .returns<UserPageFromSupabase[]>();

    this.handleError(error);

    if (!data) return [];

    return data.map(this.processPageLocalization);
  }

  private processPageLocalization = ({
    pages,
    ...rest
  }: UserPageFromSupabase): UserPage => {
    const localizedPages = localizeResponse(pages, this.getLocaleColumn());

    return {
      ...rest,
      ...localizedPages,
    };
  };

  private getLocaleColumn = () => {
    return `locale_${currentLocale}`;
  };

  async getSelected(): Promise<string[]> {
    const { data, error } = await supabase
      .from('user_pages')
      .select('page_id')
      .eq('user_id', await this.user.id())
      .returns<Array<{ page_id: string }>>();

    this.handleError(error);

    if (!data) return [];

    return data.map(page => page.page_id);
  }

  private handleError(error: PostgrestError | null) {
    // eslint-disable-next-line no-console
    if (error) throw Error(JSON.stringify(error));
  }
}
