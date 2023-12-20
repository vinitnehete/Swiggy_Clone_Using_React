import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useMenu from '../Constants/useMenu';
import Header from "./Header"
import MenuHeader from './MenuHeader';
const RestaurantMenu = () => {
  const {id} = useParams();
  

  const menu = useMenu(id)
  if (!menu || !menu.cards || menu.cards.length === 0) {
    return ; 
  }
  const card1 = menu.cards[0]
  const card= card1.card.card.info
  
  return (
    <>
    <Header />
    <div className='px-[330px] py-6'>
     <div className='flex justify-between mb-4'>
      <span className='text-[10px] font-light'>Home / {card.city} / {card.name}</span>
      <button className='text-[15px]'>Search</button>
     </div>

     <MenuHeader id={id}/>

      
     
      
    </div>
    </>
  )
}




export default RestaurantMenu