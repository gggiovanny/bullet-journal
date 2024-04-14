'use client';

import { useEffect } from 'react';

import { signIn, useSession } from '@/database';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [session, loading] = useSession();

  useEffect(() => {
    if (!loading && !session) signIn();
  }, [session, loading]);

  if (loading) return 'Loading...';

  if (session) return <>{children}</>;
}
