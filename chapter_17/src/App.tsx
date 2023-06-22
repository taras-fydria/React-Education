import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import {FC, useState} from "react";
import {CartProvider} from "./store/cart";

const App: FC = () => {
    const [cartIsShown, setCartIsShown] = useState<boolean>(false)
    const showCArtHandler = () => setCartIsShown(true)
    const hideCartHandler = () => setCartIsShown(false)
    return (
        <CartProvider>
            {cartIsShown && <Cart onHideCart={hideCartHandler}/>}
            <Header onShowCart={showCArtHandler}/>
            <main>
                <Meals/>
            </main>
        </CartProvider>
    );
}

export default App;