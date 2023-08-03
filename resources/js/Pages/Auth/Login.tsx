import { useEffect, FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/guest-layout';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';
import { Label } from '@/Components/ui/label';
import { Input } from '@/Components/ui/input';
import { Button } from '@/Components/ui/button';
import { Checkbox } from '@/Components/ui/checkbox';

export default function Login({
  status,
  canResetPassword,
}: {
  status?: string;
  canResetPassword: boolean;
}) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route('login'));
  };

  return (
    <>
      {status && <div className='mb-4 font-medium text-sm text-green-600'>{status}</div>}

      <form onSubmit={submit}>
        <div>
          <Label htmlFor='email'>Email</Label>

          <Input
            id='email'
            type='email'
            name='email'
            value={data.email}
            className='mt-1 block w-full'
            autoComplete='username'
            autoFocus
            onChange={(e) => setData('email', e.target.value)}
          />

          <InputError message={errors.email} className='mt-2' />
        </div>

        <div className='mt-4'>
          <Label htmlFor='password'>Password</Label>

          <Input
            id='password'
            type='password'
            name='password'
            value={data.password}
            className='mt-1 block w-full'
            autoComplete='current-password'
            onChange={(e) => setData('password', e.target.value)}
          />

          <InputError message={errors.password} className='mt-2' />
        </div>

        <div className='block mt-4'>
          <label className='flex items-center'>
            <Checkbox
              name='remember'
              checked={data.remember}
              onCheckedChange={(e: any) => setData('remember', e)}
            />
            <span className='ml-2 text-sm text-muted-foreground'>Remember me</span>
          </label>
        </div>

        <div className='flex items-center justify-end mt-4'>
          {canResetPassword && (
            <Link
              href={route('password.request')}
              className='text-muted-foreground hover:text-primary'
            >
              Forgot your password?
            </Link>
          )}

          <Button className='ml-4' disabled={processing}>
            Log in
          </Button>
        </div>
      </form>
    </>
  );
}

Login.layout = (page: React.ReactNode) => <GuestLayout title='Login' children={page} />;
