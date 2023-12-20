import React from 'react'
import useMenu from '../Constants/useMenu';

const MenuHeader = ({id}) => {
    const menu = useMenu(id)
    if (!menu || !menu.cards || menu.cards.length === 0) {
      return ; 
    }
    const card1 = menu.cards[0]
    const card= card1.card.card.info
  return (
    <>    <div className='flex justify-between '>

    <div>
      <h1 className='text-lg font-bold'>{card.name}</h1>
      {card.cuisines.map((item) => <span className='text-[12px] font-light  text-gray-500'>{item} </span>)}
      <h1 className='text-[12px] font-light  text-gray-500'>{card.areaName}</h1>
      <p className='text-[13px] font-light mt-1  text-gray-500' >{card.feeDetails.message}</p>

    </div>

    <div className='border-2 p-1 rounded-lg flex flex-col justify-center text-center '  >
      <p className='mb-1 text-[11px] text-green-700 font-bold'>{card.avgRating}</p>
      <hr className='h-1 w-[80%] my-0 mx-auto text-center content-center'/>
      <p className='mt-1 text-[8px] font-bold text-gray-500	'>{card.totalRatingsString}</p>
    </div>      

   
  </div>

  <hr className='h-1 w-[100%] mt-6 my-0 mx-auto text-center content-center border-dashed border-gray-300 '/>
  </>

  )
}

export default MenuHeader