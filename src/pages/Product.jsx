import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

export default function Product({setCart}) {
  const [products, setProducts] = useState([]);
  
  const addtocart =(product)=>{
    setCart((setcart)=>[...setcart,product])
  }
  const removefromcart =(id)=>{
    setCart((setcart)=>setcart.filter((item)=>item.id !== id))
  }
  
  useEffect(() => {
    fetchData();
  },[setProducts]);

  const fetchData = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="relative top-28 bg-gray-100">
        <h1 className="font-sans mx-10 text-2xl font-bold underline mb-10">Products</h1>
    <div className="flex justify-evenly flex-wrap  gap-5">
      {products.map((product, index) => {
        return (
          <div key={index} >
            <Card product={product} addtocart={addtocart} removefromcart={removefromcart} />
          </div>
        );
      })}
    </div>
    </div>
  );
}
