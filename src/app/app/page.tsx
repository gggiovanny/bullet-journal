'use client';

import { useEffect, useState } from 'react';

import { supabase } from '@/supabase/supabaseClient';

export default function Open() {
  const [widgets, setWidgets] = useState<any>();

  useEffect(() => {
    supabase
      .from('widget')
      .select('*')
      .then(({ data, error }) => {
        setWidgets(data);
      });
  }, []);

  return (
    <div>
      <p> Hola! </p>{' '}
      <p> Si ves esta página, has iniciado sesión correctamente! 😄 </p>
      <pre>{widgets && JSON.stringify(widgets, null, 2)}</pre>
    </div>
  );
}
