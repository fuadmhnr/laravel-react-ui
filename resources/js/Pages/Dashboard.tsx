import Container from '@/Components/ui/container';
import AppLayout from '@/Layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
  return (
    <div>
      <Head title='Dashboard' />{' '}
      <Container>
        <div className='py-12'>Dashboard</div>
      </Container>
    </div>
  );
}

Dashboard.layout = (page: React.ReactNode) => <AppLayout children={page} />;
