import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const productSlice = createSlice({
    name: "products",
    initialState :{
        product : []
    },
    reducers:{
        addItem :(state , action) =>{
            state.product.push(action.payload)
        }
    }
})

export const {addItem} = productSlice.actions
export default productSlice.reducer