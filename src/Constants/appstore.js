import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice"
const appstore = configureStore({
    reducer:{
        product : productReducer,
        
    }
})

export default appstore