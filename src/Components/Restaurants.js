import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { imageSource } from '../Constants/utils'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'
const Restaurants = () => {
   
    const selector = useSelector((store) => store.product.product)
    if(selector.length === 0) return 
   
    const data = selector[0][2].card.card.gridElements.infoWithStyle.restaurants

    
  
  return (
    <div className='pt-5 mb-10'>
    <h1 className='text-2xl font-bold'>Restaurants with online food delivery in Pune</h1>
    
    <div className='pt-7 grid grid-cols-4 gap-12 ' >
        {data.map((items ,index)=>{
            return (
              <Link to={"/restaurant/" + items.info.id}> 
            <ProductCard
            key={index} 
            source={imageSource + items.info.cloudinaryImageId}
            name={items.info.name}
            rating={items.info.avgRatingString}
            time={items.info.sla.deliveryTime}
            address={items.info.areaName}
          />
          </Link>
            )
        })}
    </div>




    </div>      
  )
}

export default Restaurants