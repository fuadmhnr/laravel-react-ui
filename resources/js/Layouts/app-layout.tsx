import { PropsWithChildren, useState } from 'react';
import Navbar from './navbar';
import ResponsiveNavbar from './responsive-navbar';

export default function AppLayout({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <ResponsiveNavbar openCommandPalette={open} setOpenCommandPalette={setOpen} />
      <Navbar openCommandPalette={open} setOpenCommandPalette={setOpen} />
      {children}
    </div>
  );
}
