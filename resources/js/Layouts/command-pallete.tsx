import { useEffect } from 'react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/Components/ui/command';
import { router, usePage } from '@inertiajs/react';
import {
  IconChartPie,
  IconHome,
  IconLogin,
  IconLogout,
  IconSettings,
  IconUserCircle,
} from '@tabler/icons-react';
import { CommandSeparator } from 'cmdk';

export default function CommandPalette({
  openCommandPallete,
  setOpenCommandPallete,
}: {
  openCommandPallete: boolean;
  setOpenCommandPallete: (openCommandPallete: boolean) => void;
}) {
  const { auth } = usePage().props;

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        // @ts-ignore
        setOpenCommandPallete((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const goto = (href: string) => {
    router.get(
      href,
      {},
      {
        preserveState: true,
        preserveScroll: true,
        onSuccess: () => setOpenCommandPallete(false),
      },
    );
  };

  return (
    <CommandDialog open={openCommandPallete} onOpenChange={setOpenCommandPallete}>
      <CommandInput placeholder='Type a command or search...' />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading='Pages'>
          <CommandItem value='Home' onSelect={() => goto(route('home'))}>
            <IconHome />
            <span>Home</span>
          </CommandItem>
          <CommandItem value='Dashboard' onSelect={() => goto(route('dashboard'))}>
            <IconChartPie />
            <span>Dashboard</span>
          </CommandItem>
          <CommandItem value='Settings' onSelect={() => goto(route('profile.edit'))}>
            <IconSettings />
            <span>Settings</span>
          </CommandItem>
          <CommandSeparator />
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading='Account'>
          {auth.user ? (
            <>
              <CommandItem value='Logout' onSelect={() => router.post(route('logout'))}>
                <IconLogout />
                <span>Logout</span>
              </CommandItem>
            </>
          ) : (
            <>
              <CommandItem value='Login' onSelect={() => goto(route('login'))}>
                <IconLogin />
                <span>Login</span>
              </CommandItem>
              <CommandItem value='Register' onSelect={() => goto(route('register'))}>
                <IconUserCircle />
                <span>Register</span>
              </CommandItem>
            </>
          )}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
