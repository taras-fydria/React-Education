import  { useEffect, useState} from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import {ITask} from "./types";
import useHttp from "./hooks/use-http.tsx";

function App() {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const {isLoading, error, sendRequest: fetchTasks} = useHttp()

    const taskAddHandler = (task: ITask) => {
        setTasks((prevTasks) => prevTasks.concat(task));
    };
    useEffect(() => {
        const transformTasks = (tasksObj: any) => {
            const loadedTasks: ITask[] = []
            for (const tasksKey in tasksObj) {
                loadedTasks.push({id: tasksKey, text: tasksObj[tasksKey].text})
            }
            setTasks(loadedTasks)
        }
        fetchTasks({
            url: 'https://react-http-263f4-default-rtdb.firebaseio.com/taks.json',
        }, transformTasks)
    }, [])

    return (
        <>
            <NewTask onAddTask={taskAddHandler}/>
            <Tasks
                items={tasks}
                loading={isLoading}
                error={error}
                onFetch={fetchTasks}
            />
        </>
    );
}

export default App