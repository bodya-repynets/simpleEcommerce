import {
  calculateTotals,
  changeAmount,
  deleteProduct,
} from "@/redux/cartSlice";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import Link from "next/link";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div
      key={item.product.id}
      className="flex flex-col sm:flex-row gap-[20px] md:gap-[40px] justify-between bg-slate-200 border-2 border-text-color p-[20px] rounded"
    >
      <div className="flex gap-[20px] md:gap-[40px] items-center justify-center">
        <Link href={`/products/${item.product.id}`}>
          <img
            className="w-[50px] h-[50px] object-contain"
            src={item.product.image}
            alt="product"
          />
        </Link>
        <p className="max-w-[300px] text-center">{item.product.title}</p>
      </div>
      <div className="flex sm:flex-col lg:flex-row gap-[20px] md:gap-[40px] items-center justify-between">
        <span className="text-center">Price: $ {item.product.price}</span>
        <div className="flex gap-[10px] items-center">
          <span className="text-center">Amount: {item.amount}</span>
          <div className="flex flex-col text-[20px]">
            <button
              onClick={() => {
                dispatch(
                  changeAmount({
                    id: item.product.id,
                    number: 1,
                  })
                );
                dispatch(calculateTotals());
              }}
            >
              <MdKeyboardArrowUp />
            </button>
            <button
              onClick={() => {
                dispatch(
                  changeAmount({
                    id: item.product.id,
                    number: -1,
                  })
                );
                dispatch(calculateTotals());
              }}
            >
              <MdKeyboardArrowDown />
            </button>
          </div>
        </div>
        <button
          onClick={() => {
            dispatch(deleteProduct(item.product.id));
            dispatch(calculateTotals());
          }}
        >
          <AiOutlineClose className="text-[20px]" />
        </button>
      </div>
    </div>
  );
};
export default CartItem;
