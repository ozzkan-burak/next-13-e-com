import { Rating } from "@mui/material";
import Image from "next/image";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="w-[200px] cursor-pointer mt-6 ml-2 shadow-lg p-2 rounded-md">
      <div className="relative h-[200px]">
        <Image src={product?.images[0]} fill alt="" className="object-cover" />
      </div>
      <div className="text-center mt-2 space-x-6">
        <span>{product.title}</span>
      </div>
      <Rating name="read-only" value={product.rating} readOnly />
      <div className="text-orange-600 text-lg md:text-xl">
        {product.price} TL
      </div>
    </div>
  );
};

export default ProductCard;

// eğitim PART -1 35. dk
