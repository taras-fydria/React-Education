export enum SimpleInputReducerActions {
    CHANGE,
    BLUER,
    RESET
}

export type SimpleInputAction =
    | {
    type: SimpleInputReducerActions.CHANGE,
    value: FormDataEntryValue
} | {
    type: SimpleInputReducerActions.BLUER,
    touched: boolean
} | {
    type: SimpleInputReducerActions.RESET
}


export interface SimpleInputState {
    value: FormDataEntryValue,
    isTouched: boolean
}