import {Reducer} from "react";
import {CartAction, CartReducerActions, ICartItem, ICartState} from "./types";

const cartReducer: Reducer<ICartState, CartAction> = (state, action): ICartState => {
    if (action.type === CartReducerActions.ADD) {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        const existingCArtItemIndex = state.items.findIndex(item => item.id === action.item.id)
        const existingCartItem = state.items[existingCArtItemIndex]
        let updatedItems: ICartItem[]

        if (existingCartItem) {
            const updatedItem: ICartItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items]
            updatedItems[existingCArtItemIndex] = updatedItem
        } else {
            updatedItems = state.items.concat(action.item)
        }

        return {
            ...state,
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    } else if (action.type === CartReducerActions.REMOVE) {
        const existingCArtItemIndex = state.items.findIndex(item => item.id === action.id)
        const existingCartItem = state.items[existingCArtItemIndex]
        let updatedItems: ICartItem[]
        const updatedTotalAmount = state.totalAmount - existingCartItem.price
        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)
        } else {
            const updatedItem: ICartItem = {...existingCartItem, amount: existingCartItem.amount - 1}
            updatedItems = [...state.items]
            updatedItems[existingCArtItemIndex] = updatedItem
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    } else {
        return {...state}
    }
}

export const defaultCartState: ICartState = {
    items: [],
    totalAmount: 0
}

export default cartReducer