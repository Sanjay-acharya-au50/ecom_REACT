import React, {useState} from "react";
import { popularProducts } from "../data";
import Image from "../Image";

const Product = () => {

  const [item, setItem] = useState(popularProducts);
  // console.log(item);

  const productFilter = (e) => {
    console.log("e:", e);
    const copyProduct = popularProducts.filter((elem)=>{
      return elem.cat === e;
    });
    console.log("copyPr :", copyProduct);
    setItem(copyProduct)
    }

  
  

  return (
    <div className="p-2 md:p-20  flex justify-center flex-col  w-full bg-orange-200">
      <div className="h-[100px]  mt-3 flex justify-around items-center ">
        <button onClick={(e)=>{setItem(popularProducts)}}  className="h-[80px] w-[200px]  m-2 rounded-3xl  flex justify-center items-center shadow-2xl hover:bg-orange-300 hover:scale-105 duration-500">All</button>
        <button onClick={(e)=>{productFilter("Men")}}  className="h-[80px] w-[200px]  m-2 rounded-3xl flex justify-center items-center shadow-2xl hover:bg-orange-300 hover:scale-105 duration-500">Men</button>
        <button onClick={(e)=>{productFilter("Women")}}  className="h-[80px] w-[200px]  m-2 rounded-3xl flex justify-center items-center shadow-2xl hover:bg-orange-300 hover:scale-105 duration-500">Women</button>
        <button onClick={(e)=>{productFilter("Kid")}}  className="h-[80px] w-[200px]  m-2 rounded-3xl flex justify-center items-center shadow-2xl hover:bg-orange-300 hover:scale-105 duration-500">Kid</button>
      </div>

      <div className="p-2  m-2 sm:flex justify-center items-center flex-col md:grid grid-cols-3">
        {item.map((item, id) => {
          return (

              <div 
                className="bg-[white] rounded-lg  m-2 shadow-2xl flex justify-center items-center hover:opacity-90 hover:scale-105 duration-500 "
               key={id}>
                  <Image data={item} className=''/>
              </div>

          );
        })}
      </div>
    </div>
  );
};

export default Product;
