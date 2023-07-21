import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICartItem} from "../components/Cart";

export interface CartState {
    items: ICartItem[],
    totalQuantity: number
}

const initialState: CartState = {
    items: [],
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action: PayloadAction<ICartItem>) {
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)
            if (!existingItem) {
                state.items.push(newItem)
            }else {
                existingItem.quantity++
                existingItem.total = existingItem.total + newItem.price
            }
        },
        removeItem(state, action:PayloadAction<string>){
            const id = action.payload
            const existingItem = state.items.find(item=> item.id === id)
       state.totalQuantity--
        }
    }
})

export default cartSlice
export const cartActions = cartSlice.actions