import Heading from "../general/Heading";
import { products } from "../../../utils/Products";
import ProductCard from "./ProductCard";
const Products = () => {
  return (
    <div>
      <Heading text="All Products" />
      <div className="flex items-center gap-4 md:gap-10 flex-wrap px-3 md:px-10 mx-14">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
