import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/nav-link';
import { PageProps } from '@/types';
import { router, usePage } from '@inertiajs/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu';
import { IconChevronDown } from '@tabler/icons-react';
import { ThemeToggle } from '@/Components/ui/theme-toggle';

export default function Navbar() {
  const { auth } = usePage<PageProps>().props;
  return (
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
          <ThemeToggle />
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
                <DropdownMenuItem onClick={() => router.post(route('logout'))}>
                  Logout
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
