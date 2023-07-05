/*import {configureStore} from "@reduxjs/toolkit";
import { customreducer } from "./Reducer";

const store = configureStore({
    reducer: {
        custom : customreducer
    },

});


export default store;*/

import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./TodoSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})
export default store;