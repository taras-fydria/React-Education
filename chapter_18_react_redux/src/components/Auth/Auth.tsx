import classes from './Auth.module.css';
import {FormEventHandler} from "react";
import useAppDispatch from "../../hooks/useAppDispatch";
import {authActions} from "../../store/auth";

export const Auth = () => {
    const dispatch = useAppDispatch()
    const loginHandler: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()

        dispatch(authActions.login())
    }

    return (
        <main className={classes.auth}>
            <section>
                <form onSubmit={loginHandler}>
                    <div className={classes.control}>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email'/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password'/>
                    </div>
                    <button>Login</button>
                </form>
            </section>
        </main>
    );
};