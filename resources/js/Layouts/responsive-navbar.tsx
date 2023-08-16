import ApplicationLogo from '@/components/app-logo';
import { Button } from '@/components/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/dropdown-menu';
import { Icon } from '@/components/icon';
import { Separator } from '@/components/separator';
import { CommandPaletteState, PageProps } from '@/types';
import { Link, router, usePage } from '@inertiajs/react';

export default function ResponsiveNavbar({
  openCommandPalette,
  setOpenCommandPalette,
}: CommandPaletteState) {
  const { auth } = usePage<PageProps>().props;
  return (
    <nav className='lg:hidden block px-4 py-3 border-b'>
      <div className='flex items-center justify-between'>
        <Link href={'/'}>
          <ApplicationLogo className='h-6 w-auto mr-4 fill-foreground' />
        </Link>

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
