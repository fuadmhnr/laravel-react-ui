import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/nav-link';
import { PageProps } from '@/types';
import { router, usePage } from '@inertiajs/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu';
import { IconChevronDown } from '@tabler/icons-react';

export default function Navbar() {
  const { auth } = usePage<PageProps>().props;
  return (
    <nav className='px-4 sm:px-6 py-2'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <ApplicationLogo className='h-8 w-auto sm:h-10 mr-4 fill-primary' />
          <NavLink href={route('home')} active={route().current('home')}>
            Home
          </NavLink>
          <NavLink href={route('dashboard')} active={route().current('dashboard')}>
            Dashboard
          </NavLink>
        </div>
        <div className='flex items-center'>
          {auth.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger className='flex items-center justify-between gap-x-4'>
                {auth.user.name} <IconChevronDown className='w-4 h-4'></IconChevronDown>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-72 mr-5'>
                <DropdownMenuLabel>Manage Account</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => router.get(route('dashboard'))}>
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.get(route('profile.edit'))}>
                  Profile
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <NavLink href={route('login')}>Login</NavLink>
              <NavLink href={route('register')}>Register</NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}