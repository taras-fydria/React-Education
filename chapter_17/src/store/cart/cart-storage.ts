import {ICartState, ICartStorage} from "../../types";

export default class CartStorage implements ICartStorage {

    private _key: string = 'cart_storage'
    private _storageExist = typeof window.localStorage.getItem(this.key) === 'string'

    constructor(state: ICartState) {
        if (!this.storageExist) {
            this.setStorage(state)
            this.storageExist = true
        }
    }

    get key(): string {
        return this._key
    }

    set key(key: string) {
        this._key = key
    }

    setStorage(state: ICartState) {
        const stateJSON = JSON.stringify(state)
        window.localStorage.setItem(this.key, stateJSON)
    }

    getStorage(): ICartState {
        const storageState = window.localStorage.getItem(this.key)
        return JSON.parse(storageState ? storageState : '')
    }

    get storageExist(): boolean {
        return this._storageExist;
    }

    set storageExist(value: boolean) {
        this._storageExist = value;
    }
}