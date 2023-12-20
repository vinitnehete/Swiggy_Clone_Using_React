import React, { useState } from 'react'
import "./Product.css"
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { addItem } from '../Constants/productSlice';
import Banner from './Banner';
const Product = () => {

   
    const dispatch = useDispatch()

    const fetchProduct = async() =>{
        const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const result  = await res.json();
        
        dispatch(addItem(result?.data?.cards))
      }
    
      useEffect(()=>{
        fetchProduct();
      },[])

      
  return(
    <div>
      <Banner />
    </div>
  )
}

export default Product