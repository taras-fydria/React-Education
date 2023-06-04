import {ITask} from "./ITask.ts";
import {SendRequest} from "./types.ts";

export interface TaskComponent {
    items: ITask[],
    loading: boolean,
    error: string | null,
    onFetch: SendRequest
}