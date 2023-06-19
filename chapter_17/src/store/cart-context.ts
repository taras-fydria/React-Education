import {createContext} from "react";
import {ICartContext} from "./types";

const CartContext = createContext<ICartContext>({
    items: [],
    totalAmount: 0,
    addItem: (item) => {
    },
    removeItem: (id) => {
    }
})


export default CartContext