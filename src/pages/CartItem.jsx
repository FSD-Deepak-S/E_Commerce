import React, { useState,useEffect } from 'react'

export default function CartItem({cartitem,cartindex,totalPrice}) {
    const [quantity, setQuantity] = useState(1)

    

  return (
   
          <tr key={cartindex}> 
            <td className="border-2 flex items-center gap-3 p-10">
              <img src={cartitem.image} className='h-16' alt="" />
              <div>{cartitem.title}</div>
              </td>
            <td className="border-2 px-10">{cartitem.price}</td>
            <td className="border-2 px-10">
              <button className='border-2 p-2' onClick={ ()=>{quantity !=1 ? (setQuantity(val=>val-1),totalPrice()): ""}}>-</button>
              <span className='border-2 p-2 font-extrabold'>{quantity}</span>
              <button className='border-2 p-2' onClick={ ()=>{quantity >=1 ? (setQuantity(val=>val+1),totalPrice()): ""}}>+</button>
            </td>
            <td className="border-2 px-10 font-extrabold">₹<span className='totprice'>{((cartitem.price)*quantity).toFixed(2)}</span> </td>
          </tr>
  )
}
