"use client";

import { useRouter } from "next/navigation";

const Category = ({ category, selected }) => {
  const router = useRouter();
  const updateSearchParams = (category) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (category && category !== selected) {
      searchParams.set("category", category);
    } else {
      searchParams.delete("category");
    }
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname, { scroll: false });
  };
  return (
    <button
      onClick={() => updateSearchParams(category)}
      className={`uppercase hover:bg-gradient-to-r hover:scale-110 duration-100 tracking-[3px] ${
        selected === category && "font-semibold border-b-2 border-text-color"
      }`}
    >
      {category}
    </button>
  );
};
export default Category;
