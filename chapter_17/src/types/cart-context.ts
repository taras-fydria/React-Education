import {ICartItem, ICartState} from "./cart-reducer";

export interface ICartContext extends ICartState {
    addItem(item: ICartItem): void

    removeItem(id: string): void

    clearItems():void
}