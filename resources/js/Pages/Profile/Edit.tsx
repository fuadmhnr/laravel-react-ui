import DeleteUserForm from './partials/delete-user-form';
import UserLayout from '@/layouts/user-layout';
import UpdatePasswordForm from './partials/update-password-form';
import UpdateProfileInformationForm from './partials/update-profile-information';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Edit({
  mustVerifyEmail,
  status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
  return (
    <>
      <Head title='Profile' />
      <div className='max-w-2xl space-y-6'>
        <UpdateProfileInformationForm mustVerifyEmail={mustVerifyEmail} status={status} />
        <UpdatePasswordForm />
        <DeleteUserForm />
      </div>
    </>
  );
}

Edit.layout = (page: React.ReactNode) => <UserLayout children={page} />;
