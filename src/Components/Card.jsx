import React, { useState } from "react";

export default function Card({ product,addtocart,removefromcart}) {
  const [status, setStatus] = useState(false);

    
  const updateCart = ()=>{

    status ? 
    (setStatus(false),
    removefromcart(product.id))
    
    : 
    (setStatus(true),
    addtocart(product))
    
  }

  return (
    <div className="shadow-xl">
      <div className="w-96 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       
       <div className="flex justify-center">
       <img
            className="p-8  rounded-t-lg h-52 max-w-full"
            src={product.image}
            alt="product image"
          />
       </div>
         
        <div className="px-5 pb-5 m-3">
          
            <h5 className="text-lg h-20 font-semibold tracking-tight text-gray-900 dark:text-white text text-wrap">
              {product.title}
            </h5>
         
          <div className="mt-2.5 mb-5">
            <span className="bg-blue-100  text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              Rating {product.rating.rate}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ₹{product.price}
            </span>
            <button 
            onClick={()=>updateCart()}

            className={status ? ("text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center") :
                ("text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center")
            }>
              {status ? "Remove from cart" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>


      



    </div>
  );
}
