import {Reducer} from "react";
import {CartAction, CartReducerActions, ICartState} from "./types";

const cartReducer: Reducer<ICartState, CartAction> = (state, action): ICartState => {
    switch (action.type) {
        case  CartReducerActions.ADD:
            const updatedItems = state.items.concat(action.item)
            const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
            return {
                ...state,
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        default:
            return {...state}
    }
}

export const defaultCartState: ICartState = {
    items: [],
    totalAmount: 0
}

export default cartReducer