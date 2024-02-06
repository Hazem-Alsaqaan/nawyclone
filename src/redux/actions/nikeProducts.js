import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getNikeProducts = createAsyncThunk("nike/getNikeProducts", async()=>{
    try{
        const response = await axios.get(`https://fakestoreapi.com/products`)
        return response.data
    }catch(err){
        console.log(err)
    }
})