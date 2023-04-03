import React, {useState} from 'react';
import Button, {EButton} from "./components/UI/Button/Button";
import classes from "./App.module.css";
import Demo from "./components/Demo/Demo";

function App(): JSX.Element {
    const [showParagraph, setShowParagraph] = useState<boolean>(false)
    const toggleShowParagraph = () => setShowParagraph(prevShowParagraph => !prevShowParagraph)

    return (
        <div className={classes.app}>
            <h1>Hi there!</h1>
            <Demo show={showParagraph}/>
            <Button onClick={toggleShowParagraph} className={''} type={EButton.BUTTON} disabled={false}>
                Toggle Paragraph!
            </Button>
        </div>
    );
}

export default App;