import { getCurrentUser } from "@/app/actions/getCurrentUser";
import CardCount from "./CardCount";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import Search from "./Search";
import Users from "./Users";

const Navbar = async () => {
  const currentUser = await getCurrentUser();
  return (
    <div className="flex  items-center justify-between gap-3 md:gap-10 px-3 md:px-10 h-16 bg-orange-600 text-slate-100 font-bold">
      <Logo />
      <Search />
      <CardCount currentUser={currentUser} />
      <Users currentUser={currentUser} />
      <HamburgerMenu />
    </div>
  );
};

export default Navbar;
