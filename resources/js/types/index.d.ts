import { Dispatch, SetStateAction } from "react";

export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  avatar: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
  auth: {
    user: User;
  };
};

export interface CommandPaletteState {
  openCommandPalette: boolean;
  setOpenCommandPalette: Dispatch<SetStateAction<boolean>>;
}

export interface SidebarState {
  openSidebar: boolean;
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
}
