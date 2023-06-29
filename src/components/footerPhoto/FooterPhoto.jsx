import React from 'react'
import { AiFillGithub,AiFillFacebook,AiOutlineInstagram,AiFillLinkedin } from 'react-icons/ai';

import photo from '../footerPhoto/photo.png'
// import ph from'../footerPhoto/p.webp'
import c from '../footerPhoto/c.png'
const FooterPhoto = () => {
  return (
    <div className='w-full h-[300px] md:h-[550px]  flex flex-col justify-between items-center  border-t-3xl bg-[white] '>


        {/* <img src={ph} className='h-[300px] w-[500px]'/> */}
        <div className='w-[600px]  flex justify-center items-center flex-col'>
        <div>

        <img src={c} className='h-[150px] md:h-[200px] w-[300px] md:w-[400px] border-b'/>
        </div>
        <div className='flex text-3xl '>

                <a href='https://www.linkedin.com/in/sanjay-acharya-693a58121/' target="_blank" alt='LinkedIn'>  <AiFillLinkedin className='m-2 text-3xl hover:opacity-90 hover:scale-125 duration-500'/></a>
                <a href='https://github.com/Sanjay-acharya-au50' target="_blank" alt='GitHub'>  <AiFillGithub className='m-2 text-3xl hover:opacity-90 hover:scale-125 duration-500'/></a>
          <a href='https://www.instagram.com/sanju_93__/' target="_blank" alt='instagram' >  <AiOutlineInstagram className='m-2 text-3xl hover:opacity-90 hover:scale-125 duration-500'/> </a>
                <a href='https://www.facebook.com/sanjay.acharya.98229' target="_blank" alt='Facebook'>  <AiFillFacebook className='m-2 text-3xl hover:opacity-90 hover:scale-125 duration-500'/></a>

       
        </div>
        {/* <button className='border'>click</button> */}
        </div>

        <img src={photo}/>

    </div>
  )
}

export default FooterPhoto