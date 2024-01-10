import{createSlice}  from "@reduxjs/toolkit";

const counterSlice= createSlice ({
    name:'counterapp',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state,actions)=>{
            console.log("increment clicked")
            state.value= state.value+actions.payload;
        },
        decrement:(state,actions)=>{
            state.value= state.value-actions.payload;
        },
        reset:(state)=>{
            state.value=state.value=0;
        }
    }

});
export const {increment} = counterSlice.actions;
export default counterSlice.reducer;
export const {decrement} = counterSlice.actions;
export const {reset} = counterSlice.actions;

