import {ICartState} from "./cart-reducer";

export interface ICartStorage {
    key: string,
    storageExist: boolean

    getStorage(): ICartState

    setStorage(state: ICartState)
}