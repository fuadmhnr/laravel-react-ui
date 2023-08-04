import ApplicationLogo from '@/Components/ApplicationLogo';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { ThemeToggle } from '@/Components/ui/theme-toggle';
import { Head, Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function GuestLayout({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <>
      <Head title={title} />
      <div className='min-h-screen flex flex-col sm:justify-center items-center pt-6 px-4 sm:pt-0'>
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

        <div className='absolute bottom-0 mb-4 sm:top-0 right-0 sm:mt-4 mr-4'>
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}
