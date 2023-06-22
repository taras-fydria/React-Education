import {ReactNode} from "react";

export  interface IModal {
    onCloseModal(): void,

    children: ReactNode
}