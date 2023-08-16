import ApplicationLogo from '@/components/app-logo';
import { Icon } from '@/components/icon';
import { CommandPaletteState, PageProps } from '@/types';
import { Link, router, usePage } from '@inertiajs/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/dropdown-menu';
import { Button } from '@/components/button';
import { Separator } from '@/components/separator';
import { Dispatch, SetStateAction } from 'react';

interface Props extends CommandPaletteState {
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
}

export default function UserResponsiveNavbar({
  openCommandPalette,
  setOpenCommandPalette,
  setOpenSidebar,
}: Props) {
  const { auth } = usePage<PageProps>().props;
  return (
    <nav className='lg:hidden block px-4 py-3 border-b'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <button onClick={() => setOpenSidebar(true)}>
            <Icon name='IconLayoutSidebarLeftExpand' />
          </button>
          <Separator orientation='vertical' className='mx-3 h-7' />
          <Link href={'/'}>
            <ApplicationLogo className='h-5 w-auto mr-4 fill-foreground' />
          </Link>
        </div>
        <div className='flex items-center gap-x-2'>
          <button onClick={() => setOpenCommandPalette(true)} className='focus:outline-none'>
            <Icon name='IconSearch' />
          </button>
          <Separator orientation='vertical' className='h-7 mx-4' />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                variant='ghost'
                className='grid place-content-center h-8 w-8 border-transparent focus:border'
              >
                <Icon name='IconMenu' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-64'>
              <DropdownMenuItem asChild>
                <Link href={route('home')}>Home</Link>
              </DropdownMenuItem>
              {auth.user ? (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href={route('dashboard')}>Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href={route('profile.edit')}>Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => router.post(route('logout'))}>
                    Log out
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem asChild>
                    <Link href={route('login')}>Login</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href={route('register')}>Register</Link>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
