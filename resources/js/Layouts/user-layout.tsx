import { PropsWithChildren, useState } from "react";
import Navbar from "./navbar";
import ResponsiveNavbar from "./responsive-navbar";
import VerticalNavLink from "@/Components/ui/vertical-nav-link";
import { Separator } from "@/Components/ui/separator";

export default function UserLayout({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <ResponsiveNavbar
        openCommandPalette={open}
        setOpenCommandPalette={setOpen}
      />
      <Navbar openCommandPalette={open} setOpenCommandPalette={setOpen} />
      <div className="px-10 py-12 grid gap-8 grid-cols-4">
        <ul className="col-span-1">
          <div className="flex flex-col gap-y-1">
            <VerticalNavLink href={route("dashboard")} icon="IconDashboard">
              Dashboard
            </VerticalNavLink>
            <VerticalNavLink href={route("profile.edit")} icon="IconSettings">
              Settings
            </VerticalNavLink>
            <Separator className="my-2"/>
            <VerticalNavLink href={'#'} icon="IconArticle">
              Articles
            </VerticalNavLink>
            <VerticalNavLink href={'#'} icon="IconManualGearbox">
              Category
            </VerticalNavLink>
            <Separator className="my-2"/>
            <VerticalNavLink href={'#'} icon="IconBrandOpenai">
              Ask AI
            </VerticalNavLink>
            <VerticalNavLink href={'#'} icon="IconBrandDiscord">
              Forum
            </VerticalNavLink>
          </div>
        </ul>
        <div className="col-span-3">
          {children}
        </div>
      </div>
    </div>
  );
}
