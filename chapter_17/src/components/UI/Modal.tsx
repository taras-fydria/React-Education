import {FC, ReactNode} from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";


interface IBackdrop {
    onClick(): void
}

const Backdrop: FC<IBackdrop> = ({onClick}) => {
    return <div className={classes.backdrop} onClick={onClick}></div>
}

const ModalOverlay: FC<{ children: ReactNode }> = props => {
    return (
        <div className={classes.modal}>
            <div>{props.children}</div>
        </div>
    )
}

const portalElement = document.querySelector('#overlays')


interface IModal {
    onCloseModal(): void,

    children: ReactNode
}

const Modal: FC<IModal> = (props) => {
    return (
        <>
            {portalElement && (
                <>
                    {ReactDOM.createPortal(<Backdrop onClick={props.onCloseModal}/>, portalElement)}
                    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
                </>
            )}
        </>
    )
}

export default Modal