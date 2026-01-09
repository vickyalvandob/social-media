import AppLayout from '@/layouts/app-layout';
import { Link } from '@inertiajs/react';
import React from 'react';

export default function About() {
  return (
    <AppLayout>
      <div>
        <p>About</p>
        <Link href="/">Go to Home</Link>
      </div>
    </AppLayout>
  );
}
