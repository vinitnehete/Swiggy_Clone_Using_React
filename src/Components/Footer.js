import React from 'react'

const Footer = () => {
  return (
    <>    <div className='bg-black text-white flex flex-row justify-evenly p-12 gap-1 flex-wrap	'> 
    <div>
        <h1 className='font-bold text-2xl pb-2'>Swiggy</h1>
        <p className='font-light text-xs'>© 2023 Bundl Technologies Pvt. Ltd</p>
    </div>

    <div className='flex flex-col gap-5'>
    <h1 className='font-bold text-lg '>Company</h1>
        <p className='font-light text-sm'>About</p>
        <p className='font-light text-sm'>Carrers</p>
        <p className='font-light text-sm'>Team</p>
        <p className='font-light text-sm'>Swiggy One</p>
        <p className='font-light text-sm'>Swiggy Instamart</p>
        <p className='font-light text-sm'>Swiggy Genie</p>
    </div>
    <div  className='flex flex-col gap-5'>
        <h1 className='font-bold text-lg '>Contact Us</h1>
        <p className='font-light text-sm'>Help & Support</p>
        <p className='font-light text-sm'>Patners with us</p>
        <p className='font-light text-sm'>Ride with us</p>
       
       <div className='flex flex-col gap-4 pt-6'>
       <h1 className='font-bold text-lg '>Legal</h1>
       <p className='font-light text-sm'>Terms & Conditions</p>
        <p className='font-light text-sm'>Cookies Policy</p>
        <p className='font-light text-sm'>Privacy Policy</p>
       </div>
    </div>
    <div className='flex flex-col gap-5'>
    <h1 className='font-bold text-lg '>We deliver to:</h1>
        <p className='font-light text-sm'>Bangalore</p>
        <p className='font-light text-sm'>Gurgaon</p>
        <p className='font-light text-sm'>Hyderabad</p>
        <p className='font-light text-sm'>Delhi</p>
        <p className='font-light text-sm'>Mumbai</p>
        <p className='font-light text-sm'>Pune</p>
        <select className='bg-black text-white'>
            <option className='font-light text-sm'>589 cities</option>
        </select>
    </div>

   
    </div>

    <div className='flex justify-center items-center bg-black text-white'>
        <p className='font-light text-xs'>© 2023 Swiggy Clone By Vinit Nehete</p>
    </div>
    </>

  )
}

export default Footer