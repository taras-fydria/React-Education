import {counterSlice} from './counter'
import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";


const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})

export default store
export const counterActions = counterSlice.actions
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export * as counterSlice from './counter'