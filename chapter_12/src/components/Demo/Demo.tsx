import {FC} from "react";

interface IDemo {
    show: boolean
}

const Demo: FC<IDemo> = (props) => {
    return (
        <p>
            {props.show ? 'This is new!' : ''}
        </p>
    )
}

export default Demo