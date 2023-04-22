import {IUser} from "./user";

export interface UserFinderProps {

}

export interface UserFinderState {
    filteredUsers: IUser[],
    searchTerm: string
}