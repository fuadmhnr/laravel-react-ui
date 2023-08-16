import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/sheet';
import { SidebarState } from '@/types';
import Menu from './menu';
import { Link } from '@inertiajs/react';
import ApplicationLogo from '@/components/app-logo';

export default function ResponsiveSidebar({ openSidebar, setOpenSidebar }: SidebarState) {
  return (
    <Sheet open={openSidebar} onOpenChange={setOpenSidebar}>
      <SheetContent side='left'>
        <Link className='block mb-8' href={'/'}>
          <ApplicationLogo className='h-8 w-auto mr-4 fill-foreground' />
        </Link>
        <Menu />
      </SheetContent>
    </Sheet>
  );
}
