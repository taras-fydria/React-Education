import {FC, FormEvent} from "react";
import {BasicFormC} from "../types";
import useInput from "../hooks/use-input.ts";

const isNotEmpty = (value: FormDataEntryValue) => typeof value === 'string' && value.trim() !== ''
const isEmail = (value: FormDataEntryValue) => typeof value === 'string' && value.trim() !== '' && value.includes('@')

const BasicForm: FC<BasicFormC> = () => {
    const {
        value: firstNameValue,
        isValid: firstNameIsValid,
        hasError: firstNameHasError,
        inputChangeHandler: firstNameChangeHandler,
        inputBluerHandler: firstNameBluerHandler,
        resetValue: firstNameResetValue
    } = useInput(isNotEmpty)
    const {
        value: secondNameValue,
        isValid: secondNameIsValid,
        hasError: secondNameHasError,
        inputChangeHandler: secondNameChangeHandler,
        inputBluerHandler: secondNameBluerHandler,
        resetValue: secondNameResetValue
    } = useInput(isNotEmpty)
    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        inputChangeHandler: emailChangeHandler,
        inputBluerHandler: emailBluerHandler,
        resetValue: emailResetValue
    } = useInput(isEmail)

    const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control'
    const secondNameClasses = secondNameHasError ? 'form-control invalid' : 'form-control'
    const emailClasses = emailHasError ? 'form-control invalid' : 'form-control'

    let formIsValid: boolean = false
    if (firstNameIsValid && secondNameIsValid && emailIsValid) {
        formIsValid = true
    }

    const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!formIsValid) return
        firstNameResetValue()
        secondNameResetValue()
        emailResetValue()
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className='control-group'>
                <div className={firstNameClasses}>
                    <label htmlFor='name'>First Name</label>
                    <input
                        type='text'
                        id='name'
                        value={firstNameValue}
                        onBlur={firstNameBluerHandler}
                        onChange={firstNameChangeHandler}
                    />
                    {firstNameHasError && (
                        <p>
                            Please, enter valid first name
                        </p>
                    )}
                </div>
                <div className={secondNameClasses}>
                    <label htmlFor='name'>Last Name</label>
                    <input
                        type='text'
                        id='name'
                        value={secondNameValue}
                        onBlur={secondNameBluerHandler}
                        onChange={secondNameChangeHandler}
                    />
                    {secondNameHasError && (
                        <p>
                            Please, enter valid last name
                        </p>
                    )}
                </div>
            </div>
            <div className={emailClasses}>
                <label htmlFor='name'>E-Mail Address</label>
                <input
                    type='text'
                    id='name'
                    value={emailValue}
                    onBlur={emailBluerHandler}
                    onChange={emailChangeHandler}
                />
                {emailHasError && (
                    <p>
                        Please, enter valid email
                    </p>
                )}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
