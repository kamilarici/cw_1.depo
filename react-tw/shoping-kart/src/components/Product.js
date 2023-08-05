import React from "react";

import { BsPlus, BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="absolute top-6 -right-11 group-hover:right-5  p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/4534`}
            className="flex justify-center items-center bg-white w-12 h-12 text-primary drop-shadow-xl "
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">
          Men's Clothing
        </div>
        <Link to={`/product/4534`}>
          <h2 className="font-semibold mb-1">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </h2>
        </Link>
        <div className="font-semibold">$ 109.95</div>
      </div>
    </div>
  );
};

export default Product;
