import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div className='header'>
       <div>
        <img className='img' src='https://i.pinimg.com/736x/b3/8a/a1/b38aa1b21050b0e769a97eb751d12829.jpg'/>
        </div>
        <div className='right-header'>
            <span>Search</span>
            <span>Offers</span>
            <span>Help</span>
            <span>Sign In</span>
            <span>Cart</span>
        </div>
    </div>
  )
}

export default Header