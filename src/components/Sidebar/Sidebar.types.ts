// src/components/Sidebar.types.ts
export type SidebarItem = {
  label: string;
  path: string;
  icon?: string;
};

export type SidebarProps = {
  items: SidebarItem[];
  collapsed?: boolean;
};
