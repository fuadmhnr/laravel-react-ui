import InputError from '@/Components/InputError';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { FormEventHandler } from 'react';
import { PageProps } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import { Label } from '@/Components/ui/label';
import { Input } from '@/Components/ui/input';
import { Button } from '@/Components/ui/button';

export default function UpdateProfileInformation({
  mustVerifyEmail,
  status,
}: {
  mustVerifyEmail: boolean;
  status?: string;
  className?: string;
}) {
  const user = usePage<PageProps>().props.auth.user;

  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    name: user.name,
    email: user.email,
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    patch(route('profile.update'));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>

        <CardDescription>
          Update your account's profile information and email address.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={submit} className='mt-6 space-y-6'>
          <div>
            <Label>Name</Label>

            <Input
              id='name'
              className='mt-1 block w-full'
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              required
              autoFocus
              autoComplete='name'
            />

            <InputError className='mt-2' message={errors.name} />
          </div>

          <div>
            <Label>Email</Label>

            <Input
              id='email'
              type='email'
              className='mt-1 block w-full'
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              required
              autoComplete='username'
            />

            <InputError className='mt-2' message={errors.email} />
          </div>

          {mustVerifyEmail && user.email_verified_at === null && (
            <div>
              <p className='text-sm mt-2 text-primary'>
                Your email address is unverified.
                <Link
                  href={route('verification.send')}
                  method='post'
                  as='button'
                  className='underline text-sm rounded-md text-muted-foreground hover:text-primary'
                >
                  Click here to re-send the verification email.
                </Link>
              </p>

              {status === 'verification-link-sent' && (
                <div className='mt-2 font-medium text-sm text-green-600'>
                  A new verification link has been sent to your email address.
                </div>
              )}
            </div>
          )}

          <div className='flex items-center gap-4'>
            <Button disabled={processing}>Save</Button>

            <Transition
              show={recentlySuccessful}
              enter='transition ease-in-out'
              enterFrom='opacity-0'
              leave='transition ease-in-out'
              leaveTo='opacity-0'
            >
              <p className='text-sm text-muted-foreground'>Saved.</p>
            </Transition>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
