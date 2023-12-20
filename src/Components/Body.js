import React from 'react'
import Product from './Product'
import WhatsOnmind from './WhatsOnmind'
import TopRestaurant from './TopRestaurant'
import Restaurants from './Restaurants'
import BestInCities from './BestInCities'
import Downloadlogo from './Downloadlogo'
import Header from './Header'
import Footer from './Footer'

const Body = () => {
  return (
    <>
    <Header />
    <div className='mx-32 my-4 p-5'> 

        <Product />
        <WhatsOnmind />

        <hr className="border-t-2 mb-2 " />

        <TopRestaurant />

        <hr className="border-t-2 mb-2 " />

        <Restaurants />

        <hr className="border-t-2 mb-2 " />

        <BestInCities />

       
        
       

    </div>

    <Downloadlogo />
    <Footer />
    </>
  )
}

export default Body