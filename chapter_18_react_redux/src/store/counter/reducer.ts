import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IState {
    counter: number
    showCounter: boolean
}

export const initialState: IState = {
    counter: 0,
    showCounter: true
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state: IState) {
            state.counter++
        },
        decrement(state: IState) {
            state.counter--
        },
        increase(state: IState, action: PayloadAction<number>) {
            state.counter = state.counter + action.payload
        },
        toggleCounter(state: IState) {
            state.showCounter = !state.showCounter
        }
    }
})

export const counterActions = counterSlice.actions

