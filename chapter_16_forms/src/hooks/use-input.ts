import {ChangeEvent, Reducer, useReducer} from "react";
import {SimpleInputAction, SimpleInputReducerActions, SimpleInputState, UseInput} from "../types";

const initialState: SimpleInputState = {
    value: '',
    isTouched: false
}


const inputStateReducer: Reducer<SimpleInputState, SimpleInputAction> = (state, action): SimpleInputState => {
    switch (action.type) {
        case SimpleInputReducerActions.CHANGE:
            return {
                ...state,
                value: action.value,
            }
        case SimpleInputReducerActions.BLUER:
            return {
                ...state,
                isTouched: action.touched
            }
        case SimpleInputReducerActions.RESET:
            return {
                isTouched: false,
                value: ''
            }
    }
}

const useInput = (validateValue: (value: FormDataEntryValue) => boolean): UseInput => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialState)


    const valueIsValid: boolean = validateValue(inputState.value)
    const hasError = !valueIsValid && inputState.isTouched

    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => dispatch({
        type: SimpleInputReducerActions.CHANGE,
        value: event.target.value
    })

    const inputBluerHandler = () => dispatch({type: SimpleInputReducerActions.BLUER, touched: true})

    const resetValue = () => dispatch({type: SimpleInputReducerActions.RESET})

    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        inputChangeHandler,
        inputBluerHandler,
        resetValue
    }
}

export default useInput