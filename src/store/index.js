import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../reducers/CounterSlice";

export const store = configureStore({
    reducer:{
        counter:counterSlice.reducer
    }
})