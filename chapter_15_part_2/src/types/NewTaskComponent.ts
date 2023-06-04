import {ITask} from "./ITask.ts";

export interface NewTaskComponent {
    onAddTask: (task: ITask) => void
}