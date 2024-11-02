"use client";

import { signOut } from "next-auth/react";
import { User } from "@prisma/client";
import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { useRouter } from "next/navigation";

interface UserProps {
  currentUser: User | null | undefined;
}

const Users: React.FC<UserProps> = ({ currentUser }) => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  const menuFunc = (type: any) => {
    setOpenMenu(false);
    if (type == "logout") {
      signOut();
      router.push("/login");
    } else if (type == "register") {
      router.push("/register");
    } else if (type == "login") {
      router.push("/login");
    }
  };
  //console.log("Current User kimmmm", currentUser);

  return (
    <div className="hidden md:flex relative">
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className="flex items-center gap-1 cursor-pointer relative"
      >
        <FiUser size={25} />

        <div>{currentUser ? currentUser.name : "User"}</div>
      </div>
      <div>
        {openMenu && (
          <div className=" absolute w-[100px] top-10 bg-white shadow-xl rounded-md right-0 p-2">
            {currentUser ? (
              <div className=" space-y-1">
                <div
                  onClick={() => router.push("/admin")}
                  className="text-slate-600 cursor-pointer"
                >
                  Admin
                </div>
                <div
                  onClick={() => menuFunc("logout")}
                  className="text-slate-600 cursor-pointer"
                >
                  Logout
                </div>
              </div>
            ) : (
              <div>
                <div
                  onClick={() => menuFunc("register")}
                  className="text-slate-600 cursor-pointer"
                >
                  Register
                </div>
                <div
                  onClick={() => menuFunc("login")}
                  className="text-slate-600 cursor-pointer"
                >
                  Login
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
