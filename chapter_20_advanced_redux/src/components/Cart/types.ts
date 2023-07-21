export interface ICartItem {
    quantity: number,
    total: number,
    title: string
    price: number,
    id: string
}

export interface ICartItemComponent{
    item: ICartItem
}

