import React, {FC, ReactNode, ReducerStateWithoutAction, useReducer} from "react";
import CartContext from "./cart-context";
import cartReducer, {defaultCartState} from "./cart-reducer";
import {CartReducerActions, ICartContext, ICartItem, ICartState} from "./types";

const initializer = (state) => state

const CartProvider: FC<{ children: ReactNode }> = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState, initializer)

    const addItemToCartHandler = (item: ICartItem) => {
        dispatchCartAction({type: CartReducerActions.ADD, item})
    }

    const removeItemFromCartHAndler = (id: number) => {
    }

    const cartContext: ICartContext = {
        items: cartState.items,
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHAndler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider