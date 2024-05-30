'use client';

import { useAuthenticatedUser } from '@/supabase';

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useAuthenticatedUser();

  if (!user) return 'Loading...';

  return <>{children}</>;
}
