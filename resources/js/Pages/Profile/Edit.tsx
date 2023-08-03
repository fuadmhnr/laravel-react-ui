import AppLayout from '@/Layouts/app-layout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Edit({
  mustVerifyEmail,
  status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
  return (
    <>
      <Head title='Profile' />
      <div className='py-12'>
        <div className='max-w-3xl sm:px-6 lg:px-8 space-y-6'>
          <UpdateProfileInformationForm mustVerifyEmail={mustVerifyEmail} status={status} />
          <UpdatePasswordForm />

          {/* <DeleteUserForm className='max-w-xl' /> */}
        </div>
      </div>
    </>
  );
}

Edit.layout = (page: React.ReactNode) => <AppLayout children={page} />;
