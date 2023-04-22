import React, {useCallback, useState} from 'react';
import Button, {EButton} from "./components/UI/Button/Button";
import classes from "./App.module.css";
import Demo from "./components/Demo/Demo";

function App(): JSX.Element {
    const [showParagraph, setShowParagraph] = useState<boolean>(false)
    const [allowToggle, setAllowToggle] = useState<boolean>(false)

    const toggleShowParagraph = useCallback(() => {
        if (allowToggle) {
            setShowParagraph(prevShowParagraph => !prevShowParagraph)
        }
    }, [allowToggle])

    const allowToggleHandler = () => {
        setAllowToggle(true)
    }
    console.log('app started')
    return (
        <div className={classes.app}>
            <h1>Hi there!</h1>
            <Demo show={false}/>
            <Button onClick={allowToggleHandler} className={''} type={EButton.BUTTON} disabled={false}>
                Toggle Paragraph!
            </Button>
            <Button onClick={toggleShowParagraph}>
                Toggle Paragraph 2!
            </Button>
        </div>
    );
}

export default App;