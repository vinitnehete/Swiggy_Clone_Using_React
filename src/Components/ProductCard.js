import React from 'react'

const ProductCard = ({source, alt , name , rating , cuisines , address , time}) => {
  return (
    <div >
        <div className='h-60 w-64' >
          <img src={source} alt={alt} className='object-cover rounded-2xl  '/>
          <div className='ml-2 pt-2'>
          <p className='font-bold'>{name}</p>
          <p className='font-bold'>✭ {rating} .{time} mins</p>
          <p className='font-light	text-sm'>{address}</p>
        </div>
        </div>
       
    </div>
  )
}

export default ProductCard

