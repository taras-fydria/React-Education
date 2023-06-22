import React, {FC, ReactNode, useReducer} from "react";
import {CartReducerActions, ICartContext, ICartItem} from "../../types";
import {CartContext} from "./cart-context";
import cartReducer, {cartStorage} from "./cart-reducer";

const initializer = (state: any) => state

export const CartProvider: FC<{ children: ReactNode }> = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, cartStorage.getStorage(), initializer)

    const addItemToCartHandler = (item: ICartItem) => {
        dispatchCartAction({type: CartReducerActions.ADD, item})
    }

    const removeItemFromCartHAndler = (id: string) => {
        dispatchCartAction({type: CartReducerActions.REMOVE, id})
    }

    const clearCartHandler = () => dispatchCartAction({type: CartReducerActions.CLEAR})

    const cartContext: ICartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHAndler,
        clearItems: clearCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
