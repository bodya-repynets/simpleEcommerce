"use client";
import { addProduct, calculateTotals, deleteProduct } from "@/redux/cartSlice";
import { useRouter } from "next/navigation";
import { MdAdd, MdOutlineCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const BuyProduct = ({ product }) => {
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleAdd = () => {
    dispatch(addProduct(product));
    dispatch(calculateTotals());
  };
  const handleDelete = () => {
    dispatch(deleteProduct(product.id));
    dispatch(calculateTotals());
  };
  const handleCheck = () => {
    router.push("/cart", { scroll: false });
  };
  const handleBuy = () => {
    dispatch(addProduct(product));
    dispatch(calculateTotals());
    router.push("/cart", { scroll: false });
  };
  return (
    <>
      {cart.products.findIndex((item) => item.product.id === product.id) >=
      0 ? (
        <div className="flex gap-[40px] items-center py-[20px]">
          <button
            className="w-[250px] h-[50px] text-white uppercase text-[20px] bg-gradient-to-r from-primary-1 to-primary-2 hover:from-primary-3 hover:to-primary-4 rounded-xl tracking-[3px] animate-pulse"
            onClick={handleCheck}
          >
            Buy
          </button>
          <button
            className="w-[50px] h-[50px] text-white bg-gradient-to-r tracking-wider uppercase from-secondary-1 to-secondary-2 hover:from-secondary-3 hover:to-secondary-4 rounded-xl flex items-center justify-center "
            onClick={handleDelete}
          >
            <MdOutlineCancel className="text-[30px]" />
          </button>
        </div>
      ) : (
        <div className="flex items-center py-[20px] gap-[40px]">
          <button
            onClick={handleBuy}
            className="w-[250px] h-[50px] text-white uppercase text-[20px] bg-gradient-to-r from-primary-1 to-primary-2 hover:from-primary-3 hover:to-primary-4 rounded-xl tracking-[3px] animate-pulse"
          >
            Buy
          </button>
          <button
            onClick={handleAdd}
            className="w-[50px] h-[50px] text-white bg-gradient-to-r tracking-wider uppercase from-primary-1 to-primary-2 hover:from-primary-3 hover:to-primary-4 rounded-xl flex items-center justify-center"
          >
            <MdAdd className="text-[30px]" />
          </button>
        </div>
      )}
    </>
  );
};
export default BuyProduct;
