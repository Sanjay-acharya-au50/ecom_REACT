import React, {useContext} from 'react'
import { MdShoppingCart } from 'react-icons/md';
import './navbar.css'
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import {CartContext} from '../../context/cart_context'



const Navbar = () => {
const {item} = useContext(CartContext);
console.log(Object.values(item));
let count = 0;

for(let x in item){
  count += item[x]
}
console.log("count",count)


  // const quantity = useSelector(state => state.cart.quantity)
  // console.log(quantity);
    
  return (
    <div className='bg-[#2874f0] sm:h-[60px] md:h-[70px] text-white flex justify-center items-center sticky top-0 '>
    <div className='container mx-auto flex justify-between'>

        <div>

        <Link to='/'>
            <p className='text-[17px] md:text-2xl p-2 m-2 navLogo'>SAN Shop.in</p>

        </Link>
        </div>
        <div className='flex justify-end items-center m-1'>
            {/* <input type='text' placeholder='serach' className='border border-black p-2 m-2'/> */}
            
            <Link to='/register'>

            <button className='text-[18px] bg-[white] text-blue-700 md:text-[19px] rounded p-1 m-2'>Register</button>
            </Link>
            <Link to='/login'>

            <button className='text-[18px] bg-[white] text-blue-700 md:text-[19px] rounded p-1 m-2'>Login</button>
            </Link>
            <Link to='/cart'>

            <div className='sm:text-[20px] md:text-2xl flex m-1'><MdShoppingCart/><sup className=''>{count}</sup></div>
            </Link>
            </div>

    </div>
    </div>
  )
}

export default Navbar

