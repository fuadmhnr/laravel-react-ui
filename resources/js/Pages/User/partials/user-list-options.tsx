import { Button } from "@/Components/ui/button";
import { User } from "@/types";
import { Link } from "@inertiajs/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Icon } from "@/Components/ui/icon";

export default function UserListOptions({ user }: {
  user: User;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="h-7" variant="outline" size="icon">
          <Icon name="IconDots" className="w-3.5 h-3.5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem><Icon name="IconNews" className="h-4 w-4 mr-2" /> Views</DropdownMenuItem>
        <DropdownMenuItem><Icon name="IconPencil" className="h-4 w-4 mr-2" /> Edit</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger><Icon name="IconShare" className="h-4 w-4 mr-2" /> Share</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent className="w-40">
              <DropdownMenuItem>
                <Icon name="IconBrandFacebook" className="w-4 h-4 mr-2" /> Facebook
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Icon name="IconBrandTwitter" className="w-4 h-4 mr-2" />Twitter
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem><Icon name="IconBan" className="w-4 h-4 mr-2"/>Ban</DropdownMenuItem>
        <DropdownMenuItem><Icon name="IconTrash" className="w-4 h-4 mr-2" /> Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
