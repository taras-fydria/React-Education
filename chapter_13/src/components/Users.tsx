import {Component} from 'react';
import classes from './Users.module.css';
import {UsersProps, UsersState} from "../types";
import UserList from "./UserList.tsx";

class Users extends Component<UsersProps, UsersState> {
    constructor(props) {
        super(props);
        this.state = {
            showUsers: true,
            usersArr: []
        }
    }

    componentDidUpdate(prevProps: Readonly<UsersProps>, prevState: Readonly<UsersState>, snapshot?: any) {
        if (this.props.usersArr.length === 0){
            throw new Error('No users provided!')
        }
    }

    toggleUsersHandler() {
        this.setState<keyof UsersState>((curState) => {
            return {
                ...curState,
                showUsers: !curState.showUsers
            }
        })
    }
    ;

    render() {
        return (
            <div className={classes.users}>
                <button onClick={this.toggleUsersHandler.bind(this)}>
                    {this.state.showUsers ? 'Hide' : 'Show'} Users
                </button>
                {this.state.showUsers && this.props.usersArr && <UserList usersArray={this.props.usersArr}/>}
            </div>
        );
    }
}


export default Users;
