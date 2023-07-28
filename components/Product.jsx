"use client";

import { addProduct, calculateTotals, deleteProduct } from "@/redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { MdAdd, MdOutlineCancel } from "react-icons/md";
import Link from "next/link";

const Product = ({ product }) => {
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addProduct(product));
    dispatch(calculateTotals());
  };
  const handleDelete = () => {
    dispatch(deleteProduct(product.id));
    dispatch(calculateTotals());
  };
  return (
    <Link
      href={`/products/${product.id}`}
      className="flex flex-col w-[300px] items-center justify-between gap-[20px] bg-white rounded-xl shadow overflow-hidden relative p-[20px]"
    >
      <img
        className="w-full h-[300px] object-contain"
        src={product.image}
        alt="product photo"
      />
      <div className="flex flex-col items-center justify-between gap-[20px] w-[260px] p-[10px] bg-slate-200 rounded-xl text-center tracking-wider font-semibold self-end">
        <p>{product.title}</p>
        <p>$ {product.price}</p>
      </div>
      {cart.products.findIndex((item) => item.product.id === product.id) >=
      0 ? (
        <button
          className="w-[50px] h-[50px] text-white bg-gradient-to-r tracking-wider uppercase from-secondary-1 to-secondary-2 hover:from-secondary-3 hover:to-secondary-4 rounded-bl-xl flex items-center justify-center absolute right-0 top-0"
          onClick={handleDelete}
        >
          <MdOutlineCancel className="text-[30px]" />
        </button>
      ) : (
        <button
          onClick={handleAdd}
          className="w-[50px] h-[50px] text-white bg-gradient-to-r tracking-wider uppercase from-primary-1 to-primary-2 hover:from-primary-3 hover:to-primary-4 rounded-bl-xl flex items-center justify-center absolute right-0 top-0"
        >
          <MdAdd className="text-[30px]" />
        </button>
      )}
    </Link>
  );
};
export default Product;
