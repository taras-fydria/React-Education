import {ChangeEvent} from "react";

export interface UseInput {
    value: any,
    hasError: boolean,
    inputChangeHandler: (event: ChangeEvent<HTMLInputElement>)=>void,
    inputBluerHandler: ()=>void,
    isValid: boolean,
    resetValue: ()=>void
}