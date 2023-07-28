"use client";
import { Dialog } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

const Success = () => {
  const router=useRouter()
  const [show, setShow] = useState(false);
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setShow(true);
    }
  }, []);
  return (
    <Dialog
      open={show}
      onClose={() => setShow(!show)}
      className="fixed top-0 left-0 z-10 flex items-center justify-center w-screen h-screen bg-black bg-opacity-60"
    >
      <Dialog.Panel className="bg-gradient-to-l from-primary-1 to-primary-2 rounded-xl w-[300px] h-[300px] flex items-center justify-center relative">
        <p className="w-[200px] text-center font-semibold tracking-wider text-[20px]">
          You have succesfully purchased our products
        </p>
        <button onClick={() => {setShow(!show); router.push('/', { scroll: false })}}>
          <MdClose className="absolute top-0 right-0 text-[40px] m-[10px]" />
        </button>
      </Dialog.Panel>
    </Dialog>
  );
};
export default Success;
