import { createSlice } from "@reduxjs/toolkit"
import { getNikeProducts } from "../actions/nikeProducts"



const nikeSlice = createSlice({
    name: "nike",
    initialState:{
        allProducts: [],
        allProductsLoading: false
    },
    extraReducers: (builder)=>[
        builder.addCase(getNikeProducts.pending, (state, action)=>{
            state.allProductsLoading = true
        }),
        builder.addCase(getNikeProducts.fulfilled, (state, action)=>{
            state.allProductsLoading = false
            state.allProducts = action.payload
        }),
        builder.addCase(getNikeProducts.rejected, (state, action)=>{
            state.allProductsLoading = false;
        })
    ]
})

export default nikeSlice.reducer