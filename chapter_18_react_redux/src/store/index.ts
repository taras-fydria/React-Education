import {configureStore} from "@reduxjs/toolkit";
import {counterSlice} from "./counter";
import {authSlice} from "./auth";


const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store