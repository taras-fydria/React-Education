import { FC, useEffect } from "react";
import { Products } from "./components/Shop";
import { Layout } from "./components/Layout";
import { Cart } from "./components/Cart";
import { useAppDispatch, useAppSelector } from "./hooks";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/cart";

const App: FC = () => {
  const cartIsVisible = useAppSelector((state) => state.ui.cartIsVisible);
  const cart = useAppSelector((state) => state.cart);
  const notification = useAppSelector((state) => state.ui.notification);
  const appDispatch = useAppDispatch();

  useEffect(() => {
    if (cart.isChanged) {
      appDispatch(sendCartData(cart));
    }
  }, [cart, appDispatch]);

  useEffect(() => {
    appDispatch(fetchCartData());
  }, [appDispatch]);

  return (
    <>
      {notification && (
        <Notification
          message={notification.message}
          status={notification.status}
          title={notification.title}
        />
      )}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
};

export default App;
