export interface IState {
    counter: number
    showCounter: boolean
}

export enum Actions {
    INCREMENT,
    DECREMENT,
    TOGGLE
}

interface Payload {
    amount?: number
}

export interface IncrementAction {
    type: Actions.INCREMENT,
    amount: number
}

export interface DecrementAction {
    type: Actions.DECREMENT
}

export type ActionType = {
    type: Actions,
    payload?: Payload
}

slice