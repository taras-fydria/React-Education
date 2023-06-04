import {ChangeEvent, FormEvent, useState} from "react";
import classes from "./SimpleInput.module.css";

const SimpleInput = () => {
    const [enteredName, setEnteredName] = useState<string>('')
    const [enteredEmail, setEnteredEmail] = useState<string>('')
    const [enteredNameTouched, setEnteredNameTouched] = useState<boolean>(false)
    const [enteredEmailTouched, setEnteredEmailTouched] = useState<boolean>(false)

    const enteredNameIsValid: boolean = enteredName.trim() !== ''
    const enteredEmailIsValid: boolean = enteredEmail.trim() !== '' && enteredEmail.trim().includes('@')
    const nameInputIsInvalid: boolean = !enteredNameIsValid && enteredNameTouched
    const emailInputIsInvalid: boolean = !enteredEmailIsValid && enteredEmailTouched
    console.log(enteredEmailIsValid)
    let formIsValid: boolean = false

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true
    }


    const nameInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredName(event.target.value)
    }

    const emailInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredEmail(event.target.value)
    }
    const nameInputBluer = () => setEnteredNameTouched(true)
    const emailInputBluer = () => setEnteredEmailTouched(true)
    const formSubmissionHAndler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setEnteredNameTouched(true)
        setEnteredEmailTouched(true)

        if (!enteredNameIsValid) {
            return
        }
        console.log(enteredName)
        setEnteredName('')
        setEnteredEmail('')
        setEnteredNameTouched(false)
        setEnteredEmailTouched(false)
    }

    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'
    const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control'

    return (
        <form onSubmit={formSubmissionHAndler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    onChange={nameInputChangeHandler}
                    value={enteredName}
                    onBlur={nameInputBluer}
                />
                {nameInputIsInvalid && (
                    <p className={classes.error}>
                        Name must not be empty
                    </p>
                )}
            </div>
            <div className={nameInputClasses}>
                <label htmlFor='email'>Your Email</label>
                <input
                    type='email'
                    id='email'
                    onChange={emailInputChangeHandler}
                    value={enteredEmail}
                    onBlur={emailInputBluer}
                />
                {emailInputIsInvalid && (
                    <p className={classes.error}>
                        Name must not be empty and contain '@' symbol
                    </p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
