import ApplicationLogo from '@/Components/ApplicationLogo';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Head, Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function GuestLayout({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <>
      <Head title={title} />
      <div className='min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0'>
        <div>
          <Link href='/'>
            <ApplicationLogo className='w-20 h-20 fill-current text-gray-500' />
          </Link>
        </div>

        <Card className='w-full sm:max-w-md mt-6'>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>{children}</CardContent>
        </Card>
      </div>
    </>
  );
}
