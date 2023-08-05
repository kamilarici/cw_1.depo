import React from "react";


const ProductDetails = () => {
 



  if (false) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }



  return (
    <section className="pt-32 pb12 lg:py32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0 ">
            <img className="max-w-[200px] lg:max-w-sm" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[ mx-auto]">
       
Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6 "> $ 102
            </div>
            <p className="mb-8">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
            <button  className="bg-primary py-4 px-8 text-white">Add To Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
