"use client";

import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push("/");
  };

  return (
    <button onClick={handleHomeClick}>
      <div className="bg-orange-700 px-2 py-1 rounded-md text-lg md:text-2xl cursor-pointer ">
        Shopping<span className="text-sm">.com</span>
      </div>
    </button>
  );
};

export default Logo;
