import React from 'react'
import { useSelector } from 'react-redux'
import { imageSource } from '../Constants/utils'

const Banner = () => {
    const selector = useSelector((store) => store.product.product)
    
    if(selector.length === 0) return 
   const data = selector[0][0]?.card?.card?.gridElements?.infoWithStyle?.info
  
   
  return (
    <div>
      <h1 className='text-2xl font-bold	pb-5'>Best Offers for you</h1>
    <div className='flex flex-start overflow-auto '>
            {data && data.map((items) => (
                <img key={items.imageId} src={imageSource + items.imageId} className='mx-3 h-[250px] rounded-xl	'/>
            ))}
        </div>
        </div>         
  )
}

export default Banner