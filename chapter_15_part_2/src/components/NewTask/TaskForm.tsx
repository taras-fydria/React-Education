import {FC, FormEvent, MutableRefObject, useRef} from 'react';

import classes from './TaskForm.module.css';
import {TaskFormComponent} from "../../types/TaskFormComponent.ts";

const TaskForm: FC<TaskFormComponent> = (props) => {
    const taskInputRef = useRef() as MutableRefObject<HTMLInputElement>;

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const enteredValue = taskInputRef.current.value;

        if (enteredValue.trim().length > 0) {
            props.onEnterTask(enteredValue);
        }
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <input type='text' ref={taskInputRef}/>
            <button>{props.loading ? 'Sending...' : 'Add Task'}</button>
        </form>
    );
};

export default TaskForm;
