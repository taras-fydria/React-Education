import {createContext} from "react";
import {IUserContext} from "../types";

export const UsersContext = createContext<IUserContext>({
    usersArr: []
});