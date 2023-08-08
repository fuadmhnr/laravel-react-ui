import { PropsWithChildren, useState } from "react";
import Navbar from "./navbar";
import ResponsiveNavbar from "./responsive-navbar";
import Menu from "./menu";
import ResponsiveSidebar from "./responsive-sidebar";
import UserResponsiveNavbar from "./user-responsive-navbar";

export default function UserLayout({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div>
      <UserResponsiveNavbar
        openCommandPalette={open}
        setOpenCommandPalette={setOpen}
        setOpenSidebar={setOpenSidebar}
      />
      <Navbar openCommandPalette={open} setOpenCommandPalette={setOpen} />
      <ResponsiveSidebar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />
      <div className="lg:px-10 lg:py-12 py-6 px-4 grid lg:gap-8 lg:grid-cols-4">
        <div className="col-span-1 lg:block hidden">
          <Menu />
        </div>
       <div className="lg:col-span-3">
          {children}
        </div>
      </div>
    </div>
  );
}
