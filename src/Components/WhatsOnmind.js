import React from 'react'
import { useSelector } from 'react-redux'
 const imageSource = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,c_fill/";

const WhatsOnmind = () => {
    const selector = useSelector((store) => store.product.product)
    console.log(selector[0])
    if(selector.length === 0) return 
   const data = selector[0][1]?.card?.card?.gridElements?.infoWithStyle?.info
  
  

  return (
    <div className='pt-5 mb-10'>
      <h1 className='text-2xl font-bold'>What's on your mind?</h1>
    <div className='flex flex-start overflow-auto pt-10'>
            {data && data.map((items) => (
                <>
                <img key={items.imageId} src={imageSource + items.imageId} className=' h-48	'/>
                
                </>
            ))}
        </div>
        </div>         
  )
}

export default WhatsOnmind