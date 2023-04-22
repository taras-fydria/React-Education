import classes from './User.module.css';
import {IUser} from "../types";
import {Component} from "react";

class User extends Component<IUser, any> {
    componentDidMount() {
        console.log('mount')
    }

    componentWillUnmount() {
        console.log('unmount')
    }

    render() {
        const {name} = this.props
        return (
            <li className={classes.user}>{name}</li>
        )
    }
}

export default User;
