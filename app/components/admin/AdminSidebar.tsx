"use client";

import { usePathname } from "next/navigation";
import { IoCreateSharp } from "react-icons/io5";
import { FaJediOrder } from "react-icons/fa6";
import { MdDashboard, MdOutlineManageHistory } from "react-icons/md";
import AdminSidebarItem from "./AdminSidebarItem";

const AdminSidebar = () => {
  const pathname = usePathname();
  const adminPanel = [
    {
      name: "Dashboard",
      icon: MdDashboard,
      url: "/admin",
    },
    {
      name: "Create Product",
      icon: IoCreateSharp,
      url: "/admin/create",
    },
    {
      name: "Manage Product",
      icon: MdOutlineManageHistory,
      url: "/admin/manage",
    },
    {
      name: "Orders",
      icon: FaJediOrder,
      url: "/admin/order",
    },
  ];
  return (
    <div className="w-1/4 border-r h-screen p-3 bg-orange-600">
      <div className="space-y-4">
        {adminPanel.map((admin, index) => (
          <AdminSidebarItem
            key={index}
            selected={pathname == admin.url}
            icon={admin.icon}
            name={admin.name}
            url={admin.url}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
