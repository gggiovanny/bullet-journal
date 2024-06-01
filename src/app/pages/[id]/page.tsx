'use client';

import { useEffect, useState } from 'react';

import { UserPage as UserPageType, UserPagesModel } from '@/supabase';

type Props = { params: { id: string } };

export default function UserPage({ params: { id } }: Props) {
  const [page, setPage] = useState<UserPageType | null>(null);

  useEffect(() => {
    const userPages = new UserPagesModel();

    userPages.get(id).then(page => setPage(page));
  }, [id]);

  return <pre>{JSON.stringify(page, null, 2)}</pre>;
}
