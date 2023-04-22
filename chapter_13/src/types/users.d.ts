import {IUser} from "./user";

export interface UsersProps {
    usersArr: IUser[]
}

export interface UsersState {
    showUsers: boolean,
    usersArr: null | IUser[]
}

