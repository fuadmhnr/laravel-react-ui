import { Card } from '@/Components/ui/card';
import Container from '@/Components/ui/container';
import SectionTitle from '@/Components/ui/section-title';
import UserLayout from '@/Layouts/user-layout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
  return (
    <div>
      <Head title='Dashboard' />{' '}
      <Card>
        <SectionTitle title='Dashboard' description='Welcome to your dashboard' />
      </Card>
    </div>
  );
}

Dashboard.layout = (page: React.ReactNode) => <UserLayout children={page} />;
