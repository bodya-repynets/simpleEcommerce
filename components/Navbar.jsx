"use client";
import { toggleCart } from "@/redux/cartSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsCartCheck } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((store) => store.cart);
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <div className="flex w-screen justify-around h-[80px] items-center">
      <Link
        scroll={false}
        href={"/"}
        className="text-[24px] hover:scale-110 duration-100"
      >
        Ecommerce
      </Link>
      <button
        onClick={() => router.push("/cart")}
        className="flex relative items-center gap-[5px] justify-center hover:scale-110 duration-100"
      >
        <BsCartCheck className="text-[36px]" />
        <span className="text-[24px]">{cart.amount}</span>
      </button>
    </div>
  );
};
export default Navbar;
