import React from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import {sliderItems} from '../../components/data'
import { useState } from "react";
import './sliders.css'
// import photo from '../footerPhoto/FooterPhoto/photo.png'

const Slider = () => {

// const [data, setData] = useState(0);
const [activeIndex, setActiveIndex] = useState(0);



// left swipe cart
const handleLeft = () => {
  // if left side is zero and i will make it as sliderItem.length -1 otherwise i wiil make minus (-) with current index (data)
  setActiveIndex(activeIndex == 0 ?  sliderItems.length-1 : activeIndex-1);

  };

// right swipe cart
const handleRight = () => {
  // if data equals to sliderItems.length-1 i ll make it as 0 otherwise i ll make current index + 1 (data+1)
  setActiveIndex(activeIndex == sliderItems.length-1 ? 0 : activeIndex+1)
}


  // console.log(sliderItems);
  return (
    <div className="w-full h-[700px]  mt-1 flex justify-center items-center "
    >
      <button onClick={handleLeft} className="text-4xl">
        <AiFillCaretLeft />
      </button>

      <div className="p-2 bg-[white] text-center rounded md:text-start md:h-[500px]  md:w-[90%] flex flex-col md:flex-row justify-around items-center shadow-2xl">
      
      <img src={sliderItems[activeIndex].img} className='h-[350px] md:h-[400] w-[250px] md:w-[240px]' alt='lod'/> 
        <div>
        <p className="cardContent text-[30px] md:text-[50px] font-bold text-orange-500">{sliderItems[activeIndex].title}</p>
        <p className="cardContent font-bold text-orange-500">{sliderItems[activeIndex].desc}</p>

        </div>
      

      </div>
      <button onClick={handleRight} className="text-4xl">
        <AiFillCaretRight />
      </button>
    </div>
  );
};

export default Slider;
