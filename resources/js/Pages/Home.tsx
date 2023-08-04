import React from 'react';
import AppLayout from '@/Layouts/app-layout';
import Container from '@/Components/ui/container';
import { Head } from '@inertiajs/react';

export default function Home() {
  return (
    <div>
      <Head title='Homepage' />
      <Container>
        <div className='py-12'>Home</div>
      </Container>
    </div>
  );
}

Home.layout = (page: React.ReactNode) => <AppLayout children={page} />;
