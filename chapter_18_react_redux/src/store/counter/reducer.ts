import {IState} from "./types.ts";
import {createSlice, PayloadAction, SliceCaseReducers} from "@reduxjs/toolkit";

export const initialState: IState = {
    counter: 0,
    showCounter: true
}
export const counterSlice = createSlice<IState, SliceCaseReducers<IState>>({
    name: 'counter',
    initialState,
    reducers: {
        increment(state: IState, action: PayloadAction) {
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

