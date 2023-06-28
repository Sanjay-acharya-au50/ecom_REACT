import React from 'react'
import Navbar from '../navbar/Navbar';
import Announcement from '../announcement/Announcement';
import Slider from '../sliders/Slider';
import Product from '../productList/Product';
import Footer from '../footer/Footer';
import FooterPhoto from '../footerPhoto/FooterPhoto';




const Home = () => {
  return (
    <div>

    <Navbar/>
    <Announcement/>
    <Slider/>
    <Product/>
    <FooterPhoto/>
    <Footer/>
    
    </div>
  )
}

export default Home;