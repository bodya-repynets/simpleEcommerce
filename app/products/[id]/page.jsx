import BuyProduct from "@/components/BuyProduct";
import Link from "next/link";
import { GrReturn } from "react-icons/gr";

const ProductPage = async ({ params }) => {
  const data = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await data.json();

  return (
    <div className="w-screen min-h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-[40px]">
      <div className="flex flex-col sm:flex-row w-[100%] sm:w-[80%] xl:w-[60%] items-center bg-white p-[20px] lg:p-[40px] rounded-xl gap-[40px]">
        <div className="w-[60%] sm:w-[40%] md:w-[30%] flex items-center justify-center">
          <img className="w-full" src={product.image} alt="product" />
        </div>
        <div className="flex flex-col w-[100%] md:w-[70%] gap-[20px]">
          <div className="flex flex-col gap-[20px] justify-center bg-slate-200 p-[20px] text-[20px] rounded-xl">
            <p className="text-center font-semibold">{product.title}</p>
            <p className="text-center text-sm tracking-wider">
              Category: {product.category}
            </p>
            <p className="text-center text-sm">{product.description}</p>
            <p className="text-center font-semibold">Price: ${product.price}</p>
          </div>
          <div className="flex flex-col items-center gap-[10px] justify-center">
            <BuyProduct product={product} />
          </div>
        </div>
      </div>
      <Link
        href={"/"}
        className="tracking-[3px] flex items-center gap-[10px] animate-bounce"
      >
        <GrReturn className="text-[24px]" />
        <span className="text-[20px]">Back to shopping</span>
      </Link>
    </div>
  );
};
export default ProductPage;
