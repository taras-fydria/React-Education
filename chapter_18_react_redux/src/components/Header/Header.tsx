import classes from './Header.module.css';
import useAppSelector from "../../hooks/useAppSelector";
import useAppDispatch from "../../hooks/useAppDispatch";
import {authActions} from "../../store/auth";

export const Header = () => {
    const isAuth = useAppSelector(state => state.auth.isAuthenticated)
    const dispatch = useAppDispatch()

    const logoutBtnClickHandler = () => dispatch(authActions.logout())

    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            {isAuth && (
                <nav>
                    <ul>
                        <li>
                            <a href='/'>My Products</a>
                        </li>
                        <li>
                            <a href='/'>My Sales</a>
                        </li>
                        <li>
                            <button onClick={logoutBtnClickHandler}>Logout</button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};