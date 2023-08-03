import AppLayout from '@/Layouts/app-layout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Container from '@/Components/ui/container';

export default function Edit({
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <>
            <Head title='Profile' />
            <div className='py-12'>
                <Container>
                    <div className='max-w-2xl space-y-6'>
                        <UpdateProfileInformationForm mustVerifyEmail={mustVerifyEmail} status={status} />
                        <UpdatePasswordForm />
                        <DeleteUserForm />
                    </div>
                </Container>
            </div>
        </>
    );
}

Edit.layout = (page: React.ReactNode) => <AppLayout children={page} />;
