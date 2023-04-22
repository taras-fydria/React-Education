import * as React from 'react'
import {Fragment, Component, ChangeEvent} from 'react';
import Users from './Users';
import classes from './UserFinder.module.css';
import {UserFinderProps, UserFinderState} from "../types";
import UsersContext from "../store/users-context.ts";
import ErrorBoundary from "./ErrorBoundary.tsx";

class UserFinder extends Component<UserFinderProps, UserFinderState> {
    static contextType = UsersContext
    context!: React.ContextType<typeof UsersContext>

    constructor(props) {
        super(props);
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        }
    }

    componentDidMount() {
        this.setState<keyof UserFinderState>(state => {
            return {
                ...state,
                filteredUsers: this.context.usersArr
            }
        })
    }

    componentDidUpdate(prevProps: Readonly<UserFinderProps>, prevState: Readonly<UserFinderState>, snapshot?: any) {
        if (prevState.searchTerm === this.state.searchTerm) return
        this.setState<keyof UserFinderState>(state => {
            return {
                ...state,
                filteredUsers: this.context.usersArr.filter(user => user.name.includes(state.searchTerm))
            }
        })
    }

    searchChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        this.setState<keyof UserFinderState>(state => {
            return {
                ...state,
                searchTerm: event.target.value
            }
        });
    };

    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)}/>
                </div>
                <ErrorBoundary>
                    <Users usersArr={this.state.filteredUsers}/>
                </ErrorBoundary>
            </Fragment>
        );
    }
}

export default UserFinder;