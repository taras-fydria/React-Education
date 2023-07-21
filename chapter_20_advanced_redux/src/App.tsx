import {FC} from "react";
import {Products} from "./components/Shop";
import {Layout} from "./components/Layout";
import {Cart} from "./components/Cart";
import useAppSelector from "./hooks/useAppSelector.ts";

const App: FC<{}> = () => {
    const cartIsVisible = useAppSelector(state => state.ui.cartIsVisible)

    return (
        <Layout>
            {cartIsVisible && <Cart/>}
            <Products/>
        </Layout>
    );
}

export default App;