"use client";
import { addProduct, calculateTotals } from "@/redux/cartSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const BuyProduct = ({product}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleAdd = () => {
    dispatch(addProduct(product));
    dispatch(calculateTotals());
    router.push("/cart", { scroll: false });
  };
  return (
    <button
      onClick={handleAdd}
      className="w-[250px] h-[50px] text-white uppercase text-[20px] bg-gradient-to-r from-primary-1 to-primary-2 hover:from-primary-3 hover:to-primary-4 rounded-xl tracking-[3px] border-2 border-white animate-pulse"
    >
      Buy now
    </button>
  );
};
export default BuyProduct;
