import { Separator } from "@/Components/ui/separator";
import VerticalNavLink from "@/Components/ui/vertical-nav-link";

export default function Menu() {
  return (
    <ul className="col-span-1">
      <div className="flex flex-col gap-y-1">
        <VerticalNavLink active={route().current('dashboard')} href={route("dashboard")} icon="IconDashboard">
          Dashboard
        </VerticalNavLink>
        <VerticalNavLink active={route().current('profile.edit')}  href={route("profile.edit")} icon="IconSettings">
          Settings
        </VerticalNavLink>
        <Separator className="my-2" />
        <VerticalNavLink href={"#"} icon="IconArticle">
          Articles
        </VerticalNavLink>
        <VerticalNavLink href={"#"} icon="IconManualGearbox">
          Category
        </VerticalNavLink>
        <Separator className="my-2" />
        <VerticalNavLink href={"#"} icon="IconBrandOpenai">
          Ask AI
        </VerticalNavLink>
        <VerticalNavLink href={"#"} icon="IconBrandDiscord">
          Forum
        </VerticalNavLink>
      </div>
    </ul>
  );
}