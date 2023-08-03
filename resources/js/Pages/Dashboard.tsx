import AppLayout from '@/Layouts/app-layout';

export default function Dashboard() {
  return <div>You are logged in</div>;
}

Dashboard.layout = (page: React.ReactNode) => <AppLayout children={page} />;
