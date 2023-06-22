export interface IMeal {
    id: string,
    name: string,
    description: string,
    price: number
}

export type TMeals = IMeal[]

export type TUseDummyMeals = null | TMeals