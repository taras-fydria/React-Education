import {createContext} from "react";
import {IUserContext} from "../types";

const UsersContext = createContext<IUserContext>({
    usersArr: []
});

export default UsersContext;