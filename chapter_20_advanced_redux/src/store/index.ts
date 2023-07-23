import {configureStore} from "@reduxjs/toolkit";
import uiSlice from "./ui.slice.ts";
import cartSlice from "./cart.slice.ts";

export * from './ui.slice.ts'
export * from './cart.slice.ts'

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store