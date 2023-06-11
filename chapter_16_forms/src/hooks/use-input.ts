import {ChangeEvent, useState} from "react";
import {UseInput} from "../types";

const useInput = (validateValue: (value: FormDataEntryValue) => boolean): UseInput => {
    const [enteredValue, setEnteredValue] = useState<string>('')
    const [isTouched, setIsTouched] = useState<boolean>(false)

    const valueIsValid: boolean = validateValue(enteredValue)
    const hasError = !valueIsValid && isTouched

    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setEnteredValue(event.target.value)

    const inputBluerHandler = () => setIsTouched(true)

    const resetValue = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        inputChangeHandler,
        inputBluerHandler,
        resetValue
    }
}

export default useInput