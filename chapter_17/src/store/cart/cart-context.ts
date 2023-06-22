import {createContext} from "react";
import {ICartContext} from "../../types";

export const CartContext = createContext<ICartContext>({
    items: [],
    totalAmount: 0,
    addItem: () => {
    },
    removeItem: () => {
    },
    clearItems: () => {
    }
})