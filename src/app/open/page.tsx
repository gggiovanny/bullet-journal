'use client';

import { Button } from '@/components/Button';
import { signOut } from '@/database';

export default function Open() {
  return (
    <div>
      <p>You need to be logged in to access this page</p>
      <Button onClick={signOut}>Log out</Button>
    </div>
  );
}
