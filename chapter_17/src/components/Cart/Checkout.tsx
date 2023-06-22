import classes from './Checkout.module.css'
import {FC, FormEventHandler, MutableRefObject, useRef, useState} from "react";
import {FormInputsValidity, ICheckout} from "../../types";

const isEmpty = (value: string): boolean => value.trim() === ''
const isNotFiveChars = (value: string): boolean => value.trim().length !== 5

const Checkout: FC<ICheckout> = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState<FormInputsValidity>({
        name: true,
        city: true,
        postal: true,
        street: true
    })

    const nameInputRef = useRef() as MutableRefObject<HTMLInputElement>
    const streetInputRef = useRef() as MutableRefObject<HTMLInputElement>
    const postalInputRef = useRef() as MutableRefObject<HTMLInputElement>
    const cityInputRef = useRef() as MutableRefObject<HTMLInputElement>

    const formSubmitHandler: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()

        const enteredName = nameInputRef.current.value
        const enteredStreet = streetInputRef.current.value
        const enteredPostalCode = postalInputRef.current.value
        const enteredCity = cityInputRef.current.value

        const enteredNameIsValid = !isEmpty(enteredName)
        const enteredStreetIsValid = !isEmpty(enteredStreet)
        const enteredCityIsValid = !isEmpty(enteredCity)
        const enteredPostalCodeIsValid = !isEmpty(enteredPostalCode) && isNotFiveChars(enteredPostalCode)


        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            postal: enteredPostalCodeIsValid,
            city: enteredCityIsValid
        })

        const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalCodeIsValid
        if (!formIsValid) return

        props.onSubmit({
            name: enteredName,
            city: enteredCity,
            postal: enteredPostalCode,
            street: enteredStreet
        })
    }

    const controlClasses = (value: boolean): string => value ? classes.control : `${classes.control} ${classes.invalid}`

    return (
        <form className={classes.form} onSubmit={formSubmitHandler}>
            <div className={controlClasses(formInputsValidity.name)}>
                <label htmlFor={'name'}>Your Name</label>
                <input type="text" id={'name'} ref={nameInputRef}/>
                {!formInputsValidity.name && (
                    <p>
                        Please, enter a valid name!
                    </p>
                )}
            </div>
            <div className={controlClasses(formInputsValidity.street)}>
                <label htmlFor={'street'}>Street</label>
                <input type={'text'} id={'street'} ref={streetInputRef}/>
                {!formInputsValidity.street && (
                    <p>
                        Please, enter a valid street!
                    </p>
                )}
            </div>
            <div className={controlClasses(formInputsValidity.postal)}>
                <label htmlFor={'postal'}>Postal Code</label>
                <input type={'text'} id={'postal'} ref={postalInputRef}/>
                {!formInputsValidity.postal && (
                    <p>
                        Please, enter a valid postal!
                    </p>
                )}
            </div>
            <div className={controlClasses(formInputsValidity.city)}>
                <label htmlFor={'city'}>City</label>
                <input type={'text'} id={'city'} ref={cityInputRef}/>
                {!formInputsValidity.city && (
                    <p>
                        Please, enter a valid city!
                    </p>
                )}
            </div>
            <div className={classes.actions}>
                <button type={'button'} onClick={props.onCancel}>
                    Cancel
                </button>
                <button type={'submit'} className={'submit'}>
                    Confirm
                </button>
            </div>
        </form>
    )
}

export default Checkout