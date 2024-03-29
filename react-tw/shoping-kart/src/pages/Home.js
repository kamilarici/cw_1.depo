import React from "react";
import Product from "../components/Product";
import Hero from "../components/Hero";
import { useProductContext } from "../contexts/ProductContext";

const Home = () => {
  const { categories, products, filterProducts, filterAllProducts } =
    useProductContext();
  return (
    <div>
      <Hero />

      <div className="container mx-auto mt-6 flex justify-center items-center gap-4 flex-wrap">
        <button
          onClick={() => filterAllProducts()}
          type="button"
          className="inline-block rounded-full border-4 border-[#f5e6e0b9] px-6 pb-[6px] pt-2 text-sm font-medium uppercase text-primary transition duration-300 ease-in-out  hover:bg-[#f5e6e0b9] "
        >
          All
        </button>
        {categories.map((item, i) => (
          <button
            key={i}
            type="button"
            onClick={() => filterProducts(item)}
            className="inline-block rounded-full border-4 border-[#f5e6e0b9] px-6 pb-[6px] pt-2 text-sm font-medium uppercase text-primary transition duration-300 ease-in-out  hover:bg-[#f5e6e0b9] "
          >
            {item}
          </button>
        ))}
      </div>
      <section className="py-10 ">
        <div className="container mx-auto">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 max-w-sm mx-auto md:max-w-none md:mx-0">
            {products.map((item) => (
              <Product key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
