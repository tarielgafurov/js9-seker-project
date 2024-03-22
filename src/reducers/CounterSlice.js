import { createSlice } from "@reduxjs/toolkit"

 const initialState={
    counter:1
 }


 export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        counterPlus(state,action){
            state.counter = state.counter +1
            console.log(action);
        },
        
    }
 })
 


 


