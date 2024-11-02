import { Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: any }) => {
  let productRating =
    product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) /
    product?.reviews?.length;
  return (
    <Link href={`product/${product.id}`}>
      <div className="w-[240px] shadow-lg p-2 rounded-lg cursor-pointer flex flex-col flex-1  ">
        <div className="relative h-[170px]">
          <Image
            src={product.image}
            fill
            alt="product"
            className=" object-contain object-center"
          />
        </div>
        <div className=" text-center mt-2 space-y-1">
          <div className=" font-semibold">
            {product.name.length > 10
              ? `${product.name.substring(0, 14)}...`
              : product.name}
          </div>
          <Rating name="read-only" value={productRating} readOnly />
          <div className="text-orange-600 font-bold text-lg md:text-xl">
            ${product.price}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
