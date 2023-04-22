import UserFinder from './components/UserFinder';
import {IUser, IUserContext} from "./types";
import UsersContext from "./store/users-context.ts";

const DUMMY_USERS:IUser[] = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
];

function App() {
    const usersContext:IUserContext = {
        usersArr: DUMMY_USERS
    }

    return (
        <UsersContext.Provider value={usersContext}>
            <UserFinder />
        </UsersContext.Provider>
    );
}

export default App;