import { Card } from '@/components/card';
import SectionTitle from '@/components/section-title';
import UserLayout from '@/layouts/user-layout';
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
