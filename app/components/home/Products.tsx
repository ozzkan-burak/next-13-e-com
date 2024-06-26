import { products } from "@/utils/Products";
import Heading from "../general/Heading";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <>
      <Heading text="Tüm Ürünler" />
      <div className="flex self-center items-center gap-3 md:gap-10  flex-wrap max-w-7xl">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
export default Products;
