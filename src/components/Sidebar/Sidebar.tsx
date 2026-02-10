import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { SidebarItem, SidebarProps } from "./Sidebar.types";

const Sidebar: FC<SidebarProps> = ({ items, collapsed = false }) => {
  return (
    <aside
      className={`h-screen bg-white border-r shadow-sm transition-all duration-300
      ${collapsed ? "w-16" : "w-56"}`}
    >
      <nav className="h-full flex flex-col py-4">
        <ul className="flex flex-col gap-1">
          {items.map((item: SidebarItem) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-colors
                  ${isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"}`
                }
              >
                <span className="text-xl">{item.icon}</span>
                {!collapsed && <span>{item.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
