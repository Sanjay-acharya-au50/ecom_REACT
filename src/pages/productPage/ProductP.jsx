import  {useParams} from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from '../../components/footer/Footer'
import { useState,useEffect, useContext } from "react";
import {popularProducts} from '../../components/data'
import {CartContext} from '../../context/cart_context'

const ProductP = () => {
const {id} = useParams()
const {addToCart} = useContext(CartContext)
// console.log(id);
  const [fetchProduct, setProduct] = useState(popularProducts);


  const [single, setSingle] = useState([]);
  console.log("single",single);

  const [incDec, setIncDec] = useState(1)

  useEffect(()=>{
    setSingle(fetchProduct[id-1]);
  },[])

  // console.log(single);

  const handleQuantity = (val) => {
    if( val == "dec"){

      incDec > 1 && setIncDec(incDec - 1)
    }else{
      setIncDec(incDec +1)

    }
  }



  return (
    <div>
      <Navbar />

      <div className="md:h-[800px] p-2 md:flex bg-orange-200 justify-center items-center">
        <div className="">
          <div className="h-full md:grid grid-cols-2  sm:flex flex-col justify-center items-center">
            <div className="grid-span-1 bg-white shadow-3xl rounded-3xl flex justify-center items-center">
              <img
                src={single.img}
                className="sm:h-[300px] m-1 md:h-[400px] sm:w-[300px] md:w-[400px] rounded"
              ></img>
            </div>

            <div className="grid-span-1 bg-orange-100 rounded-lg md:rounded-none m-1 shadow-3xl">
              <p className="text-[23px] md:text-3xl font-bold p-3 sm:text-center md:text-start ">{single.name}</p>

              <p className="p-3 md:text-[21px] text-[15px]">
               {single.desc}
              </p>

              <p className="p-3 text-3xl md:text-4xl">$ {single.price}</p>
              

                <div className="flex p-3  md:justify-start sm:justify-center items-center">


                <div className="flex justify-center items-center bg-white shadow-2xl m-2 rounded-lg text-[18px] md:text-[20px]">
                
                <button  className="p-[11px]" onClick={()=>addToCart(single.id)}>Add to Cart</button>

                </div>



                </div>


            </div>
          </div>
        </div>
      </div>

        <Footer/>
    </div>
  );
};

export default ProductP;

{/* <Link to='/cart'>

</Link> */}
