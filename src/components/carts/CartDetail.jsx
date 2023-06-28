import React, { useContext } from "react";
import { CartContext } from "../../context/cart_context";

const CartDetail = ({ product }) => {
const {item, addToCart, removeToCart} = useContext(CartContext);


  return (
    <>

    <div className="flex justify-center items-center flex-col m-2 bg-orange-200 rounded-lg ">

    <img src={product.img} className="h-[270px] w-[270px] shadow-2xl rounded-3xl bg-white m-2"/>
      <p className="text-center mt-4 text-3xl">${product.price}</p>
      <p className="text-center">{product.cat}</p>
        <div className="p-3  flex justify-between items-center gap-3">
            <button onClick={()=> removeToCart(product.id)} className="text-2xl">-</button>
            <input className="border text-center shadow-lg block text-[20px]" type="text" value={item[product.id]}/>
            <button onClick={()=> addToCart(product.id)} className="text-3xl">+</button>
        </div>
    </div>
   
    </>

  );
};

export default CartDetail;
