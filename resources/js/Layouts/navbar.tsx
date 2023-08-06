import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/nav-link';
import { PageProps } from '@/types';
import { Link, router, usePage } from '@inertiajs/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu';
import { ThemeToggle } from '@/Components/ui/theme-toggle';
import CommandPalette from './command-pallete';
import { Dispatch, SetStateAction } from 'react';
import { Icon } from '@/Components/ui/icon';
import { Button } from '@/Components/ui/button';

export default function Navbar({
  openCommandPalette,
  setOpenCommandPalette,
}: {
  openCommandPalette: boolean;
  setOpenCommandPalette: Dispatch<SetStateAction<boolean>>;
}) {
  const { auth } = usePage<PageProps>().props;

  const handleOpenCommandPalette = (status: boolean) => {
    setOpenCommandPalette(status);
  };
  return (
    <>
      <CommandPalette
        openCommandPallete={openCommandPalette}
        setOpenCommandPallete={handleOpenCommandPalette}
      />
      <nav className='px-4 sm:px-6 py-2 sm:py-3 border-b border-border/60'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <ApplicationLogo className='h-8 w-auto mr-4 fill-foreground' />
            <NavLink href={route('home')} active={route().current('home')}>
              Home
            </NavLink>
            <NavLink href={route('dashboard')} active={route().current('dashboard')}>
              Dashboard
            </NavLink>
          </div>
          <div className='flex items-center gap-x-4'>
            <button
              onClick={() => handleOpenCommandPalette(true)}
              className='rounded-lg ring-1 ring-ring px-4 py-2 focus:outline-none flex items-center gap-x-4 text-muted-foreground hover:text-foreground'
            >
              <Icon name='IconSearch' className='h-4 w-4 stroke-1' />
              <span>Quick Search...</span>
              <span className='flex items-center'>
                <Icon name='IconCommand' className='w-4 h-4 stroke-1' /> K
              </span>
            </button>
            <ThemeToggle />
            {auth.user ? (
              <DropdownMenu>
                <DropdownMenuTrigger className='flex items-center justify-between gap-x-4'>
                  {auth.user.name}
                  <Icon name='IconChevronDown' className='w-4 h-4' />
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-72 mr-5'>
                  <DropdownMenuLabel>Manage Account</DropdownMenuLabel>
                  <DropdownMenuItem onClick={() => router.get(route('dashboard'))}>
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => router.get(route('profile.edit'))}>
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => router.post(route('logout'))}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className='flex gap-x-2'>
                <Button className='rounded-full' size='sm' variant='secondary' asChild>
                    <Link href={route('login')}>Login</Link>
                </Button>
                <Button className='rounded-full' size='sm' asChild>
                    <Link href={route('register')}>Register</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
