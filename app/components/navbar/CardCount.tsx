"use client";
import { User } from "@prisma/client";
import UseCart from "@/hooks/UseCart";
import { BsBasket } from "react-icons/bs";
import { useRouter } from "next/navigation";

interface UserProps {
  currentUser: User | null | undefined;
}

const CardCount: React.FC<UserProps> = ({ currentUser }) => {
  const { cartPrdcts } = UseCart();
  const router = useRouter();

  const handleBasketClick = () => {
    router.push("/cart");
  };

  return (
    <div className="hidden md:flex relative ">
      <button onClick={handleBasketClick}>
        <BsBasket size={30} />
        {cartPrdcts && cartPrdcts.length > 0 && currentUser && (
          <div className="absolute -top-2 -right-2.5 bg-green-600 w-6 h-6 rounded-full flex items-center justify-center">
            {cartPrdcts?.length}
          </div>
        )}
      </button>
    </div>
  );
};

export default CardCount;
