import React, {FC} from "react";
import MyParagraph from "./MyParagraph";

interface DemoComponent {
    show: boolean
}

const Demo: FC<DemoComponent> = (props) => {
    console.log('demo started')
    return (
        <MyParagraph>
            {props.show && 'This is new!'}
        </MyParagraph>
    )
}

export default React.memo(Demo)