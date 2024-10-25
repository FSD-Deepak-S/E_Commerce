import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";

export default function Cart({ cart,setCart}) {
  const [tprice,settprice] = useState(0)

  useEffect(()=>{
    a()
  },[settprice])

  const a = ()=>{
    let tot = 0
    cart.map((item)=>{
     tot += item.price
    }) 
    settprice(tot)
   }

   const removeCart = (cartitem) =>{
    setCart(pval=>pval.filter(item=>item.id !== cartitem.id))
   }


  

  return (
    <div className="relative top-40 md:top-36 bg-slate-400 py-10 overflow-scroll sm:overflow-auto">
      <table className="table-fixed mx-auto border-separate border-2 bg-white">
              <thead>
                <tr>
                  <th className="border-2 py-3">Item</th>
                  <th className="border-2 py-3">Price</th>
                  <th className="border-2 py-3">Quantity</th>
                  <th className="border-2 py-3">Total</th>
                </tr>
              </thead>
              <tbody>
      {cart.map((cartitem, cartindex) => {
        const [quantity, setQuantity] = useState(1)
        return (
              // <CartItem cartitem={cartitem} key={cartindex} totalPrice={totalPrice}/>

              <tr key={cartindex}> 
              <td className="border-2 flex items-center gap-3 p-10">
                <img src={cartitem.image} className='h-16' alt="" />
                <div className="text-nowrap">{cartitem.title}</div>
                </td>
              <td className="border-2 px-10">₹ {cartitem.price}</td>
              <td className="border-2 px-10">
                <button className='border-2 p-2' onClick={ ()=>{quantity !=1 ? (setQuantity(val=>val-1),settprice(pval=>pval-cartitem.price)): ""}}>-</button>
                <span className='p-2 font-extrabold'>{quantity}</span>
                <button className='border-2 p-2' onClick={ ()=>{quantity >=1 ? (setQuantity(val=>val+1),settprice(pval=>pval+cartitem.price)): ""}}>+</button>
              </td>
              <td className="border-2 px-10 font-extrabold">₹<span className='totprice'>{((cartitem.price)*quantity).toFixed(2)}</span> </td>
              <td><button className="text-sm text-white px-4 py-2 bg-red-500 rounded-lg font-bold" onClick={()=>{removeCart(cartitem)}}>Remove from Cart</button></td>
</tr>
             
        );
      })}
      <tr>
        <td colSpan={3} className="text-right py-3">SubTotal</td>
        <td className="text-center py-3">{tprice.toFixed(2)}</td>
      </tr>
      <tr>
        <td colSpan={3} className="text-right py-3">Discount (10%)</td>
        <td className="text-center py-3">{((tprice.toFixed(2)/100)*10).toFixed(2)}</td>
      </tr>
      <tr>
        <td colSpan={3} className="text-right py-3">Grand Total</td>
        <td className="text-center py-3">{((tprice.toFixed(2))-(tprice.toFixed(2)/100)*10).toFixed(2)}</td>
      </tr>
       </tbody>
       </table>
    </div>
  );
}
