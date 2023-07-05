
import { createSlice } from '@reduxjs/toolkit';

const counterslice = createSlice({
    name:'counter',
    initialState: {
       count: 0,
    },

    reducers: {
        increment(state,action) {
            console.log(state);
            state.count+=1
        },
        decrement(state,action){
            state.count-=1
        }

    }
});

export const {increment,decrement} = counterslice.actions;
export default counterslice.reducer;

