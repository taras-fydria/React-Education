import {FC, FormEvent, useRef, useState} from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import {EInput} from "../../UI/input";

const MealItemForm: FC<{ onAddToCArt(number: number): void }> = ({onAddToCArt}) => {
    const [amountIsValid, setAmountISValid] = useState<boolean>(true)
    const amountInputRef = useRef<HTMLInputElement>()
    const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        const enteredAmount = amountInputRef.current.value
        const enteredAmountNumber = +enteredAmount
        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountISValid(false)
            return
        }
        onAddToCArt(enteredAmountNumber)
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label={`Amount`}
                input={{
                    id: 'amount',
                    step: '1',
                    max: '5',
                    type: EInput.number,
                    defaultValue: '1',
                    min: '1'
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && (
                <p>
                    Please enter a valid amount (1-5)
                </p>
            )}
        </form>
    )
}

export default MealItemForm