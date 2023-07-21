import {createSlice} from "@reduxjs/toolkit";

export interface UIState {
    cartIsVisible: boolean
}


const initialState: UIState = {
    cartIsVisible: false,
}


const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible
        }
    }
})

export default uiSlice
export const uiSliceActions = uiSlice.actions