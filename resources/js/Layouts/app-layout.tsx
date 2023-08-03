import { PropsWithChildren } from 'react';
import Navbar from './navbar';

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
