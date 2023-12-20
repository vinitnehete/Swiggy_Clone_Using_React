import React from 'react'
import { useSelector } from 'react-redux'
import { imageSource } from '../Constants/utils'

const BestInCities = () => {
    const selector = useSelector((store) => store.product.product)
    
    if(selector.length === 0) return 
   const data = selector[0][7]?.card?.card?.brands
   
  return (
    <div className='pt-5'>
         <h1 className='text-2xl font-bold'>Restaurants with online food delivery in Pune</h1>
    <div className='pt-7 grid grid-cols-4 gap-10 '>
        
        {
            data.map((items , index)=>{
                return  <button key={index} className='border-solid border-2 p-3 w-72 rounded-2xl'>{items.text}</button>
            })
        }
       
    </div>
    </div>
  )
}

export default BestInCities