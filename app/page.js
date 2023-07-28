import Product from "@/components/Product";
import { getCategories, getProducts } from "@/utils";
import Category from "@/components/Category";
import Success from "@/components/Success";
import { BsCartCheck } from "react-icons/bs";
import Link from "next/link";

export default async function Home({ searchParams }) {
  const products = await getProducts(searchParams?.category);
  const categories = await getCategories();

  return (
    <>
      <Success />
      <div className="flex flex-col items-center gap-[40px] md:gap-[80px] px-[20px] py-[40px] md:py-[80px] relative ">
        <div className="flex flex-wrap gap-[20px] lg:gap-[40px] items-center justify-center">
          {categories.map((category) => (
            <Category
              key={category}
              category={category}
              selected={searchParams?.category}
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-[20px] md:gap-[40px justify-center">
          {products?.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
        <Link
          href={"/cart"}
          className="p-[10px] fixed bottom-[20px] right-[20px] lg:bottom-[50px] lg:right-[50px] w-[80px] h-[80px] bg-gradient-to-r from-primary-1 to-primary-2 rounded-full flex items-center justify-center hover:from-primary-3 hover:to-primary-4 animate-pulse"
        >
          <BsCartCheck className="text-[40px] text-white" />
        </Link>
      </div>
    </>
  );
}
