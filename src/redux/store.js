import { configureStore } from "@reduxjs/toolkit"
import publicStatesSlice from "./reducers/publicStatesSlice"
import NikeSlice from "./reducers/NikeSlice"


const store = configureStore({
    reducer:{
        publicStatesSlice: publicStatesSlice,
        nikeSlice: NikeSlice
    }
})
export default store