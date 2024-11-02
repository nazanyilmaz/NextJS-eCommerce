import React from "react";
import DetailClient from "@/app/components/detail/DetailClient";
import { products } from "@/utils/Products";

type DetailProps = {
  productId?: string | number | undefined;
};

const Detail = ({ params }: { params: DetailProps }) => {
  const { productId } = params;
  const product = products.find((product) => product.id == productId);
  //console.log("Product", product);
  return (
    <div>
      <DetailClient product={product} />
    </div>
  );
};

export default Detail;
