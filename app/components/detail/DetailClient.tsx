"use client";
import Image from "next/image";
import PageContainer from "../containers/PageContainer";
import Counter from "../general/Counter";
import { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import Button from "../general/Button";
import Comment from "../detail/Comment";
import UseCart from "@/hooks/UseCart";

export type CardProductProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  inStock: boolean;
};

const DetailClient = ({ product }: { product: any }) => {
  const { productCartQty, addToBasket, cartPrdcts } = UseCart();
  const [displayButton, setDisplayButton] = useState(false);
  const [cardProduct, setCardProduct] = useState<CardProductProps>({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    quantity: 1,
    image: product.image,
    inStock: product.inStock,
  });

  //console.log("cartPrdcts", cartPrdcts);
  useEffect(() => {
    setDisplayButton(false);
    let controlDisplay: any = cartPrdcts?.findIndex(
      (cart) => cart.id == product.id
    );
    if (controlDisplay > -1) {
      setDisplayButton(true);
    }
  }, [cartPrdcts]);
  const increaseFun = () => {
    if (cardProduct.quantity == 10) return alert("Max quantity reached");
    setCardProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  };
  const decreaseFun = () => {
    if (cardProduct.quantity == 1) return alert("Min quantity reached");
    setCardProduct((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
  };
  let productRating =
    product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) /
    product?.reviews?.length;

  return (
    <div className="my-10 flex items-center justify-center">
      <PageContainer>
        <div className="block md:flex gap-10 justify-center">
          <div className="relative h-[400px] w-[400px]">
            <Image src={product?.image} fill alt="photo" />
          </div>
          <div className="w-full md:w-2/3  space-y-3">
            <div className="text-xl md:text-2xl font-semibold">
              {product?.name}
            </div>
            <Rating name="read-only" value={productRating} readOnly />
            <div className="text-slate-500">{product.description}</div>
            <div className="flex items-center font-bold gap-2">
              {product?.inStock ? (
                <div className=" text-green-600 font-semibold"> In Stock</div>
              ) : (
                <div className="text-red-600 font-semibold">
                  Currently unavailable
                </div>
              )}
            </div>
            <div className="text-lg md:2xl text-orange-600 font-bold">
              ${product.price}
            </div>
            {displayButton ? (
              <>
                <Button
                  text="Already in Cart"
                  onClick={() => {}}
                  small
                  outline
                />
              </>
            ) : (
              <>
                <Counter
                  increaseFun={increaseFun}
                  decreaseFun={decreaseFun}
                  cardProduct={cardProduct}
                />
                <Button
                  text="Add Cart"
                  onClick={() => addToBasket(cardProduct)}
                  small
                />
              </>
            )}
          </div>
        </div>
        <div>
          <Comment product={product} />
        </div>
      </PageContainer>
    </div>
  );
};

export default DetailClient;
