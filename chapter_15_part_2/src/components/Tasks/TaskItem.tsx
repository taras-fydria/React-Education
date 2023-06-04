import classes from './TaskItem.module.css';
import {FC, ReactNode} from "react";

const TaskItem: FC<{ children: string | ReactNode}> = (props) => {
    return <li className={classes.task}>{props.children}</li>
};

export default TaskItem;