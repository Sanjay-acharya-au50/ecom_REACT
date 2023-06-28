import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const notify = () =>

  toast(
      "there! My name is Sanjay, and I'm sorry to inform you that this page is still a work in progress and has not been completed yet. We are actively working on it to bring you valuable content and a seamless user experience..!"
    );

  return (
    <>
      <Navbar />
      <div className="h-[800px] w-full flex justify-center items-center text-center">
        <div className="h-[600px] w-[500px]  flex flex-col justify-center items-center">
          <div className="h-[400px] bg-orange-200 rounded-lg w-[300px] flex flex-col justify-center items-center ">
            <div className="text-2xl">Create a Account</div>
            <div className="flex flex-col justify-center items-center w-full  p-2">

                <input
                  type="text"
                  className=" w-[80%] m-1 rounded p-1"
                  placeholder="name"
                />
                <input
                  type="email"
                  className=" w-[80%] m-1 rounded p-1"
                  placeholder="email"
                />
                <input
                  type="password"
                  className=" w-[80%] m-1 rounded p-1"
                  placeholder="confirm password"
                />
                <button onClick={notify}
                  type="submit"

                  className="bg-[black] text-white p-2 rounded w-[80%] mt-1"
                >
                  Register
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
