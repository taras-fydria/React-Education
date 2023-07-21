import {Counter} from "./components/Counter";
import {Header} from "./components/Header";
import {Auth} from "./components/Auth";
import useAppSelector from "./hooks/useAppSelector";
import {UserProfile} from "./components/UserProfile";

function App() {
    const isAuth = useAppSelector(state => state.auth.isAuthenticated)
    return (
        <>
            <Header/>
            {isAuth ? <UserProfile/> : <Auth/>}
            <Counter/>
        </>
    );
}

export default App;
