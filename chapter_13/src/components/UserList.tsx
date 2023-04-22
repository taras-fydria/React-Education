import User from "./User.tsx";
import {Component} from "react";
import {UsersListProps, UsersListState} from "../types/users-list";

class UserList extends Component<UsersListProps, UsersListState> {
    render() {
        return (
            <ul>
                {this.props.usersArray.map((user) => (
                    <User key={user.id} name={user.name} id={user.id}/>
                ))}
            </ul>
        )
    }
}


export default UserList