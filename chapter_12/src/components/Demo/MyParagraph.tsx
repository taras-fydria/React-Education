import {FC, ReactNode} from "react";

const MyParagraph: FC<{ children: ReactNode }> = (props) => {
    console.log('my paragraph started')
    return (
        <p>
            {props.children}
        </p>
    )
}

export default MyParagraph