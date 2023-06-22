import {MouseEventHandler} from "react";
import {IOrder} from "./order";

export interface ICheckout {
    onCancel: MouseEventHandler<HTMLButtonElement>

    onSubmit(order: IOrder): void
}