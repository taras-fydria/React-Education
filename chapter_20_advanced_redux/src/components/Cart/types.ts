export interface ICartItem {
    quantity: number,
    total: number,
    title: string
    price: number
}

export interface ICartItemComponent{
    item: ICartItem
}

