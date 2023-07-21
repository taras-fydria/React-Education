import {FC} from "react";
import {Products} from "./components/Shop";
import {Layout} from "./components/Layout";
import {Cart} from "./components/Cart";

const App: FC<{}> = () => {
    return (
        <Layout>
            <Cart/>
            <Products/>
        </Layout>
    );
}

export default App;