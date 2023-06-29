import React, { useContext } from "react";
import Navbar from "../../components/navbar/Navbar";

import { popularProducts } from "../data";
import { CartContext } from "../../context/cart_context";
import CartDetail from "./CartDetail";
import Footer from "../footer/Footer";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Cart = () => {
  const notify = () =>
    toast(
      "Hi there! My name is Sanjay, and I'm sorry to inform you that this page is still a work in progress and has not been completed yet. i'm working on it to bring you valuable content and a seamless user experience.!"
    );

  const { item, getTotal } = useContext(CartContext);
  const totalAmount = getTotal();
  // console.log(totalAmount);
  return (
    <div className="">
      <Navbar />
      <p className="text-center">Your Bag</p>

      {
        totalAmount === 0 ? (<p className="bg-orange-200 rounded-lg h-[500px] m-2 flex justify-center items-center">Your Cart is empty..</p>) : popularProducts.map((product) => {
          if (item[product.id] !== 0) {
  
            return <CartDetail product={product} />;
          }
        })
      }


      <div className="text-[20px] md:text-[25px] text-bold p-2 flex justify-center flex-col items-center ">
        <p>Total Price: ${totalAmount}</p>
        <button className="bg-black text-white p-2 rounded hover:opacity-90 hover:scale-105 duration-500" onClick={notify}>
          Checkout
        </button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
