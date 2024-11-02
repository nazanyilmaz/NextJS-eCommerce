"use client";

import { FaTrashAlt } from "react-icons/fa";
import UseCart from "@/hooks/UseCart";
import { CardProductProps } from "@/app/components/detail/DetailClient";
import PageContainer from "../containers/PageContainer";
import Image from "next/image";
import Button from "../general/Button";
import Counter from "../general/Counter";
import { User } from "@prisma/client";
import Link from "next/link";

interface UserProps {
  currentUser: User | null | undefined;
}

const CartClient: React.FC<UserProps> = ({ currentUser }) => {
  const {
    cartPrdcts,
    removeFromCart,
    removeCart,
    addToBasketIncrease,
    addToBasketDecrease,
  } = UseCart();

  console.log("cartPrdcts", cartPrdcts);
  if (!cartPrdcts || cartPrdcts.length === 0)
    return <div>There are no products in the cart</div>;

  let cartPrdtcsTotal = cartPrdcts.reduce(
    (acc: any, item: CardProductProps) => acc + item.quantity * item.price,
    0
  );
  return (
    <div className="my3 md:my-10">
      {currentUser ? (
        <PageContainer>
          <div className="flex items-center justify-between gap-3 p-2 text-center font-bold text-orange-700 text-xl border-b border-orange-600">
            <div className="w-[100px]">Image</div>
            <div className="w-1/6">Name</div>
            <div className="w-1/6">Quantity</div>
            <div className="w-1/6">Price</div>
            <div className=" w-16"></div>
          </div>
          <div>
            {cartPrdcts.map((cartProduct) => (
              <div
                key={cartProduct.id}
                className="flex items-center justify-between gap-3 my-3 border-b border-gray-200 p-2 text-center"
              >
                <div>
                  <Image
                    src={cartProduct.image}
                    width={100}
                    height={100}
                    alt="cart"
                  />
                </div>
                <div className="w-1/6 font-bold">{cartProduct.name}</div>
                <div className="w-1/6  font-semibold flex justify-center">
                  <Counter
                    cardProduct={cartProduct}
                    increaseFun={() => addToBasketIncrease(cartProduct)}
                    decreaseFun={() => addToBasketDecrease(cartProduct)}
                  />
                </div>
                <div className="text-lg w-1/6 text-orange-600 font-semibold">
                  ${cartProduct.price}
                </div>
                <div>
                  <Button
                    icon={FaTrashAlt}
                    onClick={() => removeFromCart(cartProduct)}
                    xsmall
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between my-5 py-5 border-t ">
            <button
              onClick={() => removeCart()}
              className="w-1/5 underline font-semibold text-red-600"
            >
              Delete Cart
            </button>
            <div className="text-lg md:text-2xl font-bold">
              $ {cartPrdtcsTotal.toFixed(2)}
            </div>
          </div>
        </PageContainer>
      ) : (
        <div className="border shadow-lg flex items-center justify-center bg-orange-100">
          <div className="text-center text-xl font-bold">
            Please Login or Register to see your cart
            <div className="text-lg text-center my-1"></div>
            Don't have an account?{" "}
            <Link href="/register" className="text-green-600">
              Sign Up
            </Link>
            <div className="text-lg text-center my-1">
              Do you have an account?
              <Link href="/login" className="text-green-600">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartClient;
