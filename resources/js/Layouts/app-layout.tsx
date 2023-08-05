import { PropsWithChildren, useState } from 'react';
import Navbar from './navbar';
import CommandPalette from './command-pallete';

export default function AppLayout({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Navbar openCommandPalette={open} setOpenCommandPalette={setOpen} />
      {children}
    </div>
  );
}
