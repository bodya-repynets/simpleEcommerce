"use client";

import { clearCart, setDataFromStorage } from "@/redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "@/components/CartItem";
import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Link from "next/link";
import { GoTrash } from "react-icons/go";
import { GrReturn } from "react-icons/gr";

const Cart = () => {
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cart.products),
      });

      const data = await response.json();
      if (!data.error) {
        await stripe.redirectToCheckout({
          sessionId: data.sessionId,
        });
      } else {
        console.log(data.error);
      }
    } catch (err) {
      console.error("Error in creating checkout session:", err);
    }
  };

  useEffect(() => {
    if (cart.amount > 0) {
      localStorage.setItem("products", JSON.stringify(cart));
    } else {
      const value = localStorage.getItem("products");
      if (value) {
        const data = JSON.parse(value);
        dispatch(setDataFromStorage(data));
      }
    }
  }, [cart.products]);

  return (
    <div className="w-screen min-h-[calc(100vh-80px)] flex flex-col items-center gap-[40px] px-[20px] pt-[40px] pb-[180px] sm:pb-[150px] relative">
      {cart.products.length > 0 && (
        <div className="flex gap-[40px] justify-center items-center">
          <button
            onClick={() => dispatch(clearCart())}
            className="tracking-[3px] flex items-center gap-[10px] hover:scale-110 duration-100"
          >
            <GoTrash className="text-[24px]" />
            <span className="text-[20px]">Clear cart </span>
          </button>
          <Link
            href={"/"}
            className="tracking-[3px] flex items-center gap-[10px] animate-bounce"
          >
            <GrReturn className="text-[24px]" />
            <span className="text-[20px]">Back to shopping</span>
          </Link>
        </div>
      )}
      {cart.products.length > 0 ? (
        <div className="flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[20px]">
            {cart.products.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-[40px] absolute top-[40%]">
          <Link
            href={"/"}
            className="tracking-[3px] flex items-center gap-[10px] animate-bounce"
          >
            <GrReturn className="text-[20px]" />
            <span className="text-[24px]">Back to shopping</span>
          </Link>
        </div>
      )}

      {cart.products.length > 0 && (
        <div className="flex flex-col sm:flex-row gap-[20px] justify-around py-[20px] sm:py-[40px] bg-slate-700 bg-opacity-50 items-center fixed bottom-0 left-0 w-screen">
          <p className="text-[20px] text-text-color font-semibold w-[250px] h-[50px] bg-slate-200 rounded-xl flex items-center justify-center tracking-[3px]">
            Total: $ {cart.sum}
          </p>
          <button
            className="w-[250px] h-[50px] text-white uppercase text-[20px] bg-gradient-to-r from-primary-1 to-primary-2 hover:from-primary-3 hover:to-primary-4 rounded-xl tracking-[3px] border-2 border-white animate-pulse"
            onClick={handleCheckout}
          >
            Buy
          </button>
        </div>
      )}
    </div>
  );
};
export default Cart;
