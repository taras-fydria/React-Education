import {FC} from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import {NewTaskComponent} from "../../types";
import useHttp from "../../hooks/use-http.tsx";

const NewTask: FC<NewTaskComponent> = (props) => {
    const {isLoading, error, sendRequest: sendTaskRequest} = useHttp()
    const createTask = (taskText: string, taskData: any) => {
        const generatedId = taskData.name; // firebase-specific => "name" contains generated id
        const createdTask = {id: generatedId, text: taskText};
        props.onAddTask(createdTask);
    }
    const enterTaskHandler = async (taskText: string) => {
        sendTaskRequest({
            url: 'https://react-http-263f4-default-rtdb.firebaseio.com/taks.json',
            method: "POST",
            body: JSON.stringify({text: taskText}),
            headers: {
                'Content-Type': 'application/json',
            },
        }, createTask.bind(null, taskText))
    };

    return (
        <Section>
            <TaskForm onEnterTask={enterTaskHandler} loading={isLoading}/>
            {error && <p>{error}</p>}
        </Section>
    );
};

export default NewTask;
