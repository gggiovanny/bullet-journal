'use client';

import { useAuthenticatedClient } from '@/supabase';

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useAuthenticatedClient();

  if (!user) return 'Loading...';

  return <>{children}</>;
}
