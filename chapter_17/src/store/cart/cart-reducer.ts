import {Reducer} from "react";
import CartStorage from "./cart-storage";
import {CartAction, CartReducerActions, ICartItem, ICartState} from "../../types";

const defaultCartState: ICartState = {
    items: [],
    totalAmount: 0
}

export const cartStorage = new CartStorage(defaultCartState)

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

        cartStorage.setStorage({
            ...state,
            items: updatedItems,
            totalAmount: updatedTotalAmount
        })
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

        cartStorage.setStorage({
            items: updatedItems,
            totalAmount: updatedTotalAmount
        })
    } else if (action.type == CartReducerActions.CLEAR){
        cartStorage.setStorage({
            items: [],
            totalAmount: 0
        })
    }

    return cartStorage.getStorage()
}

export default cartReducer