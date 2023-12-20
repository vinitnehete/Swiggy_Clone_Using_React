import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import { imageSource } from '../Constants/utils'
import { Link } from 'react-router-dom'
import ShimmerForTop from './ShimmerForTop'

const TopRestaurant = () => {
    const selector = useSelector((store) => store.product.product)
    
    
   
   if(selector.length === 0) {
    return <ShimmerForTop />;

}
const data = selector[0][5].card.card.gridElements.infoWithStyle.restaurants

  return (

    
    <>
    
    <div className='pt-5'>
    <h1 className='text-2xl font-bold pb-5'>Top restaurant chains in Pune
</h1>
    
 

    <div className='flex overflow-x-auto gap-10 h-80'>
  {data.map((items, index) => (
    
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
  ))}
</div>

    </div> 
    </>
  )
}

export default TopRestaurant