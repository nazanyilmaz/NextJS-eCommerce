import Link from "next/link";
import { IconType } from "react-icons";

interface AdminSidebarItem {
  selected?: boolean;
  name: string;
  icon: IconType;
  url: string;
}

const AdminSidebarItem: React.FC<AdminSidebarItem> = ({
  selected,
  name,
  icon: Icon,
  url,
}) => {
  return (
    <Link
      href={url}
      className={`flex items-center gap-2 mb-3 text-white ${
        selected ? " font-bold border-b" : " font-semibold"
      }`}
    >
      <Icon size={23} />
      <div>{name}</div>
    </Link>
  );
};

export default AdminSidebarItem;
