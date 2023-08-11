import { CartState, cartActions } from ".";
import { AppDispatch } from "..";
import { NotificationStatus, uiSliceActions } from "../UI";

export const sendCartData = (cartData: CartState) => {
  return async (dispatch: AppDispatch) => {
    dispatch(
      uiSliceActions.showNotification({
        status: NotificationStatus.PENDING,
        title: "Sending..",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-redux-app-education-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartData),
        }
      );

      if (!response.ok || response.status !== 200)
        throw new Error(response.statusText);
    };

    try {
      await sendRequest();
    } catch (error) {
      dispatch(
        uiSliceActions.showNotification({
          status: NotificationStatus.ERROR,
          title: "Error",
          message: `${error}!`,
        })
      );
    }

    dispatch(
      uiSliceActions.showNotification({
        status: NotificationStatus.SUCCESS,
        message: "Send cart data successfully!",
        title: "Success!...",
      })
    );
  };
};

export const fetchCartData = () => {
  return async (dispatch: AppDispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://react-redux-app-education-default-rtdb.europe-west1.firebasedatabase.app/cart.json'
      );

      if (!response.ok || response.status !== 200)
        throw new Error(response.statusText);

      return await response.json();
    };

    try {
      const data = await fetchData();      

      dispatch(cartActions.replaceCart({
        items:data.items || [],
        totalQuantity: data.totalQuantity,
        isChanged: false
      }));
    } catch (error) {
      dispatch(
        uiSliceActions.showNotification({
          status: NotificationStatus.ERROR,
          title: "Fetch Data Error",
          message: `${error}!`,
        })
      );
    }
  };
};
