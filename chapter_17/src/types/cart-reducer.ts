import {IMeal} from "./meals-types";

export interface ICartItem extends IMeal {
    amount: number
}

export interface ICartState {
    items: ICartItem[],
    totalAmount: number
}

export enum CartReducerActions {
    ADD,
    REMOVE,
    CLEAR
}

export interface CartDispatchAction {
    type: CartReducerActions,
    item: ICartItem
}


export type CartAction =
    | {
    type: CartReducerActions.ADD,
    item: ICartItem
} | {
    type: CartReducerActions.REMOVE,
    id: string
} | {
    type: CartReducerActions.CLEAR,
}